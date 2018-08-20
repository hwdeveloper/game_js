function Map(mapWidth,mapHeight) {
    this.mapWidth=mapWidth;
    this.mapHeight=mapHeight;
    this.init=function (game) {
        //1,创建图片元素
        var map = document.createElement('img');
        //2,设置图片的地址
        map.src="../img/game_bg.jpg";
        //3,设置图片的大小
        map.style.width=this.mapWidth+"px";
        map.style.height= this.mapHeight+"px";
        //4,把地图放置到游戏盒子里面
        game.appendChild(map);
    }
}