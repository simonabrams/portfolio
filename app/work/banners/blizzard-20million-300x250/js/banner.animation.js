"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/img-character.png","images/img-muzzle-flash.png","images/img-box-pc.png","images/img-box-ps4.png","images/img-box-xbox.png","images/img-logo-glow.png","images/logo-ow-standard.svg","images/logo-ow-white.svg","images/text-1a.png","images/text-1b.png","images/text-1c.png","images/text-1d.png","images/text-2a.png","images/text-legal.png"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",width:316,height:270,bottom:0,left:-5,parent:this.banner}),this.frame1Text=this.smartObject({parent:this.banner,width:"100%",height:"100%"}),this.text1a=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1a.png"}),this.text1b=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1b.png"}),this.text1c=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1c.png"}),this.text1d=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1d.png"}),this.character=this.smartObject({backgroundImage:"images/img-character.png",width:350,height:258,parent:this.banner}),this.muzzleFlash=this.smartObject({backgroundImage:"images/img-muzzle-flash.png",retina:!0,parent:this.banner}),this.logoGlow=this.smartObject({backgroundImage:"images/img-logo-glow.png",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo-ow-standard.svg",width:145,height:30,x:9,y:213,parent:this.banner}),this.blackOverlay=this.smartObject({parent:this.banner,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.76)"}),this.text2a=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-2a.png"}),this.logo_white=this.smartObject({backgroundImage:"images/logo-ow-white.svg",width:226,height:47,y:149,parent:this.banner}),this.boxes=this.smartObject({parent:this.banner,width:"100%",height:"100%"}),this.box_pc=this.smartObject({backgroundImage:"images/img-box-pc.png",retina:!0,parent:this.boxes}),this.box_ps4=this.smartObject({backgroundImage:"images/img-box-ps4.png",retina:!0,parent:this.boxes}),this.box_xbox=this.smartObject({backgroundImage:"images/img-box-xbox.png",retina:!0,parent:this.boxes}),this.cta=this.smartObject({backgroundColor:"#ff7400",width:148,height:29,x:84,y:203,parent:this.banner}),this.cta_white=this.smartObject({width:148,height:29,backgroundColor:"white",parent:this.cta}),this.cta_over=this.smartObject({backgroundImage:"images/cta-over.png",width:148,height:29,parent:this.cta}),this.cta_label=this.smartObject({backgroundImage:"images/cta-label.svg",width:148,height:29,parent:this.cta}),this.text_legal=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-legal.png"})},Banner.prototype.setup=function(){TweenMax.set([this.imgEffectSprite,this.blackOverlay,this.text2a,this.box_pc,this.box_ps4,this.box_xbox,this.logoGlow,this.logo,this.logo_white,this.cta,this.cta_over,this.text_legal],{alpha:0}),this.logo_white.centerHorizontal(),this.banner.addEventListener("mouseover",function(t){TweenMax.to(banner.cta_over,.2,{alpha:1})}),this.banner.addEventListener("mouseout",function(t){TweenMax.to(banner.cta_over,.4,{alpha:0,ease:Power2.easeInOut})})},Banner.prototype.hidePreloader=function(){TweenMax.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){var t=[this.text1b,this.text1c,this.text1d,this.text1e],e=[this.box_pc,this.box_xbox,this.box_ps4];TweenMax.set(this.banner,{perspective:"1000px"}),TweenMax.set(t,{force3D:!0,rotationZ:.01}),TweenMax.set(e,{force3D:!0,rotationZ:.01}),TweenMax.set(this.text1a,{transformOrigin:"31% 47%"}),TweenMax.set(this.text1b,{transformOrigin:"30% 60%"}),TweenMax.set(this.text1c,{transformOrigin:"14% 71%"}),TweenMax.set(this.text1d,{transformOrigin:"37% 73%"}),TweenMax.set(this.box_pc,{transformOrigin:"30% 35%"}),TweenMax.set(this.box_xbox,{transformOrigin:"50% 35%"}),TweenMax.set(this.box_ps4,{transformOrigin:"60% 35%"}),this.timeline=(new TimelineMax).add("start",.2).fromTo(this.character,.4,{z:300,y:10},{z:0,y:13,transformOrigin:"80% 100%",ease:Sine.easeOut},"start").fromTo(this.bg,.2,{scale:1.05,transformOrigin:"50% 100%"},{scale:1.01,x:-10,ease:Sine.easeOut},"start").to(this.bg,.9,{scale:1,ease:Sine.easeOut},"start+=0.2").fromTo(this.muzzleFlash,.1,{scale:0,alpha:0},{scale:1,transformOrigin:"48% 14%",alpha:1,repeat:2,repeatDelay:.15}).add("word1",.6).fromTo(this.text1a,.4,{x:-200,alpha:0},{x:-10,alpha:1,ease:Power3.easeIn},"word1").to(this.text1a,1,{x:0,ease:Power3.easeOut},"word1+=0.4").add("word2","-=1").fromTo([this.text1b],.4,{x:200,alpha:0},{x:10,alpha:1,ease:Power3.easeIn},"word2").to([this.text1b],1,{x:0,ease:Power3.easeOut},"word2+=0.4").add("word3","-=1.4").fromTo([this.text1c,this.text1d],.4,{x:-200,alpha:0},{x:-10,alpha:1,ease:Power3.easeIn},"word3").to([this.text1c,this.text1d],1,{x:0,ease:Power3.easeOut},"word3+=0.4").to([this.logoGlow,this.logo],.6,{alpha:1,ease:Power3.easeOut},"word3+=0.8").add("text1Out",5).to([this.text1a,this.text1b,this.text1c,this.text1d],.4,{x:200,alpha:0,ease:Power3.easeInOut},"text1Out").to([this.logo,this.imgEffectBg],.4,{alpha:0,ease:Power3.easeInOut},"text1Out").add("endFrame",5.3).to(this.blackOverlay,.6,{alpha:1},"endFrame").staggerFromTo([this.box_pc,this.box_xbox,this.box_ps4],.4,{scale:.7,alpha:0},{scale:1,alpha:1,ease:Back.easeOut},.1,"endFrame").fromTo(this.text2a,.4,{alpha:0,y:40},{alpha:1,y:0},"endFrame+=0.4").fromTo(this.logo_white,.5,{alpha:0,y:"-=10"},{alpha:1,y:"+=10",ease:Bounce.easeOut},"endFrame+=0.2").fromTo(this.cta,.05,{alpha:0,scale:.9},{alpha:1,scale:1.05,ease:Power1.easeOut},"-=0.2").fromTo(this.cta_white,.05,{alpha:0},{alpha:.8,ease:Power1.easeOut}).to(this.cta,.05,{scale:1,ease:Power3.easeOut},"-=0.1").to(this.cta_white,.05,{alpha:0,ease:Power3.easeOut}).to(this.cta_white,.05,{alpha:.5,ease:Power3.easeOut},"-=0.05").to(this.cta_white,.15,{alpha:0,ease:Power3.easeOut}).to(this.cta_over,1.2,{alpha:0,ease:Power1.easeOut}).fromTo(this.text_legal,.6,{alpha:0},{alpha:1},"endFrame+=0.4")};