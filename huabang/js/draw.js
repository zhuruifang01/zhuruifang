//第一个参数是绘制对象  第二个是获取画布
function palette(canvasObj,canvas,canvasCopy){
   this.canvasObj=canvasObj;
   this.canvas=canvas;
   this.canvasCopy=canvasCopy;
   this.width=canvas.width;
   this.height=canvas.height;
   this.style="fill"; 
   this.type="multiAngleStar";
   this.lineWidth=1;
   this.fillStyle="pink";
   this.strokeStyle="#000000";
   // 定义边的数量
   this.bianNum=5;
   //定义角的数量
   this.angleNum=5;
   //保存每次截图的状态，也就是上一次绘制的图形   
   this.statusArr=[];   
}
// init 环境对象的值
palette.prototype.init=function(){
	this.canvasObj.lineWidth=this.lineWidth;
	this.canvasObj.fillStyle=this.fillStyle;
	this.canvasObj.strokeStyle=this.strokeStyle;
}
// 开始进行图形的绘画
palette.prototype.draw=function(){
      var that=this;
    this.canvasCopy.onmousedown=function(e){
      var ev=window.event||e;
      var startX=ev.offsetX;
      var startY=ev.offsetY;
      that.init();
      document.onmousemove=function(e){
      	var ev=window.event||e;
      	var endX=ev.offsetX;
      	var endY=ev.offsetY;
        that.canvasObj.clearRect(0,0,that.width,that.height);
        if(that.statusArr.length>0){
        /*imgData规定要放回画布的 ImageData 对象。putImageData
		x	ImageData 对象左上角的 x 坐标，以像素计。
		y	ImageData 对象左上角的 y 坐标，以像素计。
		dirtyX	可选。水平值（x），以像素计，在画布上放置图像的位置。
		dirtyY	可选。水平值（y），以像素计，在画布上放置图像的位置。
		dirtyWidth	可选。在画布上绘制图像所使用的宽度。
		dirtyHeight*/
        that.canvasObj
        .putImageData(that.statusArr[that.statusArr.length-1],0,0,0,0,that.width,that.height);
        }
        that[that.type](startX,startY,endX,endY);
      }
      document.onmouseup=function(){
      	// that.canvasCopy.onmousedown=null;
        document.onmousemove=null;
      	document.onmouseup=null;
      	that.statusArr.push(that.canvasObj.getImageData(0,0,that.width,that.height));
      }
    }
}
// 画线条
palette.prototype.line=function(x1,y1,x2,y2){
  this.canvasObj.beginPath();
  this.canvasObj.moveTo(x1,y1);
  this.canvasObj.lineTo(x2,y2);
  this.canvasObj.closePath();
  this.canvasObj.stroke();
}
// 画矩形
palette.prototype.rect=function(x1,y1,x2,y2){
  var w=x2-x1;
  var h=y2-y1;
  this.canvasObj.beginPath();
  this.canvasObj.rect(x1,y1,w,h);
  this.canvasObj.closePath();
  this.canvasObj[this.style]();
}
// 画圆形
palette.prototype.circle=function(x1,y1,x2,y2){
  // 通过勾股定理
  var r=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  this.canvasObj.beginPath();
  this.canvasObj.arc(x1,y1,r,0,Math.PI*2,false);
  this.canvasObj.closePath();
  this.canvasObj[this.style]();
}
// 画三角形  直角
palette.prototype.triangle=function(x1,y1,x2,y2){
	this.canvasObj.beginPath();
	this.canvasObj.lineTo(x1,y1);
	this.canvasObj.lineTo(x1,y2);
	this.canvasObj.lineTo(x2,y2);
	this.canvasObj.closePath();
	this.canvasObj[this.style]();
}
// 通过铅笔画图像
palette.prototype.pencil=function(){
   var that=this;
   this.canvasCopy.onmousedown=function(){
   	 that.init();
     that.canvasObj.beginPath();
    document.onmousemove=function(e){
      	var ev=window.event||e;
      	var endX=ev.offsetX;
      	var endY=ev.offsetY;
      	that.canvasObj.lineTo(endX,endY);
        that.canvasObj.stroke();
      }
    document.onmouseup=function(){
      	that.canvasObj.closePath();
        document.onmousemove=null;
        document.onmouseup=null;
        that.statusArr.push(that.canvasObj.getImageData(0,0,that.width,that.height));
      }
   }
}
// 画多边形
palette.prototype.polygon=function(x1,y1,x2,y2){
   // 通过勾股定理  求得半径
  var r=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  var bnum=this.bianNum;
  var angle=360/this.bianNum;
  	this.canvasObj.beginPath();
  for (var i = 0; i < bnum; i++) {
  	this.canvasObj.lineTo(x1+Math.cos(Math.PI/180*angle*i)*r,y1+Math.sin(Math.PI/180*angle*i)*r);
  }
  	this.canvasObj.closePath();
  	this.canvasObj[this.style]();
}
// 画多角星
palette.prototype.multiAngleStar=function(x1,y1,x2,y2){
	 // 通过勾股定理  求得半径
  var r1=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  var r2=r1*0.35;
  var jnum=this.angleNum*2;
  var angle=360/this.angleNum/2;
  this.canvasObj.beginPath();
  for (var i = 0; i < jnum; i++) {
  	if(i%2==0){
  	this.canvasObj.lineTo(x1+Math.cos(Math.PI/180*angle*i)*r1,y1+Math.sin(Math.PI/180*angle*i)*r1);
  	}else{
  	this.canvasObj.lineTo(x1+Math.cos(Math.PI/180*angle*i)*r2,y1+Math.sin(Math.PI/180*angle*i)*r2);	
  	}
  }
  	this.canvasObj.closePath();
  	this.canvasObj[this.style]();
}
//橡皮擦工具
palette.prototype.earser=function(){
   var that=this;
   var earserWidth=30;
   var canvasCopy=document.querySelector(".canvasCopy");
   this.canvasCopy.onmousedown=function(e){
   	var earser=document.createElement("div");
   	earser.style.cssText="width:"+earserWidth+"px;height:"
   	+earserWidth+"px;position:absolute;border:1px solid red";
   	canvasCopy.parentNode.appendChild(earser);
   	document.onmousemove=function(e){
      var ev=window.event||e;
     var moveX=ev.offsetX;
     var moveY=ev.offsetY;
     console.log(moveX-earserWidth/2)
     earser.style.left=moveX-earserWidth/2+30+"px";
     earser.style.top=moveY-earserWidth/2+50+"px";
     that.canvasObj.clearRect(moveX-earserWidth/2,moveY-earserWidth/2,earserWidth,earserWidth);
   	}
   	document.onmouseup=function(){
   		document.onmousemove=null;
   		document.onmouseup=null;
   		canvasCopy.parentNode.removeChild(earser);
     that.statusArr.push(that.canvasObj.getImageData(0,0,that.width,that.height));
   	}
   }
}
