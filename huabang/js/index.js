$(function(){
	var add=$(".add");
	var paletteBox=$(".palette-box");
	var canvasCopy=null;
	var earser=$(".earser");
  var cancel=$(".cancel");
  var save=$(".save");
	var canvas=null;
	add.click(function(){
		canvas=$("<canvas width=800 height=500>");
		canvas.css({
			width:"800px",
			height:"500px",
			border:"3px dotted #000",
			marginTop:"50px",
			marginLeft:"30px",
			background:"#fff"
		});
		canvasCopy=$("<div class='canvasCopy'>").css({
			width:"800px",
			height:"500px",
			position:"absolute",
			left:"30px",
			top:"50px",
			zIndex:9999
		});
		canvas.appendTo(paletteBox);
		canvasCopy.appendTo(paletteBox);
		create();
	});
	function create(){
	var drawObj=new palette(canvas[0].getContext("2d"),canvas[0],canvasCopy[0]);
    var divs=$(".left li");
    drawObj.draw();
    divs.click(function(){
    	var role=$(this).attr('role');
    	if (role==undefined) {
    		return;
    	};
    	if(role=="pencil"){
         drawObj.pencil();
         return;
    	}
    	if(role=="polygon"){
         var polyNum=prompt("请输入多边形的边数",5);
         drawObj.type=role;
         drawObj.bianNum=polyNum||5;
    	}else if(role=="multiAngleStar"){
        var starNum=prompt("请输入多角星的角数",5);
         drawObj.type=role;
         drawObj.angleNum=starNum||5;
    	}else if(role=="fill"||role=="stroke"){
          drawObj.style=role;
    	}else if(role=="fillstyle"){
          $(this).find("input").change(function(){
          	drawObj.fillStyle=this.value;
          	$(this).css({background:"red"});
          });
    	}else if(role=="strokestyle"){
          $(this).find("input").change(function(){
          	drawObj.strokeStyle=this.value;
          	$(this).css({background:"red"});
          });
    	}else{
        drawObj.type=role;
    	}
    	drawObj.draw();
      });
     //橡皮擦
     earser.click(function(){
     	drawObj.earser();
     });
     // 撤销
    cancel.click(function(){
      
      if(drawObj.statusArr.length>1){
       
        drawObj.statusArr.pop();
        
        drawObj.canvasObj.putImageData(drawObj.statusArr[drawObj.statusArr.length-1],0,0,0,0,drawObj.width,drawObj.height);
      }else if(drawObj.statusArr.length==1){
         drawObj.statusArr.pop();
         drawObj.canvasObj.clearRect(0,0,drawObj.width,drawObj.height);
      }else{
        alert("不能在撤销了！！");
      }
    });
     // 保存
     save.click(function(){
    var baseUrl=canvas[0].toDataURL();   //返回的是一窜base64编码的url
    location.href=baseUrl.replace('image/png','image/octet-stream');
     });
	}


})