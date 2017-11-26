

(function () {

    var state = document.readyState;
    if (state === 'interactive' || state === 'complete') {

        var rootContainer = document.getElementById("rootContainer");
        var phoneContainer = document.getElementById("phoneContainer");
        var phone = document.getElementById("phone");	
        var tl = new TimelineLite();
        var red = new TimelineLite();
        var yellow = new TimelineLite();
        var green = new TimelineLite();
        var blue = new TimelineLite();
        var words = new TimelineLite();
        var phone = new TimelineLite();
        var shadow = new TimelineLite();
        var cta = document.getElementById("ctaContainer");
        var catchAll = document.getElementById("catchAllContainer");


        //copy
        
        words.set("#mainContainer", {autoAlpha: 1});
        words.from(".copy01", 1.9, {autoAlpha: 0, ease:Power3.easeOut}, 0.0);
        words.staggerTo(".copy01", 0.7, {autoAlpha: 0,  ease:Power2.easeInOut}, 0.2, 2.7);  

        words.from(".copy02", 1.9, {autoAlpha: 0, ease:Power3.easeOut}, 3.5);

        //ctaAnim

       tl.from("#ctaContainer", 0.9, {force3D: true, autoAlpha: 0, y:'+=10', ease:Power1.easeOut}, 3.6);

        cta.onmouseover = function() {
            TweenLite.to("#ctaBox", 0.5, {backgroundColor: "#5ca83a"});
        }

        cta.onmouseout = function() {
            TweenLite.to("#ctaBox", 0.5, {backgroundColor: "#79c259"});
        }


        //logo

        tl.from("#logo", 1.3, {autoAlpha: 0, ease:Power3.easeOut}, 0.0);

        //andy
        

        tl.from(".droidBot", 0.4, {x: "+=30", y: "+=30", rotation:-30, ease: Power1.easeInOut, transformOrigin: "top right"}, 0.1);
        tl.from(".arm", 0.4, {rotation: -165, ease: Power2.easeOut}, 0.3);

        tl.from(".fingers", 0.2, {x: 5, y: 5, scaleX: 0.5, rotation: -20, ease:Power3.easeInOut}, 0.45);

        tl.to(".Leye", 0.07, {scaleX: 0.0, x: 1, y:-1, ease:Power1.easeInOut}, 4.0);
        tl.to(".Reye", 0.07, {scaleX: 0.0, x: 1, y: -1, ease:Power1.easeInOut}, 4.0);

        tl.to(".Leye", 0.07, {scaleX: 1, x: 0, y: 0, ease:Power1.easeInOut}, 4.2);
        tl.to(".Reye", 0.07, {scaleX: 1, x: 0, y: 0, ease:Power1.easeInOut}, 4.2);




        //bars

        //copy1
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
   
        //phone//


        CSSPlugin.defaultTransformPerspective = 500;


        phone.from(phoneContainer, 1.8, {force3D: true, alpha: 0, rotationX: 2, rotationY: 3, rotationZ: 2, x:-25, scale: 0.9, ease:Power4.easeOut}, 0.0);

        //phone.pause(2);

        // phone.from("#photo01", 1.5, {css:{scale:1.8, rotationY: 40, rotationZ: 70, x:-370, y:-100, z:80}, ease:Power3.easeOut}, 1.4);
        phone.roundProps = "rotationX, rotationY, rotationZ";
        phone.add([
            TweenLite.from("#photo01", 1.4, {y: -320, ease:Power4.easeOut}),
            TweenLite.from("#photo01", 1.55, {scale: 2.05, z: 80, ease:Power3.easeOut}),
            TweenLite.from("#photo01", 2.0, {rotationZ: -70, ease:Power2.easeOut}),
            TweenLite.from("#photo01", 2.1, {rotationY: 40, x: 288, ease:Power3.easeOut})
        ], 0.3);

        phone.add([
            TweenLite.from("#photo02", 1.45, {y: -320, ease:Power4.easeOut}),
            TweenLite.from("#photo02", 1.7, {scale: 2.05, z: 80, rotationZ: 54, ease:Power3.easeOut}),
            TweenLite.from("#photo02", 2.0, {rotationX: 45, ease:Power2.easeOut}),
            TweenLite.from("#photo02", 2.1, {rotationY: 40, x: 240, ease:Power3.easeOut})
        ], "-=1.85");
        phone.add([
            TweenLite.from("#photo03", 1.5, {y: -335, ease:Power3.easeOut}),
            TweenLite.fromTo("#photo03", 1.5, {scale: 2.0, z: 80}, {scale: 1, z: 1, ease:Power3.easeOut}),
            TweenLite.from("#photo03", 2.15, {rotationX: -10, ease:Power2.easeOut}),
            TweenLite.from("#photo03", 2.3, {rotationY: 50, rotationZ: -74, x: 185, ease:Power3.easeOut})
        ], "-=1.85");
        phone.add([
            TweenLite.from("#photo04", 1.6, {y: -347, ease:Power4.easeOut}),
            TweenLite.fromTo("#photo04", 1.8, {scale: 1.85, z: 80, rotationZ: -91}, {scale:1, z:2, rotationZ:0, ease:Power3.easeOut}),
            TweenLite.from("#photo04", 2.1, {rotationY: -30, ease:Power2.easeOut}),
            TweenLite.from("#photo04", 2.25, {x: 195, ease:Power3.easeOut})
        ], "-=2");
        phone.add([
            TweenLite.from("#photo05", 1.9, {y: -302, ease:Power3.easeOut}),
            TweenLite.fromTo("#photo05", 1.7, {scale: 1.8, z: 80, rotationZ: -70}, {scale: 1, z: 3, rotationZ: 0, ease:Power3.easeOut}),
            TweenLite.from("#photo05", 2.35, {rotationX: 48, ease:Power2.easeOut}),
            TweenLite.from("#photo05", 2.35, {rotationY: 40, x: 83, ease:Power3.easeOut})
        ], "-=2.0");
        phone.add([
            TweenLite.from("#photo06", 2.1, {y: -240, ease:Power4.easeOut}),
            TweenLite.fromTo("#photo06", 2.2, {scale: 1.9, z: 80, rotationZ: -44}, {scale: 1, z:4, rotationZ:0, ease:Power3.easeOut}),
            TweenLite.from("#photo06", 2.3, {rotationY: 41, ease:Power2.easeOut}),
            TweenLite.from("#photo06", 2.4, {rotationX: 35, x: 60, ease:Power3.easeOut})
        ], "-=2.0");
        phone.add([
            TweenLite.from("#photo07", 2.1, {y: -263, ease:Power3.easeOut}),
            TweenLite.fromTo("#photo07", 2.2, {scale: 1.6, z: 60, rotationZ: -23}, {scale: 1, z: 5, rotationZ:0, ease:Power3.easeOut}),
            TweenLite.from("#photo07", 2.4, {rotationX: 61, ease:Power2.easeOut}),
            TweenLite.from("#photo07", 2.4, {rotationY: -40, x: 35, ease:Power3.easeOut})
        ], "-=2.0");
        phone.add([
            TweenLite.from("#photo08", 2.1, {y: -229, ease:Power3.easeOut}),
            TweenLite.from("#photo08", 2.4, {scale: 1.5, z: 60, rotationX: 5, ease:Power3.easeOut}),
            TweenLite.from("#photo08", 2.6, {rotationZ: 22, ease:Power2.easeOut}),
            TweenLite.from("#photo08", 2.7, {rotationY: 40, x: -2, ease:Power3.easeOut})
        ], "-=1.95");


        shadow.from("#shadow01", 1.3, {autoAlpha: 0, ease:Power2.easeInOut}, 1.3);  
        shadow.from("#shadow02", 1.5, {autoAlpha: 0, ease:Power2.easeInOut}, 1.6); 
        shadow.from("#shadow03", 1.5, {autoAlpha: 0, ease:Power2.easeInOut}, 1.7); 
        shadow.from("#shadow04", 1.8, {autoAlpha: 0, ease:Power2.easeInOut}, 1.9); 
        shadow.from("#shadow05", 1.9, {autoAlpha: 0, ease:Power2.easeInOut}, 2.1);
        shadow.from("#shadow06", 2.1, {autoAlpha: 0, ease:Power2.easeInOut}, 2.4); 

        shadow.from("#phoneShadow", .9, {autoAlpha: 0}, 1.4);


    } else {setTimeout(arguments.callee, 100); }

})();
