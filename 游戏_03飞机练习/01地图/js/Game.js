function Game() {
    var width= 480;
    var height = 700;
    //游戏盒子
    var game;
    //游戏地图
    var map;
    this.init=function () {
        this.initGame();
        //创建游戏地图对象
        map = new Map();
        //初始化
        map.init(game);
    }
    this.initGame=function () {
        game = document.createElement('div');
        //设置游戏盒子的大小
        game.style.width=width+"px";
        game.style.height=height+"px";

        game.style.position="relative";
        game.style.overflow="hidden";

        game.style.backgroundColor="#111222";
        //设置居中
        game.style.margin="auto";

        document.body.appendChild(game);
    }

    this.run=function () {
        map.run();
    }
}