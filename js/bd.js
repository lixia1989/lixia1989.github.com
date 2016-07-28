;(function(){
	var n=0;
	var m=0
	var timer=null;
	window.bd=function(obj,iTarget){
		clearInterval(timer);
		timer=setInterval(function(){
			m-=(n-iTarget)/5;
			m*=.8;
			n+=m;
			obj.style.left=Math.round(n)+'px';
			if (Math.round(m)<1&&Math.round(n)==iTarget){
				clearInterval(timer);
			}
		},30)
	}
})();

