
window.onload=function(){
	var oBox = document.querySelector('.box');
	var N=11;
	for(var i=0; i<N; i++){
		var oLi = document.createElement('li');
		oLi.style.backgroundImage='url(img/'+(i+1)+'.jpg)';
		oBox.appendChild(oLi);

	};
	var aLi= oBox.children;
	for(var i=0; i<aLi.length; i++){
		aLi[i].style.transition='0.6s all ease '+(N-i)*200+'ms';
		;(function(index){
			setTimeout(function(){
				aLi[index].style.transform='perspective(800px) rotateY('+(360/N*index)+'deg) translateZ(340px)';
			},0)
		})(i);
	};

	var y=0;
	var x=-20;
	var iSpeedX=0;
	var lastX=0;
	var iSpeedY =0;
	var lastY =0;
	var timer=null;
	document.onmousedown=function(ev){
		clearInterval(timer);
		var disX = ev.clientX-y;
		var disY = ev.clientY -x;
		document.onmousemove=function(ev){
			y=ev.clientX-disX;
			x=ev.clientY-disY;
			change(y/3,x);
			iSpeedX=ev.clientX-lastX;
			lastX=ev.clientX
			iSpeedY=ev.clientY-lastY;
			lastY=ev.clientY;
			;
		};
		document.onmouseup=function(){
			document.onmouseup=document.onmousemove=null;
			timer=setInterval(function(){
				iSpeedX*=0.95;
				iSpeedY*=0.95;
				y+=iSpeedX;
				x+=iSpeedY;
				change(y/3,x);
				if (Math.abs(iSpeedX)<1&&Math.abs(iSpeedY)<1){
					clearInterval(timer);
				};
			},30);	
		};
		return false;
	};
	aLi[0].addEventListener('transitionend',function(){
		change(y);
	},false);
	function change(y,x){
		oBox.style.transform='rotateX('+-x/20+'deg)';
		for(var i=0; i<aLi.length; i++){
			aLi[i].style.transition='none';
			aLi[i].style.transform='perspective(800px) rotateY('+(360/N*i+y)+'deg) translateZ(340px)';
			var scale= Math.abs(Math.abs((360/N*i+y)%360)-180)/180;
			scale<0.4 && (scale=0.4);
			aLi[i].style.opacity=scale;
		}
	};
}
