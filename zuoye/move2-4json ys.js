function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
	clearInterval(obj.timer);
	options=options||{};
	options.time=options.time||700;
	options.type=options.type||'linear';
	// var start = parseFloat(getStyle(obj,name));
	var start={};
	var iCont = parseInt(options.time/30);
	// var dis = istart-start;
	var dis={};
	for(var name in json){
		start[name]= parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
				var a = n/iCont;
				var cur = start[name]+dis[name]*a;
				break;
				case 'ease-in':
				var a = n/iCont;
				var cur = start[name]+dis[name]*a*a*a;
				break;
				case 'ease-out':
				var a = 1-n/iCont;
				var cur = start[name]+dis[name]*(1-a*a*a)
				break;
			}
			var cur=start[name]+dis[name]*n/iCont;
			if (name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='ahpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
			if (n==iCont){
				clearInterval(obj.timer);
				options.end && options.end();
			}	
		}
		
	},30)
};
