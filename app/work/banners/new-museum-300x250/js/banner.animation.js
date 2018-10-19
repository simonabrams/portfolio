'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // global props
  this.colors = {
    'pink': '#e90e7f',
    'green': '#65fe00',
    'blue': '#66fffe'
  };

  // store the properties of the logo object
  this.logo = {
    frame: 0,
    w: 186,
    h: 153,
    x: -186 / 2,
    y: -153 / 2
  };

  // load the sprite sheet and store it
  this.sprite = new Image();
  this.sprite.src = 'images/newmu-sprite.png';

  // Image array for preloading
  this.images = ['images/text-live.png', 'images/footer-hashtag.png', 'images/footer-newmu-live.png', 'images/static-lines.png', 'images/newmu-sprite.png', 'images/cta-label.png', 'images/logo-endFrame.png'];

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

  // dot
  this.liveContainer = this.smartObject({
    parent: this.banner,
    width: 52,
    height: 18,
    y: 15,
    backgroundColor: this.colors.pink
  });

  this.liveLabel = this.smartObject({
    parent: this.liveContainer,
    backgroundImage: 'images/text-live.png',
    retina: true
  });

  this.liveDot = this.smartObject({
    parent: this.liveContainer,
    backgroundColor: '#fff',
    width: 5,
    height: 5,
    x: 10,
    y: 7,
    borderRadius: '50%'
  });

  this.logoContainer = this.smartObject({
    parent: this.banner,
    width: this.logo.w,
    height: this.logo.h,
    x: 52,
    y: 41,
    overflow: 'hidden'
  });

  this.logoCanvas = this.smartObject({
    parent: this.logoContainer,
    type: 'canvas',
    width: 186,
    height: 153
  });

  this.endFrameLogo = this.smartObject({
    parent: this.banner,
    backgroundImage: 'images/logo-endFrame.png',
    width: 57,
    height: 50,
    x: 230,
    y: 12
  });

  // grab the canvas element, createed as a smartObject
  this.context = this.logoCanvas.getContext('2d');

  // headline
  this.textContainer = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight,
    id: 'text-container'
  });
  this.headline = this.smartObject({
    parent: this.textContainer,
    id: 'headline',
    width: 230,
    height: 64,
    x: 9,
    y: 79,
    backgroundImage: 'images/headline.svg',
    backgroundPosition: '0 0',
    backgroundSize: '231px 130px'
  });

  // cta
  this.cta = this.smartObject({
    parent: this.banner,
    width: 86,
    height: 19,
    x: 10,
    y: 159,
    backgroundColor: '#fff'
  });
  this.ctaLabel = this.smartObject({
    parent: this.cta,
    width: 86,
    height: 19,
    retina: true,
    backgroundImage: 'images/cta-label.png'
  });

  // footer
  this.footerBar = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: 20,
    y: 230,
    id: 'footerBar',
    fontSize: 0
  });

  this.footer4 = this.smartObject({
    parent: this.footerBar,
    display: 'inline-block',
    width: 47,
    height: '100%',
    x: 253,
    backgroundColor: this.colors.blue
  });

  this.footer3 = this.smartObject({
    parent: this.footerBar,
    display: 'inline-block',
    width: 47,
    height: '100%',
    x: 206,
    backgroundColor: this.colors.green
  });

  this.footer2 = this.smartObject({
    parent: this.footerBar,
    display: 'inline-block',
    width: 47,
    height: '100%',
    x: 159,
    backgroundColor: this.colors.pink
  });

  this.footer1 = this.smartObject({
    parent: this.footerBar,
    display: 'inline-block',
    width: 71,
    height: '100%',
    x: 88,
    retina: true,
    type: 'img',
    src: 'images/footer-hashtag.png'
  });

  this.footer0 = this.smartObject({
    parent: this.footerBar,
    width: 88,
    height: '100%',
    x: 0,
    retina: true,
    display: 'inline-block',
    type: 'img',
    src: 'images/footer-newmu-live.png'
  });

  // static
  this.static = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight,
    backgroundImage: 'images/static-lines.png',
    backgroundRepeat: 'repeat-x',
    retina: true,
    zDepth: 10
  });

  // this.ref = this.smartObject({
  //   parent: this.banner,
  //   backgroundImage: 'images/mus1702-newmu-animated-300x250.jpg',
  //   width: this.bannerWidth,
  //   height: this.bannerHeight,
  //   opacity: 0.3
  // })
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {

  TweenMax.set([this.headline, this.cta, this.endFrameLogo], { autoAlpha: 0 });
  this.logoContainer.set({ force3D: true, rotationZ: 0.01 });
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

  // mouse handlers
  var overTl = new TimelineMax();

  function ctaOver() {
    overTl.addLabel('start', 0).from(_this.liveDot, 0.2, { autoAlpha: 0, repeat: -1, yoyo: true, repeatDelay: 0.5 }, 'start');
    TweenMax.set(_this.headline, { backgroundPositionY: '0' });

    TweenMax.to(_this.cta, 0.2, { scale: 1.15, transformOrigin: '0 0', ease: Back.easeOut });
  }

  function ctaOut() {
    overTl.clear();
    TweenMax.to(_this.cta, 0.4, { scale: 1, transformOrigin: '0 0', ease: Back.easeIn });
    TweenMax.set(_this.liveDot, { autoAlpha: 1 });
    TweenMax.set(_this.headline, { backgroundPositionY: '-65px' });
  }

  function enableMouseHandlers() {
    _this.banner.addEventListener('mouseover', ctaOver, false);
    _this.banner.addEventListener('mouseout', ctaOut, false);
  }

  // blink live light
  function blink() {
    var _tl = new TimelineMax();
    _tl.from(_this.liveDot, 0.2, { autoAlpha: 0, repeat: -1, yoyo: true, repeatDelay: 0.5 });

    return _tl;
  }

  // draw contents of the logo sprite to a canvas element
  function logoSprite(speed, parked) {

    var _parked = parked;

    // set the canvas properties
    var w = _this.logoCanvas.get('width');
    var h = _this.logoCanvas.get('height');
    var cx = w / 2;
    var cy = h / 2;

    // set the default speed of the animation
    if (speed === undefined) {
      speed = 5;
    }

    // create a timeline to hold the sprite animation
    var tl = new TimelineMax({ onUpdate: update });
    tl.to(_this.logo, speed, {
      frame: frames.length - 1,
      roundProps: 'frame',
      ease: Linear.easeNone
    }, 0);

    function update() {

      var frame = frames[_this.logo.frame];
      var f = frame.frame;

      var s = frame.spriteSourceSize;
      var x = _this.logo.x + s.x;
      var y = _this.logo.y + s.y;

      _this.context.save();
      _this.context.clearRect(0, 0, w, h);
      _this.context.translate(cx, cy);
      _this.context.drawImage(_this.sprite, f.x, f.y, f.w, f.h, x, y, f.w / 2, f.h / 2);
      _this.context.restore();
    }

    return tl;
  }

  // headline text glitch animation
  var count = 0;
  function headlineGlitch(maxCount) {
    if (count < maxCount) {
      // an array of durations
      var time = [0.01, 0.1, 0.05, 0.15, 0.2, 0.3];
      // pick a random duration from the array
      var randomTime = time[Math.floor(Math.random() * time.length)] * 0.5;
      // loop the glitch animation, using a random delay before repeating
      TweenMax.to(_this.headline, 0.05, { backgroundPositionY: '-65px', repeat: 1, yoyo: true, repeatDelay: randomTime, ease: SteppedEase.config(1), onComplete: headlineGlitch, onCompleteParams: [maxCount] });

      count++;
    } else {
      TweenMax.set(_this.headline, { backgroundPositionY: '-65px' });
    }
  }

  // intro animation
  function intro() {
    var footerEls = _this.footerBar.children;

    var introTl = new TimelineMax();
    introTl.addLabel('start', 0)
    // show the 'live' box
    .from(_this.liveContainer, 0.4, { x: '-=100', ease: Strong.easeInOut }, 'start')
    // show the footer elements
    .staggerFrom(footerEls, 0.4, { x: -100, ease: Power1.easeInOut }, 0.1, 'start+=0.2');

    return introTl;
  }

  // end frame animation
  function endFrameAnimation() {
    var endFrameTl = new TimelineMax();
    endFrameTl.add('start', 0)
    // hide the logo and position it top-right
    // .set(_this.logoContainer, {autoAlpha: 0, x: 230, y: 12, scale:0.33, transformOrigin: '0 0'})
    .set(_this.logoContainer, { autoAlpha: 0 }).add(_this.logoAnim.seek(0).pause()).set([_this.headline, _this.cta], { autoAlpha: 1 }, 'start')

    // show the logo and do the glitch animation
    // .to(_this.logoContainer, 0.1, { autoAlpha: 1, ease:Strong.easeInOut }, 'start+=0.2')
    // .add(spriteAnim(1, false).reverse(), 'start+=0.6')
    // .add(logoSprite(1, true).reverse(), 'start+=0.6' )
    .to(_this.endFrameLogo, 0.2, { autoAlpha: 1 }, 'start+=0.6')
    // show the headline
    .fromTo(_this.headline, 0.6, { x: -_this.bannerWidth }, { x: 9, ease: Strong.easeInOut }, 'start+=0.2')
    // show the cta and then enable mouseover
    .from(_this.cta, 0.3, { x: -_this.bannerWidth, ease: Strong.easeInOut, onComplete: enableMouseHandlers }, 'start+=2');
  }

  // blink the live dot
  this.blink = new TimelineMax().add(blink(), 0.6);
  // animate the logo
  this.logoAnim = new TimelineMax()
  // .add(spriteAnim(), 1);
  .call(logoSprite, false, this, 0.5);

  // main timeline animation
  this.timeline = new TimelineMax().addLabel('start', 0.5).add(intro(), 'start')
  // transition
  .addLabel('endFrame', 5.1).add(endFrameAnimation, 'endFrame').call(headlineGlitch, [10], this, 'endFrame').add(function () {
    _this.blink.pause();
  }, 15);
};