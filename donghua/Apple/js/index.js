$(function(){
// 1.小屏 menu的下拉子导航 宽度=屏框
$(window).resize(function(){
   var clientW=$(window).width();
   var clientH=$(window).height();
   $(".son").css({
     width:clientW,
     height:clientH
    });
})
//点击,子菜单显示/隐藏
  $(".menu").click(function(){
  	$(".son").slideToggle(500);
  }
  	);
// 2.轮播
  var currentNum=0;  //当前页
  var nextNum=0;    //下一页
  var currentTime=0;
  var flag=true;
  var t1=setInterval(move,3000);
  function move(){
  	 nextNum++;
  	 if(nextNum==3){
  	 	nextNum=0;
        flag=false;
  	  }
  	 $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
  	 $(".list:eq("+nextNum+")").animate({left:0},function(){
  	 	    $(".list:eq("+currentNum+")").css({
  	 	     left:"100%",width:"100%",height:"100%"
  	 	     })
         currentNum=nextNum;
         currentTime=0;
         flag=true;
  	 	}).css("zIndex",1);
  }
  // 进度条
   var t2=setInterval(move1,50);
   function move1(){
   	   currentTime+=50;
   	   var bili=currentTime/3000;
   	   if(bili>1){
   	   	   bili=1;
   	   	}
   	   $(".progress").eq(currentNum).css({width:bili*100+"%"})
   	   if(flag===false){
   	   	   $(".progress").css("width",0)
       }
    }
  //关闭屏幕进度停止 打开继续
    $(window).focus(function(){
    	t1=setInterval(move,3000);
    	t2=setInterval(move1,50);
    });
    $(window).blur(function(){
    	clearInterval(t1);
    	clearInterval(t2);
    });
  // 点击进度条
    $(".btns-list").click(function(){
    	nextNum=$(this).index(".btns-list");
    	stop();
    });
  //左右点击按钮
    $(".leftbtn").click(function(){
    	nextNum--;
    	if(nextNum==-1){
    		nextNum=2;
    	}
    	stop();
    });
    $(".rightbtn").click(function(){
    	nextNum++;
    	if(nextNum==3){
    		nextNum=0;
    	}
    	stop();
    });

	    function stop(){
	      /*关掉自动轮播*/
	       clearInterval(t1);
	       clearInterval(t2);
	      /*按钮 进度条变化*/
	       $(".btns-list").find(".progress").css("width",0);
	       $(".btns-list").eq(nextNum).find(".progress").css("width","100%");
           /*轮播图发生变化*/
           if(nextNum>currentNum){
           	 $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
           	 $(".list:eq("+nextNum+")").animate({left:0},function(){
           	 	$(".list:eq("+currentNum+")").css({
           	 		left:"100%",width:"100%",height:"100%" })
           	 	currentNum=nextNum;
           	 }).css("zIndex",1);
           }else{
            $(".list:eq("+currentNum+")").animate({left:"100%"}).css("zIndex",1);
            $(".list:eq("+nextNum+")").css({width:"80%",height:"80%",left:0}).animate({width:"100%",height:"100%"},function(){
            	   currentNum=nextNum;
            })

           }
	    }
  //鼠标指向左右停止轮播 离开开启
    $(".leftbtn").mouseover(function(){
  	  clearInterval(t1);
  	  clearInterval(t2);
    });
    $(".rightbtn").mouseover(function(){
  	  clearInterval(t1);
  	  clearInterval(t2);
    });
    $(".leftbtn").mouseout(function(){
  	  t1=setInterval(move,3000);
  	  t2=setInterval(move1,50);
    });
    $(".rightbtn").mouseout(function(){
  	  t1=setInterval(move,3000);
  	  t2=setInterval(move1,50);
    });
//3.小屏 底部
  $(".footpar").click(function(){
     var index=$(this).index(".footpar");
     $(".footson").eq(index).slideToggle(500);
     $(".footright1").eq(index).slideToggle(500);
     $(".footright2").eq(index).slideToggle(500);
     // alert($(".footright").length);
  });
});
