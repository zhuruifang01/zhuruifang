function person(canvas,cobj,run,jump) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.run=run;
    this.jump=jump;
    this.x=0;
    this.y=480;
    this.width=110;
    this.height=110;
    this.speedx=6;
    this.status="run";
    this.state=0;
    this.num=0;
    this.life=3;

}
person.prototype={
    draw:function () {
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.drawImage(this[this.status][this.state],0,0,220,220,0,0,this.width,this.height);
        this.cobj.restore();

    },
    update:function () {
        this.x+=this.speedx;
    }

}


// 障碍物
function finder(canvas,cobj,finder) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.finder=finder;
    this.x=this.canvas.width-20;
    this.y=520;
    this.width=70;
    this.height=70;
    this.state=0 ;
}
finder.prototype={
    draw:function () {
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.drawImage(this.finder[this.state],0,0,200,200,0,0,this.width,this.height);
        this.cobj.restore();
    }
}

// 子弹
function zidan(canvas,cobj,zhi) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.zhi=zhi;
    this.x=0;
    this.y=0;
    this.width=80;
    this.height=80;
    this.color="green";
    this.speedx=5;
    this.jia=1;
    this.state=0;
}
zidan.prototype = {
    draw:function () {
        // var cobj=this.cobj;
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.drawImage(this.zhi[this.state],0,0,400,400,0,0,this.width,this.height);
        this.cobj.restore();
    }
}

// xue
function lizi(canvas,cobj,person) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.x=person.x+person.width/2;
    this.y=person.y+person.height/2;
    this.r=1+2*Math.random();
    this.sheepx=6*Math.random()-3;
    this.sheepy=6*Math.random()-3;
    this.zhongli=0.3;
    this.sheepr=0.1;
    this.color="red";
}
lizi.prototype={
    draw:function () {
        var cobj=this.cobj;
        cobj.save();
        cobj.beginPath();
        cobj.translate(this.x,this.y);
        cobj.fillStyle=this.color;
        cobj.arc(0,0,this.r,0,2*Math.PI);
        cobj.fill();
        cobj.restore();
    },
    update:function () {
        this.x+=this.sheepx;
        this.sheepy+=this.zhongli;
        this.y+=this.sheepy;
        this.r-=this.sheepr;
    }
}
function xue(canvas,cobj,person) {
    var arr=[];
    for(var i=0;i<30;i++){
        var obj=new lizi(canvas,cobj,person)
        arr.push(obj);
    }
    var t=setInterval(function () {
        for(var i=0;i<arr.length;i++){
            arr[i].draw();
            arr[i].update();
            if(arr[i].r<0){
                arr.splice(i,1)
            }
        }
        if(arr.length==0){
            clearInterval(t)
        }
    },40)
}


