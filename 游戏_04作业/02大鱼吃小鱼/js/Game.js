function Game() {
    var game;
    var map;
    var player;
    var fish1;
    var fishes1 = new Set;
    var fish2;
    var fishes2 = new Set;
    var scoreBoard;
    var score = 0;
    var lost = 0;
    var startButton;
    var start = false;
    var gameover;
    var resetButton;
    var bullet;
    var bullets = new Set;
    var index = 0;

    //游戏准备
    var GAME_READY=0;
    //游戏运行
    var GAME_RUN=GAME_READY+1;

    //游戏状态
    var state=GAME_READY;

    //时间的概念
    var time=0;
    this.init = function () {
        //1,创建显示的视图
        this.initView();
    };
    this.initView=function () {
        //1，创建游戏盒子
        this.initGame();
        //2,创建分数视图
        this.initScore();
        //3，初始化[开始游戏]按钮
        this.initButton();
        //4,初始化游戏地图
        this.initMap();
        //6,初始化游戏主角
        this.initPlayer();
    }

    this.initGame = function () {
        //1,游戏盒子
        game = document.createElement('div');
        //2,设置id
        game.setAttribute("id", "box");
        //3,创建div，通过当前的div获得鼠标事件
        const overlay = document.createElement('div');
        //4,设置他的id
        overlay.setAttribute("id", "overlay");
        //5,添加到游戏盒子
        game.appendChild(overlay);
        document.body.appendChild(game);
    };

    this.initScore=function () {
        //创建分数视图
        scoreBoard = document.createElement('span');
        //设置分数的id
        scoreBoard.setAttribute("id", "score");
        //设置内容
        scoreBoard.innerHTML = "得分：" + score + "分";
        //添加到游戏盒子
        game.appendChild(scoreBoard);
    }


    //初始化[开始游戏]按钮
    this.initButton = function () {
        startButton = document.createElement('button');
        startButton.setAttribute("id", "start");
        startButton.onclick = function () {
            startButton.style.display = "none";
            player.init();
            state = GAME_RUN;
            game.style.cursor = "none";
        };
        game.appendChild(startButton);
        var span = document.createElement('span');
        span.innerHTML = "开始游戏";
        startButton.appendChild(span);
    };

    this.initMap=function () {
        map = new Map();
        map.init();
    }

    this.initPlayer=function () {
        player = new Player();
    }
    
    this.run=function() {
        switch(state){
            case GAME_READY:
                break;
            case GAME_RUN:
                time++;
                if(time%50==0)
                    this.createFish();

                const mx = player.playerX;
                const my = player.playerY;
                //可以吃的鱼的业务逻辑
                this.eatFishLogic(mx,my);
                //可以吃我的鱼的业务逻辑
                this.eatMineLogic(mx,my);
                //子弹的逻辑
                this.bulletLogic();
                break;
        }
    }
    
    this.eatFishLogic=function (mx,my) {

        fishes1.forEach(function ( fishes) {
            if (fishes.move()) {
                fishes.rem();
                fishes1.delete( fishes);
                lost += 1;
                scoreBoard.innerHTML = "得分：" + (score - lost) + "分";
                return
            }
            const tx = fishes.fish1X;
            const ty = fishes.fish1Y;


            if(fishes.collision(mx,my)){
                fishes.rem();
                fishes1.delete(fishes);
                score += 10;
                scoreBoard.innerHTML = "得分：" + (score - lost) + "分";
            }
        });
    }
    
    this.eatMineLogic=function (mx,my) {
        fishes2.forEach(x => {
            const tx = x.fish2X;
            const ty = x.fish2Y;
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 500) {
                start = false;
                this.gameOver();
            }
            if ((mx - tx) ** 2 + (my - ty) ** 2 < 50000) {
                x.chase(mx, my);
            } else {
                x.move();
            }
        });

        if ((score + 110) % 100 == 0) {
            fish2 = new Fish2();
            fish2.init(game);
            fishes2.add(fish2);
            score += 10;
            index++
        }
    }

    this.bulletLogic=function () {
        if (index == 3) {
            bullet = new Bullet(player);
            bullet.init(game);
            bullets.add(bullet);
            index = 0;
        }

        bullets.forEach(x => {
            const bx = x.bulletX;
            const by = x.bulletY;
            if (x.move()) {
                x.rem();
                bullets.delete(x);
                return
            }
            fishes2.forEach(x => {
                x.move();
                const tx = x.fish2X;
                const ty = x.fish2Y;
                if ((bx - tx) ** 2 + (by - ty) ** 2 < 1000) {
                    x.rem();
                    fishes2.delete(x);
                }
            })
        })
    }
    this.createFish=function() {
        fish1 = new Fish1();
        fish1.init(game);
        fishes1.add(fish1);
    }

    this.gameOver = function () {
        gameover = document.createElement('div');
        gameover.setAttribute('id', 'over');
        gameover.innerHTML = "GAME　OVER" + "<br>" + "得分：" + (score - lost) + "分";
        game.appendChild(gameover);
        resetButton = document.createElement('button');
        resetButton.setAttribute('id', 'reset');
        resetButton.innerHTML = "吃不下了";
        resetButton.onclick = function () {
            location.reload();
        };
        resetButton.onmouseover = function () {
            resetButton.innerHTML = "再吃一口！";
        };
        resetButton.onmouseleave = function () {
            resetButton.innerHTML = "吃不下了";
        }
        game.appendChild(resetButton);
    };



}