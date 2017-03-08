/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    /**

    Initialize banner elements

    */
    var banner = document.getElementById('banner'),
        hit = document.getElementsByClassName('hit')[0],
        
        // cta elements
        cta = document.getElementsByClassName('cta-container')[0],
        ctaBg = document.getElementsByClassName('cta-bg'),
        ripple = document.getElementsByClassName('ripple-effect'),
        radius = 100,
        btn_defaultColor = "#4285f4",
        btn_hoverColor = "#42A5F5",
        btn_defaultShadow = "0px 1px 5px rgba(0,0,0,0.25)",
        btn_hoverShadow = "1px 2px 5px rgba(0,0,0,0.25)",
        
        logo = document.getElementsByClassName('logo'),
        product = document.getElementsByClassName('product'),
        carrierLogo = document.getElementsByClassName('carrier-logo'),
        headline = document.getElementsByClassName('headline'),
        
        // constants for banner dimensions
        WIDTH = 300,
        HEIGHT = 250;

    var mainTl = new TimelineMax();

    /**

    Main animation function

    */

    // initialize banner visibility
    mainTl.set(banner, {autoAlpha:1});
    // set Super-G scale
    TweenMax.set(logo, {scale:0.27});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // slow pan phone
        .from(product, 1, {
          x:"+=15",
          ease: Sine.easeOut,
          z: 0.1,
          rotationZ: 0.01,
          force3D:true
        }, "start")

        // play logo animation
        .to(logo, 1, {backgroundPosition:"-8358px", ease:SteppedEase.config(42) }, "start")
        
        // show headline and carrier logo
        .from([headline, carrierLogo], 2, {autoAlpha:0}, "start")
       
        // show cta
        .fromTo(cta, 1.5, {autoAlpha:0}, {scale:1, autoAlpha:1, ease:Back.easeInOut.config(0.8)}, 'start');


    /**

    CTA and clickthrough event listeners

    */

    // initialize ripple element
    TweenMax.set(ripple, {
        autoAlpha: 0
    });

    // mouse over
    cta.addEventListener('mouseover', function(event) {
      // change the background color
      TweenMax.to(ctaBg, 0.4, {
        backgroundColor: btn_hoverColor
      });
      // animate the drop shadow
      TweenMax.to(cta, 0.4, {
        boxShadow: btn_hoverShadow
      });
    });

    // roll out
    cta.addEventListener('mouseout', function(event) {
      //   resets background color
      TweenMax.to(ctaBg, 0.4, {
        backgroundColor: btn_defaultColor
      });
      //   resets drop shadow
      TweenMax.to(cta, 0.4, {
        boxShadow: btn_defaultShadow
      });
    });

    // mouse down
    cta.addEventListener('mousedown', function(event) {
      // get mouse x and y
      var pos = getMousePos(event);
      console.log(pos.x, pos.y);

      // position ripple container
      // TweenMax.set(ripple, {
      //   x: 0,
      //   y: 0
      // });
      // fade in and grow the ripple
      TweenMax.fromTo(ripple, 1, {
        autoAlpha: 0,
        scale: 0
      }, {
        autoAlpha: 1,
        scale: 4
      });
      // start fading out the ripple
      TweenMax.to(ripple, 0.8, {
        autoAlpha: 0,
        delay: 0.4,
        ease: Sine.easeOut
      });

      Enabler.exit('CTA Exit');

    });
    
})();

function getMousePos(evt) {
    var doc = document.documentElement || document.body;
    var pos = {
        x: evt ? evt.pageX : window.event.clientX + doc.scrollLeft - doc.clientLeft,
        y: evt ? evt.pageY : window.event.clientY + doc.scrollTop - doc.clientTop
    };
    return pos;
}

// sprite animation
/*
    elem: the <img> tag of the element you're animating
    distX: the x-position of the last frame of the animation on the sprite sheet
    distY: the y-position of the last frame of the animation on the sprite sheet
    dur: the duration of the animation
    steps: how many frames make up the animation
    repeat: the number of times the animation should loop. Defaults to 1. -1 loops forever.
*/
function spriteAnim(elem, dist, dur, steps, reps) {
    // make a new TimelineMax to hold the animation
    var _tl = new TimelineMax();
    // congfigure an instance of SteppedEase with the number of animation frames
    var steppedEase = new SteppedEase(steps);
    // set the number of loops
    var repeat = (reps === undefined) ? 0 : reps;
    // animate!
    _tl.to(elem, dur, {
        x:dist,
        repeat:repeat,
        ease:steppedEase});

    return _tl;
}

