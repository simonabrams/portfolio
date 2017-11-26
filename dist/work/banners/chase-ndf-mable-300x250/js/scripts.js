/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        blue = document.getElementById('blue-background'),
        white = document.getElementById('white-background'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('cta'),
        imageContainer = document.getElementById('image-container'),
        text1 = document.getElementById('text1'),
        headline = document.getElementById('text-headline'),
        subhead = document.getElementById('text-subhead'),
        logo = document.getElementById('logo'),
        logoStacked = document.getElementById('logo-stacked'),
        cardReader = document.getElementById('card-reader'),
        controls = document.getElementById('controls'),

        
        // constants for banner dimensions
        WIDTH = 300,
        HEIGHT = 250,
        copyStart = -200,
        copyEnd = 200,
        copyEase = Power1.easeOut,
        copySpeed = 0.65,

        ctaOverColor = "#000",
        ctaDefaultColor = "#0092ff";



    var mainTl = new TimelineLite({onComplete:completeHandler});



    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});
    // mainTl.set(blue, {height: 39, top: 211});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // intro transition
        .from(logo, 0.5, {autoAlpha:0, ease:Power1.easeOut}, 'start')

        // frame 1
        .add('frame1', '+=0.65')
        .to(white, 0.6, {height: 39, top: 204, transformOrigin:"0 100%", ease:Power2.easeOut}, 'frame1+=0.2')
        .to(logo, 0.7, {top: 196, ease:Power2.easeOut}, 'frame1')

        // frame 2
        .add('frame2', '+=2')
        // blue up
        .to(white, 0.45, {height: 89, top: 169, ease: Back.easeOut.config(0.5)}, 'frame2')
        .to(text1, 0.5, {autoAlpha:1, ease:Power2.easeOut}, 'frame2+=0.2')
        .from(text1, 0.5, {ease:Power2.easeOut}, 'frame2+=0.2')

        // blue goes up
        .add('frame3', '+=1.75')
        .to([text1, logo], 0.3, {autoAlpha:0, top: '-=20', ease:Power2.easeIn}, 'frame3')
        .to('.disclaimer', 0.2, {autoAlpha:0} )
        .to(white, 0.75, {top: 0, height: HEIGHT, ease: Power2.easeOut}, 'frame3')

        // show stacked logo and white bg
        .set(blue, {autoAlpha:1, top: HEIGHT})
        .to(blue, 0.6, {top:0,  ease:Power2.easeOut})
        .to('.legal', 0.2, {autoAlpha:1} )
        // swap white play/pause button
        .set(btn_pause, {backgroundPosition: '0 0'})
        .set(btn_play, {backgroundPosition: '-10px 0'})
        .set(imageContainer, {autoAlpha:0})
        .set(logoStacked, {autoAlpha:1})
        .to(blue, 0.6, {height: 125, ease:Power2.easeOut})

        // end frame
        .add('endFrame')
        .to(headline, 1, {autoAlpha:1, ease:Power2.easeOut}, 'endFrame')
        .to(subhead, 1, {autoAlpha:1, ease:Power2.easeOut}, 'endFrame')
        .from(cardReader, 0.6, {x: WIDTH, y:'+=50', rotationZ:-30, ease:Power2.easeOut}, 'endFrame')
        .to(cardReader, 0.2, {autoAlpha:1}, 'endFrame')
        .to(cta, 0.6, {autoAlpha: 1}, 'endFrame+=0.5')
        .from(cta, 0.6, {y:'+=20', ease:Back.easeOut}, 'endFrame+=0.5');
        


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
	    	TweenMax.set(btn_pause, {backgroundPositionX:'0px'});
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
    
    //---SLIDER - REMOVE -----
    
    // var slider = $("#ctrl_slider"),
    //     progress = $(".progress");
	   //  sliderValue = {value:0};
	   //  slider.slider({
	   //      range: false,
	   //      min: 0,
	   //      max: 100,
	   //      step:.1,
	   //      start:function() {
	   //          mainTl.pause();
	   //      },
	   //      slide: function ( event, ui ) {
	   //          mainTl.progress( ui.value / 100 );
	   //      },
	   //      stop:function() {
	   //          mainTl.play();
	   //      }
	   //  });

    // mainTl.eventCallback("onUpdate", function() {
    //     var prog = mainTl.progress() * 100,
    //         totalTime = mainTl.duration(),
    //         currentTime =  round(mainTl.time(), 2),
    //         timeUpdate;

    //     sliderValue.value = prog;
    //     slider.slider(sliderValue);
    //     timeUpdate = currentTime + "/" + totalTime;
        
    //     progress.html(timeUpdate);

    // });


    // function round( value, decimals ) {
    //     return Number( Math.round(value + 'e' + decimals) + 'e-' + decimals );
    // }

    //---- END REMOVE ------  


})();


