window.onload=function () {
    var canvas = document.querySelector("canvas");
    var cobj = canvas.getContext("2d");
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var run= document.querySelectorAll(".run");
    var jump= document.querySelectorAll(".jump");
    var finder=document.querySelectorAll(".finder");
    var zhi=document.querySelectorAll(".zhi");
    var lif=document.querySelector(".pres")
    var jifen=document.querySelector(".jifen")
    var runa=document.querySelector(".runa")
    var hita=document.querySelector(".hita")
    var zidana=document.querySelector(".zidana")
    var jumpa=document.querySelector(".jumpa")
    canvas.width = w;
    canvas.height = h;
    var gameobj = new game(canvas, cobj, run,jump,finder,zhi,lif,jifen,runa,hita,zidana,jumpa);
    // 开始按钮
    var strat=$(".start");
    var zhezhao=$(".zhezhao");
    var stratbtn=$(".btnst");
    stratbtn.one("click",function () {
        gameobj.play(strat,zhezhao);
    })
}