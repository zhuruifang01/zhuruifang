window.onload=function(){
   //浏览器宽高
      var scene=document.querySelector(".scene");
      var room=document.querySelector(".room");
      var clientW=document.documentElement.clientWidth;
      var clientH=document.documentElement.clientHeight;
      room.style.transformOrigin="center center "+clientW/2+"px";
   //最后一个面(前面)
      var lastpanel=document.querySelector(".panel:last-child");
      lastpanel.style.transform="translate3d(0,0,"+clientW+"px)";
   //地板 天花板
      var floor=document.querySelector(".panel:first-child");
      var ceil=document.querySelector(".panel:nth-child(5)");
      floor.style.width=ceil.style.width=floor.style.height=ceil.style.height=clientW+"px";
      ceil.style.top=-(clientW-clientH)+"px";
   //点击最后一面(前面)执行
      room.style.transform="rotate3d(0,1,0,180deg)";
      lastpanel.onclick=function(){
         room.style.transition="transform 2s ease";
         room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,0deg)";
      }
   //可随鼠标转动房子
      var angle=0,angle1=0;
      document.onmousedown=function(e){
         var startx= e.clientX;
         var starty= e.clientY;
         document.onmousemove=function(e){
             room.style.transition="none";
             var movex= e.clientX;
             var movey= e.clientY;
             e.preventDefault();
             angle=Math.abs(movex-startx)>Math.abs(movey-starty)?movex-startx:movey-starty;
             room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,"+(angle1+angle)+"deg)";

         }
          document.onmouseup=function(){
              angle1+=angle;
              document.onmousemove=null;
              document.onmouseup=null;
          }
          e.preventDefault();
     }
  //双击有放大效果
    var panels=document.querySelectorAll(".panel");
    var flag=true;
    for(var i=0; i<panels.length; i++){
        if(i<(panels.length-1)){
            panels[i].ondblclick=function(){
                room.style.transition="transform 2s ease";
                if(flag){
                    room.style.transform="translate3d(0,0,200px)";
                    flag=false;
                }else{
                    room.style.transform="translate3d(0,0,-500px)";
                    flag=true;
                }
            }
        }
    }
    //var lefts=document.querySelector(".left");
    //var rights=document.querySelector(".right");
    //var leftsa=document.querySelector(".left-a");
    //var rightsa=document.querySelector(".right-a");
    //if((room.style.transform="translate3d(0,0,200px) rotate3d(0,1,0,"+angle1+"deg)")){
    //    lefts.style.display="none";
    //    rights.style.display="none";
    //    leftsa.style.display="block";
    //    rightsa.style.display="block";
    //}else{
    //    lefts.style.display="block";
    //    rights.style.display="block";
    //    leftsa.style.display="none";
    //    rightsa.style.display="none";
    //}
}
