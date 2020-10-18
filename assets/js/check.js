var formerElem = false;
var formerElem2 = false;
var formerElem3 = false;
var formerElem4 = false;
var check = false;
$(document).ready(function(){
	$('.order-item').click(function(){
		if($(this).hasClass('radius'))
		{
			$('.checkboxes').toggle("blind", 400);
			$('.lost').toggle("blind", 400);

			check = true;
		}
		else if(check){
			$('.checkboxes').toggle("blind", 400);
			$('.lost').toggle("blind", 400);
			check = false
		}
		if(formerElem != false){
			formerElem.removeClass('active-element');
		}
		else
		{
			$('.step-second').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem = $(this);
		element = $('.step-second');
		setTimeout(function(){
			goToElem(element);
		}, 500);
	});
	$('.order-shtamp__item').click(function(){
		if(formerElem4 != false){
			formerElem4.removeClass('active-element');
		}
		else
		{
			$('.step-second').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem4 = $(this);
		element = $('.step-second');
		setTimeout(function(){
			goToElem(element);
		}, 500);
	});
	$('.change-item').click(function(){
		if(formerElem2 != false){
			formerElem2.removeClass('active-element');
		}
		else{
			$('.step-third').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem2 = $(this);
		element2 = $('.step-third');
		setTimeout(function(){
			goToElem(element2);
		}, 500);
	});
	$('.shtamp-size__item').click(function(){
		if(formerElem2 != false){
			formerElem2.removeClass('active-element');
		}
		else{
			$('.step-third').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem2 = $(this);
		element2 = $('.step-third');
		setTimeout(function(){
			goToElem(element2);
		}, 500);
	});
		$('.color-count__item').click(function(){
		if(formerElem2 != false){
			formerElem2.removeClass('active-element');
		}
		else{
			$('.step-third').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem2 = $(this);
		element2 = $('.step-third');
		setTimeout(function(){
			goToElem(element2);
		}, 500);
	});
	$('.change-item-flesh').click(function(){
		if(formerElem3 != false){
			formerElem3.removeClass('active-element');
		}
		else{
			$('.step-fourth').toggle("blind", 500);
		}
		$(this).addClass('active-element');
		formerElem3 = $(this);
		element3 = $('.step-fourth');
		setTimeout(function(){
			goToElem(element3);
		}, 500);
	});
	
	$('.first-dot').click(function(){
		goToElem($('.step-first'));
	});
	$('.second-dot').click(function(){
		goToElem($('.step-second'));
	});
	$('.third-dot').click(function(){
		goToElem($('.step-third'));
	});
	$('.fourth-dot').click(function(){
		goToElem($('.step-fourth'));
	});
});

function goToElem(element){
	$("body,html").animate(
	{scrollTop: element.offset().top},  500);
}