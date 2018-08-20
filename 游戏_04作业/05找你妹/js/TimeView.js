function TimeView() {
    //时间背景图片节点
    var lifebg;
    var lifebgTop = 5;
    var lifebgLeft = 825;

    //时间图片节点
    var lifebar;
    var lifebarTop = 9;
    var lifebarLeft = 879;
    var lifebarW = 95;
    var lifebarH = 12;

    //是否结束
    var isOver=false;

    this.init = function () {
        //设置时间背景图片
        this.CreateLifeBg();
        //设置时间图片
        this.CreateLifeBar();

    }
    var box = document.getElementById('box');
    this.CreateLifeBg = function () {

        lifebg = document.createElement('img');
        //设置时间背景来源
        lifebg.src = "./img/images/lifeBg.png";
        //设置图片的位置
        lifebg.style.position = "absolute";
        lifebg.style.top = lifebgTop+"px";
        lifebg.style.left = lifebgLeft+"px";
        box.appendChild(lifebg);
    }

    this.CreateLifeBar = function () {
        lifebar = document.createElement('img');
        //设置时间背景来源
        lifebar.src = "./img/images/lifeBar.png";
        //设置图片的位置
        lifebar.style.position = "absolute";
        lifebar.style.top = lifebarTop+"px";
        lifebar.style.left = lifebarLeft+"px";
        //设置图片大小
        lifebar.style.width = lifebarW+"px";
        lifebar.style.height = lifebarH+"px";
        box.appendChild(lifebar);
    }

    this.callBack;
    this.addTimeListener=function (call) {
        this.callBack=call;
    }

    this.run = function (items) {
        if(isOver)
            return;
        lifebarW = lifebarW-1+items.timeW;
        items.timeW = 0;
        if(lifebarW>=95) {
            lifebarW = 95;
        }
        if((lifebarW<=0)) {
            isOver=true;
            this.callBack();
            lifebar.style.display = "none";
        }
        else
            lifebar.style.width = lifebarW+"px";
    }

    this.resetTimeView=function () {
        lifebar.style.display="";
        lifebarW = 95;
        isOver=false;
    }
}