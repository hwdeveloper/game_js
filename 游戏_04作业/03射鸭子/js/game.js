function Game() {
    //设置游戏盒子的大小
    var gameWidth=1024;
    var gameHeight=770;

    //游戏地图
    var map;


    var that;
    this.init=function () {
        that= this;
        //1，初始化游戏盒子
        this.initGame();
        //2，添加游戏地图
        this.initMap();
        this.initDuck();
        this.initgun();



    }
    var paint;
    this.initGame=function () {
        //1,获得游戏的画布
        var myCanvas = document.getElementById('myCanvas');

        myCanvas.onclick=function (ev) {
            var x = ev.clientX-290;
            var y = ev.clientY-100;
            that.onClick(x,y);
        }
        myCanvas.onmousemove=function (ev) {
            var x=ev.clientX-290;
            var y=ev.clientY-100;
            that.onmousemove(x,y);
        }
        //5,先判定浏览器是否支持canvas，再创建一个画笔
        if (myCanvas.getContext){

            paint = myCanvas.getContext("2d");
        }
    }

    this.initMap=function () {

        map = new Map(gameWidth,gameHeight);
        //数据初始化
        map.init();
    }
    //创建鸭子集合
    var ducksBox=[];
    //初始化鸭子
    this.initDuck=function () {
        for(var i=0;i<2;i++){
            var duck=new Duck();
            duck.init();
            ducksBox.push(duck);
        }


    }
    //初始化枪
    var gun;
    this.initgun=function () {
        gun=new Gun();
        gun.init();
    }


    var GAME_START=0;
    var GAME_RUN=GAME_START+1;
    var GAME_OVER=GAME_RUN+1;
    var state=GAME_RUN;

    this.run=function () {
        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:
                map.run(paint);

                ducksBox.forEach(function (duck) {
                    duck.run(paint);
                })
                gun.run(paint);

                break;
            case GAME_OVER:
                break;
        }

    }

    this.onmousemove=function (x,y) {


        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:
                gun.onmousemove(x,y);
                break;
            case GAME_OVER:
                break;
        }

    }

    this.onClick=function (x,y) {

        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:

                ducksBox.forEach(function (duck) {
                    duck.shot(x,y);
                })
                gun.onClick();
                break;
            case GAME_OVER:
                break;
        }
    }
}