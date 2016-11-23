$(document).ready(function(){

	$(window).scroll(function(){
		if(document.body.scrollTop >= 288){
			$('#nav-get-started').removeClass('nav-li-hidden');
			$('#nav-get-started').addClass('nav-li-shown');
			$('#nav-get-started').removeClass('hidden-xs');
		}else {
			$('#nav-get-started').removeClass('nav-li-shown');
			$('#nav-get-started').addClass('nav-li-hidden');
			$('#nav-get-started').addClass('hidden-xs');
		}
	});

});