function $(fn){
	if (document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();
		},false)
	}else{
		document.onreadystatchange=function(){
			if (document.readyState =='complete'){
				fn && fn();
			};
		};
	};
};
