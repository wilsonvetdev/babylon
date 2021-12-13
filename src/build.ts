/******Build Functions***********/
export const buildGround = (scene) => {
  //color
  const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
  // groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

  //texture
  groundMat.diffuseTexture  = new BABYLON.Texture('https://www.babylonjs-playground.com/textures/grass.png', scene)

  const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
  ground.material = groundMat;
}


export const buildBox = (scene, options = {}) => {
  //texture
  const boxMat = new BABYLON.StandardMaterial("boxMat", scene);
  boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png", scene)

  /**** World Objects *****/
  const box = BABYLON.MeshBuilder.CreateBox("box", options);
  box.material = boxMat

  return box;
}

export const buildRoof = (scene) => {
  //texture
  const roofMat = new BABYLON.StandardMaterial("roofMat", scene);
  roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);

  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
  roof.material = roofMat;
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;

  return roof;
}
