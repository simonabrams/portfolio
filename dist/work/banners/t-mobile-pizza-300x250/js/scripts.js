/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        tmo = document.getElementsByClassName('tmo'),
        frame1Bg = document.getElementById('frame1Bg'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('button'),
        text1 = document.getElementById('text1'),
        text2 = document.getElementById('text2'),
        text3 = document.getElementById('text3'),
        text4 = document.getElementById('text4'),
        image = document.getElementById('image'),
        dominos = document.getElementById('logo-dominos'),
        headline = document.getElementById('headline'),
        subhead = document.getElementById('subhead'),

        // constants for banner dimensions
        WIDTH = 300,
        HEIGHT = 250,

        ctaOverColor = "#000",
        ctaDefaultColor = "#2ba854";


    var mainTl = new TimelineMax();



    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.25)

        // show copy1
        // fade out intro frame
        // .from('#logo', 0.75, {autoAlpha: 0, ease:Strong.easeOut}, 'start')
        .from(text1, 0.5, {x:-WIDTH, ease:Back.easeOut.config(1)}, 'start')
        // show copy2
        .from(text2, 0.5, {x:WIDTH, ease:Back.easeOut.config(1)}, "start+=0.5")
        // transition out
        .add("copy1Out", 4.5)
        .to(text1, 0.8, {x:WIDTH, ease:Elastic.easeInOut.config(1, 0.75)}, "copy1Out")
        .to(text2, 0.8, {x:-WIDTH, ease:Elastic.easeInOut.config(1, 0.75)}, "copy1Out")
        // image
        .to(logo, 0.2, {autoAlpha:0})
        .from(image, 1, {y:HEIGHT, ease:Expo.easeOut})
        
        // transition image out
        .add("imageOut", 9.75)
        .to(image, 0.75, {autoAlpha: 0, ease:Power1.easeOut}, 'imageOut')
        .to(logo, 0.2, {autoAlpha:1}, "imageOut+=1")
        // partner frame
        .from(text3, 0.5, {x:-WIDTH, ease:Back.easeOut.config(1)}, "imageOut+=0.5")
        .from(text4, 0.5, {x:WIDTH, ease:Back.easeOut.config(1)}, "imageOut+=1")
        .from(dominos, 0.5, {autoAlpha:0, scale:0, ease:Back.easeOut}, 'imageOut+=1.4')
        .from(legal, 0.5, {autoAlpha:0}, 'imageOut+=1')
        
        // endframe
        .add("endFrame", 14)
        .from('#endFrameBg', 0.75, {autoAlpha:0, ease:Power1.easeOut}, "endFrame")
        .to(logo, 0.75, {autoAlpha:0}, "endFrame")
        .from([headline, subhead], 0.5, {y:HEIGHT, ease:Strong.easeOut}, "endFrame+=0.9")
        .from(cta, 0.5, {y:"-=50", ease:Back.easeOut}, "endFrame+=1.6")
        .to(subhead, 0.25, {scale:1.1, delay:0.15, ease:Strong.easeOut, yoyo:true, repeat:1}, "+=0.4")
        .from(disclaimer, 0.5, {autoAlpha:0}, 'endFrame+=0.9')


    mainTl.timeScale(1.5);

    // cta event handlers
    hit.addEventListener('mouseover', function(e) {
        TweenMax.to(cta, 0.25, {scale:1.1, ease:Power1.easeInOut});
    });

    hit.addEventListener('mouseout', function(e) {
        TweenMax.to(cta, 0.25, {scale:1, ease:Back.easeInOut});
    });


    
    //---SLIDER - REMOVE -----
    // var slider = $("#ctrl_slider"),
    //     progress = $(".progress");
    // sliderValue = {value:0};
    // slider.slider({
    //     range: false,
    //     min: 0,
    //     max: 100,
    //     step:.1,
    //     start:function() {
    //         mainTl.pause();
    //     },
    //     slide: function ( event, ui ) {
    //         mainTl.progress( ui.value / 100 );
    //     },
    //     stop:function() {
    //         mainTl.play();
    //     }
    // });

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


