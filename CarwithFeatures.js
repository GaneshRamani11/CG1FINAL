function Simple_car(){

	init();
	render();
	
	
	function init(){

	  
camera = new THREE.PerspectiveCamera( 75, 1200/900, 1, 10000 ); 
  camera.position.z=2000;
		  camera.position.y=1000;
		camera.position.x=5000;


    scene = new THREE.Scene();

    geometry = new THREE.TorusGeometry( 200, 20, 20,20 );
    material = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false} );

    Cone = new THREE.Mesh( geometry, material );
   // scene.add( Cone );

    geometry1 = new THREE.TorusGeometry( 200, 20, 20,20 );
    material1 = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false } );

    Cone1 = new THREE.Mesh( geometry1, material1 );
		Cone1.position.set(0,0,500);
   // scene.add( Cone1 );


		   geometry2 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material2 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );

    Cone2 = new THREE.Mesh( geometry2, material2 );
		Cone2.position.set(0,0,500);
		Cone2.rotation.set(Math.PI/2,0,0);
   // scene.add( Cone2 );


		geometry3 = new THREE.CylinderGeometry( 200, 20, 20,20 );
    material3 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );

    Cone3 = new THREE.Mesh( geometry3, material3 );
		Cone3.position.set(0,0,0);
		Cone3.rotation.set(Math.PI/2,0,0);
   // scene.add( Cone3 );

	geometry4 =new THREE.CylinderGeometry(50,50,500,320,1);
	material4 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );
		cone4= new THREE.Mesh(geometry4,material4);
			cone4.position.set(0,0,250);
		cone4.rotation.set(Math.PI/2,0,0);
	//	scene.add(cone4);


		// Second Axle




        geometry5 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material5 = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false } );

        Cone5 = new THREE.Mesh( geometry5, material5 );
        Cone5.position.set(700,0,0);
     //   scene.add( Cone5 );

        geometry6 = new THREE.TorusGeometry( 200, 20, 20,20 );
        material6 = new THREE.MeshPhongMaterial( { color: 0xff0000, wireframe: false } );

        Cone6 = new THREE.Mesh( geometry1, material1 );
        Cone6.position.set(700,0,500);
     //   scene.add( Cone6 );


        geometry7 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material7 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );

        Cone7 = new THREE.Mesh( geometry2, material2 );
        Cone7.position.set(700,0,500);
        Cone7.rotation.set(Math.PI/2,0,0);
      //  scene.add( Cone7 );


        geometry8 = new THREE.CylinderGeometry( 200, 20, 20,20 );
        material8 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );

        Cone8 = new THREE.Mesh( geometry3, material3 );
        Cone8.position.set(700,0,0);
        Cone8.rotation.set(Math.PI/2,0,0);
      //  scene.add( Cone8 );

        geometry9 =new THREE.CylinderGeometry(50,50,500,320,1);
        material9 = new THREE.MeshPhongMaterial( { color: 'blue', wireframe: false } );
        cone9= new THREE.Mesh(geometry4,material4);
        cone9.position.set(700,0,250);
        cone9.rotation.set(Math.PI/2,0,0);
     //   scene.add(cone9);


        geometry10 =new THREE.BoxGeometry(600,50,450);
        material10 = new THREE.MeshPhongMaterial( { color: 'green', wireframe: false} );
        cube= new THREE.Mesh(geometry10,material10);
        cube.position.set(350,0,250);
        //cube.rotation.set(Math.PI/2,0,0);
      //  scene.add(cube);

		// Body of Car

		bodygeometry10 =new THREE.BoxGeometry(1400,250,450);
        bodymaterial10 = new THREE.MeshPhongMaterial( { color: 'pink', wireframe: false} );
        bodycube= new THREE.Mesh(bodygeometry10,bodymaterial10);
        bodycube.position.set(350,120,250);
        //cube.rotation.set(Math.PI/2,0,0);
      //  scene.add(bodycube);

		bodygeometry12 =new THREE.BoxGeometry(1000,350,450);
        bodymaterial12 = new THREE.MeshPhongMaterial( { color: 'orange', wireframe: false} );
        bodycube1= new THREE.Mesh(bodygeometry12,bodymaterial12);
        bodycube1.position.set(550,420,250);
        //cube.rotation.set(Math.PI/2,0,0);
     //   scene.add(bodycube1);

		//window

		bodygeometry13 =new THREE.BoxGeometry(5,300,450);
        bodymaterial13 = new THREE.MeshPhongMaterial( { color: 'white', wireframe: false} );
        bodycube2= new THREE.Mesh(bodygeometry13,bodymaterial13);
        bodycube2.position.set(50,420,250);
        //cube.rotation.set(Math.PI/2,0,0);
       // scene.add(bodycube2);


		//Lights


		bodygeometry14 =new THREE.SphereGeometry(50);
        bodymaterial14 = new THREE.MeshPhongMaterial( { color: 'white', wireframe: false} );
        bodycube3= new THREE.Mesh(bodygeometry14,bodymaterial14);
        bodycube3.position.set(-350,120,350);
        //cube.rotation.set(Math.PI/2,0,0);
       // scene.add(bodycube3);


        bodycube4= new THREE.Mesh(bodygeometry14,bodymaterial14);
        bodycube4.position.set(-350,120,150);
        //cube.rotation.set(Math.PI/2,0,0);
        //scene.add(bodycube4);

		lights = new THREE.DirectionalLight('orange', 1, 100 );
		lights.position.set(-200,0,0);
		scene.add(lights);

		//road


				var bulbGeometry = new THREE.SphereBufferGeometry( 20, 16, 8 );
				bulbLight = new THREE.PointLight( 0xff0000, 1000, 0, 2);
				bulbMat = new THREE.MeshStandardMaterial( {
					emissive: 0xff0000,
					emissiveIntensity: 1000,
					color: 0x000000
				});
				bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
				bulbLight.position.set( 100, 100, 0 );
				bulbLight.castShadow = true;
				scene.add( bulbLight );
	
			var bulbGeometry2 = new THREE.SphereBufferGeometry( 20, 16, 8 );
				bulbLight2 = new THREE.PointLight( 0x62ff00, 1000, 0, 2);
				bulbMat2 = new THREE.MeshStandardMaterial( {
					emissive: 0x37ff46,
					emissiveIntensity: 1,
					color: 0x000000
				});
				bulbLight2.add( new THREE.Mesh( bulbGeometry2, bulbMat2 ) );
				bulbLight2.position.set( 100, 100, 0 );
				bulbLight2.castShadow = true;
				scene.add( bulbLight2 );
	
		
		var planeGeometry = new THREE.PlaneGeometry( 2000, 2000,2000 );
				
				bulbMat1 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide});
		bulbLight1 = new THREE.Mesh( planeGeometry, bulbMat1 );
		bulbLight1.rotation.x = Math.PI/2;
		bulbLight1.position.set(-200,-250,300);
		
		
		

		group = new THREE.Group();
		group.add(Cone);
		group.add(Cone1);
		group.add(Cone2);
		group.add(Cone3);
		group.add(cone4);
		group.add(Cone5);
		group.add(Cone6);
		group.add(Cone7);
		group.add(Cone8);
		group.add(cone9);
		group.add(cube);
		group.add(bodycube);
		group.add(bodycube1);
		group.add(bodycube2);
		group.add(bodycube3);
		group.add(bodycube4);
	 //   group.add(lights);
		scene.add(bulbLight1);

		group.castShadow = false;



		scene.add(group);

		 camera.lookAt(scene.position);
        renderer = new THREE.WebGLRenderer({});
    renderer.setSize(1200,900);

    document.body.appendChild( renderer.domElement );

	 orbitControl = new THREE.OrbitControls(camera,renderer.domElement);
        orbitControl.addEventListener('change', render);
        orbitControl.enableZoom = TRUE;

		
		
	}
 function render() {
	 	var time = Date.now() * 0.0005;
     requestAnimationFrame(render);
	 camera.lookAt(group.position);
     renderer.render(scene, camera);
					bulbLight.position.x = Math.sin( time * 0.7 ) * 3000;
			bulbLight.position.y = Math.cos( time * 0.5 ) * 4000;
	bulbLight.position.z = Math.cos( time * 0.3 ) * 3000;
	 					bulbLight2.position.x = -Math.sin( time * 0.7 ) * 3000;
			bulbLight2.position.y = -Math.cos( time * 0.5 ) * 4000;
	bulbLight2.position.z = -Math.cos( time * 0.3 ) * 3000;
 }
		
	}