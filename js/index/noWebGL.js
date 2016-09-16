"use strict";

(function () {
    /*** 当不支持WebGL时执行该事件 ***/
    var taiyangxi = document.getElementById("taiyangxi");
    if (taiyangxi.getElementsByTagName("canvas").length === 0) {
        // 没有canvas执行该事件
        taiyangxi.style.cssText = "background-image: url(\"/img/index/yuzhoubg" + Math.floor(Math.random() * 3) + ".jpg\")";
        alert("您的浏览器不支持WebGL。");
    }
})();
