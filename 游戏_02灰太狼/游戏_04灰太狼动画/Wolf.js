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

    //图片数组
    var wolfImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png'];
    //图片的下标
    var index=0;
    //图片的数量
    var length =wolfImages.length;

    this.init=function (game) {
        //创建图片元素
        wolf =document.createElement('img');
        //设置图片来源
        wolf.src=wolfImages[index];
        //设置位置
        wolf.style.position="absolute";
        this.rePosition();

        game.appendChild(wolf);
    }

    this.run=function () {
        index++;
        if(index>=length){
            index=0;
            //重写给狼的位置赋值
            this.rePosition();
        }
        //设置图片来源
        wolf.src=wolfImages[index];
    }
    
    this.rePosition=function () {
        var random =Math.floor(Math.random()*9);
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;
    }
}