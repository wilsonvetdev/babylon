import MyScene from "./my-scene";
window.addEventListener("DOMContentLoaded", () => {
  // Create the game using the 'renderCanvas'.
  let scene = new MyScene("renderCanvas");

  // Create the scene.
  scene.createScene();

  // Start render loop.
  scene.doRender();
});
