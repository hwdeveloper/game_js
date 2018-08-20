function Gun() {

    var gunX;
    var gunY;

    var fireimgs=['./imgs/flower/tap_shot_01.gif'
        ,'./imgs/flower/tap_shot_02.gif'
        ,'./imgs/flower/tap_shot_03.gif'
        ,'./imgs/flower/tap_shot_04.gif'
        ,'./imgs/flower/tap_shot_05.gif'
        ,'./imgs/flower/tap_shot_06.gif'
        ,'./imgs/flower/tap_shot_07.gif'
        ,'./imgs/flower/tap_shot_08.gif'
        ,'./imgs/flower/tap_shot_09.gif'
        ,'./imgs/flower/tap_shot_10.gif'
        ,'./imgs/flower/tap_shot_11.gif'
        ,'./imgs/flower/tap_shot_12.gif'
        ,'./imgs/flower/tap_shot_13.gif'
        ,'./imgs/flower/tap_shot_14.gif'
        ,'./imgs/flower/tap_shot_15.gif'
        ,'./imgs/flower/tap_shot_16.gif'
        ,'./imgs/flower/tap_shot_17.gif'
        ,'./imgs/flower/tap_shot_18.gif'
        ,'./imgs/flower/tap_shot_19.gif'
        ,'./imgs/flower/tap_shot_20.gif'
        ,'./imgs/flower/tap_shot_21.gif'
        ,'./imgs/flower/tap_shot_22.gif'
        ,'./imgs/flower/tap_shot_23.gif'
        ,'./imgs/flower/tap_shot_24.gif'
        ,'./imgs/flower/tap_shot_25.gif'];

    this.collimation;

    var boombox=[];
    this.init=function () {
        this.collimation=new Image();
        this.collimation.src='./imgs/gun_sight.png';
        for(var i=0;i<18;i++){
            var boom=new Image();
            boom.src=fireimgs[i];
            boombox.push(boom);
        }

    }
    //鼠标移动瞄准镜跟着移动

    this.onmousemove=function (bufferx,buffery) {
        gunX=bufferx;
        gunY=buffery;
    }
    //鼠标点击发出子弹
    var index=-1;
    this.onClick=function () {
        if(state==NORMAL){
            state=BOOM;
        }
    }
    //判断状态
    var NORMAL=0;
    var BOOM=NORMAL+1;
    var state=NORMAL;
    this.run=function (paint) {
        switch(state){
            case NORMAL:
                paint.drawImage(this.collimation,gunX,gunY);
                break;
            case BOOM:
                index++;
                if(index>=18){
                    index=0;
                    state=NORMAL;
                }
                paint.drawImage(boombox[index],gunX+40,gunY+40,100,100);
                paint.drawImage(this.collimation,gunX,gunY);
                break;

        }
    }
}