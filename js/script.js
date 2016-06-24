function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload = function(){
	var tits = $('notice-tit').getElementsByTagName('li'),
		divs = $('notice-con').getElementsByTagName('div');
	//遍历所有的标签页
	for (var i = 0; i < tits.length; i++) {
		tits[i].id = i;
		
		tits[i].onclick = function(){
			//点击后清除其他 li和div 的样式
			for (var j = 0; j < tits.length; j++) {
				tits[j].className = ' ';
				divs[j].style.display ='none';
			}
			this.className = 'select';
			divs[this.id].style.display = 'block';
		}
		/*
		tits[i].onmouseover = function(){
			for (var j = 0; j < tits.length; j++) {
				tits[j].className = ' ';
				divs[j].style.display ='none';
			}
			this.className = 'select';
			divs[this.id].style.display = 'block';
		}
		 */
	}
}