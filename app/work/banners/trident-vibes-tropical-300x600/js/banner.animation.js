'use strict';

/**
 * Run the animation functions.
 */

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/cta.svg', 'images/dark_triangle.svg', 'images/light_triangle.svg', 'images/package-hero.png', 'images/package-left.png', 'images/package-right.png', 'images/gum-left.png', 'images/gum-right.png'];

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
Banner.prototype.svgConcentric = function (container) {
  var svgArray = [];
  var endSvg = [];
  var width = 300;
  var height = 200;
  this.trianglesArr = [{
    w: 413,
    h: 250,
    x: -32,
    y: 59
  }, {
    w: 598,
    h: 362,
    x: -95,
    y: 15
  }, {
    w: 798,
    h: 481,
    x: -166,
    y: -35
  }, {
    w: 1003,
    h: 605,
    x: -252,
    y: -74
  }, {
    w: 1871,
    h: 1127,
    x: -534,
    y: -511
  }];

  // figure out background image based on index in array
  function svgImage(num) {
    if (num % 2 === 0) {
      return 'images/light_triangle.svg';
    } else {
      return 'images/dark_triangle.svg';
    }
  }
  //
  for (var i = this.trianglesArr.length - 2; i >= 0; i--) {
    var svg = this.smartObject({
      backgroundImage: svgImage(i),
      parent: container,
      position: 'absolute',
      transformOrigin: '40% 44%',
      height: this.trianglesArr[0].h,
      width: this.trianglesArr[0].w,
      x: this.trianglesArr[0].x,
      y: this.trianglesArr[0].y,
      opacity: 0.9,
      id: 'triangle_' + i
    });
    svg.set({ scale: 0 });
    svgArray.push(svg);
  }

  // end frame triangles
  for (var j = this.trianglesArr.length - 1; j >= 0; j--) {
    var end = this.smartObject({
      backgroundImage: svgImage(j),
      parent: container,
      position: 'absolute',
      transformOrigin: '40% 44%',
      height: this.trianglesArr[j].h,
      width: this.trianglesArr[j].w,
      x: this.trianglesArr[j].x,
      y: this.trianglesArr[j].y,
      id: 'end_triangle_' + j
    });
    end.set({ scale: 0 });
    endSvg.push(end);
  }

  this.darkOverlay = this.smartObject({
    parent: this.tri_container,
    width: this.bannerWidth,
    height: this.bannerHeight,
    background: 'linear-gradient(0deg, rgba(242,119,3,1) 0%, rgba(255,255,255,0) 100%)',
    opacity: .7,
    backgroundBlendMode: 'multiply'
  });
  // return svgArray.reverse();
  return [svgArray, endSvg];
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.bg = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight,
    // background: 'rgb(249,129,2)',
    background: 'linear-gradient(0deg, rgba(249,129,2,1) 0%, rgba(255,169,4,1) 100%)'
  });

  this.tri_container = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight,
    overflow: 'hidden',
    id: 'tri_container'
  });

  this.triangle1 = this.smartObject({
    parent: this.banner,
    type: 'img',
    src: 'images/white_triangle.svg',
    width: 212,
    height: 132,
    x: 47,
    y: 107
  });

  this.packageContainer = this.smartObject({
    parent: this.banner,
    width: this.bannerWidth,
    height: this.bannerHeight
  });

  this.packageLeft = this.smartObject({
    parent: this.packageContainer,
    backgroundImage: 'images/package-left.png',
    id: 'packageLeft'
  });
  this.packageRight = this.smartObject({
    parent: this.packageContainer,
    backgroundImage: 'images/package-right.png',
    id: 'packageRight'
  });
  this.package = this.smartObject({
    parent: this.packageContainer,
    backgroundImage: 'images/package-hero.png',
    id: 'package-hero'
  });
  this.gumLeft = this.smartObject({
    parent: this.packageContainer,
    backgroundImage: 'images/gum-left.png',
    id: 'gum-left'
  });
  this.gumRight = this.smartObject({
    parent: this.packageContainer,
    backgroundImage: 'images/gum-right.png',
    id: 'gum-right'
  });

  this.text = this.smartObject({
    parent: this.banner,
    backgroundImage: 'images/text1.png',
    retina: true
  });

  this.legal = this.smartObject({
    parent: this.banner,
    backgroundImage: 'images/text-legal.png',
    retina: true
  });

  this.cta = this.smartObject({
    parent: this.banner,
    type: 'img',
    src: 'images/cta.svg',
    width: 132,
    height: 46,
    x: 84,
    y: 456
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  var _this = this;
  this.packageEls = [this.packageLeft, this.packageRight, this.gumLeft, this.gumRight];
  TweenLite.set(this.packageEls, { autoAlpha: 0 });
  // this.tri_container.set({scale:1.4, x:-146, y:-44});
  // first ripple triangles
  this.allTriangles = this.svgConcentric(this.tri_container);
  this.triangles = this.allTriangles[0];
  this.endTriangles = this.allTriangles[1];

  // cta handlers
  function doCtaOver() {
    TweenLite.to(_this.cta, 0.3, { scale: 1.105, ease: Power3.easeInOut });
  };

  function doCtaOut() {
    TweenLite.to(_this.cta, 0.4, { scale: 1, ease: Power3.easeOut });
  };

  // cta event listeners
  this.banner.addEventListener('mouseover', doCtaOver);
  this.banner.addEventListener('mouseout', doCtaOut);
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
  var _add$from$from$to$add;

  var _this = this;
  function triangleBurst() {
    var tl = new TimelineMax();
    // does the initial burst/ripple animation
    tl.staggerTo(_this.triangles, 1.5, {
      scale: 5,
      ease: Power3.easeIn
    }, .2)
    // do the ending animation
    .staggerFromTo(_this.endTriangles, .75, {
      scale: 0,
      alpha: 0
    }, {
      scale: 1,
      alpha: 1,
      ease: Power1.easeOut
    }, .15, '-=.7');
    return tl;
  }

  // create custom bounce animation for the package
  // requires CustomBounce.js and CustomEase.js
  CustomBounce.create('packageBounce', { strength: 0.3, squash: 1 });
  CustomBounce.create('ctaBounce', { strength: 0.8, squash: 1 });
  this.timeline = new TimelineLite().add('start', 0.5)
  //triangle
  .from(this.triangle1, 0.35, { scale: 0, ease: Back.easeOut }, 'start+=0.5')
  // animate package
  .from(this.package, 0.9, { y: -300, rotation: -20, transformOrigin: '32% 34%', ease: 'packageBounce' }, 'start').to(this.package, 0.9, { scaleY: 0.9, scaleX: 1.1, ease: 'packageBounce-squash', transformOrigin: 'bottom' }, 'start').add(triangleBurst, 'start').add('stuff').to([this.packageLeft, this.packageRight], 0.1, { autoAlpha: 1 }, 'stuff').from([this.packageLeft, this.packageRight], 0.3, { scale: 0.6, transformOrigin: '50% 34%', ease: Back.easeOut.config(1.2) }, 'stuff').to([this.gumLeft, this.gumRight], 0.1, { autoAlpha: 1 }, 'stuff').from([this.gumLeft, this.gumRight], 0.3, (_add$from$from$to$add = { scale: 0.6, transformOrigin: '50% 34%' }, _defineProperty(_add$from$from$to$add, 'transformOrigin', '50% 34%'), _defineProperty(_add$from$from$to$add, 'ease', Back.easeOut.config(1.2)), _add$from$from$to$add), 'stuff')

  // text
  .add('end', '+=0.4').from(this.text, 0.4, { autoAlpha: 0, scale: 0, ease: Back.easeOut.config(1.2) }, 'end').from(this.legal, 0.4, { autoAlpha: 0, ease: Back.easeOut.config(1.2) }, 'end').from(this.cta, 0.35, { autoAlpha: 0, scale: 1.3, ease: Back.easeOut }, 'end+=.5');
};