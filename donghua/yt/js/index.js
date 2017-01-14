 window.onload=function(){
  // 微信
 var weixinbox=$(".weixinbox") ;
 var weixin=$(".weixin");
 weixinbox[0].onmouseover=function(){
 	weixin[0].style.display="block";
 } 
 weixinbox[0].onmouseout=function(){
  weixin[0].style.display="none";
 } 
// 手机银泰
 var sjyt=$(".sjyt") ;
 var sjy=$(".sjy");
 sjyt[0].onmouseover=function(){
  sjy[0].style.display="block";
 } 
  sjyt[0].onmouseout=function(){
  sjy[0].style.display="none";
 } 
 var wdyt=$(".wdyt") ;
 var dixia=$(".dixia");
  wdyt[0].onmouseover=function(){
  dixia[0].style.display="block";
 } 
  wdyt[0].onmouseout=function(){
  dixia[0].style.display="none";
 } 
// 轮播图
  var box=$(".lunbo");
  var yuanxing=$(".fang");
  var imgs=$(".diertu");
  var vai=$(".vai");
  var zuoniu=$(".zuobian");
  var youniu=$(".youbian");
   imgs[0].style.zIndex=10;
   vai[0].style.zIndex=8;
   yuanxing[0].className="fang hot";
    var now=0;
    var t=setInterval(move,2000)
    box[0].onmouseover=function(){
     clearInterval(t);
     zuoniu[0].style.display="block";
     youniu[0].style.display="block";
    }
    box[0].onmouseout=function(){
     t=setInterval(move,2000);
     zuoniu[0].style.display="none";
     youniu[0].style.display="none";
    }
    youniu[0].onclick=function(){
     move();
   }      
    zuoniu[0].onclick=function(){
    now--;
    if(now<0){
      now=imgs.length-1;
    }
    for(var i=0;i<imgs.length;i++){
      animate(imgs[i],{opacity:0});
      animate(vai[i],{opacity:0});
      yuanxing[i].className="fang";
    }
    animate(imgs[now],{opacity:1});
    animate(vai[now],{opacity:1});
    yuanxing[now].className="fang hot";
   }  

    for(var i=0;i<yuanxing.length;i++){
        yuanxing[i].index=i;
        yuanxing[i].onclick=function(){
      for(var i=0;i<imgs.length;i++){
        animate(imgs[i],{opacity:0});
        animate(vai[i],{opacity:0});
        yuanxing[i].className="fang";
        }
      animate(imgs[this.index],{opacity:1});
      animate(vai[this.index],{opacity:1});
      yuanxing[this.index].className="fang hot";
      now=this.index
   }
        
  }
    function move(){
     now++;
     if(now==imgs.length){
      now=0;
    }
    for(var i=0;i<imgs.length;i++){

      animate(imgs[i],{opacity:0});
      animate(vai[i],{opacity:0});
      yuanxing[i].className="fang";
    }
    animate(imgs[now],{opacity:1});
    animate(vai[now],{opacity:1});
    yuanxing[now].className="fang hot";
   } 
 // 竖导航
  var dh1=$(".dh1");
  var qiushangxin=$(".qiushangxin");
  var qiushangxin1=$(".qiushangxin1");
  var qiushangxin2=$(".qiushangxin2");
  var qiushangxin3=$(".qiushangxin3");
  var qiushangxin4=$(".qiushangxin4");
  var qiushangxin5=$(".qiushangxin5");
  var qiushangxin6=$(".qiushangxin6");
  var qiushangxin7=$(".qiushangxin7");
  var qiushangxin8=$(".qiushangxin8");
  var qiushangxin9=$(".qiushangxin9");
    dh1[0].onmouseover=function(){
      qiushangxin[0].style.display="block";
    }
    dh1[0].onmouseout=function(){
      qiushangxin[0].style.display="none";
    }
    dh1[1].onmouseover=function(){
      qiushangxin1[0].style.display="block";
    }
    dh1[1].onmouseout=function(){
      qiushangxin1[0].style.display="none";
    }
    dh1[2].onmouseover=function(){
      qiushangxin2[0].style.display="block";
    }
    dh1[2].onmouseout=function(){
      qiushangxin2[0].style.display="none";
    }
     dh1[3].onmouseover=function(){
      qiushangxin3[0].style.display="block";
    }
    dh1[3].onmouseout=function(){
      qiushangxin3[0].style.display="none";
    }
     dh1[4].onmouseover=function(){
      qiushangxin4[0].style.display="block";
    }
    dh1[4].onmouseout=function(){
      qiushangxin4[0].style.display="none";
    }
     dh1[5].onmouseover=function(){
      qiushangxin5[0].style.display="block";
    }
    dh1[5].onmouseout=function(){
      qiushangxin5[0].style.display="none";
    }
     dh1[6].onmouseover=function(){
      qiushangxin6[0].style.display="block";
    }
    dh1[6].onmouseout=function(){
      qiushangxin6[0].style.display="none";
    }
     dh1[7].onmouseover=function(){
      qiushangxin7[0].style.display="block";
    }
    dh1[7].onmouseout=function(){
      qiushangxin7[0].style.display="none";
    }
     dh1[8].onmouseover=function(){
      qiushangxin8[0].style.display="block";
    }
    dh1[8].onmouseout=function(){
      qiushangxin8[0].style.display="none";
    }
     dh1[9].onmouseover=function(){
      qiushangxin9[0].style.display="block";
    }
    dh1[9].onmouseout=function(){
      qiushangxin9[0].style.display="none";
    }
    // 超值好货
     var shangbq=$(".shangbq");
     var baokuan=$(".baokuan");
     var baokuan1=$(".baokuan1");
     var baokuan2=$(".baokuan2");
     var shangbqa=$(".shangbqa"); 
      shangbq[0].onmouseover=function(){
      baokuan[0].style.display="block";
      baokuan1[0].style.display="none";
      baokuan2[0].style.display="none";
      shangbq[0].style.borderBottom="5px solid #e5004f" ;
      shangbq[1].style.borderBottom="5px solid #333" ;
      shangbq[2].style.borderBottom="5px solid #333" ;
      shangbqa[0].style.fontWeight="bold";
      shangbqa[1].style.fontWeight="normal";
      shangbqa[2].style.fontWeight="normal";
     }
      shangbq[1].onmouseover=function(){
      baokuan1[0].style.display="block";
      baokuan[0].style.display="none";
      baokuan2[0].style.display="none";
      shangbq[1].style.borderBottom="5px solid #e5004f" ;
      shangbq[0].style.borderBottom="5px solid #333" ;
      shangbq[2].style.borderBottom="5px solid #333" ;
      shangbqa[1].style.fontWeight="bold";
      shangbqa[0].style.fontWeight="normal";
      shangbqa[2].style.fontWeight="normal";
 }
      shangbq[2].onmouseover=function(){
      baokuan2[0].style.display="block";
      baokuan[0].style.display="none";
      baokuan1[0].style.display="none";
      shangbq[2].style.borderBottom="5px solid #e5004f" ;
      shangbq[0].style.borderBottom="5px solid #333" ;
      shangbq[1].style.borderBottom="5px solid #333" ;
      shangbqa[2].style.fontWeight="bold";
      shangbqa[1].style.fontWeight="normal";
      shangbqa[0].style.fontWeight="normal";
 }
 // 热门品牌
     var remen=$(".remen");
     var remen1=$(".remen1");
     var yifubox=$(".yifubox");
     var yifubox2=$(".yifubox2");
     var rmpp=$(".rmpp");
      remen[0].onmouseover=function(){
      yifubox[0].style.display="block";
      yifubox2[0].style.display="none";
      remen[0].style.borderBottom="3px solid #e70050";
      remen1[0].style.borderBottom="3px solid #333";
      rmpp[0].style.fontWeight="bold";
      rmpp[1].style.fontWeight="normal";
     }
      remen1[0].onmouseover=function(){
      yifubox2[0].style.display="block";
      yifubox[0].style.display="none";
      remen1[0].style.borderBottom="3px solid #e70050";
      remen[0].style.borderBottom="3px solid #333";
      rmpp[1].style.fontWeight="bold";
      rmpp[0].style.fontWeight="normal";
     }
// 品牌展示
var liebiao2=$(".liebiao2");
for(var i=0;i<liebiao2.length;i++){
  logo(liebiao2[i]);
}
function logo(obj){
  var box1=$(".tudebox",obj);
  var imgs1=$(".liebiao33",obj);
  var zuoniu1=$(".anniuzuo1",obj);
  var youniu1=$(".anniuyou1",obj);
  var mv=parseInt(getStyle(box1[0],"width"));
  for(var i=0;i<imgs1.length;i++){
    if(i==0){
      continue;
    }else{
      imgs1[i].style.left=mv+"px";
    }
    // yuanxing[0].className="yuanxing hot";
  }
  // now 记录当前窗口的图片 next 记录下一张图片
   var now1=0;next1=0;flag1=true;
   // var t1=setInterval(move11,2000);
   // box1[0].onmouseover=function(){
   //    clearInterval(t);
   //    zuoniu[0].style.display="block";
   //    youniu[0].style.display="block";
   //  }
   //  box1[0].onmouseout=function(){
   //    t=setInterval(move,2000);
   //    zuoniu[0].style.display="none";
   //    youniu[0].style.display="none";
   //  }
    youniu1[0].onclick=function(){
      if(flag1){
      move11();

      }flag1=false;
   }      
    zuoniu1[0].onclick=function(){
      if(flag1){
     move12();
     }
     flag1=false;
  } 
  function move11(){
    next1++;
    if(next1==imgs1.length){
      next1=0;
    }
    imgs1[next1].style.left=mv+"px";
    // yuanxing[now].className="yuanxing";
    // yuanxing[next].className="yuanxing hot";
    animate(imgs1[now1],{left:-mv}
    );
    animate(imgs1[next1],{left:0},function(){
       flag1=true;
    });
    now1=next1;
  }
 function move12(){
    next1--;
    if(next1<0){
      next1=imgs1.length-1;
    }
    imgs1[next1].style.left=-mv+"px";
    // yuanxing[now].className="yuanxing";
    // yuanxing[next].className="yuanxing hot";
    animate(imgs1[now1],{left:mv});
    animate(imgs1[next1],{left:0},function(){
      flag1=true;
    });
    now1=next1;
  }
  }
// 小轮播
  var shishang=$(".shishang")
     xiaolunbo(shishang[0]);
     xiaolunbo(shishang[3]);
     xiaolunbo(shishang[4]);
     xiaolunbo(shishang[5]);
     xiaolunbo(shishang[6]);
      xiaolunbo(shishang[7]);
  function xiaolunbo(obj){
  var box2=$(".datuBox",obj);
  var yuanxing2=$(".yuanxing",obj);
  var imgs2=$(".datu1",obj);
  var zuoniu2=$(".Lbutton",obj);
  var youniu2=$(".Rbutton",obj);
  var mv2=parseInt(getStyle(box2[0],"width"));
  for(var i=0;i<imgs2.length;i++){
    if(i==0){
      continue;
    }
    else{
      imgs2[i].style.left=mv2+"px";
    }
    yuanxing2[0].className="yuanxing active";
  }
  // now 记录当前窗口的图片 next 记录下一张图片
   var now2=0;next2=0;flag2=true;
   // var t2=setInterval(move2,2000);
   box2[0].onmouseover=function(){
      // clearInterval(t2);
      zuoniu2[0].style.display="block";
      youniu2[0].style.display="block";
    }
    box2[0].onmouseout=function(){
      // t2=setInterval(move2,2000);
      zuoniu2[0].style.display="none";
      youniu2[0].style.display="none";
    }
    youniu2[0].onclick=function(){
      if(flag2){
      move2();

      }flag2=false;
   }      
    zuoniu2[0].onclick=function(){
      if(flag2){
     move3();
     }
     flag2=false;
  } 
  // (轮播图)选项卡

  for(var i=0;i<yuanxing2.length;i++){
    yuanxing2[i].index=i;
    yuanxing2[i].onclick=function(){
      if(parseInt(getStyle(imgs2[next2],"left"))==0){
    if(now2<this.index){
      imgs2[this.index].style.left=mv2+"px";
      animate(imgs2[now2],{left:-mv2});
      animate(imgs2[this.index],{left:0});
    }else if(now2>this.index){
      imgs2[this.index].style.left=-mv2+"px";
      animate(imgs2[now2],{left:mv2});
      animate(imgs2[this.index],{left:0});
    } else return;
    yuanxing2[now2].className="yuanxing";
    yuanxing2[this.index].className="yuanxing active";
    now2=this.index;
    next2=this.index;
    flag=false;
  }
  }
}
  function move2(){
    next2++;
    if(next2==imgs2.length){
      next2=0;
    }
    imgs2[next2].style.left=mv2+"px";
    yuanxing2[now2].className="yuanxing";
    yuanxing2[next2].className="yuanxing active";
    animate(imgs2[now2],{left:-mv2}
    );
    animate(imgs2[next2],{left:0},function(){
       flag2=true;
    });
    now2=next2;
  }
 function move3(){
    next2--;
    if(next2<0){
      next2=imgs2.length-1;
    }
    imgs2[next2].style.left=-mv2+"px";
    yuanxing2[now2].className="yuanxing";
    yuanxing2[next2].className="yuanxing active";
    animate(imgs2[now2],{left:mv2});
    animate(imgs2[next2],{left:0},function(){
      flag2=true;
    });
    now2=next2;
  }
 }
// 侧导航
  var floor=$(".shishang");
  var navlis=$(".tu1");
  var cetu=$(".image");
  var Cheight=document.documentElement.clientHeight;
  var floornav=$(".shutiao")[0];
  var n;
  for(var i=0;i<floor.length;i++){
    floor[i].h=floor[i].offsetTop;
  }
  window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if(top>=floor[0].h-600){
      floornav.style.display="block";
      var nheight=floornav.offsetHeight;
      floornav.style.top=(Cheight-nheight)/2+"px";
    }
    for(var i=0;i<floor.length;i++){
        if(top>=floor[i].h-200){
         for(var j=0;j<cetu.length;j++){
          cetu[j].style.opacity=1;
        }
      cetu[i].style.opacity=0;
      n=i;
     }
    }
    if(top<floor[0].h-600){
       floornav.style.display="none";
    }
  }
  for(var i=0;i<navlis.length;i++){
    navlis[i].index=i;
    navlis[i].onclick=function(){
      animate(document.body,{scrollTop:floor[this.index].h})
      animate(document.documentElement,{scrollTop:floor[this.index].h})
      n=this.index;
    }
    navlis[i].onmouseover=function(){
      cetu[this.index].style.opacity=0;
    }
    navlis[i].onmouseout=function(){
      if(n==this.index){
        return;
      }
      cetu[this.index].style.opacity=1;
    }
  }
   
    navlis[9].onclick=function(){
    animate(document.body,{scrollTop:0},300)
    animate(document.documentElement,{scrollTop:0},300)
  }
}

    

    

