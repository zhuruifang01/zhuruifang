/*
getClass(classname)获取指定类名的元素
classname指定要获取元素的classname
range  指定范围,具体的DOM对象
思路：
1、判断浏览器
document.getElementsByClassName
2、获取所有的元素
3、元素的类名是否等于指定的类名
4、如果符合条件，把他放在一个数组里
5、返回数组
*/
// function getClass(classname){
// 	var aa=document.getElementsByClassName;
// 	if(aa){
// 		return document.getElementsByClassName(classname);
// 	}else{
// 		var bb=document.getElementsByTagName("*");
// 		var arr=[];
// 		for(var i=0;i<bb.length;i++){
// 			//当前元素的classname中是否包含指定的classname
// 			if(checkClass(bb[i].className,classname)){
// 				arr.push(bb[i]);
// 			}
// 		}
// 		return arr;
// 	}
// }
function getClass(classname,range){
	range=range?range:document;
	var aa=document.getElementsByClassName;
	if(aa){
		return range.getElementsByClassName(classname);
	}else{
		var bb=range.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<bb.length;i++){
			//当前元素的classname中是否包含指定的classname
			if(checkClass(bb[i].className,classname)){
				arr.push(bb[i]);
			}
		}
		return arr;
	}
}
function checkClass(classStr,classname){
	var arr=classStr.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]===classname)
			return true;
	}
	return false;
}

// /^[a-z][a-z1-6]{0,8}$/.test(selsecer)

// $("#one");获取指定id的元素
// $(".three",twos);获取指定类名的元素
// $("div");获取指定标签名的元素
//1、初始化range
//2、selecter去空
//3、判断第一个字符
//4、获取元素
function $(selecter,range){
  if(typeof(selecter)=="function"){
    window.onload=function(){
      selecter();
    }
  }else if(typeof(selecter)=="string"){
	range=range?range:document;
	//range=range===undefined?range:document;
	//range=range||document;
	//不兼容
  selecter=selecter.replace(/^\s*|\s*$/g,"")//去空
	// selecter=selecter.trim();
	if(selecter.charAt(0)=="."){
      var  ss=getClass(selecter.substring(1),range);
      return ss;
	}else  if(selecter.charAt(0)=="#"){
		var  aa=range.getElementById(selecter.substring(1));
        return aa;
	}else  if(/^[a-zA-Z][a-z1-6]{0,8}$/.test(selecter)){
		var bb=range.getElementsByTagName(selecter);
		return bb;
	}else if(/^<[a-zA-Z][a-z1-6]{0,8}>$/.test(selecter)){
    return document.createElement(selecter.slice(1,-1));
  }
}
}


/*
getConcent(obj,value)
获取或设置obj的文本
obj 指定对象
value 要设置的文本
1、获取
参数个数    value
2、获取
判断浏览器是否支持属性
3、设置
判断浏览器是否支持属性
*/
function getConcent(obj,value){
	if(value){
		if(obj.innerText){
			obj.innerText=value;
		}else{
			obj.TextConcent=value;
		}

	}else{
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.TextConcent;
		}

	}
}


/*
getStyle(obj,attr)
获取指定元素的属性
obj 指定对象
attr 样式属性
1、判断浏览器是否支持属性
2、
*/
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
} 



