function TimeView() {

    //设置时间图片的宽度
    var timeWidth = 270;
    //图片元素节点
    var timeView;
    this.init=function (game) {
        //添加时间效果
         timeView = document.createElement('img');
        //设置图片
        timeView.src="../img/progress.png";
        //设置图片的位置
        timeView.style.position="absolute";
        timeView.style.left="95px";//95
        timeView.style.top="103px";
        //设置图片的大小
        timeView.style.width=timeWidth+"px";
        timeView.style.height="25px";

        game.appendChild(timeView);
    }
}