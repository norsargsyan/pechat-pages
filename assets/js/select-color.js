let elementBool1 = false;
let elementBool2 = false;
let elementBool3 = false;
$(document).ready(function(){
	$('.colors1').click(function(){
		if(elementBool1 != false)
		{
			elementBool1.removeClass('active-color');
		}
			$(this).addClass('active-color');
			elementBool1 = $(this);
	});
	$('.colors2').click(function(){
		if(elementBool2 != false)
		{
			elementBool2.removeClass('active-color');
		}
			$(this).addClass('active-color');
			elementBool2 = $(this);
	});
	$('.colors3').click(function(){
		if(elementBool3 != false)
		{
			elementBool3.removeClass('active-color');
		}
			$(this).addClass('active-color');
			elementBool3 = $(this);
	});
});