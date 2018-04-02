$('.hamburger').click(function() {
		$('.navigation-list').toggleClass('show-navigation-list');
});

window.onscroll = function() {
  $('.navigation-list').removeClass('show-navigation-list');
};
