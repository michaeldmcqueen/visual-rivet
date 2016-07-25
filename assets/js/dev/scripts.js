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
   //caches a jQuery object containing the header element
    var header = $(".site-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
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

