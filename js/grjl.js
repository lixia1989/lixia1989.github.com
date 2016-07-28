
window.onload=function(){
	var oNav = document.getElementById('nav');
	var aNli = oNav.getElementsByTagName('li');
	var aAc = aNli[aNli.length-1];
	function fnNav(){
		for(var i=0; i<aNli.length-1; i++){
			aNli[i].onmouseover=function(){
				aAc.style.display='block';
				bd(aAc,this.offsetLeft);
			}
			aNli[i].onmouseout=function(){
				aAc.style.display='none';
			}
		}
	}
	fnNav();
};