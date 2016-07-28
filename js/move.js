// 获取非行间样式
function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle (obj,false))[name];
}
function move(obj,json,options){
	clearInterval(obj.timer);
	// 如果没有options就给他个空
	options=options||{};
	//如果没有设置时间就默认为700毫秒
	options.time=options.time||700
	//如果没有设置速度就默认为匀速
	options.type=options.type||'linear'
	//初始值
	var star={};
	//总次数
	var iCont = parseInt(options.time/30)
	//距离
	var dis={};
	//循环一组 (json的循环)
	for(var name in json){
		star[name]=parseFloat(getStyle(obj,name));
		dis[name] = json[name]-star[name];
	}
	//当前执行多少次
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
				var a = n/iCont;
				var cur= star[name]+dis[name]*a;
				break;
				case 'seae-in':
				var a = n/iCont;
				var cur = star[name]+dis[name]*a*a*a;
				break;
				case 'seae-out':
				var a=1-n/iCont;
				var cur = star[name]+dis[name]*(1-a*a*a);
				break;
			}
			cur = star[name]+dis[name]*n/iCont;
			if (name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			};
			if (n==iCont){
				clearInterval(obj.timer);
				options.end && options.end();
			};
		};
	},30);
};