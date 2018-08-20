function Map(mapWidth,mapHeight) {
    var width=mapWidth;
    var height=mapHeight;

    //地图
    var map;

    this.init=function ( ) {
        //1,创建图片元素
        map = new Image();
        //2,设置图片的地址
        map.src="../img/game_bg.jpg";

    }
    
    this.run=function (paint) {
        paint.drawImage(map,0,0,width,height);
    }
}