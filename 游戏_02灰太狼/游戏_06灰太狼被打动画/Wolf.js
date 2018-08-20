function Wolf() {
    //灰太狼图片元素节点
    var wolf;
    //灰太狼的位置坐标
    var arrPos = [
        {left:"170px",top:"220px"},
        {left:"50px",top:"290px"},
        {left:"45px",top:"380px"},
        {left:"70px",top:"490px"},
        {left:"200px",top:"460px"},
        {left:"330px",top:"490px"},
        {left:"320px",top:"366px"},
        {left:"305px",top:"260px"},
        {left:"200px",top:"460px"}
    ];

    //大灰太狼图片
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小灰太狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];

    //灰太狼图片缓存
    var wolfImages;

    //图片的下标
    var index=0;
    //图片的数量
    var length =6;
    var lengthHit = wolfHImages.length;

    this.init=function (game) {
        //创建图片元素
        wolf =document.createElement('img');
        //设置图片来源
        this.randomType();
        wolf.src=wolfImages[index];
        //设置位置
        wolf.style.position="absolute";
        this.rePosition();
        //设置狼胡点击事件
        wolf.onclick= this.hitWolf;

        game.appendChild(wolf);
    }
    
    this.hitWolf=function () {
        if(state==WOLF_NORMAL){
            state = WOLF_HIT;
            index = 5;
        }
    }
    
    this.randomType=function () {
        var type = Math.floor(Math.random()*2);
        if(type==0){
            wolfImages = wolfHImages;
        }else{
            wolfImages = wolfXImages;
        }
    }


    var WOLF_NORMAL=0;
    var WOLF_HIT=WOLF_NORMAL+1;

    var state=WOLF_NORMAL;
    this.run=function () {
        switch(state){
            case WOLF_NORMAL:
                index++;
                if(index>=length){
                    index=0;
                    //重写给狼的位置赋值
                    this.rePosition();
                    this.randomType();
                }
                //设置图片来源
                wolf.src=wolfImages[index];
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
                wolf.src=wolfImages[index];
                break;
        }

    }
    
    this.rePosition=function () {
        var random =Math.floor(Math.random()*9);
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;
    }
}