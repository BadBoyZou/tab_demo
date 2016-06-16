function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload = tab;

function tab() {
	var index = 0;
	var timer = null;

	var lis = $('notice-tit').getElementsByTagName('li');
	var divs = $('notice-con').getElementsByTagName('div');
	for (var i = 0; i < lis.length; i++) {
		lis[i].id = i;
		lis[i].onmouseover = function () {
			clearInterval(timer);
			changeOption(this.id);
		}
		lis[i].onmouseout = function () {
			timer = setInterval(autoPlay,2000);
		}
	}
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval(autoPlay,2000);

	function autoPlay() {
		index++;
		if (index>=lis.length) {
			index = 0;
		}
		changeOption(index);
	}

	function changeOption(current) {
		for (var j = 0; j < lis.length; j++) {
			lis[j].className = '';
			divs[j].style.display = "none";
		}
		lis[current].className = 'select';
		divs[current].style.display = 'block';
		index = current;
	}
}