"use strict";

(function () {
    /*** 定义全局变量 ***/
    // 定义canvas插入的dom
    var taiyangxi = document.getElementById("taiyangxi");
    // 定义定时器
    var animation = void 0;
    // 定义场景，照相机，渲染器
    var scene = void 0,
        camera = void 0,
        renderer = void 0;
    // 定义控制器
    var controls = void 0;
    // 定义星球
    var star = {};

    /*** 定义对象 ***/
    // 环境光
    var initHuanjingLight = function initHuanjingLight() {
        var huanjing = new THREE.AmbientLight(0x8f8f8f);
        scene.add(huanjing);
    };
    // 太阳
    var initTaiyang = function initTaiyang() {
        var taiyang_geometry = new THREE.SphereGeometry(64, 100, 100);
        var taiyang_material = new THREE.MeshLambertMaterial({
            emissive: 0xe65f05,
            map: THREE.ImageUtils.loadTexture("/img/index/taiyang.jpg"),
            side: THREE.DoubleSide,
            color: 0xffffff
        });
        star["taiyang"] = new THREE.Mesh(taiyang_geometry, taiyang_material);
        scene.add(star["taiyang"]);
        star["taiyang"].position.set(0, 0, 0);
        // 太阳光
        var taiyang_light = new THREE.PointLight(0xffffff, 1, 350);
        taiyang_light.position.set(0, 0, 0);
        scene.add(taiyang_light);
    };
    // 行星
    var xingxingOptions = [{
        name: "shuixing",
        map: "/img/index/shuixing.jpg",
        r: 1,
        position: {
            x: 0,
            y: 0,
            z: 70
        }
    }, {
        name: "jinxing",
        map: "/img/index/jinxing.jpg",
        r: 2,
        position: {
            x: 0,
            y: 0,
            z: 84
        }
    }, {
        name: "diqiu",
        map: "/img/index/diqiu.jpg",
        r: 4,
        position: {
            x: 0,
            y: 0,
            z: 110
        }
    }, {
        name: "huoxing",
        map: "/img/index/huoxing.jpg",
        r: 5,
        position: {
            x: 0,
            y: 0,
            z: 140
        }
    }, {
        name: "muxing",
        map: "/img/index/muxing.jpg",
        r: 17,
        position: {
            x: 0,
            y: 0,
            z: 220
        }
    }, {
        name: "tuxing",
        map: "/img/index/tuxing.jpg",
        r: 11,
        position: {
            x: 0,
            y: 0,
            z: 280
        }
    }, {
        name: "tianwangxing",
        map: "/img/index/tianwangxing.jpg",
        r: 9,
        position: {
            x: 0,
            y: 0,
            z: 350
        }
    }, {
        name: "haiwangxing",
        map: "/img/index/haiwangxing.jpg",
        r: 6,
        position: {
            x: 0,
            y: 0,
            z: 400
        }
    }];
    var initXingxing = function initXingxing() {
        xingxingOptions.map(function (object, index) {
            var geometry = new THREE.SphereGeometry(object.r, 100, 100);
            var material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(object.map),
                side: THREE.DoubleSide
            });
            star[object.name] = new THREE.Mesh(geometry, material);
            scene.add(star[object.name]);
            star[object.name].position.set(object.position.x, object.position.y, object.position.z);
        });
    };
    // 初始化行星环
    var huanOptions = [{
        name: "tuxing_huan",
        father: "tuxing",
        map: "/img/index/tuxing_huan.jpg",
        r: {
            min: 14,
            max: 22
        },
        rotation: {
            x: 0.5,
            y: 0,
            z: 0
        }
    }, {
        name: "tianwangxing_huan",
        father: "tianwangxing",
        map: "/img/index/tianwangxing_huan.jpg",
        r: {
            min: 10,
            max: 12
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0.3
        }
    }];
    var initHuan = function initHuan() {
        huanOptions.map(function (object, index) {
            var geometry = new THREE.CylinderGeometry(object.r.min, object.r.max, 0, 100, 100, true);
            var material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture(object.map),
                side: THREE.DoubleSide
            });
            star[object.name] = new THREE.Mesh(geometry, material);
            scene.add(star[object.name]);
            star[object.name].position.set(star[object.father].position.x, star[object.father].position.y, star[object.father].position.z);
            star[object.name].rotation.set(object.rotation.x, object.rotation.y, object.rotation.z);
            star[object.father].rotation.set(object.rotation.x, object.rotation.y, object.rotation.z);
        });
    };

    // 定义宇宙背景
    var initYuzhouBg = function initYuzhouBg() {
        var PIC2 = Math.PI / 2;
        var r = 1920 / 2;
        var geometr = new THREE.PlaneGeometry(r * 2, r * 2, 1, 1);
        var material = [new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture("/img/index/bg0.jpg"),
            side: THREE.DoubleSide
        }), new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture("/img/index/bg1.jpg"),
            side: THREE.DoubleSide
        })];
        var yuzhou = [];
        for (var i = 0; i < 6; i++) {
            yuzhou.push(new THREE.Mesh(geometr, material[i % 2]));
            scene.add(yuzhou[i]);
        }
        // 正面
        yuzhou[0].position.set(0, 0, r);
        // 反面
        yuzhou[2].position.set(0, 0, -r);
        // 左面
        yuzhou[5].position.set(-r, 0, 0);
        yuzhou[5].rotation.set(0, PIC2, 0);
        // 右面
        yuzhou[4].position.set(r, 0, 0);
        yuzhou[4].rotation.set(0, PIC2, 0);
        // 上面
        yuzhou[3].position.set(0, r, 0);
        yuzhou[3].rotation.set(PIC2, 0, 0);
        // 下面
        yuzhou[1].position.set(0, -r, 0);
        yuzhou[1].rotation.set(PIC2, 0, 0);
    };

    /*** 星球初始化 ***/
    var initStar = function initStar() {
        initHuanjingLight();
        initTaiyang();
        initXingxing();
        initHuan();
        initYuzhouBg();
    };

    /*** 星球的自转和公转 ***/
    // 弧度的最大值
    var PI2 = 2 * Math.PI;
    // 配置星球的自转和公转
    var speedOptions = [{
        name: "taiyang",
        zizhuan: 0.01,
        gongzhuan: 0,
        deg: 0,
        l: 0
    }, {
        name: "shuixing",
        zizhuan: 0.1,
        gongzhuan: 0.1,
        deg: 0,
        l: xingxingOptions[0].position.z
    }, {
        name: "jinxing",
        zizhuan: 0.05,
        gongzhuan: 0.07,
        deg: 0,
        l: xingxingOptions[1].position.z
    }, {
        name: "diqiu",
        zizhuan: 0.05,
        gongzhuan: 0.03,
        deg: 0,
        l: xingxingOptions[2].position.z
    }, {
        name: "huoxing",
        zizhuan: 0.03,
        gongzhuan: 0.01,
        deg: 0,
        l: xingxingOptions[3].position.z
    }, {
        name: "muxing",
        zizhuan: 0.003,
        gongzhuan: 0.002,
        deg: 0,
        l: xingxingOptions[4].position.z
    }, {
        name: "tuxing",
        zizhuan: 0.01,
        gongzhuan: 0.0009,
        deg: 0,
        l: xingxingOptions[5].position.z
    }, {
        name: "tuxing_huan",
        zizhuan: 0.01,
        gongzhuan: 0.0009,
        deg: 0,
        l: xingxingOptions[5].position.z
    }, {
        name: "tianwangxing",
        zizhuan: 0.005,
        gongzhuan: 0.0005,
        deg: 0,
        l: xingxingOptions[6].position.z
    }, {

        name: "tianwangxing_huan",
        zizhuan: 0.005,
        gongzhuan: 0.0005,
        deg: 0,
        l: xingxingOptions[6].position.z
    }, {
        name: "haiwangxing",
        zizhuan: 0.003,
        gongzhuan: 0.0003,
        deg: 0,
        l: xingxingOptions[7].position.z
    }];
    var initZhuan = function initZhuan() {
        speedOptions.map(function (object, index) {
            // 自转
            star[object.name].rotation.y = star[object.name].rotation.y + object.zizhuan >= PI2 ? 0 : star[object.name].rotation.y + object.zizhuan;
            // 公转
            object.deg = object.deg + object.gongzhuan >= PI2 ? 0 : object.deg + object.gongzhuan;
            star[object.name].position.set(object.l * Math.sin(object.deg), 0, object.l * Math.cos(object.deg));
        });
    };

    /*** 定义初始化事件 ***/
    // 场景初始化事件
    var initScene = function initScene() {
        scene = new THREE.Scene();
    };
    // 照相机初始化事件
    var initCamera = function initCamera() {
        camera = new THREE.PerspectiveCamera(60, taiyangxi.clientWidth / taiyangxi.clientHeight, 1, Math.pow(10, 10));
    };
    // 渲染器初始化事件
    var initRenderer = function initRenderer() {
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(taiyangxi.clientWidth, taiyangxi.clientHeight);
        renderer.clear(0x000000);
        taiyangxi.appendChild(renderer.domElement);
    };
    // 控制器初始化
    var initControls = function initControls() {
        controls = new THREE.OrbitControls(camera);
    };

    /*** 窗口改变事件 ***/
    function windowResize(event) {
        // 获取照相机坐标并重新初始化照相机
        var x = camera.position.x;
        var y = camera.position.y;
        var z = camera.position.z;

        initCamera();
        camera.position.set(x, y, z);
        camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
        // 重新给渲染器定义宽度和高度
        renderer.setSize(taiyangxi.clientWidth, taiyangxi.clientHeight);
        // 重新绑定控制器
        initControls();
    }

    /*** 初始化 ***/
    // 动画
    var animate = function animate() {
        renderer.clear();
        initZhuan();
        renderer.render(scene, camera);
        animation = requestAnimationFrame(animate);
    };
    // 初始化
    var init = function init() {
        // 场景
        initScene();
        // 照相机
        initCamera();
        camera.position.set(320, 320, 320);
        camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
        // 渲染器
        initRenderer();
        // 绑定控制器
        initControls();
        // 添加窗口改变事件
        window.addEventListener("resize", windowResize, false);
        // 初始化星球
        initStar();
        // 开始执行动画
        animation = requestAnimationFrame(animate);
    };
    init();
})();
