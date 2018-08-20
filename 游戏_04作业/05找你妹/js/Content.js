function Content() {
    //创建数字文本
    var contentnumber = [];
    var content = [];
    var contents = ['动物','闹钟','服装','杯子','水果','字母','钱','数字','人','植物','盘子','雨伞','交通工具'];
    var contents1 = [];
    var contentsthree = [];
    var top = -15;
    var left = 150;
    var items;

    this.init = function (items1) {
        items = items1;
        this.createContent();
    }

    this.createContent = function () {
        var box = document.getElementById('box');
        for(var i=0;i<contents.length;i++) {
            var random=Math.floor(Math.random()*contents.length);
            contentsthree.push(contents[random]);
            contents.splice(random,1);
        }
        console.log(contentsthree[0]+"  "+contentsthree[1]+"  "+contentsthree[2]);
        for(var i=0;i<3;i++) {
            //创建数字文本
            contentnumber[i] = document.createElement("h3");
            //文本颜色
            contentnumber[i].style.color = "#fff";
            //文本位置
            contentnumber[i].style.position = "absolute";

            //创建文本
            content[i] = document.createElement("h3");
            //文本颜色
            content[i].style.color = "#464aff";
            //文本位置
            content[i].style.position = "absolute";
            // document.body.appendChild(content[i]);
            // document.body.appendChild(contentnumber[i]);
            box.appendChild(content[i]);
            box.appendChild(contentnumber[i]);
        }

    }

    this.run = function () {
        for(var i=0;i<3;i++) {
            contents1[i]={content2:contentnumber[i]};
            contents1[i].content2.style.top = top+"px";
            contents1[i].content2.style.left = left+180*(i)-30+"px";
            contents[i]={content1:content[i]};
            contents[i].content1.style.top = top+"px";
            contents[i].content1.style.left = left+180*(i)+"px";
            //文本内容

            if(contentsthree[i]=="动物") {
                items.state[i] = 0;
                if(items.animal<=0)
                    items.animal=0;
                contents1[i].content2.innerHTML = items.animal;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="闹钟") {
                items.state[i] = 1;
                if(items.clock<=0)
                    items.clock=0;
                contents1[i].content2.innerHTML = items.clock;
                contents[i].content1.innerHTML =contentsthree[i];
            }
            else if(contentsthree[i]=="服装") {
                items.state[i] = 2;
                if(items.clothe<=0)
                    items.clothe=0;
                contents1[i].content2.innerHTML = items.clothe;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="杯子") {
                items.state[i] = 3;
                if(items.cup<=0)
                    items.cup=0;
                contents1[i].content2.innerHTML = items.cup;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="水果") {
                items.state[i] = 4;
                if(items.fruit<=0)
                    items.fruit=0;
                contents1[i].content2.innerHTML = items.fruit;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="字母") {
                items.state[i] = 5;
                if(items.letter<=0)
                    items.letter=0;
                contents1[i].content2.innerHTML = items.letter;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="钱") {
                items.state[i] = 6;
                if(items.money<=0)
                    items.money=0;
                contents1[i].content2.innerHTML = items.money;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="数字") {
                items.state[i] = 7;
                if(items.number<=0)
                    items.number=0;
                contents1[i].content2.innerHTML = items.number;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="人") {
                items.state[i] = 8;
                if(items.people<=0)
                    items.people=0;
                contents1[i].content2.innerHTML = items.people;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="植物") {
                items.state[i] = 9;
                if(items.plant<=0)
                    items.plant=0;
                contents1[i].content2.innerHTML = items.plant;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="盘子") {
                items.state[i] = 10;
                if(items.plate<=0)
                    items.plate=0;
                contents1[i].content2.innerHTML = items.plate;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="雨伞") {
                items.state[i] = 11;
                if(items.umbrella<=0)
                    items.umbrella=0;
                contents1[i].content2.innerHTML = items.umbrella;
                contents[i].content1.innerHTML = contentsthree[i];
            }
            else if(contentsthree[i]=="交通工具") {
                items.state[i] = 12;
                if(items.vehicle<=0)
                    items.vehicle=0;
                contents1[i].content2.innerHTML = items.vehicle;
                contents[i].content1.innerHTML = contentsthree[i];
            }
        }

    }

}