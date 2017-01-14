$(function(){
// 1.初始化小屏二级导航宽高
 $(window).resize(function(){
	 	var screenW=$(window).width();
	    var screenH=$(window).height();
	    $(".son").css({
	   	    width:screenW,
	   	    height:screenH
	    });
 });

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
	});
//点击bag显示二级导航
   $(".bag").click(function(){
   	  $(".son").slideToggle(500);
   });
// life部分 点击变轮播
   
});