<?php
$copyYear = 2016; // SETTING WHEN WEB STARTED
$curYear = date('Y'); //MAKE YEAR UP TO DATE
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="black">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/customize.css">
  <link rel="stylesheet" href="css/jquery.fullPage.css">
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/jquery.fullPage.min.js"></script>
</head>
<body>
    <!-- MENU BELOW -->
    <div class="fixedPosition" type="button">
      <nav role="button">
        <div id="menuToggle">
          <input type="checkbox">
          <!-- SPAN FOR SPACES BETWEEN LINES -->
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="http://www.thrivestore.se/nyheter"><li class="green">NEWS</li></a>
            <a href="http://www.thrivestore.se/maskulint-herr"><li class="green">SHOP MASCULINE</li></a>
            <a href="http://www.thrivestore.se/feminint-dam"><li class="green">SHOP FEMININE</li></a>
            <a href="http://www.thrivestore.se/varumarken"><li class="green">BRANDS</li></a>
            <a href="#"><li class="payforChange">#PAY4CHANGE</li></a>
          </ul>
        </input>
      </div>
    </nav>
  </div>
  <footer class="footer"> &copy; <?php echo $copyYear . (($copyYear != $curYear) ? '-' . $curYear : 'Copyright.');?> All Rights Reserved</footer>
  <!-- END OF MENU -->
  <a href="#"><div class="topleftCornerLogo background-classIcon"></div></a>

  <!-- TODO GET THE ANCHOR TAG TO DECIDED WORDS, ALSO MAKE WOW ANIMATION FKING WORK... -->
  <div id="wrapper" class="fullpage-wrapper">
    <!-- MAIN PAGE 1 -->
    <div class="section">
      <div class="thrivelogoText"></div>
      <a href="#"> <div class="payforChangeBoxMain"><h5>#PAY4CHANGE</h5></div></a>
      <div class="jumbotron start text-center"></div>
      <div class="jumbotron start text-center-page2"></div>
      <div class="jumbotron start text-center-page3"></div>
      <div class="bottomIndicator"><div class="scroll-indicator"><div class="inner"></div></div></div>
    </div>
    <!-- PAGE 2 -->
    <div class="section second">
      <div class="bgpageTwo">
        <div class="is-animated bgpageBlack">
          <div class="is-animated__single thrivelogoText_p2"></div>
          <div class="is-animated__single wraplogo_text">
            <p class="main_landingpageText">We only work with <br> brands that lead the <br> way in <strong class="helvetica_p2">sustainable,<br> environmental</strong> and <strong class="helvetica_p2"> <br>ethical production.</strong><br>
              <br>Our core values are<br>at <strong class="helvetica_p2">heart</strong> of our<br>decision making.</p>
            </div>
          </div>
        </div>
        <div class="bottomIndicator"><div class="scroll-indicator"><div class="inner"></div></div></div>
      </div>
      <!-- PAGE 3 -->

      <div class="section third">
        <div class="wrapperPage_3">
          <h1 class="textPageThree">WE ARE<br>THE <div class="is-animated__single strong">FIRST</div></h1>
          <div class="peta_logo"></div>
          <h1 class="textPageThreeSmall">STORE<br>IN SWEDEN</h1>
        </div>
        <div class="bottomIndicator"><div class="scroll-indicator"><div class="inner"></div></div></div>
      </div>

      <!-- PAGE 4 WITH 3 SLIDERS -->
      <div class="section">
        <div class="slide fourth">
          <div class="wrapperPage_4">
            <div class="water_logo"></div>
            <div class="textWrapper"><h1 class="citat">“</h1><h1 class="headerBox"><div class="is-animated__single strong">SUSTAINABLE</div> TO THE CORE</h1><h1 class="citat">”</h1><p class="slide_pageText">Our core values are at heart of our decision making. Animals, people and environment come first. Nothing, no one, is left behind.</div></p>
          </div>
        </div>
        <div class="bottomIndicator"><div class="scroll-indicator"><div class="inner"></div></div></div>

        <div class="slide fifth">
          <div class="wrapperPage_4">
            <div class="wind_logo"></div>
            <div class="textWrapper"><h1 class="citat">“</h1><h1 class="headerBox">CLOTHES OF <div class="is-animated__single strong">CHANGE</div></h1><h1 class="citat">”</h1><p class="slide_pageText">When you purchase our products you are actively making the world a better place – for the workers, yourself and the environment.</div></p>
          </div>
        </div>

        <div class="slide sixth">
          <div class="wrapperPage_4">
            <div class="fire_logo"></div>
            <div class="textWrapper"><h1 class="citat">“</h1><h1 class="headerBox">GET IT WHILE IT <div class="is-animated__single strong">LASTS</div></h1><h1 class="citat">”</h1><p class="slide_pageText">All of our collections are carefully selected, unique and limited edition.</div></p>
          </div>
        </div>
      </div>
      <!-- PAGE 5 -->
      <div class="section seventh">
        <div class="bgpageFive">
          <div class="is-animated bgpageBlackRight">
            <div class="is-animated__single main_landingpageTextPage5">
              <h6 class="small_h6">WE WANT</h6>
              <h1 class="h1_big"><strong>YOU <h6 class="small_h6">TO</h6></strong></h1>
              <h1 class="h1_mediumGreen"><strong>SPREAD</strong></h1>
              <h6 class="small_h6">THE</h6>
              <h1 class="h1_mediumGreen"><strong>WORD</strong></h1>
            </div>
            <div class="is-animated__single bottomPageFive"><div class="scroll-indicatorPageFive"><div class="inner"></div></div></div>
          </div>
        </div>
      </div>
      <!-- PAGE 6 AND SLIDE 1-->
      <!-- TODO MAKE BELOW WRAPPER, ROWTEXT AND COL NEW CLASSES -->
      <div class="section">
        <div class="slide eigth">
          <div class="wrapperPage_6">
            <div class="wrapperPageText_6">
              <h6 class="small_h6">POSITION</h6>
              <h1 class="h1_big">YOURSELF</h1>
              <h6 class="small_h6">ON THE</h6>
              <h1 class="h1_big"><div class="is-animated__single strong">FRONTLINE</div></h1>
              <h6 class="small_h6">OF <strong class="h1_medium">CHANGE.</strong></h6>
              <div class="bottomIndicator_horizontal"><div class="scroll-indicator-horizontal"><div class="inner"></div></div></div>
            </div>
            <div class="payforChangeBoxPage6">#PAY4CHANGE</div>
          </div>
        </div>
        <!-- SLIDE 2 -->
        <div class="slide ninth">
          <a href="#" style="none"><div class="is-animated rectangleLeft background-classLeft">
            <h1 class="white_h1">SHOP<br>MASCULIN</h1>
          </div></a>
          <a href="#" style="none"><div class="is-animated__single rectangleRight background-classRight">
            <h1 class="white_h1">SHOP<br>FEMININE</h1>
          </div></a>
          <div class="wrapperPage_6Slide2">
            <div class="thrivelogoTextp6"></div>
            <div class="shop_background"></div>
          </div>
        </div>
      </div>
    </div>
  <!-- linked to animation script depending on viewing index -->
  <script src="js/animation.js"></script>
</body>
</html>
