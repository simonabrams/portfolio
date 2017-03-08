/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
    	card1 = document.getElementById('card1'),
    	card2 = document.getElementById('card2'),
    	ellie1 = document.getElementById('ellie1'),
    	ellie2 = document.getElementById('ellie2'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('cta'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),
        copy4 = document.getElementById('copy4'),
        headline = document.getElementById('headline'),
        logo = document.getElementById('logo'),


        // constants for banner dimensions
        WIDTH = 300,
        HEIGHT = 600,
        copyStart = -520,
        copyEnd = 200,
        copyEase = Power1.easeOut,
        copySpeed = 0.65,

        ctaOverColor = "#000",
        ctaDefaultColor = "#0092ff";


    var mainTl = new TimelineLite({onComplete:completeHandler});



    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // show copy1
        .add("frame1")
        .from(copy1, copySpeed, {y: copyStart, ease: copyEase}, "frame1")
        // show card
        .to(card1, 0.5, {autoAlpha:1}, "frame1")
        .from(card1, 0.6, {x: WIDTH, y: HEIGHT, rotationZ:-35, ease:Power1.easeOut}, "frame1+=0.6")

        // frame 2
        // hide frame 1 copy
        .add("frame2", "+=1.4")
        .to(copy1, copySpeed, {y: copyEnd, ease: copyEase}, "frame2")
        .from(copy2, copySpeed, {autoAlpha: 0, y: copyStart, ease: copyEase}, "frame2")

        // frame 3
        // hide frame 2 copy
        .add("frame3", "+=2.8")
        .to(copy2, copySpeed, {y: copyEnd, ease: copyEase}, "frame3")
        .from(copy3, copySpeed, {autoAlpha: 0, y: copyStart, ease: copyEase}, "frame3")
        // hide credit card image
        .to(card1, 0.75, {rotationZ: -35, x: WIDTH, y: HEIGHT, ease:Back.easeIn.config(0.5)}, "frame3+=0.5")
        // ellie!
        .from(ellie1, 0.5, {autoAlpha: 0, y:HEIGHT, ease:Back.easeOut.config(0.4)}, "frame3+=1")

        // frame 4
        .add("frame4", "+=1.8")
        // hide frame 3 copy
        .to(copy3, copySpeed, {y: copyEnd, ease: copyEase}, "frame4")
        .from(copy4, copySpeed, {autoAlpha: 0, y: copyStart, ease: copyEase}, "frame4")

        // ellie again!
        .add("ellieSwap")
        .to(ellie1, 0.3, {autoAlpha: 0, ease:Power2.easeIn}, "ellieSwap")
        .from(ellie2, 0.4, {autoAlpha: 0, ease:Power2.easeOut}, "ellieSwap")

        // end frame
        .add("endFrame", "+=2.4")
        // ellie out!
        .staggerTo([ellie2, copy4], 0.75, {y:HEIGHT, ease:Power1.easeInOut}, 0.1, "endFrame")
        .staggerFrom([card2, headline], 0.75, {y: copyStart, ease:Power1.easeInOut}, 0.2, "endFrame+=0.1")
        .to(footer, 0.25, {height: 124, ease:Power2.easeOut}, 'endFrame+=0.1')
        .fromTo(cta, 0.5, {y:"+=20", autoAlpha:0}, {y:"0", autoAlpha:1, ease:Back.easeInOut});


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
    btn_pause.addEventListener('mousedown', togglePlayPause, false);
    // btn_pause.addEventListener('keydown', togglePlayPause, false);

    function togglePlayPause(e){
    	if (e.target.id == 'btn_pause') {
	    	if (mainTl.paused()){
	    		TweenMax.set(btn_pause, {backgroundPositionX:'0px'});
	    	} else {
	    		TweenMax.set(btn_pause, {backgroundPositionX:'-10px'});
	    	}
	    	mainTl.paused(!mainTl.paused());
	    }
    }

    // replay
    btn_replay.addEventListener('mouseover', function(){
    	TweenMax.to(this, 0.3, {rotationZ: 360, transformOrigin:"50% 6.5px",
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
    			case "hit":
	    			vendorClickHandler();
    				break;
    			case 'btn_replay':
    				TweenMax.set(btn_pause, {backgroundPositionX:'0px'});
			    	TweenMax.to(btn_pause, 0.1, {autoAlpha: 1});
			    	TweenMax.to(btn_replay, 0.1, {autoAlpha: 0});
			    	mainTl.restart();
    				break;
    			case 'btn_pause':
    				if (mainTl.paused()){
			    		TweenMax.set(btn_pause, {backgroundPositionX:'0px'});
			    	} else {
			    		TweenMax.set(btn_pause, {backgroundPositionX:'-8px'});
			    	}
			    	mainTl.paused(!mainTl.paused());
    				break;
    			case 'cta':
    				vendorClickHandler();
    				break;
    			default:
    				break;
    		}
    	}
    }

    document.addEventListener('keydown', keyboardEventHandler, false);

    //---SLIDER - REMOVE -----

    var slider = $("#ctrl_slider"),
        progress = $(".progress");
	    sliderValue = {value:0};
	    slider.slider({
	        range: false,
	        min: 0,
	        max: 100,
	        step:.1,
	        start:function() {
	            mainTl.pause();
	        },
	        slide: function ( event, ui ) {
	            mainTl.progress( ui.value / 100 );
	        },
	        stop:function() {
	            mainTl.play();
	        }
	    });

    mainTl.eventCallback("onUpdate", function() {
        var prog = mainTl.progress() * 100,
            totalTime = mainTl.duration(),
            currentTime =  round(mainTl.time(), 2),
            timeUpdate;

        sliderValue.value = prog;
        slider.slider(sliderValue);
        timeUpdate = currentTime + "/" + totalTime;

        progress.html(timeUpdate);

    });


    function round( value, decimals ) {
        return Number( Math.round(value + 'e' + decimals) + 'e-' + decimals );
    }

    //---- END REMOVE ------


})();
