$(document).ready(function () {
  var menu = $('#menu');
  var rightMenu = $('#menu-right');
  var body = $('body');
  var maskBody = $('.mask-body');
  var widthOfmenu = rightMenu.width();
  rightMenu.css({'margin-left': -widthOfmenu});
  var activeMenu = function (status) {
    if (status) {
      body.css({
        'padding-left': widthOfmenu
      }).addClass('active-menu');
      rightMenu.css({'margin-left': 0});
    }
    else {
      body.css({
        'padding-left': 0
      }).removeClass('active-menu');
      rightMenu.css({'margin-left': -widthOfmenu});
    }
  };
  maskBody.click(function () {
    activeMenu(false);
    maskBody.hide()
  });
  menu.click(function () {

    if (body.hasClass('active-menu')) {
      activeMenu(false);
      maskBody.hide()

    } else {
      activeMenu(true);
      maskBody.show();
    }

  });
});