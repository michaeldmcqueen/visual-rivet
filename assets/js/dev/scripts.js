$(document).ready(function() {

      $('body').smoothScroll({
        delegateSelector: 'ul.menu a'
      });

      $('p.subnav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash
        });
      });
  // Cache selectors outside callback for performance. 
   var $window = $(window),
       $stickyEl = $('.site-header'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });


	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};


  $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.menu').toggleClass('show');
      $('body').toggleClass('menuOpen');
    });


});

