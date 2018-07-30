var stickySidebar = new StickySidebar('#sidebar', {
  topSpacing: 20,
  bottomSpacing: 20,
  containerSelector: '.main',
  innerWrapperSelector: '.sidebar__inner',
  screenlimit: true
});


// $(window).resize(function() {
//   if ( $(window).width() > 769 ) {
//
//     var stickySidebar = new StickySidebar('#sidebar', {
//       screenlimit: true,
//       topSpacing: 20,
//       bottomSpacing: 20,
//       containerSelector: '.main',
//       innerWrapperSelector: '.sidebar__inner'
//     });
//   }});