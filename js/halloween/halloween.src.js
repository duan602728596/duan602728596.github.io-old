((_window)=>{
    alert('请用IE11、谷歌、火狐、Edge浏览器打开此页面。\n点击地球开始播放音乐，再次点击停止播放音乐。');

    const box = document.getElementById('box');
    let scene, camera, renderer, obitControls; // 场景，照相机，渲染器，鼠标控制
    let AnimateFrame = null; // 持续渲染
    const [cs1, cs2] = [
        document.getElementById('canvas1'),
        document.getElementById('canvas2')
    ];
    let boxMesh = null,
        moonMesh = null;
    let music = 'stop';
    const audio = document.getElementById('audio');

    /* 初始化 */
    // 场景
    const initScene = ()=>{
        scene = new THREE.Scene();
    };
    // 照相机
    const initCamera = ()=>{
        camera = new THREE.PerspectiveCamera(60, _window.innerWidth / _window.innerHeight, 1, 10000);
        camera.position.set(200, 200, 200);
        camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
    };
    // 渲染器
    const initRenderer = ()=>{
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(_window.innerWidth, _window.innerHeight);
        box.appendChild(renderer.domElement);
    };
    // 初始化鼠标控制
    const initOrbitControls = ()=>{
        obitControls = new THREE.OrbitControls(camera);
    };

    /* 窗口改变事件 */
    function windowChange(event){
        const [x, y, z] = [
            camera.position.x,
            camera.position.y,
            camera.position.z
        ];
        initCamera();
        camera.position.set(x, y, z);
        renderer.setSize(_window.innerWidth, _window.innerHeight);
        initOrbitControls();
    }

    /* 动画持续改变 */
    function Animate(time){
        renderer.clear();
        if(music === 'play') rotation();
        renderer.render(scene, camera);
        AnimateFrame = requestAnimationFrame(Animate);
    }

    /* 初始化 */
    const init = ()=>{
        initScene();
        initCamera();
        initRenderer();
        initOrbitControls();
        _window.addEventListener('resize', windowChange, false);
        box.addEventListener('click', boxMeshCk, false);
        audio.addEventListener('ended', audioEnd, false);
        AnimateFrame = requestAnimationFrame(Animate);
    };
    init();

    /* 场景对象 */
    {   // 盒子
        const [texture1, texture2] = [
            new THREE.Texture(cs1),
            new THREE.Texture(cs2)
        ];
        texture1.needsUpdate = true;
        texture2.needsUpdate = true;

        const geometry = new THREE.CubeGeometry(903, 903, 903);
        const [map1, map2] = [
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                map: texture1
            }),
            new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                map: texture2
            })
        ];
        const material = new THREE.MeshFaceMaterial([map1, map1, map1, map1, map2, map2]);
        boxMesh = new THREE.Mesh(geometry, material);
        boxMesh.position.set(0, 0, 0);
        boxMesh.name = 'boxMesh';
        scene.add(boxMesh);
    }
    {   // 地球
        const geometry = new THREE.SphereGeometry(80, 200, 200);
        const texture = THREE.ImageUtils.loadTexture('/img/index/diqiu.jpg', {}, ()=>{});
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            map: texture
        });
        moonMesh = new THREE.Mesh(geometry, material);
        moonMesh.position.set(0, 0, 0);
        moonMesh.name = 'moonMesh';
        scene.add(moonMesh);
    }

    function rotation(){
        const moonY = moonMesh.rotation.y;
        const boxX = boxMesh.rotation.x,
            boxY = boxMesh.rotation.y,
            boxZ = boxMesh.rotation.z;
        moonMesh.rotation.y = moonY + 0.006 >= 2 * Math.PI ? 0 : moonY + 0.006;
        boxMesh.rotation.x = boxX + 0.001 >= 2 * Math.PI ? 0 : boxX + 0.001;
        boxMesh.rotation.y = boxY + 0.001 >= 2 * Math.PI ? 0 : boxY + 0.001;
        boxMesh.rotation.z = boxZ + 0.001 >= 2 * Math.PI ? 0 : boxZ + 0.001;
    }

    /* children */
    const childrenFun = {
        'moonMesh': function(){
            if(music === 'stop'){
                audio.play();
                music = 'play';
            }else if(music === 'play'){
                audio.pause();
                music = 'stop';
            }
        }
    };

    /* 播放 */
    function boxMeshCk(event){
        const raycaster = new THREE.Raycaster(),
            mouse = new THREE.Vector2();
        mouse.x = (event.clientX / _window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / _window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        if(intersects[0] !== undefined){
            const obj = intersects[0].object; // 你点击的物体
            if(obj.name && obj.name in childrenFun) childrenFun[obj.name]();
        }
    }

    /* 播放结束 */
    function audioEnd(event){
        alert('万圣节快乐！Happy halloween!');
        music = 'stop';
    }
})(window);
