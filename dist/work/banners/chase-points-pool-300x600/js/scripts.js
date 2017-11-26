/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('cta'),

        controls = document.getElementById('controls'),
        btn_play = document.getElementById('btn_play'),
        btn_pause = document.getElementById('btn_pause'),
        btn_replay = document.getElementById('btn_replay'),

        logo = document.getElementsByClassName('logo-syc'),
        logo_sapphire = document.getElementsByClassName('logo-sapphire'),

        // elements
        bgHouse = document.getElementsByClassName('bg-house'),
        bgPool = document.getElementsByClassName('bg-pool'),
        footer = document.getElementsByClassName('footer'),
        card_footer = document.getElementsByClassName('card-footer'),
        card_main = document.getElementsByClassName('card-main'),
        headline1a = document.getElementsByClassName('headline1a'),
        headline1b = document.getElementsByClassName('headline1b'),
        headline2 = document.getElementsByClassName('headline2'),

        // constants for banner dimensions
        WIDTH = 160,
        HEIGHT = 6000,

        ctaOverColor = "#000",
        ctaDefaultColor = "#0092ff";



    var mainTl = new TimelineLite({onComplete:completeHandler});
    mainTl.defaultEase = Power2.easeOut;


    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});
    mainTl.set(logo, {x:14, y:540});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.4)


        // show footer
        // .from(footer, 0.4, {y:"+=160", ease:Sine.easeOut}, "start")
        .from([card_footer, logo], 0.4, {y:"+=160", autoAlpha:0, ease:Sine.easeOut}, "start+=0.1")

        .add("headline1", "+=0.5")
        .staggerFrom([headline1a, headline1b], 0.8, {autoAlpha:0}, 0.05, "headline1")

        // turn on house lights
        .from(bgHouse, 0.8, {autoAlpha:0, ease: Sine.easeOut}, "+=1")
        // turn on pool lights
        .from(bgPool, 0.8, {autoAlpha:0, ease: Sine.easeOut}, "+=0.25")
        
        // show headline
        .add("headline1", "+=0.3")

        // next headline
        .add("wipe", "+=1.2")
        .staggerTo([card_footer, logo], 0.8, {x:WIDTH , ease:Power3.easeIn}, 0.1, "wipe")
        .set(logo, {css: {width: "167", height: "21"}})
        .set(logo, {x:67, y:549, autoAlpha:0})

        // wipe footer up
        .to(footer, 0.4, {height:HEIGHT, top:0, ease:Power3.easeIn}, "wipe+=0.8")
        // swap play/pause btn color
        .set(btn_pause, {backgroundPosition: '-5px -25px'})
        .set(btn_play, {backgroundPosition: '-25px -25px'})
        
        .to(logo_sapphire, 0.8, {autoAlpha:1}, "wipe+=1")

        
        .from(headline2, 0.8, {autoAlpha:0, y:"+=30", ease:Circ.easeOut}, "wipe+=1.2")
        .from(card_main, 0.6, {y:"+=40", ease:Circ.easeOut}, "wipe+=1.3")
        .from(card_main, 0.4, {autoAlpha:0}, "wipe+=1.4")

        // show cta and logo
        .from(cta, 0.6, {autoAlpha:0, y:"+=60", ease:Circ.easeOut}, "wipe+=1.4");




    // banner complete - show replay button
    function completeHandler() {
    	TweenMax.to(btn_pause, 0.1, {autoAlpha: 0});
    	TweenMax.to(btn_replay, 0.1, {autoAlpha: 1});
    }

    // cta event handlers
    cta.addEventListener('mouseover', function(e) {
        TweenMax.to(cta, 0.25, {scale:1.1, ease:Power1.easeInOut});
    }, false);


    cta.addEventListener('mouseout', function(e) {
        TweenMax.to(cta, 0.25, {scale:1, ease:Power1.easeInOut});
    }, false);

    cta.addEventListener('mousedown', function(e) {
        vendorClickHandler();
    }, false);



    // play/pause
    controls.addEventListener('mousedown', togglePlayPause, false);

    // btn_pause.addEventListener('keydown', togglePlayPause, false);

    function togglePlayPause(e){
    	if (e.target.id == 'btn_pause' || e.target.id == 'btn_play') {
	    	doPlayPause(e);
	    }
    }

    // replay
    btn_replay.addEventListener('mouseover', function(){
    	TweenMax.to(this, 0.3, {rotationZ: 360, transformOrigin:"50% 4.5px",
    		onComplete:function(){
    			TweenMax.set(btn_replay, {rotationZ:0});
    		}});
    });
    btn_replay.addEventListener('mousedown', replayBanner, false);
    // btn_replay.addEventListener('keydown', replayBanner, false);

    function replayBanner(e){
    	if (e.target.id == 'btn_replay') {
	    	TweenMax.set(btn_pause, {backgroundPositionX:'-5px'});
	    	TweenMax.to(btn_pause, 0.1, {autoAlpha: 1});
	    	TweenMax.to(btn_replay, 0.1, {autoAlpha: 0});
	    	mainTl.restart();
	    }
    }

    // respond to keyboard events
    function keyboardEventHandler(e){
    	var keyCode = e.which || e.keyCode;
    	if (keyCode == 32) {
    		switch(document.activeElement.id) {
    			// we're on the pause button - play or pause the banner
    			case 'hit':
	    			vendorClickHandler();
    				break;
    			case 'controls':

                    if (mainTl.progress() < 1) {
                        doPlayPause();
                    } else if (mainTl.progress() == 1) {
                        restartBanner();
                    }
    				break;

    			case 'cta':
    				vendorClickHandler();
    				break;
    			default:
    				break;
    		}
    	}
    }

    function doPlayPause() {
        if (mainTl.paused()){
            TweenMax.set(btn_pause, {autoAlpha:1});
            TweenMax.set(btn_play, {autoAlpha:0});
        } else {
            TweenMax.set(btn_pause, {autoAlpha:0});
            TweenMax.set(btn_play, {autoAlpha:1});
        }
        mainTl.paused(!mainTl.paused());
    }

    function restartBanner() {
        TweenMax.set(btn_play, {autoAlpha: 0});
        TweenMax.to(btn_pause, 0.1, {autoAlpha: 1});
        TweenMax.to(btn_replay, 0.1, {autoAlpha: 0});
        mainTl.restart();
    }



    document.addEventListener('keydown', keyboardEventHandler, false);



})();
