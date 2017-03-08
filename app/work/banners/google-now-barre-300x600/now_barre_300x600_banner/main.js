var masterTl = new TimelineLite();
var phoneContainerTl = new TimelineLite();
var headlinesTl = new TimelineLite();
var phoneTl = new TimelineLite();
var andy = new TimelineLite();
var cardsTl = new TimelineLite();

// dots timelines
var dotsTl = new TimelineLite();
var red = new TimelineLite();
var yellow = new TimelineLite();
var green = new TimelineLite();
var blue = new TimelineLite();


// Elements
var banner = document.getElementById('banner'),
    phoneContainer = document.getElementsByClassName('phone-container'),
    phone = document.getElementsByClassName('phone'),
    headline1 = document.getElementById('headline1'),
    headline2 = document.getElementById('headline2'),
    cards = document.getElementsByClassName('cards-container'),
    card1 = document.getElementsByClassName('card1'),
    card1Shadow = document.getElementById('card1Shadow'),
    card1Fx = document.getElementById('card1Fx'),
    card2 = document.getElementsByClassName('card2'),
    card2Fx = document.getElementById('card2Fx'),
    card3 = document.getElementsByClassName('card3'),
    cardEfx = [
        card1Shadow,
        card1Fx
    ],
    cta = document.getElementById('cta-container');

var card1Start = { x:350, y:-230, z:100, scale:1.05 },
    card1End = { x:49, y:270, z:1, rotation:0, rotationY:0, ease:Power4.easeOut},
    card2Start = { x:300, y:-250, z:100, scale:1.02 },
    card2End = { x:112,  y:203,  z:3, rotation:0, ease:Power4.easeOut},
    card3Start = {x:270, y:-280, z:100, rotation:-40},
    card3End = { x:145, y:143,  z:5, rotationY:0, rotation:0, ease:Power4.easeOut};

// set default perspective
TweenLite.set(cards, {transformStyle:"preserve-3d"});

// logo
function andyAnim() {

    andy
    // logo
    .from("#logo", 1.3, {
        autoAlpha: 0,
        ease: Power3.easeInOut
    }, 0.1)
    
    //andy
    .from(".droidBot", 0.4, {
        x: "+=30",
        y: "+=30",
        rotation:-30,
        ease: Power1.easeInOut,
        transformOrigin: "top right"
    }, 0.1)
    .from(".arm", 0.4, {
        rotation: -165,
        ease: Power2.easeOut
    }, 0.3)
    
    .from(".fingers", 0.2, {
        x: 5.5,
        y: 5.5,
        scaleX: 0.4,
        rotation: -20,
        ease: Power3.easeOut

    }, 0.4)

    return andy;
}

// Phone
function phoneAnim() {
    CSSPlugin.defaultTransformPerspective = 1000;
    phoneTl.from(phone, 1.8, {
            alpha: 0,
            rotationX: 2,
            rotationY: 3,
            rotationZ: 2,
            x: -25,
            z: -41,
            ease: Power4.easeOut
        }, 0.0);

    return phoneTl;
}

// Cards
function cardsAnim() {
    TweenLite.ease = Power3.easeOut;
    var card1Tl = new TimelineLite();
    card1Tl
    .add([
        TweenLite.from(card1, 1.5, {rotation:-15, rotationY:80}),
        TweenLite.to(card1, 0.8, {scale:1, ease:Power1.easeOut}),
        TweenLite.to(card1, 1.85, card1End, "-=1.8"),
    ])
    .add([
        TweenLite.from(card1Shadow, 0.4, {autoAlpha:0, ease:Power1.easeIn}),
        TweenLite.from(card1Shadow, 0.5, {x:"+=18", y:"-=5", z:-10, ease:Power1.easeOut})
        ], "-=1.3");

    var card2Tl = new TimelineLite();
    card2Tl
    .add([
       TweenLite.to(card2, 1.5, {rotation:-13, ease:Power3.easeOut}),
        TweenLite.from(card2, 1.6, {rotationY:60}),
        TweenLite.to(card2, 1.65, card2End, "-=1.5"),
        TweenLite.to(card2, 0.8, {scale:1, ease:Power1.easeOut, delay:0.8})
    ])
    .to(card1Fx, 0.8, {autoAlpha:0.5, ease:Power1.easeOut}, "-=0.8");
    
    var card3Tl = new TimelineLite();
    card3Tl
    .add([
        TweenLite.from(card3, 1.4, {rotationY:40}),
        TweenLite.to(card3, 1.35, card3End),
        TweenLite.to(card2Fx, 0.7, {autoAlpha:1, ease:Power1.easeOut, delay:0.7})
    ]);

    // string together cards animation timelines
    cardsTl
    .set(cards, {autoAlpha:1})
    .add(card1Tl, "+=0.42")
    .add(card2Tl, "-=0.65")
    .add(card3Tl, "-=1");

    return cardsTl;

}

