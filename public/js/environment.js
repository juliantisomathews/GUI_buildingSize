function createEnvironment(scene) {
  console.log("Adding environment");
  loadModel(scene);
  loadObject(scene)
  loadObj(scene)

  // White directional light at half intensity shining from the top.
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);


}

function updateEnvironment(scene) {
  // you can update the environment here

  
}

function loadModel(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(0,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Oakland: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , .39, .79, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}

function loadObject(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(3,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Detroit: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , .19, .38, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}


function loadObj(scene) {
  // model
  const onProgress = function (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% downloaded");
    }
  };

  const onError = function () {};

  const manager = new THREE.LoadingManager();

  new THREE.MTLLoader(manager)
    .setPath("../assets/haus/")
    .load("haus.mtl", function (materials) {
      materials.preload();

      new THREE.OBJLoader(manager)
        .setMaterials(materials)
        .setPath("../assets/haus/")
        .load(
          "haus.obj",
          
          function (object) {

            // object.scale.set(0.25,0.25,0.25);
            object.position.set(-3,0,-10);

            const gui = new dat.GUI({
              width: 350
            })
            // gui.addColor('blue')
            const sizeFolder = gui.addFolder("Phoenix: Median home price from 2010 to 2020 in $100k")
            sizeFolder.add(object.scale, "y" , 1.37, 1.74, .05)
            sizeFolder.open();

            scene.add(object);
          },
          onProgress,
          onError
        );
    });
   
}





