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
  drawLine();
  openPopup();
});

var drawLine = function () {
  var positionArt = $('.position-art');
  var pointArt = $('.point-art');
  var lineArt = $('.line-art');

  lineArt.append('<svg>');
  var line = null;
  positionArt.find('a').each(function () {

      var width = $(this).outerWidth();
      var height = $(this).outerHeight();
      var checkPosition = $(this).data('position');
      var index = $(this).index();
      var pointElement = pointArt.find('i:eq(' + index + ')');

      if (checkPosition === 'right') {
        $(this).css({
          top: $(this).data('top'),
          right: $(this).data('right')
        });
        pointElement.css({
          top: pointElement.data('top'),
          right: pointElement.data('right')
        })
      }
      else {
        $(this).css({
          top: $(this).data('top'),
          left: $(this).data('left')
        });
        pointElement.css({
          top: pointElement.data('top'),
          left: pointElement.data('left')
        })
      }

      var position = $(this).position();
      var positionPointArt = pointElement.position();
      positionPoint = {
        x1: position.left + (width),
        y1: position.top + (height / 2),
        x2: positionPointArt.left + 10,
        y2: positionPointArt.top + 10
      };

      switch (checkPosition) {
        case 'right':
          positionPoint.x1 = position.left;
          break;
        case 'top':
          positionPoint.x1 = position.left + (width / 2);
          positionPoint.y1 = position.top + (height);
          break;

      }

      var lineAttr = "x1=" + positionPoint.x1;
      lineAttr += " y1=" + positionPoint.y1;
      lineAttr += " x2=" + positionPoint.x2;
      lineAttr += " y2=" + positionPoint.y2;
      line += '<line ' + lineAttr + '/>';
    }
  )
  ;
  lineArt.find('svg').html(line);
};

var openPopup = function () {
  var positionArt = $('.position-art');
  var popup = $('.detail-content-service-page');
  $('.mark-content-service-page').click(function () {
    positionArt.hide();
  });
  positionArt.find('a').click(function () {
    var index = $(this).index();
    popup.show();
    popup.find('.service-page').hide();
    popup.find('.service-page:eq(' + index + ')').show()
  });
  $(document).click(function (event) {
    check = $(event.target);
    if (check.hasClass('wrapper-content-service-page')) {
      popup.hide();
    }
//    if(!$(event.target).closest('#menucontainer').length) {
//      if($('#menucontainer').is(":visible")) {
//        positionArt.hide();
//      }
//    }
  })
};