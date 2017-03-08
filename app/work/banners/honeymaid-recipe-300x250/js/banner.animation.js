"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.banner.ctaOverColor="#3965a7",this.banner.ctaDefaultColor="#194c98",this.images=["images/bg.jpg","images/logo.png","images/cracker1.png","images/cracker2.png","images/cracker3.png","images/hand.png","images/hand-shadow.png","images/cta-label.png","images/txt-headline.png"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",parent:this.banner}),this.endframe=this.smartObject({width:"100%",height:"100%",parent:this.banner}),this.headline=this.smartObject({backgroundImage:"images/txt-headline.png",retina:"true",backgroundSize:"contain",parent:this.endframe}),this.logo=this.smartObject({backgroundImage:"images/logo.png",retina:"true",backgroundSize:"contain",parent:this.endframe}),this.cta=this.smartObject({width:109,height:32,backgroundColor:this.banner.ctaDefaultColor,borderRadius:6,id:"cta",parent:this.endframe}),this.ctaLabel=this.smartObject({retina:"true",backgroundSize:"contain",position:"relative",backgroundImage:"images/cta-label.png",parent:this.cta,pointerEvents:"none"}),this.crackers=this.smartObject({width:"100%",height:"100%",parent:this.banner}),this.handShadow=this.smartObject({backgroundImage:"images/hand-shadow.png",parent:this.crackers}),this.cracker1=this.smartObject({backgroundImage:"images/cracker1.png",backgroundSize:"contain",parent:this.crackers}),this.cracker2=this.smartObject({backgroundImage:"images/cracker2.png",backgroundSize:"contain",parent:this.crackers}),this.cracker3=this.smartObject({backgroundImage:"images/cracker3.png",backgroundSize:"contain",parent:this.crackers}),this.hand=this.smartObject({backgroundImage:"images/hand.png",parent:this.crackers})},Banner.prototype.setup=function(){var e=this;this.bg.set({autoAlpha:1}),this.headline.set({y:22}),this.headline.centerHorizontal(),this.ctaLabel.center(),this.cta.centerHorizontal(),this.cta.set({y:95}),this.logo.center(),this.logo.set({y:64}),this.cracker1.center(),this.cracker1.set({autoAlpha:0}),this.cracker2.center(),this.cracker2.set({autoAlpha:0}),this.cracker3.center(),this.cracker3.set({autoAlpha:0}),this.hand.set({x:177,y:5}),this.handShadow.set({x:157,y:15,autoAlpha:.15}),this.banner.addEventListener("mouseover",function(t){t=t||event;var a=t.target||t.srcElement;"cta"===a.id&&TweenLite.to(e.cta,1,{backgroundColor:this.ctaOverColor})}),this.banner.addEventListener("mouseout",function(t){TweenLite.to(e.cta,.6,{backgroundColor:this.ctaDefaultColor})})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){this.timeline=new TimelineLite({}).addLabel("start",0).to(this.cracker1,.5,{autoAlpha:1},"start").to(this.cracker2,.5,{autoAlpha:1},"start+=2").to(this.cracker3,.5,{autoAlpha:1},"start+=3").add("handIn","+=0.25").from(this.hand,1.3,{x:"+=250",y:"215",scale:1.5,ease:Power2.easeInOut},"handIn").from(this.handShadow,1.3,{x:"+=250",y:"215",autoAlpha:0,scale:1.5,ease:Power2.easeInOut},"handIn").to(this.crackers,1.7,{x:"+=300",y:"250",scale:1.7,ease:Power2.easeInOut},"-=0.2").add("endframe","-=0.5").from(this.endframe,1,{autoAlpha:0,ease:Strong.easeIn},"endframe")};