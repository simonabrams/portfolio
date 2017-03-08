/*

// scale each dot's height to a random value between a given min-max on each iteration
// vary the speed of the dot animation between a specified range

// have an "out" transition - ie dots gradually slow to their resting positions after a given duration/number of loops?

*/

/* vars */
var blue = document.getElementsByClassName("blue"),
    red = document.getElementsByClassName("red"),
    yellow = document.getElementsByClassName("yellow"),
    green = document.getElementsByClassName("green");

var dots = [blue, red, yellow, green];

var dotsAnim = new TimelineMax(),
  blueAnim = new TimelineMax(),
  redAnim = new TimelineMax(),
  yellowAnim = new TimelineMax(),
  greenAnim = new TimelineMax();

var anims = [blueAnim, redAnim, yellowAnim, greenAnim];

var circBounds = "49% 51%"; // the minimum height of each "dot" - makes it look like a circle
var speed, barHeight, maxLoops;

// sets the dot animation speed
function setRandomSpeed(){
  var speed = (randRange(1, 1.5)) * 0.1;
  /*console.log(speed)*/
  /*speed = 0.15;*/
  return speed;
}

// randomly sets the height of the specified bar
// between the given min/max
function setBarHeight(bar) {
  var min = typeof bar.min !== 'undefined' ? bar.min : 30;
  var max = bar.max;
  var diff = (randRange(min, max));  
  barHeight = 50-diff + "% " + Number(50+diff) + "%";
  return barHeight;
}

// animate dots into place
function dotsIntro(tl, target, count) {
  var bar = target;
  var delay = count * 0.05;
  var _height = 50-bar.max + "% " + Number(50+bar.max) + "%";
  // tl.fromTo(bar, 0.6, {autoAlpha:0, drawSVG: "0% 5%"}, {autoAlpha:1, drawSVG: circBounds, ease:Back.easeOut}, 0.1)
  tl.set(bar, {drawSVG: circBounds, autoAlpha: 0})
  tl.to(bar, 0.6, {autoAlpha:1, ease:Back.easeOut}, 0.1)
    .to(bar, 0.2, {drawSVG:_height, ease:Power1.easeInOut, delay: delay});
  return tl;
}

// stops the dots and starts the transition back to the dots' resting position
function dotsOutro(tl, target, count) {
  var bar = target;
  var delay = count * 0.05;
  tl.to(bar, 0.5, {drawSVG: circBounds, ease:Power2.easeOut, delay: delay});
  
  return tl;
}

/* scales each bar to @barHeight */
function scaleBounce(dot, barHeight) {
  var dotTl = new TimelineMax();
  var speed = 0.15;
  dotTl.to(dot, speed, {drawSVG: barHeight, ease:Power1.easeInOut})
  return dotTl;
}

// create main dots animation
function doDots(maxLoops, timeScale) {
  
  // set the overall speed of the animation
  timeScale = typeof timeScale !== 'undefined' ? timeScale : 1;

  // set max height for each bar
  blue.max = 38;
  blue.min = 18;
  
  red.max = 20;
  red.min = 5;
  
  yellow.max = 50;
  yellow.min = 20;
  
  green.max = 38;
  green.min = 18;
  
  dotsAnim
  // initialize the dots
    .timeScale(timeScale)
    .set(dots, {drawSVG:"0%"})
    .set ("#dots-container", {autoAlpha:1})

  // animate the dots into place
    dotsIntro(blueAnim, blue, 1);
    dotsIntro(redAnim, red, 2);
    dotsIntro(yellowAnim, yellow, 3);
    dotsIntro(greenAnim, green, 4);

  // scale each dot, varying speed and height
  for (var i = 0; i < maxLoops; i++) {
      blueAnim.add(scaleBounce(blue, setBarHeight(blue)));
      redAnim.add(scaleBounce(red, setBarHeight(red)));
      yellowAnim.add(scaleBounce(yellow, setBarHeight(yellow)));
      greenAnim.add(scaleBounce(green, setBarHeight(green)));
    }
  
  // outro the dots
  dotsOutro(blueAnim, blue, 1);
  dotsOutro(redAnim, red, 2);
  dotsOutro(yellowAnim, yellow, 3);
  dotsOutro(greenAnim, green, 4);
  
  // add dots timelines to master timeline
  dotsAnim.add(anims)
}

// generate a random number between two numbers
function randRange(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;

}


/* run the dots animation
*
*  doDots(maxLoops, timeScale)
*  @maxLoops loops to the timeline
*  @timeScale - set animation speed
*
*/
doDots(30, 1.2);