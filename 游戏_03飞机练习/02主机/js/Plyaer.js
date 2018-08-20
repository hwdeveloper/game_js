function Plyaer() {

    //屏幕的大小
    var bgW;
    var bgH;

    var width =75;
    var height = 50;
    //飞机的坐标
    var playerX;
    var playerY;

    var speedX=10;
    var speedY=10;
    //图片元素
    var player;


    this.init=function (game,bgW1,bgH1) {
        bgW=bgW1;
        bgH=bgH1;
        playerX = (bgW-width)/2;
        playerY = bgH-height;
        //创建图片元素
        player =document.createElement('img');
        //设置位置
        player.style.position="absolute";
        player.style.left=playerX+"px";
        player.style.top=playerY+"px";
        //设置图片的来源
        player.src="./img/player.png";
        player.style.width=width+"px";
        player.style.height=height+"px";
        //把飞机添加到游戏盒子里面
        game.appendChild(player);

    }
    
    this.run=function () {
        
    }

    var PLAYER_UP=119;
    var PLAYER_DOWN=115;
    var PLAYER_LEFT=97;
    var PLAYER_RIGHT=100;

    this.onkeypress=function (keyCode){
        switch (keyCode){
            case PLAYER_UP:
                this.moveUp();
                break;
            case PLAYER_DOWN:
                this.moveDown();
                break;
            case PLAYER_LEFT:
                this.moveLeft();
                break;
            case PLAYER_RIGHT:
                this.moveRight();
                break;
        }
    }
    
    this.moveUp=function () {
        playerY =playerY-speedY;
        if(playerY<200)
            playerY=200;
        player.style.top=playerY+"px";
    }

    this.moveDown=function () {
        playerY =playerY+speedY;
        if(playerY>bgH-height)
            playerY=bgH-height;
        player.style.top=playerY+"px";
    }

    this.moveLeft=function () {
        playerX =playerX-speedX;
        if(playerX<0)
            playerX=0;
        player.style.left=playerX+"px";
    }

    this.moveRight=function () {
        playerX =playerX+speedX;
        if(playerX>bgW-width)
            playerX=bgW-width;
        player.style.left=playerX+"px";
    }
}