function Game() {
    //设置游戏盒子大小
    var GameW = 1200;
    var GameH = 600;

    //画笔
    var paint;

    var map;

    var imgback;

    var items;

    var content;

    var timeView;

    var GAME_START=0;
    var GAME_RUN=GAME_START+1;
    var GAME_OVER=GAME_RUN+1;
    var state=GAME_START;

    var button;


    this.init = function () {
        //初始化游戏盒子
        this.initGame();

        //初始化地图图片
        this.initMap();

        //初始化背景图片
        this.initImgBack();

        //初始化图片
        this.initItems();

        //初始化文本
        this.initContent();

        //初始化时间
        this.initTimeView();


        //初始化按钮
        this.initButton();

        //设置监听
        timeView.addTimeListener(this.timeListener);

    }

    this.initButton=function () {
        button = document.createElement('button');
        //设置按钮的大小
        button.style.width=GameW/3+"px";
        button.style.height=GameH/6+"px";
        //设置按钮的内容
        button.innerHTML="开始游戏"
        //设置位置
        button.style.position="absolute";
        button.style.left=(GameW-GameW/3)/2+"px";
        button.style.top=(GameH-GameH/6)/2+"px";
        button.style.borderWidth="0px";
        button.style.borderRadius="10px";
        button.style.zIndex = "2";
        //设置点击事件
        button.onclick=function () {
            button.style.display="none";

            state=GAME_RUN;
            //重新初始化时间
            timeView.resetTimeView();
        }
        document.body.appendChild(button);
    }

    this.run = function () {
        content.run();
        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:
                timeView.run(items);
                map.run(paint);
                items.run(paint);
                break;
            case GAME_OVER:
                break;
        }

    }

    this.timeListener=function () {
        var button1= button;
        //更改游戏的状态
        state=GAME_OVER;
        //展示游戏的下一关按钮
        button.innerHTML="继续";
        button.style.display="";
        button1.onclick=function () {
            button1.style.display="none";
            window.location.href="./index.html";
        }
    }

    this.initGame = function () {
        //获得游戏画布
        var myCanvas = document.getElementById('myCanvas');

        //创建一个画布
        paint = myCanvas.getContext("2d");

    }

    this.initMap = function () {
        map = new Map();
        //数据初始化
        map.init();
    }

    this.initImgBack = function () {
        imgback = new ImgBack();
        imgback.init(GameW,GameH);
    }

    this.initItems = function () {
        items = new Items();
        items.init();
    }

    this.initContent = function () {
        content = new Content();
        content.init(items);
    }

    this.initTimeView = function () {
        timeView = new TimeView();
        timeView.init();
    }
}