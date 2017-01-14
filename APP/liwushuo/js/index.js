$(function(){
//iscroll:	
	var myScroll;
    function loaded () {
		myScroll = new IScroll('#wrapper', { //可以滑动
			mouseWheel:true,
			scrollbars: true,//滚动条
			bounce:true, //回弹
			click:true
		});
//正在加载		
		myScroll.on("scrollStart",function(){
			if(myScroll.y==myScroll.maxScrollY){
				down();
			}else if(myScroll.y==0){
				up();
			}
		});
		
		var downEle=document.getElementsByClassName("down")[0];
		var upEle=document.getElementsByClassName("up")[0];
		var ul=document.querySelector("ul");
		function down(){
			downEle.style.display="block";
			myScroll.refresh();
			setTimeout(function(){
//				for(var i=0;i<10;i++){
//					$("<li>new:"+i+"</li>").appendTo(ul);
//				}
				downEle.style.display="none";
				myScroll.refresh();
			},2000);
		}
		function up(){
			upEle.style.display="block";
			myScroll.refresh();
			setTimeout(function(){
//				for(var i=0;i<10;i++){
//					$("<li>new:"+i+"</li>").prependTo(ul);
//				}
				upEle.style.display="none";
				myScroll.refresh();
			},2000);
		}
    };
    loaded();
 //头部导航栏
	$(".swiper-wrapper1 .swiper-slide").click(
		function(){
			var index=$(this).index();
			$(".swiper-wrapper1 .swiper-slide a").removeClass("active").eq(index).addClass("active");
		});
 //底部导航栏
    $("#footer a").click(function(){
    	var index=$(this).index();
    	$("#footer a").removeClass("active").eq(index).addClass("active");
    });
//榜单 选项卡
    $("#header .nav div").click(function(){
    	var index=$(this).index();
    	$("#header .nav div").removeClass("active").eq(index).addClass("active");
    	$("#wrapper #scroller ul").removeClass("scrollerbangdan").eq(index).addClass("scrollerbangdan");
    });
//榜单 转载    
    $("#header .logo .zhuang").click(function(){
		$(".zhuangzai").css("display","block");
	});
	$(".quxiao").click(function(){
		$(".zhuangzai").css("display","none");
	});

});
	
