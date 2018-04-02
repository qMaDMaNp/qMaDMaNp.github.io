$('.hamburger').click(function() {
		$('.navigation-list').toggleClass('show-navigation-list');
		$('.hamburger').toggleClass("change");
});

window.onscroll = function() {
  $('.navigation-list').removeClass('show-navigation-list');
	$('.hamburger').removeClass("change");
};
