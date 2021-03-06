function hideAddressBar() {
  if(!window.location.hash) {
    if(document.height < window.outerHeight)
      document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){
        window.scrollTo(0, 1);
        document.body.style.height = 'auto';
      }, 50 );
  }
}

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
  $isAnimatedNinth = $('.ninth .is-animated'),
  $isAnimatedNinthSingle = $('.ninth .is-animated__single'),
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
    // setAllowScrolling: false,


    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      console.log(index);
    var leavingSlide = $(this);

    if(index == 4 && slideIndex == 0 && direction == 'right'){
        $isAnimatedFifthSingle.addClass('animated pulse').css('animation-delay', '1s');
    }

    if(index == 4 && slideIndex == 1){
        $isAnimatedSixthSingle.addClass('animated pulse').css('animation-delay', '1s');
    }
    if(index == 6 && slideIndex == 0){
      $isAnimatedNinth.addClass('animated slideInLeft');
      $isAnimatedNinth.eq(0).css('animation-delay', '0.5s');
      $isAnimatedNinthSingle.addClass('animated slideInRight').css('animation-delay', '0.5s');

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
      if (index == 5) {
        $isAnimatedEigthSingle.addClass('animated pulse').css('animation-delay', '1s');
      }
      // if (index == 6) {
      //     $isAnimatedNinthSingle.addClass('animated pulse').css('animation-delay', '1s');
      // }

      if (index == 11 && nextIndex == 12) {
        $isAnimatedThirdSingle.addClass('animated fadeIn').css('animation-delay', '1s');
      }

    }


  });

})(jQuery);

const buttonLeft = document.querySelector('.rectangleLeft');
const buttonRight = document.querySelector('.rectangleRight');
const buttonIcon = document.querySelector('.topleftCornerLogo');
const backgroundElementLeft = document.querySelector('.background-classLeft');
const backgroundElementRight = document.querySelector('.background-classRight');
const backgroundElementIcon = document.querySelector('.background-classIcon');

buttonLeft.addEventListener('click', function() {
  backgroundElementLeft.style.backgroundColor = 'rgba(14, 191, 158, 0.7)'; // byt färg på elementet
       location.href = "http://www.thrivestore.se/maskulint-herr";
})
buttonRight.addEventListener('click', function() {
  backgroundElementRight.style.backgroundColor = 'rgba(14, 191, 158, 0.7)'; // byt färg på elementet
       location.href = "http://www.thrivestore.se/feminint-dam";
})
buttonIcon.addEventListener('click', function() {
  window.scrollTo(0, 0);
})
