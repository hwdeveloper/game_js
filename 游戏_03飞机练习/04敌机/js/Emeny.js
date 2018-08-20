function Emeny() {

    //敌机的位置
    var emenyX;
    var emenyY;
    //敌机飞行的速度
    var speedX=2;
    var speedY=5;
    //敌机的宽度和高度
    var emenyW=37;
    var emenyH=28;
    //敌机的类型
    var type;
    //图片元素
    var emeny;
    this.init=function (game) {
        //创建敌机
        emeny = document.createElement('img');
        //设置位置
        emeny.style.position="absolute";
        this.setPosition();
        //把敌机加到游戏盒子
        game.appendChild(emeny);

    }
    
    this.setPosition=function () {
        //随机位置
        emenyX = Math.floor(Math.random()*(480-emenyW));
        emenyY = -Math.floor(Math.random()*400);
        emeny.style.left=emenyX+"px";
        emeny.style.top=emenyY+"px";
        //随机敌机的类型
        type = Math.floor(Math.random()*2);

        if(type==0){
            emeny.src="./img/enemy1.png";
        }else{
            emeny.src="./img/enemy2.png";
        }
        emenyW=emenyW+Math.floor(Math.random()*20);
        emenyH=emenyH+Math.floor(Math.random()*10);
        emeny.style.width=emenyW+"px";
        emeny.style.height=emenyH+"px";
        //敌机水平方向
        if(Math.floor(Math.random()*2)==0){
            speedX=speedX+Math.floor(Math.random()*5);
            speedX = -speedX;
        }
    }
    
    this.run=function () {
        //运动
        emenyY = emenyY+speedY;
        if(emenyY>800){
            this.setPosition();
        }
        emenyX = emenyX+speedX;
        if(emenyX<0){
            emenyX=0;
            speedX=-speedX;
        }
        if(emenyX>480-emenyW){
            emenyX=480-emenyW;
            speedX=-speedX;
        }
        emeny.style.left=emenyX+"px";
        emeny.style.top=emenyY+"px";
    }
}