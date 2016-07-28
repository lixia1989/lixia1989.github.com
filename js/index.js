function findDir(obj,ev){
		var oEvent = ev || event;
		var scrollT = document.body.scrollTop||document.documentElement.scrollTop;
		var scrollL = document.body.scrollLeft||document.documentElement.scrollLeft;
		var x = obj.offsetWidth/2+getPos(obj).left-oEvent.clientX-scrollL;
		var y = obj.offsetHeight/2+getPos(obj).top-oEvent.clientY-scrollT;

		var hu = Math.atan2(y,x);
		var jiao =Math.round((hu*180/Math.PI+180)/90)%4;
		return jiao;
	};
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
};
window.onload=function(){
	var oZp= document.getElementById('zp');
	var oA = oZp.getElementsByTagName('a');
		function fnFb(){
			for (var i=0; i<oA.length; i++) {	
				oA[i].onmouseover=function(ev){
					var oEvent = ev || event;
					var oSon = this.children[1];
					var oFrom = oEvent.fromElement||oEvent.relatedTarget;
					if (this.contains(oFrom)) return false;
					switch(findDir(this,ev)){
						case 0:
						oSon.style.left=280+'px';
						oSon.style.top=0+'px';
						break;
						case 1:
						oSon.style.left=0+'px';
						oSon.style.top=280+'px';
						break;
						case 2:
						oSon.style.left=-280+'px';
						oSon.style.top=0+'px'
						break;
						case 3:
						oSon.style.left=0+'px';
						oSon.style.top=-280+'px';
						break;
					};
					move(oSon,{left:0,top:0},{time:500})
				};
				oA[i].onmouseout=function(ev){
					var oEvent = ev || event;
					var oSon = this.children[1];
					var oTo = oEvent.toElement||oEvent.relatedTarget;
					if (this.contains(oTo)) return false;
					switch(findDir(this,ev)){
						case 0:
						move(oSon,{left:280,top:0})
						break;
						case 1:
						move(oSon,{left:0,top:280})
						break;
						case 2:
						move(oSon,{left:-280,top:0})
						break;
						case 3:
						move(oSon,{left:0,top:-280})
						break;
					};
				};
			};
		}
	fnFb();
};