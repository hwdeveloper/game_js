function Map() {
    //设置地图的大小
    var MapW = 302;
    var MapH = 510;
    var MapTop = 0;

    var imgs = ['./img/images/BG_1.jpg','./img/images/BG_2.jpg','./img/images/BG_3.jpg','./img/images/BG_4.jpg'];

    var maps = [];


    this.init = function () {
        //创建图片元素
        var map;
        var length = imgs.length;
        for(var i=0;i<length;i++) {
            map = new Image();
            map.src=imgs[i];
            maps[i]={img:map,imgX:(i)*300};
        }
    }


    this.run = function (paint) {
        maps.forEach(function (map) {
            map.imgX=map.imgX+2;
            if(map.imgX>=900)
            map.imgX=-300;
            paint.drawImage(map.img,map.imgX,MapTop,MapW,MapH);
        })
    }
}