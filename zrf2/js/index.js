$(function(){
		$(".iconfont1").click(function(){
	       $(".small ul").fadeToggle(500);
	       $(".icon-caidan").slideToggle(0);
	       $(".icon-quxiao").slideToggle(0);
	   });
	   $(".small ul li").click(function(){
	   	   $(".small ul").fadeOut(500);
	   	   $(".icon-caidan").fadeIn(0);
	       $(".icon-quxiao").fadeOut(0);
	   });
	   
});
