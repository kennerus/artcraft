
$(window).resize(function() {
  if ( $(window).width() > 768 ) {

    var stickySidebar = new StickySidebar('#sidebar', {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: '.main',
      innerWrapperSelector: '.sidebar__inner'
    });
  }});