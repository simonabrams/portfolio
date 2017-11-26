// init FT objects
var myFT = new FT();

// defines banner elements
var banner = document.getElementById('banner'),
    bg = document.getElementById('bg'),
    card = document.getElementsByClassName('card'),
    facets = document.getElementsByClassName('facets'),
    logo = document.getElementsByClassName('logo'),
    text_1 = document.getElementsByClassName('text_1'),
    text_2 = document.getElementsByClassName('text_2'),
    text_3 = document.getElementsByClassName('text_3'),
    headline1 = document.getElementById("headline1"),
    headline2 = document.getElementById("headline2"),
    headline3 = document.getElementById("headline3"),
    text_subhead = document.getElementsByClassName('text-subhead'),
    offscreen = document.getElementsByClassName('off-screen'),
    cta = document.getElementById('cta'),
    replay = document.getElementById('replay'),
    ctaColor = "#289fc3",
    ctaOverColor = "#248faf",
    WIDTH = 300,
    HEIGHT = 250,
    mainTl;

var errorMessage = {};

// set up clickthroughs
myFT.applyClickTag(cta, 1);

// populate instantAd components
myFT.on("instantads", function() {
    console.log("Instant Ads Loaded");

    var instantAds = myFT.instantAds;
    errorMessage = {
        line1: instantAds.errorMessage1,
        line2: instantAds.errorMessage2,
        line3: instantAds.errorMessage3
    };

    var ftFeed = new FTFeed(myFT);
    ftFeed.getFeed(feedLoaded, feedLoadError);
});

function feedLoaded(feedItems, feedUrl) {
    // console.log("Feed URL: " + feedUrl);
    console.log(feedItems);

    var destName, points;
    if (feedItems.length > 0){
        // get destination name
        destName = feedItems[0]['destinationCityName'];
        // get destination points 
        points = feedItems[0]['points'];
    }

    var h1, h2, h3;

    // if we get a valid result from the feed for destiation name,
    // set the destination and populate the headlines
    if (destName !== undefined && points !== undefined){
        // assemble the headline text
        h1 = 'Planning a trip to<br><span class="dyn-text">' + destName + "?</span>";
        h2 = 'That&apos;s <span class="dyn-text">' + points + '</span> points<br>when you book with<br>Chase Sapphire Preferred.<sup>&reg;</sup>';
        h3 = '<span class="dyn-text">' + points + '</span> points earned on<br>your trip to ' + destName + '.<br><span class="kerned-text">Use them wherever you go next.</span>';
    } else {
        // if the destination name is invalid, use generic text
        h1 = errorMessage.line1;
        h2 = errorMessage.line2;
        h3 = errorMessage.line3;
    }

    // set the headline text
    setHeadlines(h1, h2, h3);
    // use fitText to make sure the font size fits in the given space
    $(headline3).fitText(1.5, {minFontSize:'12px', maxFontSize:'15px'});

    // set offscreen text
    var offscreenText = '<p>' + h1 + '<p>' + h2 + '<p>' + h3;
    offscreen[0].innerHTML = offscreenText;

    // start animation
    mainTl = new TimelineLite({ onComplete: completeHandler });
    main();

}

// feed error handling
function feedLoadError(errorMsg, feedUrl) {
    // console.log(errorMsg + ". Feed URL: " + feedUrl);
    var h1 = errorMessage.line1,
        h2 = errorMessage.line2,
        h3 = errorMessage.line3;

    setHeadlines(h1, h2, h3);
}


function setHeadlines(l1, l2, l3) {

    // set the headlines
    headline1.innerHTML = l1;
    headline2.innerHTML = l2;
    headline3.innerHTML = l3;

}



document.execCommand("BackgroundImageCache", false, true);


// Add interactivity

// cta event handlers
cta.addEventListener('mouseover', function(event) {
    TweenMax.set(cta, { backgroundColor: ctaOverColor, ease: Power1.easeInOut });
});

cta.addEventListener('mouseout', function(event) {
    TweenMax.set(cta, { backgroundColor: ctaColor, ease: Power1.easeInOut });
});


