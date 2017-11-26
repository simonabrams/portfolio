"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/img-character.png","images/logo-ow-white.svg","images/text-1a.png","images/text-1b.png","images/text-2a.png","images/text-2b.png","images/text-pc.png","images/text-legal.png"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",width:316,height:270,bottom:0,left:-5,parent:this.banner}),this.frame1Text=this.smartObject({parent:this.banner,width:"100%",height:"100%"}),this.text1a=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1a.png"}),this.text1b=this.smartObject({parent:this.frame1Text,retina:"true",backgroundImage:"images/text-1b.png"}),this.character=this.smartObject({backgroundImage:"images/img-character.png",retina:!0,parent:this.banner}),this.gleam=this.smartObject({parent:this.banner,width:15,height:15,borderRadius:"50%",background:"radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 65%)",x:69,y:110}),this.logo=this.smartObject({backgroundImage:"images/logo-ow-white.svg",width:220,height:31,x:11,y:199,parent:this.banner}),this.blackOverlay=this.smartObject({parent:this.banner,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.60)"}),this.text2a=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-2a.png"}),this.text2b=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-2b.png"}),this.textPC=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-pc.png"}),this.cta=this.smartObject({backgroundColor:"#ff7400",width:152,height:29,x:74,y:185,parent:this.banner}),this.cta_white=this.smartObject({width:152,height:29,backgroundColor:"white",parent:this.cta}),this.cta_over=this.smartObject({backgroundImage:"images/cta-over.png",width:152,height:29,parent:this.cta}),this.cta_label=this.smartObject({backgroundImage:"images/cta-label.svg",width:152,height:29,parent:this.cta}),this.text_legal=this.smartObject({parent:this.banner,retina:"true",backgroundImage:"images/text-legal.png"})},Banner.prototype.setup=function(){TweenMax.set([this.blackOverlay,this.text2a,this.text2b,this.textPC,this.box_pc,this.box_ps4,this.box_xbox,this.logo,this.cta,this.cta_over,this.text_legal],{alpha:0}),this.banner.addEventListener("mouseover",function(t){TweenMax.to(banner.cta_over,.2,{alpha:1})}),this.banner.addEventListener("mouseout",function(t){TweenMax.to(banner.cta_over,.4,{alpha:0,ease:Power2.easeInOut})})},Banner.prototype.hidePreloader=function(){TweenMax.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){var t=[this.text1a,this.text1b,this.text2a,this.text2b];TweenMax.set(t,{force3D:!0,rotationZ:.01}),this.timeline=(new TimelineMax).add("start",.2).fromTo(this.character,.35,{x:-300,y:20},{x:-10,y:0,transformOrigin:"80% 100%",ease:Sine.easeOut},"start").to(this.character,1.5,{x:0,ease:Sine.easeOut},"start+=0.35").fromTo(this.bg,.2,{scale:1.05,transformOrigin:"50% 100%"},{scale:1.01,x:-10,ease:Sine.easeOut},"start").to(this.bg,.9,{scale:1,ease:Sine.easeOut},"start+=0.2").add("word1",.6).fromTo(this.text1a,.3,{x:-100,alpha:0},{x:-10,alpha:1,ease:Power3.easeIn},"word1").to(this.text1a,1.75,{x:0,ease:Power3.easeOut},"word1+=0.3").add("word2","-=1.65").fromTo(this.text1b,.3,{x:100,alpha:0},{x:10,alpha:1,ease:Power3.easeIn},"word2").to(this.text1b,1.75,{x:0,ease:Power3.easeOut},"word2+=0.3").fromTo(this.gleam,.4,{scale:.2,alpha:0},{scale:.9,alpha:1},3).to(this.gleam,.85,{x:173,y:85,scale:2,ease:Strong.easeInOut},3.05).to(this.gleam,.25,{scale:1.3,alpha:0,ease:Strong.easeInOut},3.45).to(this.logo,.6,{alpha:1,ease:Power3.easeOut},"word2+=0.8").add("text1Out",4.5).to(this.text1a,.4,{x:200,alpha:0,ease:Power3.easeInOut},"text1Out").to(this.text1b,.4,{x:-200,alpha:0,ease:Power3.easeInOut},"text1Out").to(this.logo,.4,{alpha:0,ease:Power3.easeInOut},"text1Out").add("endFrame",4.8).to(this.blackOverlay,.6,{alpha:1},"endFrame").fromTo(this.text2a,.4,{alpha:0,y:40},{alpha:1,y:0},"endFrame+=0.4").fromTo(this.text2b,.4,{alpha:0,y:40},{alpha:1,y:0},"endFrame+=0.4").fromTo(this.cta,.05,{alpha:0,scale:.9},{alpha:1,scale:1.05,ease:Power1.easeOut},"-=0.2").fromTo(this.textPC,.05,{alpha:0,scale:.9},{alpha:1,scale:1,ease:Power1.easeOut},"-=0.2").fromTo(this.cta_white,.05,{alpha:0},{alpha:.8,ease:Power1.easeOut}).to(this.cta,.05,{scale:1,ease:Power3.easeOut},"-=0.1").to(this.cta_white,.05,{alpha:0,ease:Power3.easeOut}).to(this.cta_white,.05,{alpha:.5,ease:Power3.easeOut},"-=0.05").to(this.cta_white,.15,{alpha:0,ease:Power3.easeOut}).to(this.cta_over,1.2,{alpha:0,ease:Power1.easeOut}).fromTo(this.text_legal,.6,{alpha:0},{alpha:1},"endFrame+=1")};