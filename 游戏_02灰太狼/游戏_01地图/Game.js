function Game() {
    //设置游戏盒子的大小
    var gameWidth=480;
    var gameHeight=750;
    this.init=function () {
        //1,创建游戏的盒子
        var game = document.createElement('div');
        //2,设置游戏盒子的大小
        game.style.width=gameWidth+"px";
        game.style.height=gameHeight+"px";
        //3,设置居中
        game.style.margin="auto";
        //4，设置背景颜色
        game.style.backgroundColor="darkolivegreen";

        document.body.appendChild(game);

        //添加游戏地图
        var map = new Map(gameWidth,gameHeight);
        //数据初始化
        map.init(game);

    }
}