// 游戏主类
function game(canvas,cobj,run,jump,finder,zhi,lif,jifen,runa,hita,zidana,jumpa) {
    this.canvas=canvas;
    this.cobj=cobj;
    this.finder=finder;
    this.lif=lif;
    this.jifen=jifen;
    this.runa=runa;
    this.hita=hita;
    this.jumpa=jumpa;
    this.zidana=zidana;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.num=0;
    this.back=0;
    this.backspeed=6;
    this.score=0;//积分
    this.person=new person(canvas,cobj,run,jump);
    this.finderarr=[];
    this.isfire=false;
    this.flag=true;
    this.zidan=new zidan(canvas,cobj,zhi);
    this.num=0;
    this.rand=(4+Math.ceil(6*Math.random()))*1000;
    this.isrun=false;
 // 速度加快
    this.current=0;
    this.step=1;
    this.stepsteep=2;
    // move
    this.ts={};
    this.num=0;
    this.num1=0;
    this.top=0;
    this.num2=0;
    //move2
    this.flag=true;
    this.init=0;
    this.speeda=5;
    this.r=100;
    this.y1=this.person.y;

}
game.prototype= {
    play:function (strat,zhezhao) {
        strat.css("animation","strat1 2s ease forwards");
        zhezhao.css("animation","zhezhao1 2s ease forwards");
        this.run();
        this.key();
        this.mouse();
    },
    run:function () {
        this.name=prompt("请输入姓名","perte")
        var that=this;
        that.ts.t1=setInterval(function () {
        that.move()
        },50)
    },
    move:function () {
        var that=this
        that.runa.play();
        that.num++;
        that.num1+=6;
        that.num2+=50;
        that.cobj.clearRect(0,0,that.width,that.height);
        // that.person.num1++;
        if(that.person.status=="run"){
            that.person.state=that.num%8;
        }else{
            that.person.state=0;
        }
        //人物的x发生变化,
        that.person.x+=that.person.speedx;
        if(that.person.x>that.width/3){
            that.person.x=that.width/3;
        }
        that.person.draw();
        //操作障碍物
        if( that.num2%that.rand==0){
            that.num2=0;
            // 障碍物出现的时间
            var obj=new finder(that.canvas,that.cobj,that.finder);
            obj.state=Math.floor(Math.random()*that.finder.length);
            that.finderarr.push(obj);
        }
        for(var i=0;i<that.finderarr.length;i++){
            that.finderarr[i].x-=that.backspeed;
            that.finderarr[i].draw();
            // 人碰到障碍物
            if(hitPix(that.canvas,that.cobj,that.person,that.finderarr[i])){
                if(!that.finderarr[i].flag){
                    xue(that.canvas,that.cobj,that.person);
                    that.person.life--;
                    // that.hita.play();
                    // 碰撞声音
                    that.lif.style.width=100-(that.person.life)*33+"%";
                    if(that.person.life==0){
                        that.lif.style.width=100+"%";
                        // 排名榜
                        var messages=localStorage.messages?JSON.parse(localStorage.messages):[];
                        var temp={name:that.name,score:that.score};
                        // 排序
                        messages.sort(function (a,b) {
                            return a.score<b.score;
                        })
                        if(messages.length>0){
                            if(temp.score>messages[messages.length-1].score){
                                if(messages.length==5){
                                    messages[messages.length-1]=temp;
                                }else if(messages.length<5){
                                    messages.push(temp);
                                }
                            }
                        }else{
                            messages.push(temp);
                        }

                        localStorage.messages=JSON.stringify(messages);
                        // location.reload();
                        that.over();
                    }
                    that.finderarr[i].flag=true;
                }
            }
            if(that.person.x>that.finderarr[i].x+that.finderarr[i].width){
                if(!that.finderarr[i].flag&&!that.finderarr[i].flag1){
                    that.score++;
                    that.jifen.innerHTML=that.score;
                    that.finderarr[i].flag1=true;
                }
            }
            // 子弹碰到障碍物
            if(hitPix(that.canvas,that.cobj,that.zidan,that.finderarr[i])){
                if(!that.finderarr[i].flag){
                    that.finderarr.splice(i,1)
                    that.score++;
                    // 速度加快
                    that.current++;
                    if(that.current%that.step==0){
                        that.backspeed+=1;
                        that.current=0;
                        that.step+=that.stepsteep;
                    }
                    that.jifen.innerHTML=that.score;
                    // that.finderarr[i].flag=true;
                }
            }
        }

        // 操作子弹
        if(that.isfire){
            that.zidan.speedx+=that.zidan.jia;
            that.zidan.x+=that.zidan.speedx;
            that.zidan.draw();
        }

        // 背景图
        that.back-=that.backspeed;
        that.canvas.style.backgroundPositionX=that.back+"px";
    },
    key:function () {
        var that=this;
        // var flag=true;
        document.onkeydown=function (e) {
       if(e.keyCode==38){
           if(!that.isrun){
               for(var i in that.ts){
                   clearInterval(that.ts[i]);
                   that.runa.pause();
               }
               that.isrun=true;
           }else if(that.isrun){
               that.ts.t1=setInterval(function(){
                   that.move();
               },50);
               if(!that.flag){
                   clearInterval(that.ts.t2);
                   that.ts.t2=setInterval(function(){
                       that.move2();
                   },50); 
               }
               that.isrun=false;
           }
       }else if(e.keyCode==32){
                if(!that.flag){
                    return;
                }
                that.flag=false;
                that.runa.pause();
                that.jumpa.play();
                that.person.status="jump";
                // 角度
                // var init=0;
                // var speeda=5;
                // var r=100;
                // var y=that.person.y;
                that.ts.t2=setInterval(function () {    
                    that.move2();
                    
                },50)
            }
        }
    },
    move2:function () {
        var that=this;
            // that.person.status="jump";
            that.init+=that.speeda;
        var top=Math.sin(that.init*Math.PI/180)*that.r;
            if(that.init>180){
                clearInterval(that.ts.t2);
                that.runa.play();
                that.person.status="run";
                that.person.y=that.y1;
                that.flag=true
                that.init=0;
            }else{
                that.person.y=that.y1-top;
            }
    },
    mouse:function () {
        var that=this;
        document.querySelector(".zhezhao").onclick=function () {
            that.zidana.play();
            that.zidan.x=that.person.x+that.person.y/2;
            that.zidan.y=that.person.y+that.person.height/3;
            that.zidan.speedx=10;
            that.isfire=true;
        }
    },
    over:function(){
        for(var i in this.ts){
            clearInterval(this.ts[i]);  //关闭所有的计时器
        }
        var over=document.querySelector(".over");
        over.style.animation="strat 2s ease forwards";
        this.runa.pause();
        //记录分数
        var scoreEle=document.querySelector(".scoreEle");
        scoreEle.innerHTML=this.score;
        var lis=document.querySelector(".over ul");
        var messages=localStorage.messages?JSON.parse(localStorage.messages):[];
        var str="";
        for (var i = 0; i < messages.length; i++) {
            str+="<li>"+messages[i].name+"："+messages[i].score;
        }
        lis.innerHTML=str;
        this.again();
    },
    again:function(){
        var that=this;
        var btn1=document.querySelector(".again");
        btn1.onclick=function(){
            var over=document.querySelector(".over");
            over.style.animation="strat1 2s ease forwards";
            that.person.x=0;
            that.person.y=480;
            that.score=0;
            that.person.life=3;
            that.finderarr=[];;
            that.init=0;
            that.y1=that.person.y;
            that.jifen.innerHTML=that.score;
            that.lif.style.width=0;
            // that.lif.style.background="green";
            that.run();
            btn1.onclick=null;
        }
    }
}