var clickTag = "http://google.com";
var d5banner = d5banner || {};

d5banner.main = function() {
    document.getElementById("banner").addEventListener("click",
    function(e){
      if(e.target.id == "disclaimer-btn"){
        return;
      }
      if(e.target.id == "disclaimer-x"){
        return;
      }
        window.open(window.clickTag);
    });

    var mainTl = new TimelineLite(),
        bgTl = new TimelineLite(),
        carTl = new TimelineLite(),
        copyTl = new TimelineLite();

    var banner = document.getElementById('banner');
    mainTl.set(banner, {autoAlpha:0});

    var logoBig = document.getElementsByClassName('logo-big'),
        logoSmall = document.getElementsByClassName('logo-small'),
        hashtag = document.getElementById('hashtag'),
        hashtagGrey = document.getElementById('hashtag-grey'),
        red = document.getElementsByClassName('red'),
        white = document.getElementsByClassName('white'),
        blue = document.getElementsByClassName('blue'),
        mask1 = document.getElementById('mask1'),
        mask2 = document.getElementById('mask2'),
        mask3 = document.getElementById('mask3'),
        mask4 = document.getElementById('mask4'),
        copy1 = document.getElementById('text1'),
        copy2 = document.getElementById('text2'),
        copy3 = document.getElementById('text3'),
        copy4 = document.getElementById('text4'),
        copy5 = document.getElementById('text5'),
        genone = document.getElementsByClassName('genone'),
        cars = [
            document.getElementById('car1'),
            document.getElementById('car2'),
            document.getElementById('car3'),
            document.getElementById('car4'),
            document.getElementById('car5')
        ],
        endframe = document.getElementById('endframe'),
        cta = document.getElementsByClassName('cta'),
        mask = document.getElementById('clipPolygon'),
        disclaimerBtn = document.getElementById('disclaimer-btn'),
        disclaimerPanel = document.getElementById('disclaimer-panel'),
        closeBtn = document.getElementById('disclaimer-x');


    // Set up car objects
    var im = {};
    im.car = document.getElementById('iM');
    im.rearwheel = document.getElementById('iM').getElementsByClassName('wheel rear');
    im.frontwheel = document.getElementById('iM').getElementsByClassName('wheel front');
    im.body = document.getElementById('iM').getElementsByClassName('car-body');

    var frs = {};
    frs.car = document.getElementById('frs');
    frs.rearwheel = document.getElementById('frs').getElementsByClassName('wheel rear');
    frs.frontwheel = document.getElementById('frs').getElementsByClassName('wheel front');
    frs.body = document.getElementById('frs').getElementsByClassName('car-body');

    var ia = {};
    ia.car = document.getElementById('iA');
    ia.rearwheel = document.getElementById('iA').getElementsByClassName('wheel rear');
    ia.frontwheel = document.getElementById('iA').getElementsByClassName('wheel front');
    ia.body = document.getElementById('iA').getElementsByClassName('car-body');



    // animation
    function bgIn(e) {
        var _bg = e;
        var _tl = new TimelineLite();
        // _tl.from(_bg, 1.2, {x:-450, ease:Power3.easeInOut});
        _tl.from(_bg, 1.2, { clip:"rect(0, -450px, 250px, -450px)", ease:Power3.easeInOut});

        return _tl;
    }

    function carIn(e) {
        var _car = e.car;
        var _wheels = [e.frontwheel, e.rearwheel];
        var _body = e.body;
        var _tl = new TimelineLite();
        _tl.from(_car, 1, {x:-400, ease:Power3.easeInOut})
            .from(_wheels, 1, {rotation:-360}, "-=1.2")
            .to(_body, 0.5, {rotation:1}, "-=0.3")
            .to(_body, 0.3, {rotation:0});

        return _tl;
    }

    function carOut(e) {
        var _car = e.car;
        var _wheels = [e.frontwheel, e.rearwheel];
        var _body = e.body;
        var _tl = new TimelineLite();
        _tl.to(_car, 1, {x:400, ease:Power3.easeIn})
            .to(_wheels, 1, {rotation:360, ease:Power3.easeIn}, "-=1");

        return _tl;
    }

    function copyIn(e) {
        var _copy = e;
        var _mask = _copy.parentNode;
        var _tl = new TimelineLite();

        _tl.set(_mask, {rotation:20, left: -120});
        _tl.set(_copy, {rotation:-20, left: -150});

        _tl.from(_mask, 1.2, { clip:"rect(0, 0, 250px, 0)", ease:Power3.easeInOut });

        return _tl;
    }

    function copyOut(e) {
        var _copy = e;
        var _mask = _copy.parentNode;

        var _tl = new TimelineLite();
        _tl.to(_mask, 1.2, { clip:"rect(0, 480px, 250px, 480px)", ease:Power3.easeInOut });

        return _tl;
    }


    // button actions
    function enableDisclaimer() {
        disclaimerBtn.style.cursor = "pointer";
        closeBtn.style.cursor = "pointer";

        disclaimerBtn.onclick = function showDisclaimer(e) {
          e.preventDefault();
            TweenLite.to(disclaimerPanel, 0.6, {top: 150, parseTransform:true, ease:Power2.easeOut});
            return false;
        }

        closeBtn.onclick = function hideDisclaimer(e) {
          e.preventDefault();
            TweenLite.to(disclaimerPanel, 0.4, {top: 250, parseTransform:true, ease:Power2.easeIn});
            return false;

        }

        banner.onmouseover = ctaOver;
        banner.onmouseout = ctaOut;
    }


    function ctaOver() {
        TweenLite.to(cta, 0.6, {backgroundColor:"#4670a8", ease:Power3.easeOut});
    }
    function ctaOut() {
        TweenLite.to(cta, 0.6, {backgroundColor:"#1d4e8f", ease:Power3.easeOut});
    }

    // master timeline
    function mainAnimation() {

        mainTl
            .set(banner, {autoAlpha:1})
            .from(logoBig, 1.2, {scale:1.5, autoAlpha:0, ease:Power3.easeInOut}, 0.5)
            .add("blueIn", 1.5)
            .from([hashtag, logoSmall], 0.5, {autoAlpha: 0, ease:Power3.easeInOut}, "blueIn+=0.5")
            .add(bgIn(blue), "blueIn")
            .add(carIn(im), "blueIn-=0.3")
            .add(copyIn(copy1), "blueIn")

            .to(copy1, 0.3, {autoAlpha:0, ease:Power2.easeOut}, 3.5)
            .from(copy2,1, {autoAlpha:0, ease:Power2.easeInOut}, 3.8)

            .add("blueOut", 5.5)
            .add(carOut(im), "blueOut-=0.3")
            .add(copyOut(copy2), "blueOut")

            .add("redIn", 5.5)
            .add(bgIn(red), "redIn")
            .add(carIn(frs), "redIn")
            .add(copyIn(copy3), "redIn")

            .add("redOut", 8)
            .add(carOut(frs), "redOut-=0.3")
            .add(copyOut(copy3), "redOut")

            .add("whiteIn", 8)
            .from(hashtagGrey, 0.2, {autoAlpha: 0}, "whiteIn+=0.5")
            .to(hashtag, 0.2, {autoAlpha: 0}, "whiteIn+=0.5")
            .add(bgIn(white), "whiteIn")
            .add(carIn(ia), "whiteIn")
            .add(copyIn(copy4), "whiteIn")

            .add("whiteOut", 11)
            .add(carOut(ia), "whiteOut")
            .add(copyOut(copy4), "whiteOut")

            .add("endFrame", 12.4)
            .to(hashtagGrey, 0.2, {autoAlpha:0, ease:Power2.easeOut}, "endFrame+=0.7")
            .from(genone, 0.3, {autoAlpha:0, ease:Power2.easeOut}, "endframe")
            .staggerFromTo(".car-wrapper", 1.5, {autoAlpha:0, scale:0.8}, {autoAlpha: 1, scale:1, ease:Power3.easeOut}, 0.1, "endframe")
            .from(copy5, 1, {autoAlpha:0, y:"+=10", ease:Power3.easeOut}, "endframe")
            .from(cta, 0.4, {autoAlpha: 0, y: "+=10", ease:Back.easeOut}, "endFrame+=1")
            .from(disclaimerBtn, 0.5, {autoAlpha:0, ease:Power2.easeOut, onComplete:enableDisclaimer}, "endFrame");

    }

    mainAnimation();

};
