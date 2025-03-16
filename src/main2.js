import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import mapInfo from "./mapInfo2";

import GUI from "lil-gui";

const devices = ["1U", "2U", "4U", "8U", "10U"];
const U_SIZES = [1, 1, 1, 1, 2, 2, 4, 8, 10];

const settings = {
  backgroundColor: "#eeeeee",
};

const wall = {
  opacity: 0.5,
  color: "#e2e2e2",
};

const camera = {
  position: {
    x: -2,
    y: 10,
    z: 0,
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

    this._setupHelper();

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

    this._camera.position.x = camera.position.x;
    this._camera.position.z = camera.position.z;
    this._camera.position.y = camera.position.y;

    this._camera.lookAt(camera.lookAt.x, camera.lookAt.y, camera.lookAt.z);
  }

  _setupLight() {
    // const color = 0xffffff;
    // const light = new THREE.AmbientLight(color, 2);
    // this._scene.add(light);
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
    const axesHelper = new THREE.AxesHelper(20);
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
      "real_rack",
      "rack",
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
      const model = threeModels[index].scene;
      this._modelMap[name] = threeModels[index].scene;
    });
  }

  _addModel() {
    this.mapRender();
    this.addGUI();
    this.invisibleWallRender();
    this.visibleWallRender();
    this.renderLight();
    // this.cdevice();
  }
  renderLight() {
    let light = {
      color: 0xffffff,
      distance: 20,
      intensity: 1.5,
      positionDistance: 6,
      helperVisible: true,
    };

    const lightPositions = [
      { x: light.positionDistance, y: 5, z: 0 }, // 왼쪽 포인트
      { x: -light.positionDistance, y: 5, z: 0 }, // 오른쪽 포인트
      { x: 0, y: 5, z: 0 }, // 중앙 포인트 (주광?)
      { x: 0, y: 5, z: light.positionDistance }, // 뒤쪽 포인트
      { x: 0, y: 5, z: -light.positionDistance }, // 뒤쪽 포인트 2
    ];
    const lights = [];
    const helpers = [];
    lightPositions.forEach((pos, i) => {
      const pointLight = new THREE.PointLight(
        light.color,
        light.intensity,
        light.distance
      ); // 오렌지색 포인트 라이트
      pointLight.position.set(pos.x, pos.y, pos.z);
      this._scene.add(pointLight);
      lights.push(pointLight);

      // Helper 추가 (광원 위치 확인용)
      const lightHelper = new THREE.PointLightHelper(pointLight, 1, "orange");
      helpers.push(lightHelper);
      this._scene.add(lightHelper);
    });

    const ambientLight = new THREE.AmbientLight(0x404040, 0.3); // (색상, 강도)
    this._scene.add(ambientLight);

    const lightGui = this.gui.addFolder("조명");

    lightGui
      .addColor(light, "color")
      .name("빛의 색상")
      .onChange((value) => {
        lights.forEach((light) => {
          light.color.set(new THREE.Color(value));
        });
      });

    lightGui
      .add(light, "intensity", 0, 100, 1)
      .name("빛의 강도")
      .onChange((value) => {
        lights.forEach((light) => {
          light.intensity = value;
        });
      });

    lightGui
      .add(light, "distance", 0, 100, 1)
      .name("조명이 미치는 거리")
      .onChange((value) => {
        lights.forEach((light) => {
          light.distance = value;
        });
      });
    lightGui
      .add(light, "positionDistance", 0, 100, 1)
      .name("조명 사이의 거리")
      .onChange((value) => {
        lights[0].position.x = value;
        lights[1].position.x = -value;
        lights[3].position.z = value;
        lights[4].position.z = -value;
      });
    lightGui
      .add(light, "helperVisible")
      .name("광원 헬퍼 토글")
      .onChange((value) => {
        helpers.forEach((helper) => {
          helper.visible = value;
        });
      });
  }

  invisibleWallRender() {
    const tileOrigin = this._modelMap.tile;
    const { x: tileSize } = this.getObjectSize(tileOrigin);
    const original = this._modelMap.wall;

    const invisibleWall = original.clone();

    invisibleWall.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = child.material.clone();
        child.geometry = child.geometry.clone();
      }
    });

    const invisibleWallMaterial =
      invisibleWall.children[0].children[0].material;

    invisibleWallMaterial.transparent = true;
    invisibleWallMaterial.opacity = 0.5;

    const invisibleWallFolder = this.gui.addFolder("불투명 벽 색상");

    invisibleWallFolder
      .addColor(invisibleWallMaterial, "color")
      .onChange((color) => {
        invisibleWallMaterial.color.set(new THREE.Color(color));
      });

    invisibleWallFolder
      .add(invisibleWallMaterial, "opacity", 0, 1, 0.01)
      .onChange((value) => {
        invisibleWallMaterial.opacity = value;
      });

    invisibleWall.rotation.y = Math.PI / 2;
    invisibleWall.position.x -= tileSize / 2;
    invisibleWall.position.z = tileSize * 2;
    invisibleWall.scale.set(1, 1.2, 16);
    this._scene.add(invisibleWall);
  }

  visibleWallRender() {
    const tileOrigin = this._modelMap.tile;
    const { x: tileSize } = this.getObjectSize(tileOrigin);

    const visibleWall = this._modelMap.wall.clone();
    const visibleFloder = this.gui.addFolder("투명 벽 색상");

    const visibleWallMaterial = visibleWall.children[0].children[0].material;

    visibleWallMaterial.transparent = true;
    visibleWallMaterial.opacity = 0.5;

    visibleFloder.addColor(visibleWallMaterial, "color").onChange((value) => {
      visibleWallMaterial.color = new THREE.Color(value);
    });

    visibleFloder
      .add(visibleWallMaterial, "opacity", 0, 1, 0.01)
      .onChange((value) => {
        visibleWallMaterial.opacity = value;
      });

    const yScale = 0.7;
    const wall = visibleWall.clone();
    wall.scale.set(1.5, yScale, 5);
    wall.position.x = tileSize * 5;
    wall.position.z = tileSize * 6.5;
    const wall2 = wall.clone();
    wall2.position.x = 0;
    this._scene.add(wall2);
    this._scene.add(wall);

    const wall3 = visibleWall.clone();
    wall3.rotation.y = Math.PI / 2;
    wall3.scale.set(1.5, yScale, 5);
    wall3.position.x = tileSize * 2.5;
    wall3.position.z = tileSize * 4;
    const wall4 = wall3.clone();
    wall4.position.z = tileSize * 9;
    this._scene.add(wall3);
    this._scene.add(wall4);

    const wall5 = visibleWall.clone();

    const { x, y, z } = this.getObjectSize(wall5);

    wall5.rotation.z = Math.PI / 2;

    wall5.position.set(tileSize * 5, y * yScale, tileSize * 6.5);

    wall5.scale.set(1, 1.25, 5);
    this._scene.add(wall5);
  }

  addGUI() {
    this.gui = new GUI();

    const backgroundFolder = this.gui.addFolder("배경 색상");

    backgroundFolder.addColor(settings, "backgroundColor").onChange((color) => {
      this._scene.background.set(color);
    });
  }

  wallRender() {
    const { maxRow, maxCol } = mapInfo;

    const tileOrigin = this._modelMap.tile;
    const { x: tileSize } = this.getObjectSize(tileOrigin);

    const startZ = -1 * (maxCol / 2) * tileSize;
    const startX = (maxRow / 2) * tileSize;

    for (const cellIdFair of wallInfo) {
      const [cellId1, cellId2] = cellIdFair.split("_");
      const { row: row1, col: col1 } = this.cellIdToRowCol(cellId1);
      const { row: row2, col: col2 } = this.cellIdToRowCol(cellId2);

      if (col1 === col2) {
        const x = startX + row1 * tileSize;
        const z = startZ - col1 * tileSize + tileSize / 2;
        const wall = this._modelMap.wall.clone();
        wall.position.set(x, 0, z);
        wall.rotation.y = Math.PI / 2;
        this._scene.add(wall);
      }

      if (row1 === row2) {
        const x = startX + row1 * tileSize + tileSize / 2;
        const z = startZ + col1 * tileSize;
        const wall = this._modelMap.wall.clone();
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

    const startZ = -1 * (maxCol / 2) * tileSize;
    const startX = (maxRow / 2) * tileSize;

    for (let i = 0; i < cellInfos.length; i += 1) {
      const cellInfo = cellInfos[i];
      const { cellId, originId } = cellInfo;
      const { row, col } = this.cellIdToRowCol(cellId);
      const z = startZ + col * tileSize;
      const x = startX - row * tileSize;

      const tile = tileOrigin.clone();
      tile.position.set(x, 0, z);
      this._scene.add(tile);

      if (cellId !== originId) continue;

      const { fmsType, direction } = cellInfo;

      const object =
        this._modelMap[fmsType === "rack" ? "real_rack" : fmsType].clone();
      object.rotation.y = this.directionToRotation(direction);
      object.position.set(x, 0, z);
      if (fmsType === "rack") {
        this.mountDevice(object, renderRackHeight);
        object.scale.set(1.2, 1, 1.25);
      }
      this._scene.add(object);
    }
  }

  directionToRotation(direction) {
    if (direction === "N") return 0;
    if (direction === "S") return Math.PI;
    if (direction === "E") return (Math.PI / 2) * 3;
    if (direction === "W") return Math.PI / 2;
  }

  cellIdToRowCol(cellId) {
    const match = cellId.match(/^([A-Z]+)(\d+)$/);
    if (!match) return null;

    const [, alpha, colNum] = match;
    let rowNum = 0;

    for (let i = 0; i < alpha.length; i += 1) {
      rowNum = rowNum * 26 + (alpha.charCodeAt(i) - 64);
    }
    return { row: rowNum, col: Number(colNum) };
  }
}
new App();
