function ImgBack() {
    var backimg;
    this.init = function (GameW,GameH) {
        var box = document.getElementById("box");
        //创建背景图片
        backimg = document.createElement('img');
        //设置背景图片的大小
        backimg.style.width = GameW + "px";
        backimg.style.height = GameH + "px";
        //设置背景图片的来源
        backimg.src = "./img/images/background.png";
        //设置游戏盒子的位置
        backimg.style.position="absolute";
        //将背景图片添加到游戏盒子中
        box.appendChild(backimg);
        }
}