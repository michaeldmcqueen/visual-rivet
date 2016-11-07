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


  	if(Modernizr.mq('only all')) {
  		$('html').addClass('mq');
  	} else {
  		$('html').addClass('no-mq');
  	};


  $('.nav-btn').on('click', function() {
      $('.site-header').toggleClass('show');
      $('body').toggleClass('menuOpen');
    });
  $('.site-header li a').on('click', function() {
      $('.site-header').toggleClass('show');
      $('body').toggleClass('menuOpen');
    });
    
  $(".content-wrap").click(function(event) {
    $('.site-header').removeClass('show');
    $('body').removeClass('menuOpen');
  });

$(".gallery-teaser a").colorbox({rel:'project-teaser'});
});

