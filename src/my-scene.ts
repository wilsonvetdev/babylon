import * as BABYLON from "babylonjs";
import { buildDwellings } from "./build";

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

    buildDwellings(this._scene)

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