// play/pause
controls.addEventListener('mousedown', togglePlayPause, false);

// replay
btn_replay.addEventListener('mousedown', replayBanner, false);
btn_replay.addEventListener('mouseover', function() {
    TweenMax.to(this, 0.3, {
        rotationZ: 360,
        transformOrigin: "50% 4.5px",
        onComplete: function() {
            TweenMax.set(btn_replay, { rotationZ: 0 });
        }
    });
});


// keyboard events
document.addEventListener('keydown', keyboardEventHandler, false);


/** 
 *
 *  Animation
 */

// main animation function
function main() {
    mainTl
    // add a start label
    .add("start", 0.5)
    .set(banner, { autoAlpha: 1 })
    // show the card
    .from(card, 2, { autoAlpha:0, scale: 1.1, rotationY: -80, force3D: true, z:100, rotationZ: 0.001, ease: Power3.easeOut }, "start+=0.2")
    .from(facets, 0.75, { autoAlpha: 0, scale:0.2, ease: Power3.easeOut }, "start+=1")
    // show the logo
    .from(logo, 0.6, { y: "+=30", autoAlpha: 0, ease: Power3.easeOut }, "start+=0.4")

    // show the text and animate it in
    .to(text_1, 0.8, { autoAlpha: 1 }, "start")
    .from(text_1, 0.4, { y: "+=10", ease: Power3.easeOut }, "start+=0.1")


    // frame 2
    .add("frame2", "+=1.25")
    .to(text_1, 0.4, { autoAlpha: 0 }, "frame2")
    .from(text_2, 0.8, { autoAlpha: 0, ease: Power3.easeOut }, "frame2+=0.6")
    .to(cta, 0.4, { autoAlpha: 1 }, "frame2+=1.4")
    .from(cta, 0.4, { y: "+=30", ease: Back.easeOut }, "frame2+=1.4")

    // end frame
    .add("endframe", "+=1.5")
    .to(text_2, 0.4, { autoAlpha: 0 }, "endframe")
    .from(text_3, 0.8, { autoAlpha: 0, y: "-=20", ease: Power3.easeOut }, "endframe+=0.8")
    .from(text_subhead, 1.2, {autoAlpha:0, scale:1.2, ease: Power3.easeOut}, "endframe+=1");
}

// banner complete - show replay button
function completeHandler() {
    TweenMax.to(btn_pause, 0.1, { autoAlpha: 0 });
    TweenMax.to(btn_replay, 0.1, { autoAlpha: 1 });
}

// clickthrough
function doClickThrough() {
    myFT.clickTag();
}

// respond to keyboard events
function keyboardEventHandler(e) {
    var keyCode = e.which || e.keyCode;
    if (keyCode == 32) {
        switch (document.activeElement.id) {
            // we're on the pause button - play or pause the banner
            case 'controls':
                if (mainTl.progress() < 1) {
                    doPlayPause();
                } else if (mainTl.progress() == 1) {
                    restartBanner();
                }
                break;

            case 'cta':
                doClickThrough();
                break;
            default:
                break;
        }
    }
}

// plays/pauses the timeline
function togglePlayPause(e) {
    if (e.target.id == 'btn_pause' || e.target.id == 'btn_play') {
        doPlayPause(e);
    }
}

function doPlayPause() {
    if (mainTl.paused()) {
        TweenMax.set(btn_pause, { autoAlpha: 1 });
        TweenMax.set(btn_play, { autoAlpha: 0 });
    } else {
        TweenMax.set(btn_pause, { autoAlpha: 0 });
        TweenMax.set(btn_play, { autoAlpha: 1 });
    }
    mainTl.paused(!mainTl.paused());
}

// replay banner animation
function replayBanner(e) {
    if (e.target.id == 'btn_replay') {
        restartBanner();
    }
}

function restartBanner() {
    TweenMax.set(btn_play, { autoAlpha: 0 });
    TweenMax.to(btn_pause, 0.1, { autoAlpha: 1 });
    TweenMax.to(btn_replay, 0.1, { autoAlpha: 0 });
    mainTl.restart();
}

