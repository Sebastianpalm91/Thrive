(function($) {

  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
  $isAnimatedSecondSingle = $('.second .is-animated__single'),
  $isAnimatedThird = $('.third .is-animated'),
  $isAnimatedThirdSingle = $('.third .is-animated__single'),
  $isAnimatedFourth = $('.fourth .is-animated'),
  $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
  $isAnimatedFifth = $('.fifth .is-animated'),
  $isAnimatedFifthSingle = $('.fifth .is-animated__single'),
  $isAnimatedSixth = $('.sixth .is-animated'),
  $isAnimatedSixthSingle = $('.sixth .is-animated__single'),
  $isAnimatedSeventh = $('.seventh .is-animated'),
  $isAnimatedSeventhSingle = $('.seventh .is-animated__single'),
  $isAnimatedEigth = $('.eigth .is-animated'),
  $isAnimatedEigthSingle = $('.eigth .is-animated__single'),
  $isAnimatedNineth = $('.nineth .is-animated'),
  $isAnimatedNinethSingle = $('.nineth .is-animated__single'),
  $isAnimatedTenth = $('.tenth .is-animated'),
  $isAnimatedTenthSingle = $('.tenth .is-animated__single');



  // initialize fullPage
  $('#wrapper').fullpage({
    slidesNavigation: true,
    navigation: false,
    controlArrows: true,
    autoScrolling: true,
    fitToSection: true,
    loopHorizontal: false,
    setAllowScrolling: false,

    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      console.log(index, direction, slideIndex);
    var leavingSlide = $(this);

    if(index == 4 && slideIndex == 0 && direction == 'right'){
        $isAnimatedFifthSingle.addClass('animated pulse').css('animation-delay', '1s');
    }

    if(index == 4 && slideIndex == 1){
        $isAnimatedSixthSingle.addClass('animated pulse').css('animation-delay', '1s');
    }
},
    onLeave: function(index, nextIndex, slideIndex) {

      if (index == 1 && nextIndex == 2) {
        $isAnimatedSecond.addClass('animated fadeInLeft');
        $isAnimatedSecond.eq(0).css('animation-delay', '1s');
        $isAnimatedSecondSingle.addClass('animated fadeIn').css('animation-delay', '2s');
      }

      if (index == 2 && nextIndex == 3) {
        $isAnimatedThirdSingle.addClass('animated pulse').css('animation-delay', '1s');
      }
      if (index == 3 ) {
        $isAnimatedFourthSingle.addClass('animated pulse').css('animation-delay', '1s');
      }

      if (index == 4 && nextIndex == 5) {
        $isAnimatedSeventh.addClass('animated slideInDown');
        $isAnimatedSeventh.eq(0).css('animation-delay', '1s');
        $isAnimatedSeventhSingle.addClass('animated fadeIn').css('animation-delay', '2s');
      }
      if (index == 6 && nextIndex == 7) {
        $isAnimatedEigthSingle.addClass('animated pulse').css('animation-delay', '1s');
      }
      if (index == 7 && nextIndex == 8) {

      }

      if (index == 11 && nextIndex == 12) {
        $isAnimatedThirdSingle.addClass('animated fadeIn').css('animation-delay', '1s');
      }





    }

  });

})(jQuery);