import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import mapInfo from "./mapInfo";
import wallInfo from "./wallInfo";
import GUI from "lil-gui";

const devices = ["1U", "2U", "4U", "8U", "10U"];
const U_SIZES = [1, 1, 1, 1, 2, 2, 4, 8, 10];

const settings = {
  backgroundColor: 0xe2e2e2,
};

const wall = {
  opacity: 0.5,
  color: "#e2e2e2",
};

const camera = {
  position: {
    x: 0,
    y: 10,
    z: 20,
  },
  lookAt: {
    x: 0,
    y: 0,
    z: 0,
  },
};

const dom = document.querySelector("#app");

const FMS_TYPE = {
  RACK: "rack",
  TILE: "tile",
  WALL: "wall",
  CRAC: "crac",
  UPS: "ups",
  BATTERY: "battery",
};

class App {
  _renderer;
  _scene;
  _camera;
  _modelMap = {};
  _deviceTextureMap = {};
  _container = dom;
  _stats;
  constructor() {
    this._setup();
    this._render();
  }

  async _setup() {
    this._setupScene();
    this._setupRenderer();
    this._setupCamera();
    this._setupLight();
    this._setupResize();
    this._setupControls();

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

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
    this._camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);

    this._camera.position.x = camera.position.x;
    this._camera.position.z = camera.position.z;
    this._camera.position.y = camera.position.y;

