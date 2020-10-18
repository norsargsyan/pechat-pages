var formerElem = false;
var formerElem1 = false;
var formerElem2 = false;
$(document).ready(function(){
	$('.order-item').click(function(){
		if(formerElem != false){
			formerElem.removeClass('active-element');
		}
		$(this).addClass('active-element');
		formerElem = $(this);
	});
	$('.cat1').click(function(){
		if(formerElem1 != false){
			formerElem1.removeClass('active-element');
		}
		$(this).addClass('active-element');
		formerElem1 = $(this);
	});
	$('.cat2').click(function(){
		if(formerElem2 != false){
			formerElem2.removeClass('active-element');
		}
		$(this).addClass('active-element');
		formerElem2 = $(this);
	});
});

