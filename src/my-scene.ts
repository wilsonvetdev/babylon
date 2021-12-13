import * as BABYLON from "babylonjs";
import { buildBox, buildGround, buildRoof } from "./build";

export default class MyScene {
  private _canvas: HTMLCanvasElement;
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;
  private _camera: BABYLON.FreeCamera;
  private _arcCamera: BABYLON.ArcRotateCamera;
  private _light: BABYLON.Light;

  constructor(canvasElement: string) {
    // Create canvas and engine.
    this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);
  }

  createScene(): void {
    // Create a basic BJS Scene object.
    this._scene = new BABYLON.Scene(this._engine);

    /**** Set camera and light *****/
    this._arcCamera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      new BABYLON.Vector3(0, 0, 0),
      this._scene
    );

    this._arcCamera.attachControl(this._canvas, true);

    this._light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      this._scene
    );

    //options parameter to set different images on each side for box
    const faceUV1 = [];
    faceUV1[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
    faceUV1[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
    faceUV1[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
    faceUV1[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    // top 4 and bottom 5 not seen so not set

    //options parameter to set different images on each side
    const faceUV2 = [];
    faceUV2[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
    faceUV2[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
    faceUV2[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
    faceUV2[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    // top 4 and bottom 5 not seen so not set

    const ground = buildGround(this._scene);
    const box1 = buildBox(this._scene, {faceUV: faceUV1, wrap: true});
    box1.position.y = 0.5
    const roof = buildRoof(this._scene);

  }

  doRender(): void {
    // Run the render loop.
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });

    // The canvas/window resize event handler.
    window.addEventListener("resize", () => {
      this._engine.resize();
    });
  }
}
