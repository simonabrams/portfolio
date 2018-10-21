'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo-pier1.svg', 'images/background.jpg', 'images/text1.png', 'images/text2.png', 'images/text3.png', 'images/cta-label.png'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  var _this = this;

  // background pans with mouse - based on https://codepen.io/flysi3000/pen/eMGxXK?editors=1010
  this.bgWrapper = this.smartObject({
    width: this.bannerWidth,
    height: this.bannerHeight,
    // overflow: 'hidden',
    parent: this.banner,
    className: 'bgWrapper'
  });
  this.bgImageWrapper = this.smartObject({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    parent: this.bgWrapper,
    className: 'bgImageWrapper'
  });
  this.bgImage = this.smartObject({
    type: 'img',
    src: 'images/background.jpg',
    parent: this.bgImageWrapper,
    // update these with the width/height of your image asset!
    width: 780,
    height: 600
  });

  this.barsContainer = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight,
    id: 'barsContainer'
  });

  /*****************************
    color bars!!!
  *****************************/

  // makes the color bars on the side of the banner

  // create an object that holds measurements for each bar, containing its starting height and color
  this.barsInfo = [{ height: 60, color: '#f04e37' },

  // this is the text container
  { height: 100, color: '#293896' },

  // this one's the cta bar
  // it's got different heights and positions for each frame
  { height: 63,
    height2: 40,
    height3: 49,
    width: 196,
    yPosition2: 183,
    yPosition3: 222,
    color: '#fdd09e' }, { height: 102, color: '#faa61a' }, { height: 123, color: '#7cccbf' }, { height: 82, color: '#f04e37' }, { height: 72, color: '#009ee1' }];

  this.barsArray = [];
  var maxBars = 7;
  var barY = 0;

  function makeBars(bars, container) {
    for (var i = 0; i < maxBars; i++) {
      var bar = bars[i];
      var obj = _this.smartObject({
        parent: container,
        background: bar.color,
        width: 11,
        height: bar.height,
        x: 0,
        y: barY
      });
      barY += bar.height;
      _this.barsArray.push(obj);
    }

    // add the logo to the final bar
    var logoBar = _this.barsArray[maxBars - 1];
    _this.logo = _this.smartObject({
      parent: logoBar,
      position: 'relative',
      width: 136,
      height: 43,
      x: 16,
      y: 15,
      opacity: 0,
      backgroundImage: 'images/logo-pier1.svg',
      retina: true
    });
  }

  makeBars(this.barsInfo, this.barsContainer);

  // text
  this.textContainer = this.barsArray[1];
  this.text1 = this.smartObject({
    backgroundImage: 'images/text1.png',
    parent: this.textContainer,
    retina: true,
    x: 31,
    y: 23,
    opacity: 0
  });
  this.text2 = this.smartObject({
    backgroundImage: 'images/text2.png',
    parent: this.textContainer,
    retina: true,
    x: 28,
    y: 21,
    opacity: 0
  });
  this.text3 = this.smartObject({
    backgroundImage: 'images/text3.png',
    parent: this.textContainer,
    retina: true,
    x: 33,
    y: 22,
    opacity: 0
  });

  // cta
  this.ctaLabel = this.smartObject({
    backgroundImage: 'images/cta-label.png',
    parent: this.barsArray[2],
    retina: true,
    position: 'relative',
    opacity: 0,
    x: 50,
    y: 21
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  var _this = this;

  // grab a reference to the text container, logo and cta
  this.textContainer = this.barsArray[1];
  this.logoBar = this.barsArray[this.barsArray.length - 1];
  this.ctaBar = this.barsArray[2];
  this.ctaBarInfo = this.barsInfo[2];

  // store dimensions. which we'll pass over to the background panning class
  this.dimensions = {
    imageWidth: this.bgImage.get('width'),
    imageHeight: this.bgImage.get('height'),
    imageX: 0,
    imageY: 0,
    bannerWidth: this.bannerWidth,
    bannerHeight: this.bannerHeight

    // bump up the text and cta so they're on top of other color bars
  };this.textContainer.set({ zIndex: 20 });

  // stores the different text container settings - we animate these in the 
  // showText() function
  this.textSettings = [{ width: 203, height: 100, y: 59 }, { width: 211, height: 124 }, { width: 230, height: 163 }];

  this.ctaBar.set({ zIndex: 10 });

  // store the cta label position so we can reset it on roll out
  this.ctaLabel.startX = this.ctaLabel.get('x');
  this.ctaLabel.startY = this.ctaLabel.get('y');

  /******************************
      mouse handlers
  *******************************/

  // cta
  function ctaOver(e) {
    if (e.target === e.currentTarget) {
      _this.ctaBar.to(0.3, { width: '+=10', transformOrigin: 'left' });
      _this.ctaLabel.to(0.1, { x: '+=5' }, '-=0.3');
    }
  }
  function ctaOut(e) {
    if (e.target === e.currentTarget) {
      _this.ctaBar.to(0.4, { width: _this.ctaBarInfo.width, height: _this.ctaBarInfo.height3 });
      _this.ctaLabel.to(0.3, { x: _this.ctaLabel.startX });
    }
  }

  // background panning
  function enableMousePan() {
    _this.pan.bindEvents();
    _this.pan.tick();

    // we only want to fire the panning events once, so we immediately remove the mouseover
    _this.banner.removeEventListener('mouseover', enableMousePan);
  }

  // adds mouse events - we call this when the main animation is done
  this.enableButtonActions = function () {
    _this.ctaBar.addEventListener('mouseover', ctaOver);
    _this.ctaBar.addEventListener('mouseout', ctaOut);

    // store the x/y position of the background image
    // _gsTransform is a special little GSAP property that contains the tweened values
    _this.dimensions.imageX = _this.bgWrapper._gsTransform ? _this.bgWrapper._gsTransform.x : 0;
    _this.dimensions.imageY = _this.bgWrapper._gsTransform ? _this.bgWrapper._gsTransform.y : 0;

    // init mouse pan
    _this.pan = new MousePan({
      el: _this.bgWrapper,
      ease: .05,
      banner: _this.banner,
      dimensions: _this.dimensions
    });

    _this.banner.addEventListener('mouseover', enableMousePan);
  };
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  // expand the text container and show the selected text
  function showText(currentText) {
    var textSettings = _this.textSettings[currentText];
    var text = _this['text' + (currentText + 1)];
    var tl = new TimelineLite();
    tl.defaultEase = Expo.easeOut;

    tl.add('start', 0).to(_this.textContainer, 0.5, textSettings, 'start').to(text, 0.4, { opacity: 1 }, 'start+=0.5');

    return tl;
  }

  // figure out the background panning distance
  var dest = this.bgImage.get('width') - this.bannerWidth;

  // animate the background image
  function panBg() {
    var tl = new TimelineLite();
    tl.to(_this.bgWrapper, 10, { x: -dest, ease: Sine.easeInOut });

    return tl;
  }

  /*************************
    animation!
  *************************/

  this.timeline = new TimelineLite({ onComplete: _this.enableButtonActions });
  this.timeline.defaultEase = Expo.easeOut;
  this.timeline.addLabel('start', 0)
  // pan the background
  .add(panBg, 'start+=1')
  // build the bars
  .to(_this.logoBar, 0.4, { width: 168 }).to(this.logo, 0.4, { opacity: 1 })

  // show the first frame of text
  .add('frame1', '+=0.1').add(showText(0), 'frame1')

  // show frame 2 text
  .add('frame2', '+=2').to(this.text1, 0.3, { opacity: 0 }, 'frame2').add(showText(1), 'frame2+=0.2')
  // adjust the 3rd bar's height
  .to(_this.ctaBar, 0.5, {
    height: _this.ctaBarInfo.height2,
    y: _this.ctaBarInfo.yPosition2
  }, 'frame2+=0.2')

  // show frame 3 text 
  .add('frame3', '+=2').to(this.text2, 0.3, { opacity: 0 }, 'frame3').add(showText(2), 'frame3+=0.2')
  // adjust bars below
  .to(_this.ctaBar, 0.5, {
    height: _this.ctaBarInfo.height3,
    y: _this.ctaBarInfo.yPosition3
  }, 'frame3+=0.2')

  // show the cta!
  .to(_this.ctaBar, 0.4, { width: _this.ctaBarInfo.width }, 'frame3+=1').to(this.ctaLabel, 0.3, { opacity: 1 }, 'frame3+=1.3');
};