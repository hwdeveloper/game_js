function Game() {

    var gameWidth = 480;
    var gameHeight = 730;

    var GAME_ROTATING=0;
    var GAME_FIRE=GAME_ROTATING+1;
    var state = GAME_ROTATING;

    //游戏的画布
    var canvas;


    var bullet;

    var start;

    //数据初始化
    this.init=function () {
        //1，获得游戏画布
        canvas = document.body;

        //1,创建地图对象
        start = document.createElement('div');
        start.style.position="absolute";
        start.style.left='400px';
        start.style.top='60px';
        start.style.width="10px";
        start.style.height="10px";
        start.style.background='#000000';
        canvas.appendChild(start);

        //1,创建地图对象
        bullet = document.createElement('div');
        bullet.style.position="absolute";
        bullet.style.width="20px";
        bullet.style.height="20px";
        bullet.style.background='#000aaa';

        canvas.appendChild(bullet);

        document.body.onkeydown=this.keydown;

    }
   
    this.keydown=function (ev) {
        var id = ev.keyCode;
        if(id==32){
            state =   GAME_FIRE;
            k = (bulletY - 60)/(bulletX-400);
            b=60-k*400;
        }
    }
 
    var k=1;
    var b=1;
    this.getX=function (y) {

        var x = (y-b)/k;
        return x;
    }
    var rotate=-210;
    var direction=-1;
    //每隔300毫秒调用一次
    this.run=function () {

        switch (state){

            case GAME_ROTATING:
                rotate=rotate+direction;

                this.setbulletPosition(rotate);

                if(bulletY<60)
                    direction=-direction;
                bullet.style.left=bulletX+"px";
                bullet.style.top= bulletY+"px";
                break;
            case GAME_FIRE:

                bulletY = bulletY +5;
                bulletX = this.getX(bulletY);
                bullet.style.left=bulletX+"px";
                bullet.style.top= bulletY+"px";
                break;
        }


    }

    var bulletX;
    var bulletY;
    
    this.setbulletPosition=function (rotate) {
        var hudu = (2*Math.PI / 360) * 6 * rotate;
        bulletX= 400+Math.sin(hudu) * 50;
        bulletY = 60 - Math.cos(hudu) * 50;
    }

}