function Items() {
    this.state = [];
    var that;
    //存储图片数组
    var items = [];
    var itemsall = [];
    //存储图片种类的数量
    this.animal = 0;
    this.clock = 0;
    this.clothe = 0;
    this.cup = 0;
    this.fruit = 0;
    this.letter = 0;
    this.money = 0;
    this.number = 0;
    this.people = 0;
    this.plant = 0;
    this.plate = 0;
    this.umbrella = 0;
    this.vehicle = 0;

    this.timeW = 0;
    var lengthrandom;
    var lengthrandom2;

    //设置图片的大小
    var width;
    var heigth;

    //创建图片元素
    var img;
    //图片的位置
    var left;
    var top;

    var length2;

    var animals = ['./img/animal/animal.png','./img/animal/animal1.png','./img/animal/animal2.png','./img/animal/animal3.png','./img/animal/animal4.png','./img/animal/animal5.png','./img/animal/animal6.png','./img/animal/animal7.png','./img/animal/animal8.png','./img/animal/animal9.png'];

    var clocks = ['./img/clock/clock.png','./img/clock/clock1.png','./img/clock/clock2.png','./img/clock/clock3.png','./img/clock/clock4.png','./img/clock/clock5.png','./img/clock/clock6.png','./img/clock/clock7.png','./img/clock/clock8.png','./img/clock/clock9.png'];
    var clothes = ['./img/clothe/clothe.png','./img/clothe/clothe1.png','./img/clothe/clothe2.png','./img/clothe/clothe3.png','./img/clothe/clothe4.png','./img/clothe/clothe5.png','./img/clothe/clothe6.png','./img/clothe/clothe7.png','./img/clothe/clothe8.png','./img/clothe/clothe9.png'];
    var cups = ['./img/cup/cup.png','./img/cup/cup1.png','./img/cup/cup2.png','./img/cup/cup3.png','./img/cup/cup4.png','./img/cup/cup5.png','./img/cup/cup6.png','./img/cup/cup7.png','./img/cup/cup8.png','./img/cup/cup9.png'];
    var fruits = ['./img/fruit/fruit.png','./img/fruit/fruit1.png','./img/fruit/fruit2.png','./img/fruit/fruit3.png','./img/fruit/fruit4.png','./img/fruit/fruit5.png','./img/fruit/fruit6.png','./img/fruit/fruit7.png','./img/fruit/fruit8.png','./img/fruit/fruit9.png'];
    var letters = ['./img/letter/letter.png','./img/letter/letter1.png','./img/letter/letter2.png','./img/letter/letter3.png','./img/letter/letter4.png','./img/letter/letter5.png','./img/letter/letter6.png','./img/letter/letter7.png','./img/letter/letter8.png','./img/letter/letter9.png'];
    var moneys = ['./img/money/money.png','./img/money/money1.png','./img/money/money2.png','./img/money/money3.png','./img/money/money4.png','./img/money/money5.png','./img/money/money6.png','./img/money/money7.png','./img/money/money8.png','./img/money/money9.png'];
    var numbers = ['./img/number/number.png','./img/number/number1.png','./img/number/number2.png','./img/number/number3.png','./img/number/number4.png','./img/number/number5.png','./img/number/number6.png','./img/number/number7.png','./img/number/number8.png','./img/number/number9.png'];
    var peoples = ['./img/people/people.png','./img/people/people1.png','./img/people/people2.png','./img/people/people3.png','./img/people/people4.png','./img/people/people5.png','./img/people/people6.png','./img/people/people7.png','./img/people/people8.png','./img/people/people9.png'];
    var plants = ['./img/plant/plant.png','./img/plant/plant1.png','./img/plant/plant2.png','./img/plant/plant3.png','./img/plant/plant4.png','./img/plant/plant5.png','./img/plant/plant6.png','./img/plant/plant7.png','./img/plant/plant8.png','./img/plant/plant9.png'];
    var plates = ['./img/plate/plate.png','./img/plate/plate1.png','./img/plate/plate2.png','./img/plate/plate3.png','./img/plate/plate4.png','./img/plate/plate5.png','./img/plate/plate6.png','./img/plate/plate7.png','./img/plate/plate8.png','./img/plate/plate9.png'];
    var umbrellas = ['./img/umbrella/umbrella.png','./img/umbrella/umbrella1.png','./img/umbrella/umbrella2.png','./img/umbrella/umbrella3.png','./img/umbrella/umbrella4.png','./img/umbrella/umbrella5.png','./img/umbrella/umbrella6.png','./img/umbrella/umbrella7.png','./img/umbrella/umbrella8.png','./img/umbrella/umbrella9.png'];
    var vehicles = ['./img/vehicle/vehicle.png','./img/vehicle/vehicle1.png','./img/vehicle/vehicle2.png','./img/vehicle/vehicle3.png','./img/vehicle/vehicle4.png','./img/vehicle/vehicle5.png','./img/vehicle/vehicle6.png','./img/vehicle/vehicle7.png','./img/vehicle/vehicle8.png','./img/vehicle/vehicle9.png'];

    this.init = function () {
        that = this;
        //创建图片元素
        this.CreateImg();
        document.onclick = this.onClick;
    }

    this.randomPicture = function () {
        //随机图片来源的下标
        lengthrandom = Math.floor(Math.random() * length);
        lengthrandom2 = Math.floor(Math.random() * length2);

        //创建图片元素
        img = new Image();
        //设置图片的来源
        img.src = all[lengthrandom][lengthrandom2];
        var itemsX;
        var itemsY;
        //设置图片的位置坐标
        itemsX = Math.floor(Math.random() * 11);
        itemsY = Math.floor(Math.random() * 7);


        switch (itemsXY[itemsX][itemsY]) {
            case 0:
                if (lengthrandom == 0) {
                    this.animal++;
                }
                else if (lengthrandom == 1) {
                    this.clock++;
                }
                else if (lengthrandom == 2) {
                    this.clothe++;
                }
                else if (lengthrandom == 3) {
                    this.cup++;
                }
                else if (lengthrandom == 4) {
                    this.fruit++;
                }
                else if (lengthrandom == 5) {
                    this.letter++;
                }
                else if (lengthrandom == 6) {
                    this.money++;
                }
                else if (lengthrandom == 7) {
                    this.number++;
                }
                else if (lengthrandom == 8) {
                    this.people++;
                }
                else if (lengthrandom == 9) {
                    this.plant++;
                }
                else if (lengthrandom == 10) {
                    this.plate++;
                }
                else if (lengthrandom == 11) {
                    this.umbrella++;
                }
                else if (lengthrandom == 12) {
                    this.vehicle++;
                }
                itemsXY[itemsX][itemsY] = 1;
                //随机图片的大小
                width = 40 + Math.floor(Math.random() * 20);
                heigth = width;
                //设置图片坐标
                left = itemsPos[0].left + 80 * itemsX;
                top = itemsPos[0].top + 70 * itemsY;
                items = {img1: img, itemsX1: left, itemsY1: top, Width: width, Heigth: heigth};
                itemsall.push(items);
                break;
            case 1:
                break;
        }

    }

    var itemsPos;
    var all;
    var itemsXY;
    var length;
    this.CreateImg = function () {
        //图片位置
        itemsPos = [
            {left:10,top:10+Math.floor(Math.random()*20)}];

        //将不同种类的图片放到数组，构成二维数组
        all = [animals,clocks,clothes,cups,fruits,letters,moneys,numbers,peoples,plants,plates,umbrellas,vehicles];

        //创建二维数组，存储图片
        itemsXY = [] ;
        for(var i=0;i<11;i++) {
            itemsXY[i] = [];
        }
        for(var i=0;i<11;i++) {
            for(var j=0;j<7;j++) {
                itemsXY[i][j] = 0;
            }
        }

        //获得图片二维数组的长度
        length = all.length;


        for(var i=0;i<length;i++){
            var arrayData=all[i];
            //3,获得每个数组的长度
            length2=arrayData.length;
        }
        //随机图片的下标

        for(var i=0;i<77;i++) {
            this.randomPicture();
        }
    }

    var W = document.body.clientWidth;
    var W1 = (W - 900)/2;
    this.onClick = function (ev) {
        var X = ev.clientX - W1 + 40.5;
        var Y = ev.clientY - 40;
        itemsall.forEach(function (item) {
            lengthrandom = Math.floor(Math.random() * length);
            lengthrandom2 = Math.floor(Math.random() * length2);
            if (item.itemsX1 < X && (item.itemsX1 + width) > X && Y > item.itemsY1 && Y < (item.itemsY1 + heigth)) {
                for (var j = 0; j < 3; j++) {
                    switch (that.state[j]) {
                        case 0:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(animals[i])) {
                                    that.animal--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                    console.log(that.timeW);
                                }
                            }
                            break;
                        case 1:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(clocks[i])) {
                                    that.clock--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 2:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(clothes[i])) {
                                    that.clothe--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 3:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(cups[i])) {
                                    that.cup--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 4:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(fruits[i])) {
                                    that.fruit--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 5:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(letters[i])) {
                                    that.letter--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 6:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(moneys[i])) {
                                    that.money--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 7:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(numbers[i])) {
                                    that.number--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 8:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(peoples[i])) {
                                    that.people--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 9:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(plants[i])) {
                                    that.plant--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 10:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(plates[i])) {
                                    that.plate--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 11:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(umbrellas[i])) {
                                    that.umbrella--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                        case 12:
                            for (var i = 0; i < length2; i++) {
                                if (item.img1.src.match(vehicles[i])) {
                                    that.vehicle--;
                                    item.img1.src = all[lengthrandom][lengthrandom2];
                                    that.timeW = 2;
                                }
                            }
                            break;
                    }
                }
            }
        })
    }

    this.run = function (paint) {
        itemsall.forEach(function (item) {
            paint.drawImage(item.img1,item.itemsX1,item.itemsY1,item.Width,item.Heigth);
        })
    }
}