// dots
function dotsAnim() {
    //copy
    blue.from("#blue", 0.42, {height: "6px", autoAlpha: 0}, 0.0);
    blue.to("#blue", 0.2, {height: "19px", y: -1}, 0.3);
    blue.to("#blue", 0.2, {height: "13px", y: 2});
    blue.to("#blue", 0.3, {height: "15px", y: 1});
    blue.to("#blue", 0.1, {height: "13px", y: 2});
    blue.to("#blue", 0.2, {height: "19px", y:-1});
    blue.to("#blue", 0.3, {height: "11px", y: 3});
    blue.to("#blue", 0.2, {height: "15px", y: 1});
    blue.to("#blue", 0.3, {height: "11px", y: 3});
    blue.to("#blue", 0.2, {height: "19px", y: -1});
    blue.to("#blue", 0.3, {height: "15px", y: 1});
    blue.to("#blue", 0.2, {height: "19px", y: -1});
    blue.to("#blue", 0.2, {height: "17px", y: 0});
    blue.to("#blue", 0.2, {height: "15px", y: 1});
    blue.to("#blue", 0.3, {height: "13px", y: 2});
    blue.to("#blue", 0.2, {height: "11px", y: 3});
    blue.to("#blue", 0.3, {height: "15px", y: 1});
    blue.to("#blue", 0.1, {height: "11px", y: 3});
    blue.to("#blue", 0.2, {height: "19px", y:-1});
    blue.to("#blue", 0.3, {height: "13px", y: 2});
    blue.to("#blue", 0.2, {height: "15px", y: 1});
    blue.to("#blue", 0.3, {height: "13px", y: 2});
    blue.to("#blue", 0.2, {height: "19px", y: -1});
    blue.to("#blue", 0.3, {height: "6px", y: 5});

    red.from("#red", 0.42, {height: "6px", autoAlpha: 0}, 0.0);
    red.to("#red", 0.2, {height: "13px", y: 2}, 0.3);
    red.to("#red", 0.2, {height: "7px", y: 5});
    red.to("#red", 0.3, {height: "9px", y: 4});
    red.to("#red", 0.1, {height: "11px", y: 3});
    red.to("#red", 0.2, {height: "13px", y: 2});
    red.to("#red", 0.3, {height: "6px", y:5});
    red.to("#red", 0.2, {height: "9px", y: 4});
    red.to("#red", 0.3, {height: "13px", y: 2});
    red.to("#red", 0.2, {height: "11px", y: 3});
    red.to("#red", 0.3, {height: "13px", y: 2});
    red.to("#red", 0.2, {height: "7px", y: 5});
    red.to("#red", 0.2, {height: "15px", y:1});
    red.to("#red", 0.2, {height: "11px", y: 3});
    red.to("#red", 0.3, {height: "9px", y: 4});
    red.to("#red", 0.2, {height: "7px", y: 5});
    red.to("#red", 0.3, {height: "13px", y: 2});
    red.to("#red", 0.1, {height: "7px", y: 5});
    red.to("#red", 0.2, {height: "13px", y: 2});
    red.to("#red", 0.3, {height: "6px", y:5});
    red.to("#red", 0.2, {height: "13px", y: 2});
    red.to("#red", 0.3, {height: "11px", y: 3});
    red.to("#red", 0.2, {height: "5px", y: 4});
    red.to("#red", 0.3, {height: "6px", y: 5});

    yellow.from("#yellow", 0.42, {height: "6px", autoAlpha: 0}, 0.0);
    yellow.to("#yellow", 0.2, {height: "23px", y: -2}, 0.3);
    yellow.to("#yellow", 0.2, {height: "11px", y: 3});
    yellow.to("#yellow", 0.3, {height: "13px", y: 2});
    yellow.to("#yellow", 0.1, {height: "11px", y: 3});
    yellow.to("#yellow", 0.2, {height: "17px", y:0});
    yellow.to("#yellow", 0.3, {height: "11px", y: 3});
    yellow.to("#yellow", 0.2, {height: "13px", y: 2});
    yellow.to("#yellow", 0.3, {height: "15px", y: 1});
    yellow.to("#yellow", 0.2, {height: "23px", y: -2});
    yellow.to("#yellow", 0.3, {height: "17px", y: 0});
    yellow.to("#yellow", 0.2, {height: "11px", y: 3});
    yellow.to("#yellow", 0.2, {height: "23px", y: -2});
    yellow.to("#yellow", 0.2, {height: "17px", y:0});
    yellow.to("#yellow", 0.3, {height: "11px", y: 3});
    yellow.to("#yellow", 0.2, {height: "11px", y: 3});
    yellow.to("#yellow", 0.3, {height: "17px", y: 0});
    yellow.to("#yellow", 0.2, {height: "23px", y:-2});
    yellow.to("#yellow", 0.1, {height: "11px", y: 3});
    yellow.to("#yellow", 0.3, {height: "13px", y: 2});
    yellow.to("#yellow", 0.2, {height: "17px", y: 0});
    yellow.to("#yellow", 0.2, {height: "23px", y: -2});
    yellow.to("#yellow", 0.3, {height: "11px", y: 3});
    yellow.to("#yellow", 0.3, {height: "6px", y: 5});

    green.from("#green", 0.42, {height: "6px", autoAlpha: 0}, 0.0);
    green.to("#green", 0.2, {height: "11px", y: 3}, 0.3);
    green.to("#green", 0.2, {height: "13px", y: 2});
    green.to("#green", 0.3, {height: "9px", y: 4});
    green.to("#green", 0.1, {height: "7px", y: 5});
    green.to("#green", 0.2, {height: "11px", y: 3});
    green.to("#green", 0.3, {height: "7px", y: 5});
    green.to("#green", 0.2, {height: "9px", y: 4});
    green.to("#green", 0.3, {height: "7px", y: 5});
    green.to("#green", 0.2, {height: "13px", y: 2});
    green.to("#green", 0.3, {height: "15px", y:1});
    green.to("#green", 0.2, {height: "13px", y: 2});
    green.to("#green", 0.2, {height: "11px", y: 3});
    green.to("#green", 0.2, {height: "13px", y: 2});
    green.to("#green", 0.3, {height: "11px", y: 3});
    green.to("#green", 0.3, {height: "9px", y:4});
    green.to("#green", 0.1, {height: "13px", y: 2});
    green.to("#green", 0.2, {height: "15px", y: 1});
    green.to("#green", 0.2, {height: "11px", y: 3});
    green.to("#green", 0.3, {height: "7px", y: 5});
    green.to("#green", 0.2, {height: "11px", y: 3});
    green.to("#green", 0.2, {height: "15px", y: 1});
    green.to("#green", 0.3, {height: "7px", y: 5});
    green.to("#green", 0.3, {height: "6px", y: 5});

    dotsTl
    .add([blue, red, yellow, green]);

    return dotsTl;

}

