let elem = document.getElementById('menu-mobile'),
	block = document.getElementById('nav-main-mobile'),
	close = document.getElementById('close-menu');

elem.onclick = function(){
	block.style.right = '0';
	close.style.display = 'block';
}
close.onclick = function(){
	block.style.right = '-300px';
	close.style.display = 'none';
}
