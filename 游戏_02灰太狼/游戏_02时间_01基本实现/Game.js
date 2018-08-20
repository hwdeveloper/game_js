function Game() {
    //设置游戏盒子的大小
    var gameWidth=480;
    var gameHeight=750;

    //游戏盒子
    var game;
    this.init=function () {
        //1，初始化游戏盒子
        this.initGame();
        //2，添加游戏地图
        var map = new Map(gameWidth,gameHeight);
        //数据初始化
        map.init(game);
        //3，添加时间图片
        var timeView = new TimeView();
        //数据初始化
        timeView.init(game);

    }
    
    this.initGame=function () {
        //1,创建游戏的盒子
         game = document.createElement('div');
        //2,设置游戏盒子的大小
        game.style.width=gameWidth+"px";
        game.style.height=gameHeight+"px";
        //3,设置居中
        game.style.margin="auto";
        //4，设置背景颜色
        game.style.backgroundColor="darkolivegreen";
        //5,设置游戏的位置
        game.style.position="relative";

        document.body.appendChild(game);
    }
}