/*
getChilds(obj,type)  获取指定对象的子元素集合
obj  指定对象
type 1、true或空白 所有元素节点
     2、false  所有元素节点和有意义文本节点
1、所有节点
2、节点类型 1
*/
function  getChilds(obj,type){
	type=type==undefined?true:type;
	var arr=[];
    var childs=obj.childNodes;
      if(type){
       for(i=0;i<childs.length;i++){
       	if(childs[i].nodeType==1){
              arr.push(childs[i])
       	}       	
       }
      }else{
      	for(i=0;i<childs.length;i++){
       	if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
              arr.push(childs[i]);
       	}       	
       }
      }
       return  arr;
}
//获得第一个子元素节点
function firstChild(obj,type){
  type=type==undefined?true:type;
	return getChilds(obj)[0];
}
//获得最后一个子元素节点
function lastChild(obj,type){
  type=type==undefined?true:type;
	var ss=getChilds(obj);
	return ss[ss.length-1];
}
//获得随机子元素节点
function randomChild(obj,num,type){
  type=type==undefined?true:type;
	var ss=getChilds(obj);
  if(num>ss.length||num<1)return false;
	return ss[num-1];
}
//获取下一个元素节点
/*
1、判断next  如果没有  返回false
              如果有 判断next.nodeType  ==1   如果等于  返回节点
                                              如果不等于  next=next.nextSibling;
*/
function getNext(one,type){
  type=type==undefined?true:type;
  var next=one.nextSibling;  
    if(next===null){
    return false;
    }
    if(type==true){
   	     while((next.nodeType==3||next.nodeType==8)){
   	          next=next.nextSibling;
              if(next===null){
                 return false;
              }
          }
    }else if(type==false){
   	          while((next.nodeType==3&&!(next.nodeValve.replace(/^\s*|\s*$/g,""))||next.nodeType==8)){
              next=next.nextSibling;
              if(next===null){
                 return false;
              }
          }
          }
}
//获取上一个元素节点
function getPrevious(one,type){
  type=type==undefined?true:type;
   var pre=one.previousSibling;  
   if(pre===null){
    return false;
    }
    if(type==true){
         while((pre.nodeType==3||pre.nodeType==8)){
              pre=pre.previousSibling;
              if(pre===null){
                 return false;
              }
          }
    }else if(type==false){
              while((pre.nodeType==3&&!(pre.nodeValve.replace(/^\s*|\s*$/g,""))||pre.nodeType==8)){
              pre=pre.previousSibling;
              if(pre===null){
                 return false;
              }
          }
          }
}
//在一个元素节点后面插入一个元素
//newone 要插入的对象
//one 要插入的位置

function insertAfter(newone,one){
   var next=getNext(one);
   // alert(1);
   var parent=one.parentNode;  
   if(next){
      return parent.insertBefore(newone,next);
   }
   else{
   	  return parent.appendChild(newone);
   }
}


//在一个元素节点前面插入一个元素
//newone 要插入的对象
//one 要插入的位置
function insertBefore(newone,one){
  // alert(1);
   var parent=one.parentNode;  
      return parent.insertBefore(newone,one);
}


//在一个元素节点后面插入一个元素
//newone 要插入的对象
//one 要插入的位置
//type 1、true或空白 元素节点
    // 2、false  元素节点和有意义文本节点
//思路 1、父元素  next
 //    2、兄弟元素  parent
 //    3、next  false  parent.appendChild(newone);
 //    4、parent.insertBefore(newone,next)



//事件绑定的兼容性封装函数   添加
//obj 事件绑定的对象
// str 事件
//move  事件处理程序
function addEvevt(obj,str,move){
  if(obj.attachEvent){
    obj.attachEvent(str,move)
  }else{
    obj.addEventListener(str.substring(2),move,false)
  }
}
//事件绑定的兼容性封装函数   删除
//obj 事件绑定的对象
// str 事件
//move  事件处理程序
function removeEvent(obj,str,move){
  if(obj.detachEvent){
    obj.detachEvent(str,move);
  }else{
    obj.removeEventListener(str.substring(2),move,false);
  }
}

//鼠标滚轮滚动的兼容性函数
/*
obj 鼠标作用范围
up  鼠标滚轮向上滚动时触发的事件处理程序
move  鼠标滚轮向下滚动时触发的事件处理程序
*/
function mouseWheel(obj,up,down){
    if(obj.attachEvent){
      obj.attachEvent("onmousewheel",scrollFn);
    }else{
      obj.addEventListener("mousewheel",scrollFn,false);
      obj.addEventListener("DOMMouseScroll",scrollFn,false);
    }
    // alert(1);
    function scrollFn(e){
      var e=e||window.event;
      if(e.preventDefault){
        e.preventDefault();
      }else{
        e.returnValue=false;
      }
      var nub=e.wheelDelta||e.detail;
      if(nub==120||nub==-3){
        up.call(obj);//改变this的指针，让this指向obj
      }else if(nub==-120||nub==3){
        down.apply(obj);
      }
    }
} 
//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}
















//Node.prototype.appendTo(obj)将该方法的对象插入到指定对象的后面
// Node.prototype.appendTo=function(obj){
//   var parent=obj.parentNode;
//   alert(parent);
//   parent.appendChild(this);
//  }