    this._camera.lookAt(camera.lookAt.x, camera.lookAt.y, camera.lookAt.z);
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
    this.stats.begin();
    this._renderer.render(this._scene, this._camera);
    this.stats.end();
    requestAnimationFrame(this._render.bind(this));
  }

  async _loadModels() {
    // load 데이터
    const loader = new GLTFLoader();

    const names = [
      "rack",
      "real_rack",
      "tile",
      "wall",
      "crac",
      "ups",
      "battery",
      ...devices,
    ];

    const threeModels = await Promise.all(
      names.map((name) => {
        const pullPath = `/3d_demo/${name}.glb`;
        return loader.loadAsync(pullPath);
      })
    );
    names.forEach((name, index) => {
      this._modelMap[name] = threeModels[index].scene;
    });
  }

  _addModel() {
    this.mapRender();
    this.wallRender();
    this.addGUI();
    // this.cdevice();
  }

  cdevice() {
    for (let i of [1, 2, 4, 8, 10]) {
      const device = this._modelMap[`${i}U`].clone();
      device.position.z = i;
      device.position.y = 0;

      device.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.center();
        }
      });
      this._scene.add(device);
    }
  }

  addGUI() {
    const gui = new GUI();

    const backgroundFolder = gui.addFolder("배경 색상");

    backgroundFolder.addColor(settings, "backgroundColor").onChange((color) => {
      this._scene.background.set(color);
    });

    const wallFolder = gui.addFolder("벽 색상");

    wallFolder.add(wall, "opacity", 0, 1, 0.01).onChange((value) => {
      this._modelMap.wall.children[0].material.transparent = true;
      this._modelMap.wall.children[0].material.opacity = value;
    });

    wallFolder.addColor(wall, "color").onChange((value) => {
      this._modelMap.wall.children[0].material.color.set(value);
    });

    const cameraFolder = gui.addFolder("카메라 위치");
    cameraFolder.add(camera.position, "x", -100, 100, 0.1).onChange((value) => {
      this._camera.position.x = value;
    });
    cameraFolder.add(camera.position, "y", -30, 30, 0.1).onChange((value) => {
      this._camera.position.y = value;
    });
    cameraFolder.add(camera.position, "z", -30, 30, 0.1).onChange((value) => {
      this._camera.position.z = value;
    });

    const lookAtTarget = new THREE.Vector3(0, 0, 0); // 기본적인 바라보는 위치

    const cameraFolder2 = gui.addFolder("카메라 시점");

    cameraFolder2.add(lookAtTarget, "x", -1, 1, 0.01).onChange((value) => {
      lookAtTarget.x = value;
      this._camera.lookAt(lookAtTarget);
    });

    cameraFolder2.add(lookAtTarget, "y", -1, 1, 0.01).onChange((value) => {
      lookAtTarget.y = value;
      this._camera.lookAt(lookAtTarget);
    });

    cameraFolder2.add(lookAtTarget, "z", -1, 1, 0.01).onChange((value) => {
      lookAtTarget.z = value;
      this._camera.lookAt(lookAtTarget);
    });

    const rack = {
      color: "#e2e2e2",
    };

    const rackFolder = gui.addFolder("랙 색상");

    rackFolder.addColor(rack, "color").onChange((value) => {
      this._modelMap.real_rack.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.color.set(value);
        }
      });
    });

    const cameraSettings = {
      near: this._camera.near,
    };

    const clippingFolder = gui.addFolder("렌더링 대상 제외 클리핑");
    clippingFolder.add(cameraSettings, "near", 0.01, 10).onChange((value) => {
      this._camera.near = value;
      this._camera.updateProjectionMatrix();
    });
  }

  wallRender() {
    const { maxRow, maxCol } = mapInfo;

    const tileOrigin = this._modelMap.tile;
    const { x: tileSize } = this.getObjectSize(tileOrigin);

    const startX = -1 * (maxRow / 2) * tileSize;
    const startZ = -1 * (maxCol / 2) * tileSize;

    for (const cellIdFair of wallInfo) {
      const [cellId1, cellId2] = cellIdFair.split("_");
      const { row: row1, col: col1 } = this.cellIdToRowCol(cellId1);
      const { row: row2, col: col2 } = this.cellIdToRowCol(cellId2);

      if (col1 === col2) {
        const x = startX + col1 * tileSize;
        const z = startZ + row1 * tileSize + tileSize / 2;
        const wall = this._modelMap.wall.clone();
        wall.scale.set(1, 1.2, 1);
        wall.position.set(x, 0, z);
        wall.rotation.y = Math.PI / 2;
        this._scene.add(wall);
      }

      if (row1 === row2) {
        const x = startX + col1 * tileSize + tileSize / 2;
        const z = startZ + row1 * tileSize;
        const wall = this._modelMap.wall.clone();
        wall.scale.set(1, 1.2, 1);
        wall.position.set(x, 0, z);
        this._scene.add(wall);
      }
    }
  }

  mountDevice(rack, renderRackHeight) {
    const realRackHeight = 79.7;
    const inchToRenderSize = renderRackHeight / realRackHeight;
    const uToInch = 1.75;
    const startInch = 4.1;

    let curU = 0;

    while (true) {
      const nextU = U_SIZES[Math.floor(Math.random() * U_SIZES.length)];

      if (curU + nextU >= 42) break;

      if (Math.random() < 0.3) {
        curU += nextU;
        continue;
      }

      const device = this._modelMap[`${nextU}U`].clone();
      const centerU = curU + nextU / 2;
      const totalInch = centerU * uToInch + startInch;

      device.position.y = totalInch * inchToRenderSize;

      rack.add(device);
      curU += nextU;
    }
  }

  getObjectSize(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = new THREE.Vector3();
    box.getSize(size);
    return size;
  }

  mapRender() {
    const { cellInfos, maxRow, maxCol } = mapInfo;

    const tileOrigin = this._modelMap.tile;
    const { x: tileSize } = this.getObjectSize(tileOrigin);
    const { y: renderRackHeight } = this.getObjectSize(this._modelMap.rack);

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
      object.rotation.y = this.directionToRotation(direction);
      object.position.set(x, 0, z);
      this._scene.add(object);

      if (fmsType === "RACK") {
        this.mountDevice(object, renderRackHeight);
      }
    }
  }

  directionToRotation(direction) {
    if (direction === "N") return (Math.PI * 3) / 2;
    if (direction === "S") return Math.PI / 2;
    if (direction === "E") return Math.PI;
    if (direction === "W") return 0;
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
