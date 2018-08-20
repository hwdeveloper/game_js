function Wolf() {

    //狼的类型
    var type;
    //狼的坐标
    var wolfX;
    var wolfY;
    //狼的大小
    var width=100;
    var height=108;

    //灰太狼的位置坐标
    var arrPos = [
        {left:170,top:220},
        {left:50,top:290},
        {left:45,top:380},
        {left:70,top:490},
        {left:200,top:460},
        {left:330,top:490},
        {left:320,top:366},
        {left:305,top:260},
        {left:200,top:460}
    ];

    //大灰太狼图片
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小灰太狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];

    var wolfHBox=[];
    var wolfXBox=[];

    //灰太狼图片缓存
    var wolfImages;

    //图片的下标
    var index=0;
    //图片的数量
    var length =6;
    var lengthHit = wolfHImages.length;

    this.init=function ( ) {
        //1,创建大灰太狼
        for(var i=0;i<wolfHImages.length;i++){
           var img = new Image();
           img.src=wolfHImages[i];
           wolfHBox.push(img);
        }
        //2,创建小灰太狼
        for(var i=0;i<wolfXImages.length;i++){
            var img = new Image();
            img.src=wolfXImages[i];
            wolfXBox.push(img);
        }
        //3,设置狼的类型
        this.randomType();
        //4,设置狼的位置
        this.rePosition();

    }

    this.randomType=function () {
        type = Math.floor(Math.random()*2);
        if(type==0){
            wolfImages = wolfHBox;
        }else{
            wolfImages = wolfXBox;
        }
    }
    this.rePosition=function () {
        var random =Math.floor(Math.random()*9);
        wolfX=arrPos[random].left;
        wolfY=arrPos[random].top;
    }
    
    this.hitWolf=function () {
        if(state==WOLF_NORMAL){
            state = WOLF_HIT;
            index = 5;
            //添加分数

            //callBack(type);
        }
    }

    var callBack;
    this.addScoreListener=function (call) {
        callBack = call;
    }


    var WOLF_NORMAL=0;
    var WOLF_HIT=WOLF_NORMAL+1;

    var state=WOLF_NORMAL;
    this.run=function (paint) {
        switch(state){
            case WOLF_NORMAL:
                index++;
                if(index>=length){
                    index=0;
                    //重写给狼的位置赋值
                    this.rePosition();
                    this.randomType();
                }

                paint.drawImage(wolfHBox[index],wolfX,wolfY,width,height);
                break;
            case WOLF_HIT:
                index++;
                if(index>=lengthHit)
                {
                    index=0;
                    state = WOLF_NORMAL;

                    //重写给狼的位置赋值
                    this.rePosition();
                    //重新随机狼胡类型
                    this.randomType();

                }
                //设置图片来源
                //wolf.src=wolfImages[index];
                paint.drawImage(wolfHBox[index],wolfX,wolfY,width,height);
                break;
        }

    }

    this.onClick=function (x,y){
        if(x>wolfX&&x<wolfX+width&&y>wolfY&&y<wolfY+height){
            //alert('被打');
            this.hitWolf();
        }
    }

}