// animates the headlines
function headlinesAnim() {
    // headline 1
    headlinesTl.from(headline1, 1.7, {autoAlpha:0, ease:Power3.easeOut}, 1);

    // headline 2
    headlinesTl
    .to(headline1, 0.6, {autoAlpha:0, ease:Power2.easeInOut}, 5.2)
    .from(headline2, 1.7, {autoAlpha:0, ease:Power3.easeOut}, "+=0.4");
    // .call(function(){console.log(headlinesTl.duration());});

    return headlinesTl;
}

// put everything all together

function createMasterTl() {

    // phone slides in
    cardsTl.timeScale(1.2);
    masterTl
    .set(card1, card1Start)
    .set(card2, card2Start)
    .set(card3, card3Start)
    .set(banner, {autoAlpha:1}, 0.1)
    .add([dotsAnim, headlinesAnim])
    // animate logo
    .add(andyAnim)
    
    // tween phone in
    .add(phoneAnim)

    // start animating the cards
    .add(cardsAnim, 0.75)

    .add("endFrame", 6.8)

    // cta
    .from(cta, 1, {
        autoAlpha:0,
        y:"+=10",
        ease:Power1.easeOut,
        force3D:true,
        onComplete:enableCta
    }, "endFrame")
    .add(andyBlink, "endFrame");

    // console.log(masterTl.duration());

}

function andyBlink(){
    // andy.play("blink");
    var tl = new TimelineLite();
    tl
    .to(".Leye", 0.07, {
        scaleX: 0.0,
        ease: Power1.easeInOut
    }, 0.1)
    .to(".Reye", 0.07, {
        scaleX: 0.0,
        ease: Power1.easeInOut
    }, 0.1)
    
    .to(".Leye", 0.07, {
        scaleX: 1,
        ease: Power1.easeInOut
    }, 0.3)
    .to(".Reye", 0.07, {
        scaleX: 1,
        ease: Power1.easeInOut
    }, 0.3);
}


var ctaTl = new TimelineLite({paused:true});
ctaTl
    .add("start")
    .to(cards, 0.8, {rotationY: -8, ease:Power1.easeInOut}, "start")
    .to(card1, 0.8, {x:"+=2", z:"+=5", ease:Power1.easeInOut}, "start")
    .to(card2, 0.8, {x:"-=4", z:"+=5", ease:Power1.easeInOut}, "start")
    .to(card3, 0.8, {x:"-=6", z:"+=5", ease:Power1.easeInOut}, "start");

function enableCta() {
    banner.onmouseover = doMouseOver;
}

function doMouseOver(e){
        e.stopPropagation();

        TweenLite.to("#ctaBox", 0.3, {
            backgroundColor:"#5ca83a"
        });

        ctaTl.play();

        banner.onmouseover = null;
        banner.onmouseout = doMouseOut;

}

function doMouseOut() {

        TweenLite.to("#ctaBox", 0.1, {
            backgroundColor:"#79c259"
        });

        ctaTl.reverse();

        banner.onmouseout = null;
        banner.onmouseover = doMouseOver;

}



function init() {

    createMasterTl();
}

