/* 
	****** script.js ******

	Smooth Scrolling
	Using jQuery animate() smooth scrolling functionality is being added
*/

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-40
	    }, 900, 'swing');
	});
});