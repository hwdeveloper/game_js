function TimeView() {

    //设置时间图片的宽度
    var width = 270;

    var height = 25;
    //图片元素节点
    var timeView;
    //是否结束
    var isOver=false;

    this.init=function () {
        //添加时间效果
         timeView = new Image();
        //设置图片
         timeView.src="../img/progress.png";

    }

    this.callBack;
    this.addTimeListener=function (call) {
        this.callBack=call;
    }
    
    this.run=function (paint) {
        if(isOver)
            return;
        width=width-3;
        if(width<5){
            isOver=true;
            this.callBack();
        }

        paint.drawImage(timeView,95,103,width,height);
    }
    
    this.resetTimeView=function () {
        timeView.style.display="";
        timeWidth = 270;
        isOver=false;
    }
}