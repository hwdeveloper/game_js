function Map(mapWidth,mapHeight) {
    var width=mapWidth;
    var height=mapHeight;

    //地图
    var map;
    var tree;
    var hitpanel;
    var shotpanel;
    var lifepanel;
    this.init=function ( ) {
        //1,创建图片元素
        map = new Image();
        //2,设置图片的地址
        map.src="./imgs/bg_game.jpg";
        tree=new Image();
        tree.src='./imgs/tree.png';
        hitpanel=new Image();
        hitpanel.src='./imgs/hit_panel.png';
        shotpanel=new Image();
        shotpanel.src='./imgs/shot_panel.png';
        lifepanel=new Image();
        lifepanel.src='./imgs/life_panel.png';
    }

    this.run=function (paint) {
        paint.drawImage(map,0,0,width,height);
        paint.drawImage(tree,0,21);
        paint.drawImage(hitpanel,200,640);
        paint.drawImage(shotpanel,770,610);
        paint.drawImage(lifepanel,767,604);
    }
}