import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from 'stats.js';
import mapInfo from "./mapInfo";
import wallInfo from './wallInfo';
import GUI from 'lil-gui';

// const folder = gui.addFolder('배경 색상');
// folder.addColor('color', '#e2e2e2');

// const wall = gui.addFolder('벽');
// wall.addColor('color', '#e2e2e2');

const settings = {
    backgroundColor: 0xe2e2e2,
}

const wall = {
    opacity: 0.5,
    color: '#e2e2e2'
}


const stats = new Stats();
document.body.appendChild(stats.dom);

const dom = document.querySelector("#app");

const FMS_TYPE = {
    RACK: 'rack',
    TILE: 'tile',
    WALL: 'wall',
    CRAC: 'crac',
    UPS: 'ups',
    BATTERY: 'battery'
}

class App {
     _renderer; 
     _container;
     _scene; 
     _camera;
     _modelMap = {};
     _deviceTextureMap = {};
     _container = dom;
     constructor(){ 
        this._setup();
        this._render();
      }

      async _setup(){
        
        this._setupScene();
        this._setupRenderer();
        this._setupCamera();
        this._setupLight();
        this._setupResize();
        this._setupControls();
       
        // 헬퍼
        // this._setupHelper();
    
        // model 그리기
        await this._loadModels();
        this._addModel();
        
        this._renderer.render(this._scene, this._camera);
      }

     _setupScene() {
        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color(settings.backgroundColor);
    }

    updateBackgroundColor(value) {
        this._scene.background.set(value);
      }

    _setupRenderer() {
        this._renderer = new THREE.WebGLRenderer({ antialias: true });
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._container.appendChild(this._renderer.domElement);
    }

    _setupCamera() {
        const { clientWidth: width, clientHeight: height } = this._container;
        this._camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this._camera.position.x = 0;
        this._camera.position.z = 0;
        this._camera.position.y = 20;
        this._camera.lookAt(0, 4, 4);
    }

    _setupLight() {
        const color = 0xffffff;
        const light = new THREE.AmbientLight(color, 2);
        this._scene.add(light);
    }

    _setupResize() {
        const { clientWidth: width, clientHeight: height } = this._container;

        // 렌더러 크기 업데이트
        this._renderer.setSize(width, height);

        // 카메라 종횡비 업데이트
        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        window.addEventListener("resize", this._setupResize.bind(this));
    }
    
    _setupControls() {
        new OrbitControls(this._camera, this._container);
    }
    
    _setupHelper() {
        const axesHelper = new THREE.AxesHelper(100);
        this._scene.add(axesHelper);
    }
    // 테마 토글할 때 색상 두개
    //     _setupGUI() {/ eee 화이트 // 222222 다크크

    async _render() {
        stats.begin();
        this._renderer.render(this._scene, this._camera);
        stats.end();
        requestAnimationFrame(this._render.bind(this));
    }

    async _loadModels() {
        // load 데이터
        const loader = new GLTFLoader();

        const names = ['rack', 'tile', 'wall', 'crac' ,'ups', 'battery'];
        
        const threeModels = await Promise.all(
            names.map((name) => {
            const pullPath = `/${name}.glb`;
            return loader.loadAsync(pullPath)
         })
        );
        names.forEach((name,index) => {
            this._modelMap[name] = threeModels[index].scene;
        })
    }

    _addModel(){
        this.mapRender()
        this.wallRender()
        this.addGUI()
    }

    addGUI(){

        const gui = new GUI();

        const backgroundFolder = gui.addFolder('배경 색상');

        backgroundFolder.addColor(settings, 'backgroundColor').onChange((color) => {
            this._scene.background.set(color);
        })

        const wallFolder = gui.addFolder('벽 색상');

        wallFolder.add(wall, 'opacity', 0, 1, 0.01).onChange((value) => {
            this._modelMap.wall.children[0].material.transparent = true;
            this._modelMap.wall.children[0].material.opacity = value;
        });

        wallFolder.addColor(wall, 'color').onChange((value)=>{
            this._modelMap.wall.children[0].material.color.set(value);
        });
    }
    

    wallRender(){

        const { maxRow, maxCol } = mapInfo;

        const tileOrigin = this._modelMap.tile;
        const { x: tileSize } = this.getObjectSize(tileOrigin);
        
        const startX = -1 * (maxRow / 2) * tileSize;
        const startZ = -1 * (maxCol / 2) * tileSize;

        for (const cellIdFair of wallInfo){
            const [cellId1,cellId2] = cellIdFair.split('_');
            const {row:row1, col:col1} = this.cellIdToRowCol(cellId1);
            const {row:row2, col:col2} = this.cellIdToRowCol(cellId2);
            
            if(col1 === col2) {
                const x = startX + col1 * tileSize ;
                const z = startZ + row1 * tileSize + tileSize / 2;
                const wall = this._modelMap.wall.clone();
                wall.scale.set(1, 1.2, 1);
                wall.position.set(x, 0, z);
                wall.rotation.y = Math.PI / 2;
                this._scene.add(wall);
            }

            if(row1 === row2) {
                const x = startX + col1 * tileSize + tileSize / 2;;
                const z = startZ + row1 * tileSize ;
                const wall = this._modelMap.wall.clone();
                wall.scale.set(1, 1.2, 1);
                wall.position.set(x, 0, z);
                this._scene.add(wall);
            }
        }
    }

    getObjectSize(object) {
        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        box.getSize(size);
        return size;
    }
    
    mapRender(){
        const { cellInfos, maxRow, maxCol } = mapInfo;

        const tileOrigin = this._modelMap.tile;
        const { x: tileSize } = this.getObjectSize(tileOrigin);
        
        const startX = -1 * (maxRow / 2) * tileSize;
        const startZ = -1 * (maxCol / 2) * tileSize;

      for (let i = 0; i < cellInfos.length; i += 1) {
        const cellInfo = cellInfos[i];
        const { cellId, originId } = cellInfo;
        const { row, col } = this.cellIdToRowCol(cellId);

        const x = startX + col * tileSize;
        const z = startZ + row * tileSize;

        const tile = tileOrigin.clone();
        tile.position.set(x, 0, z);
        this._scene.add(tile);

        if (cellId !== originId) continue;

        const { fmsType, direction } = cellInfo;
        
        const object = this._modelMap[FMS_TYPE[fmsType]].clone();
        object.rotation.y = this.directionToRotation(direction) ;  
        object.position.set(x, 0, z);
        this._scene.add(object);
      }
    }

    directionToRotation(direction) {
       if(direction ==='N') return Math.PI * 3 / 2 ;
       if(direction ==='S') return Math.PI / 2;
       if(direction ==='E') return Math.PI;
       if(direction ==='W') return 0;
    }

    cellIdToRowCol(cellId) {
        const match = cellId.match(/^([A-Z]+)(\d+)$/);
        if (!match) return null;
  
        const [, alpha, rowNum] = match;
        let colNum = 0;
  
        for (let i = 0; i < alpha.length; i += 1) {
            colNum = colNum * 26 + (alpha.charCodeAt(i) - 64);
        }
  
        return { col: colNum, row: Number(rowNum) };
      }
}


new App();