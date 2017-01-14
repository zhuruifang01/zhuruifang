window.onload=function(){
	var hwx=$(".hwx");
	var hwc=$(".wechat");
	for(var i=0;i<hwx.length;i++){
		hwx[i].index=i;	
	hwx[i].onmouseover=function(){
      hwc[this.index].style.display="block"
	}
	hwx[i].onmouseout=function(){
      hwc[this.index].style.display="none";
      }
	}


	var hsjyt=$(".hsjyt");
	var hsj=$(".hsj");
	for(var i=0;i<hsjyt.length;i++){
		hsjyt[i].index=i;	
	hsjyt[i].onmouseover=function(){
      hsj[this.index].style.display="block";
	}
	hsjyt[i].onmouseout=function(){
      hsj[this.index].style.display="none";
      }
	}

	var hlist=$(".hlist");
	var wdyt=$(".wdyt");
	for(var i=0;i<wdyt.length;i++){
		wdyt[i].index=i;	
	wdyt[i].onmouseover=function(){
      hlist[this.index].style.display="block";
	}
	wdyt[i].onmouseout=function(){
      hlist[this.index].style.display="none";
      }
	}

	var ssr2=$(".ssr2");
	var ssr3=$(".ssr3");	
	for(var i=0;i<ssr2.length;i++){
		ssr2[i].index=i;
	ssr2[i].onmouseover=function(){
      ssr3[this.index].style.display="block";
	}
	ssr2[i].onmouseout=function(){
      ssr3[this.index].style.display="none";
      }
	}


    var banLB=$(".banLB");
	var blist=$(".blist");	
	for(var i=0;i<banLB.length;i++){
		banLB[i].index=i;
	banLB[i].onmouseover=function(){
      blist[this.index].style.display="block";
	}
	banLB[i].onmouseout=function(){
      blist[this.index].style.display="none";
      }
	}


	
	var banner=$("a",$(".bann")[0]);
	var bann=$("a",$(".banq")[0]);
	var fys=$("a",$(".banfany")[0]);
	var zyfy=$(".bfany")[0];
	var zyfys=$("a",zyfy);
	var a=setInterval(move,2000);
	var flag=true;
	var now=0;
	//var next=0;
	//banner[0].style.opacity=1;
	fys[0].classList.add("hot1");//注意优先级
	animate(banner[0],{opacity:1});
	animate(bann[0],{opacity:1});
	//鼠标移入轮播停止，移除继续
	var center=$(".center")[0];
		center.onmouseover=function(){
			clearInterval(a);
			 animate(zyfys[0],{left:211});
       animate(zyfys[1],{right:200});
		}
		center.onmouseout=function(){
			a=setInterval(move,2000);
			animate(zyfys[0],{left:181});
      animate(zyfys[1],{right:170});
		}

		//点击轮播图  跳页
      for(var i=0;i<fys.length;i++){
    	fys[i].index=i;     	
    	fys[i].onmouseover=function(){ 
    	for(var i=0;i<fys.length;i++) {
    	    animate(banner[i],{opacity:0});
   		    animate(bann[i],{opacity:0});
   		    fys[i].classList.remove("hot1");
    	   }    	
    	animate(banner[this.index],{opacity:1});
        animate(bann[this.index],{opacity:1});
   	    fys[this.index].classList.add("hot1"); 
    	now=this.index;
    	}    		
    }

   function move(){
    now++;
   	if(now==banner.length)now=0;
   	for(i=0;i<banner.length;i++){
   		animate(banner[i],{opacity:0});
   		animate(bann[i],{opacity:0});
   		fys[i].classList.remove("hot1");
      }
      animate(banner[now],{opacity:1});
      animate(bann[now],{opacity:1},function(){
      	flag=true;
      });
   	  fys[now].classList.add("hot1");
   }
    function moveL(){
    now--;
   	if(now<0)now=banner.length-1;
   	for(i=0;i<banner.length;i++){
   		animate(banner[i],{opacity:0});
   		animate(bann[i],{opacity:0});
   		fys[i].classList.remove("hot1");
      }
      animate(banner[now],{opacity:1});
      animate(bann[now],{opacity:1},function(){
      	flag=true;
      });
   	  fys[now].classList.add("hot1");
   }
   
   for(var i=0;i<zyfys.length;i++){
   	if(i==1){
   		zyfys[i].onclick=function(){		   	
    		    if(flag){
    		    move();    		   
    		    flag=false;
    		    }
    	}	  
   	}
   	else{
   		zyfys[i].onclick=function(){		   	
    		    if(flag){
    		    moveL();    		   
    		    flag=false;
    		    }
    	}	  
   	}
   }
	
   


     



//hot下边效果
 var ct=$(".ct");
  var bkhh=$(".bkhh");
  var spands=$(".spands");
  spands[2].style.color="#d00082";
  ct[2].style.borderBottom="4px solid #d00082"  
  for(var i=0;i<ct.length;i++){
    ct[i].index=i;
    ct[i].onmouseover=function(){
      for(var j=0;j<ct.length;j++){
        spands[j].style.color="#fff";
        ct[j].style.borderBottom="4px solid #333"
        bkhh[j].style.display="none";
        }
        ct[this.index].style.borderBottom="4px solid #d00082"
        spands[this.index].style.color="#d00082";
        bkhh[this.index].style.display="block";    
      }
  }
  //下线条
var hBottom=$(".hBottom");
  // alert(hBottom.length);
  for(var i=0;i<hBottom.length-4;i++){
    hBottom[i].qq=i; 
    hBottom[i].onmouseover=function(){
      var lefts=$(".left",hBottom[this.qq])[0];     
      var tops=$(".top",hBottom[this.qq])[0];
      var rights=$(".right",hBottom[this.qq])[0];
      var bottoms=$(".bottom",hBottom[this.qq])[0]; 
      animate(lefts,{height:254}); 
      animate(rights,{height:254});
      animate(tops,{width:214});
      animate(bottoms,{width:214});
    }
    hBottom[i].onmouseout=function(){
      var lefts=$(".left",hBottom[this.qq])[0];
      var tops=$(".top",hBottom[this.qq])[0];
      var rights=$(".right",hBottom[this.qq])[0];
      var bottoms=$(".bottom",hBottom[this.qq])[0]; 
      animate(lefts,{height:0});
      animate(rights,{height:0});
      animate(tops,{width:0});
      animate(bottoms,{width:0});
    }
  }


//专柜同款右边效果
  var rmpp=$(".rmpp");
  var zgtkRB=$(".zgtkRB");
  var spand=$(".spand");
  rmpp[0].classList.add("xs");
  rmpp[1].style.borderBottom="4px solid #d00082";
  spand[1].style.color="#d00082"; 
  for(var i=0;i<rmpp.length;i++){
    rmpp[i].index=i;
    rmpp[i].onmouseover=function(){
      for(var j=0;j<rmpp.length;j++){
        spand[j].style.color="#fff";
        zgtkRB[j].style.display="none";
        rmpp[j].style.borderBottom="4px solid #333";
        }
        rmpp[this.index].style.borderBottom="4px solid #d00082";
        spand[this.index].style.color="#d00082";
        zgtkRB[this.index].style.display="block";
      }
  }
  //右线条
  var zgtkRBt=$(".zgtkRBt");
  // alert(zgtkRBt.length);
  for(var i=0;i<zgtkRBt.length;i++){
    zgtkRBt[i].ww=i; 
    zgtkRBt[i].onmouseover=function(){
      var left=$(".left",zgtkRBt[this.ww])[0];     
      var top=$(".top",zgtkRBt[this.ww])[0];
      var right=$(".right",zgtkRBt[this.ww])[0];
      var bottom=$(".bottom",zgtkRBt[this.ww])[0]; 
      animate(left,{height:250}); 
      // console.log(lefts.height);
      animate(right,{height:250});
      animate(top,{width:200});
      animate(bottom,{width:200});
    }
    zgtkRBt[i].onmouseout=function(){
      var left=$(".left",zgtkRBt[this.ww])[0];
      var top=$(".top",zgtkRBt[this.ww])[0];
      var right=$(".right",zgtkRBt[this.ww])[0];
      var bottom=$(".bottom",zgtkRBt[this.ww])[0]; 
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
  }


  //时尚包包左边效果
  function left0(num){
  var bbLBBox=$(".bbLBBox")[num];
  var ssbbLB=$(".ssbbLB")[num];
  var bbLBBox1=$(".bbLBBox1")[num];
  var bbLB=$(".bbLB",bbLBBox);
  // console.log(bbLB);
  var fzy=$(".zjt",ssbbLB)[0];
  var fyy=$(".yjt",ssbbLB)[0];
  var flag1=true; 
  var aw=parseInt(getStyle(bbLB[0],"width"));
  	// alert(aw);
  var now2=0;
  var next2=0;
  for(var i=0;i<bbLB.length;i++){
     bbLB[i].style.left=aw;
  }
     bbLB[0].style.left=0;

    //初始化
    for(i=0;i<bbLB.length;i++){
    if(i==0){
      continue;
    }else{
      bbLB[i].style.left=aw+"px";
      }
    }
   function moveb(){
    next2++;
    if(next2==bbLB.length)next2=0;    
      animate(bbLB[now2],{left:-aw}) 
      bbLB[next2].style.left=aw+"px";     
      animate(bbLB[next2],{left:0},function(){
      flag1=true;
      });
      now2=next2;
   }
    function movebL(){
    next2--;
    if(next2<0)next2=bbLB.length-1;
      animate(bbLB[now2],{left:aw});
      bbLB[next2].style.left=-aw+"px";        
      animate(bbLB[next2],{left:0},function(){
        flag1=true;
      });
      now2=next2;
   }
  //左翻页右翻页
    fzy.onclick=function(){		   	
    		    if(flag1){
    		    movebL();    		   
    		    flag1=false;
    		    }
    	}	    		
    fyy.onclick=function(){      			    		    
    		    if(flag1){
    		    moveb();
    		    flag1=false;    		   
              }
        }

}
var ssbb=$(".ssbb");
for(i=0;i<ssbb.length;i++)
     left0(i);

   function center0(num){   
    var ssbbCenter=$(".ssbbCenter1")[num];
    var ssbbCT=$(".ssbbCT1")[num];
    var ssbbCTimgs=$("img",ssbbCT);
    // alert(ssbbCTimgs.length);
	var ssbblps=$("div",$(".CT1")[num]);
	var CTzf2=$(".CTzf2",ssbbCenter)[0];
	var CTyf2=$(".CTyf2",ssbbCenter)[0];
	// var b=setInterval(moveb,2000);
	var flag2=true;
	var now2=0;
	var next2=0;
	var bw=parseInt(getStyle(ssbbCTimgs[0],"width"));
	// alert(bw);
	for(var i=0;i<ssbbCTimgs.length;i++){
     ssbblps[i].style.background="#ccc";
	   ssbbCTimgs[i].style.left=bw;
	}
    ssbblps[0].style.background="#c81623";
	   ssbbCTimgs[0].style.left=0;
	//鼠标移入轮播停止，移除继续
	 ssbbCenter.onmouseover=function(){
			// clearInterval(b);
			animate(CTzf2,{left:0});
			animate(CTyf2,{right:0});
		}
		ssbbCenter.onmouseout=function(){
			// b=setInterval(moveb,2000);
			animate(CTzf2,{left:-30});
			animate(CTyf2,{right:-30});
		}

		//点击轮播图  跳页
    //初始化
    for(i=0;i<ssbbCTimgs.length;i++){
    if(i==0){
      continue;
    }else{
      ssbbCTimgs[i].style.left=bw+"px";
      ssbblps[i].style.background="#ccc";
      }
    }
      for(var i=0;i<ssbblps.length;i++){
    	ssbblps[i].index=i;
    	ssbblps[i].onclick=function(){
    	 if(parseInt(getStyle(ssbbCTimgs[next2],"left"))==0){
    	 	if(now2<this.index){
    	        animate(ssbbCTimgs[now2],{left:-bw})      	
    	        animate(ssbbCTimgs[this.index],{left:0});
              ssbblps[now2].style.background="#ccc";
   	          ssbblps[this.index].style.background="#c81623";
            }else if(now2>this.index){
    	        animate(ssbbCTimgs[now2],{left:bw})      	
    	        animate(ssbbCTimgs[this.index],{left:0});
              ssbblps[now2].style.background="#ccc";
   	          ssbblps[this.index].style.background="#c81623";
            }
    	now2=this.index;
    	next2=this.index;
    	}    		
    }
 }
   function moveb(){
    next2++;
   	if(next2==ssbbCTimgs.length)next2=0;   	
      animate(ssbbCTimgs[now2],{left:-bw}) 
      ssbbCTimgs[next2].style.left=bw+"px";    	
      animate(ssbbCTimgs[next2],{left:0},function(){
      flag2=true;
      });
      ssbblps[now2].style.background="#ccc";
   	  ssbblps[next2].style.background="#c81623";
   	  now2=next2;
   }
    function movebL(){
    next2--;
   	if(next2<0)next2=ssbbCTimgs.length-1;
      animate(ssbbCTimgs[now2],{left:bw});
      ssbbCTimgs[next2].style.left=-bw+"px";      	
      animate(ssbbCTimgs[next2],{left:0},function(){
      	flag2=true;
      });
      ssbblps[now2].style.background="#ccc";
   	  ssbblps[next2].style.background="#c81623";
      now2=next2;
   }
   //翻页
   		CTyf2.onclick=function(){		   	
    		    if(flag2){
    		    moveb();    		   
    		    flag2=false;
    		    }
    	}	  
   		CTzf2.onclick=function(){		   	
    		    if(flag2){
    		    movebL();    		   
    		    flag2=false;
    		    }
    	}	  

}
var ssbb=$(".ssbb1");
// alert(ssbb.length);
for(i=0;i<ssbb.length;i++)
     center0(i);


//时尚包包右边效果
  var Rli=$(".Rli");
  // alert(Rli.length);
  for(var i=0;i<Rli.length;i++){
    Rli[i].ww=i; 
    Rli[i].onmouseover=function(){
      var left=$(".left",Rli[this.ww])[0];     
      var top=$(".top",Rli[this.ww])[0];
      var right=$(".right",Rli[this.ww])[0];
      var bottom=$(".bottom",Rli[this.ww])[0]; 
      animate(left,{height:180}); 
      // console.log(lefts.height);
      animate(right,{height:180});
      animate(top,{width:270});
      animate(bottom,{width:270});
    }
    Rli[i].onmouseout=function(){
      var left=$(".left",Rli[this.ww])[0];
      var top=$(".top",Rli[this.ww])[0];
      var right=$(".right",Rli[this.ww])[0];
      var bottom=$(".bottom",Rli[this.ww])[0]; 
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
  }


//右导航
var zdhlc=$(".ydh")[0];
var floor=$(".ssbb");
// alert(floor.length);
var f_lis=$(".ydh0");
var zdh1=$(".ydh1");
var zgtk=$(".zgtk")[0];
var zdh2=$(".box1");
var nows;
// alert(f_lis.length);
var cHeight=document.documentElement.clientHeight;
// alert(cHeight);
var nHeight;
    for(var i=0;i<floor.length;i++){ 
        floor[i].h=floor[i].offsetTop;
    } 
window.onscroll=function(){    
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        var top=obj.scrollTop;
        // alert(top); 
        if(top>=zgtk.offsetTop-200){
          // alert(1);
            zdhlc.style.display="block";
            var nHeight=zdhlc.offsetHeight;
            // var nHeight=parseInt(getStyle(zdhlc,"height"));
            console.log(nHeight);
            zdhlc.style.top=(cHeight-nHeight)/2+"px";
        }
        if((top<=zgtk.offsetTop-200)){
            zdhlc.style.display="none";
        }
    for(var i=0;i<floor.length;i++){
      if(top>=floor[i].h-200){
            for(var j=0;j<f_lis.length;j++){
                zdh1[j].style.display="block";
                zdh2[j].style.display="none";
            }
         // f_lis[i].style.background="red";
         
         zdh1[i].style.display="none";
         zdh2[i].style.display="block";
         nows=i;
     }
  }
  for(var j=0;j<f_lis.length;j++){
    f_lis[j].bb=j;
    f_lis[j].onclick=function(){
        animate(document.body,{scrollTop:floor[this.bb].h},400);
        animate(document.documentElement,{scrollTop:floor[this.bb].h},400);
        f_lis[this.bb].style.background="#d00082";
         zdh1[this.bb].style.display="none";
         zdh2[this.bb].style.display="block";
         zdh2[this.bb].style.color="#fff";
        nows=this.bb;
        // console.log(now,this.bb);        
    }
    f_lis[f_lis.length-1].onclick=function(){
        animate(document.body,{scrollTop:0},400);
        animate(document.documentElement,{scrollTop:0},400);
        f_lis[this.bb].style.background="#d00082";
         zdh1[this.bb].style.display="none";
         zdh2[this.bb].style.display="block";
         zdh2[this.bb].style.color="#fff";
        nows=this.bb;
        // console.log(now,this.bb);        
    }

    f_lis[j].onmouseover=function(){
         f_lis[this.bb].style.background="#d00082";
         zdh1[this.bb].style.display="none";
         zdh2[this.bb].style.display="block";
         zdh2[this.bb].style.color="#fff";

    }
    f_lis[j].onmouseout=function(){
        // console.log(now,this.bb);
        if(this.bb==nows){
          // f_lis[this.bb].style.background="red";
          zdh2[this.bb].style.color="#fff";
          f_lis[this.bb].style.background="#d00082";
          return;
        }
        f_lis[this.bb].style.background="#fff";
        zdh1[this.bb].style.display="block";
        zdh2[this.bb].style.display="none";
    }
  }
}
}