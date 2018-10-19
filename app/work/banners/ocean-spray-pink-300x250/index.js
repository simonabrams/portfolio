(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.berry1 = function() {
	this.initialize(img.berry1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,70);


(lib.berry2 = function() {
	this.initialize(img.berry2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,73);


(lib.berry3 = function() {
	this.initialize(img.berry3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,103);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,512);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AArCeIg8haIghAmIAAA0Ig3AAIAAk6IA3AAIAADGIBWhjIBCAAIhRBbIBVB8g");
	this.shape.setTransform(205.6,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AAsBuIAAh5QABgLgDgKQgDgJgGgGQgFgHgIgDQgJgEgLAAQgIAAgJAEQgIADgGAHQgHAHgDAKQgDAKgBAMIAAB2Ig3AAIAAjXIA3AAIAAAbQALgOAQgJQARgIASAAQATAAAQAGQAPAGALAMQALALAHARQAFARAAAVIAACBg");
	this.shape_1.setTransform(181.2,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_2.setTransform(164.4,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgHQAGgIAHgEQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_3.setTransform(151.8,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("Ah7CSIAAkjIBfAAQARAAAPADQAQADAOAFQAOAGAMAHQAMAIAKAKQAKAKAIAMQAHALAFANQAGANACAPQADAOAAAPQAAAPgDAPQgDAPgFANQgGANgHAMQgJALgJAKQgLAKgMAIQgMAHgOAGQgNAGgQACQgNADgQAAgAhCBdIAjAAQAXAAARgHQASgHAMgNQANgNAHgQQAHgRAAgUQAAgTgGgRQgHgRgNgNQgMgNgSgHQgTgGgXgBIgiAAg");
	this.shape_4.setTransform(128.5,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgLIgQgNQgPgPgIgUQgGgOgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAQIAAATIiqAAQACAKAGAJQAFAIAIAHQAIAFALAEQAKADALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAJgMAHQgMAGgPAEQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAGQgHAFgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape_5.setTransform(92.5,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AgTBuIgVgGQgVgJgPgPQgQgPgIgVIgHgVIgCgXQAAgPAJgdQAIgTAQgQQAPgPAVgIIAVgHIAWgCQATAAAQAEQARAFANAKQAOAIAKANQAKAMAGAQIgyAUQgHgRgOgKQgOgKgTAAQgLAAgLAFQgLAFgIAIQgIAJgFAKQgEAMAAALQAAAMAEALQAFALAIAJQAIAHALAFQALAFALAAQAKAAAIgDQAJgCAHgFQANgKAHgRIA0AVQgHAPgKANQgLAMgNAJQgNAKgRAEQgQAGgTAAg");
	this.shape_6.setTransform(68.3,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_7.setTransform(51.3,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("Ag0BoQgPgGgLgLQgLgNgFgQQgGgRAAgWIAAiAIA4AAIAAB5QAAALADAKQADAJAFAGQAGAHAIADQAIADALAAQAJAAAIgDQAJgEAGgGQAGgHADgKQAEgKAAgNIAAh1IA4gBIAADXIg4ABIAAgbQgKAOgQAJQgRAJgSAAQgUAAgQgHg");
	this.shape_8.setTransform(34.7,31.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE4B5C").s().p("AgdCPQgOgEgMgHQgLgJgIgKQgJgLgEgNIA2gXQAEAOAIAIQAJAHANABQAOgBAIgJQAIgKAAgQIAAjPIA5AAIAADLQAAAVgGASQgFARgLAMQgLALgQAHQgRAGgVAAQgPAAgPgFg");
	this.shape_9.setTransform(11.7,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.9,56.6);


(lib.text34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AhdCRQgRgFgMgJIAggtQAGAGAHAEQAIADAIAAQAPAAAKgHQAJgIAJgTIADgJIhWjOIA6AAIA3CLIA1iLIA6AAIhdDjQgJAVgJAOQgIAOgKAJQgLAIgNAEQgNAEgSAAQgQAAgQgGg");
	this.shape.setTransform(194,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgHQAGgIAHgEQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_1.setTransform(175.4,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgHQAGgIAHgEQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_2.setTransform(158.1,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgLIgQgNQgPgPgIgUQgGgOgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAQIAAATIiqAAQACAKAGAJQAFAIAIAHQAIAFALAEQAKADALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAJgMAHQgMAGgPAEQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAGQgHAFgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape_3.setTransform(136.2,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AgKCeQgKgCgJgFQgJgFgHgGQgHgGgGgJIAAAfIg2AAIAAk7IA3AAIAACBQALgQARgJQAJgEAJgDQAKgCAKAAQAVAAASAIQATAIAPAOQAPAQAIATQAIAdAAASQAAAMgCAMIgGAWQgJAVgPAPQgOAOgTAIQgSAIgUAAQgKAAgKgCgAgYgIQgLAFgIAHQgJAJgEALQgFALAAAMQAAAMAFALQAEALAJAJQAIAIALAFQALAFAMAAQAMAAALgFQAKgEAJgJQAIgIAEgLQAFgLAAgNQAAgMgFgLQgEgLgIgJQgJgHgKgFQgLgFgMABQgMgBgLAFg");
	this.shape_4.setTransform(111.3,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AAtBuIAAh5QAAgLgDgKQgDgJgGgGQgFgHgIgDQgIgEgLAAQgJAAgIAEQgJADgGAHQgHAHgDAKQgEAKABAMIAAB2Ig4AAIAAjXIA4AAIAAAbQAKgOAQgJQAQgIAUAAQASAAAQAGQAQAGAKAMQAMALAFARQAGARAAAVIAACBg");
	this.shape_5.setTransform(86.2,31.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("Ag7BrQgOgEgKgIQgKgJgFgMQgFgLAAgPQAAgQAHgOQAHgNAMgJQANgKASgEQASgFAWgBIA4AAIAAgCQAAgJgDgHQgDgIgFgEQgGgFgJgEQgJgCgLAAQgRgBgNAIQgNAHgHAOIgzgaQAIgLAKgIQALgJAMgHQANgGAPgEQAPgDARAAQAYAAASAFQATAHANALQAMAMAHAPQAHARAAAUIAACEIg1AAIAAghQgGAIgIAHQgJAHgKAFQgKAFgLADQgMADgMAAQgSgBgOgFgAgjAXQgKAHAAANQAAAMAIAGQAJAGARAAQAJAAAJgDQAJgDAJgFQAIgGAHgGQAHgIAEgJIAAgLIgzAAQgXAAgMAHg");
	this.shape_6.setTransform(62,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgHQAGgIAHgEQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_7.setTransform(42.5,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("AgXCTQgPgDgOgGQgNgGgMgHQgMgJgKgKQgKgKgIgMQgHgMgGgOQgFgNgDgPQgDgPAAgPQAAgPADgPQADgPAGgOQAFgNAIgMQAIgMAKgKQAKgKAMgIQAMgIAOgGQANgFAPgDQAPgDAPAAQAUAAAUAFQATAGARAJQAQAKAOANQAOAOAJAQIgxAfQgGgMgIgJQgIgIgKgGQgKgHgMgDQgMgEgOAAQgTAAgRAHQgRAIgMAMQgNAOgHARQgHASAAASQAAATAHASQAHAQAMANQANAOARAGQARAIASAAQAPAAANgEQANgEAKgHQALgHAIgKQAIgKAFgMIA0AbQgKATgNAPQgOAQgRAKQgRALgUAGQgVAGgWAAQgPAAgQgDg");
	this.shape_8.setTransform(18,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.9,56.6);


(lib.petalring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OSP1804 Shape with ring RGB V1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E69BAF").ss(2).p("AouIwQAAAAgBgBQAAAAAAAAQhOhXAohjQAmhdB4g5ICdhDQCvhUBahZQBZhaBUivIBDidQA5h4BdgmQBjgoBXBOQAAAAAAAAQABABAAAAQBOBWgoBjQgmBeh4A5QhGAYhXAqQiwBVhZBZQhZBZhVCwQgqBXgYBGQg5B4heAmQhjAohWhOg");
	this.shape.setTransform(0,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69BAF").s().p("AouIwIgBgBIAAAAQhOhXAohjQAmhdB4g5ICdhDQCvhUBahZQBZhaBUivIBDidQA5h4BdgmQBjgoBXBOIAAAAIABABQBOBWgoBjQgmBeh4A5QhGAYhXAqQiwBVhZBZQhZBZhVCwQgqBXgYBGQg5B4heAmQghANggAAQg/AAg5gzg");
	this.shape_1.setTransform(0,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E69BAF").ss(2).p("AIwIvQAAAAgBAAQAAABAAAAQhXBOhjgoQhdgmg5h4QgYhGgrhXQhUiwhZhZQhahZivhVIidhCQh4g5gmheQgohjBOhWQAAAAAAgBQABAAAAAAQBWhOBjAoQBeAmA5B4IBCCdQBVCvBZBaQBZBZCwBUQBXArBGAYQB4A5AmBdQAoBjhOBXg");
	this.shape_2.setTransform(0,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E69BAF").s().p("AF1JWQhdgmg5h4QgYhGgrhXQhUiwhZhZQhahZivhVIidhCQh4g5gmheQgohjBOhWIAAgBIABAAQBWhOBjAoQBeAmA5B4IBCCdQBVCvBZBaQBZBZCwBUQBXArBGAYQB4A5AmBdQAoBjhOBXIgBAAIAAABQg5Azg/AAQggAAgigNg");
	this.shape_3.setTransform(0,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E69BAF").ss(15).p("ASPAAQAADuhcDYQhYDSiiChQihCijSBYQjYBcjuAAQjsAAjZhcQjRhYiiiiQihihhZjSQhcjZAAjtQAAjsBcjZQBZjRChiiQCiihDRhZQDZhcDsAAQDtAADZBcQDSBZChChQCiCiBYDRQBcDZAADsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.1,-124.1,248.4,248.4);


(lib.petal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OSP1804 Shape with ring RGB V1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E69BAF").ss(2).p("AouIwQAAAAgBgBQAAAAAAAAQhOhXAohjQAmhdB4g5ICdhDQCvhUBahZQBZhaBUivIBDidQA5h4BdgmQBjgoBXBOQAAAAAAAAQABABAAAAQBOBWgoBjQgmBeh4A5QhGAYhXAqQiwBVhZBZQhZBZhVCwQgqBXgYBGQg5B4heAmQhjAohWhOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69BAF").s().p("AouIwIgBgBIAAAAQhOhXAohjQAmhdB4g5ICdhDQCvhUBahZQBZhaBUivIBDidQA5h4BdgmQBjgoBXBOIAAAAIABABQBOBWgoBjQgmBeh4A5QhGAYhXAqQiwBVhZBZQhZBZhVCwQgqBXgYBGQg5B4heAmQghANggAAQg/AAg5gzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E69BAF").ss(2).p("AIwIvQAAAAgBAAQAAABAAAAQhXBOhjgoQhdgmg5h4QgYhGgrhXQhUiwhZhZQhahZivhVIidhCQh4g5gmheQgohjBOhWQAAAAAAgBQABAAAAAAQBWhOBjAoQBeAmA5B4IBCCdQBVCvBZBaQBZBZCwBUQBXArBGAYQB4A5AmBdQAoBjhOBXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E69BAF").s().p("AF1JWQhdgmg5h4QgYhGgrhXQhUiwhZhZQhahZivhVIidhCQh4g5gmheQgohjBOhWIAAgBIABAAQBWhOBjAoQBeAmA5B4IBCCdQBVCvBZBaQBZBZCwBUQBXArBGAYQB4A5AmBdQAoBjhOBXIgBAAIAAABQg5Azg/AAQggAAgigNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62.1,126.6,126.7);


(lib._new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OSP1804 NEW Copy RGB V3.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E69BAF").s().p("ABADXIBkjTIjRBtIg6g1IBejaIjNB0IhAg8IE8isIA8A4IhbDaIDThrIA+A5IiXFFg");
	this.shape.setTransform(120,344.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69BAF").s().p("AhNCiQhFgigXhCQgYhBAhhFIAOgdID0B0QAHghgPgdQgPgcgigRQgygYguAdIguhFQBVgvBaAsQBJAjAYBEQAXBBghBFQggBEhFAYQgdALgeAAQgmAAgogTgAhZA3QANAZAfAPQAeAOAdgGQAegFAWgXIijhNQgGAfAOAag");
	this.shape_1.setTransform(161.8,366.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E69BAF").s().p("AAZC2IAJgqQgWAUgaAIQgdAHgegGQg8gNgbgrQgcgtAOhBIApjJIBYASIgnC8QgIAkANAYQAOAYAhAHQAfAHAXgSQAZgSAIgmIAmi4IBWASIhFFNg");
	this.shape_2.setTransform(198.5,378.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E69BAF").s().p("Aj/iCIBOgZICQC8IANjsIBPgZIDPEkIhVAbIiEjAIgLDsIhKAXIiOi9IgCDqIhUAag");
	this.shape_3.setTransform(278.6,376.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E69BAF").s().p("AgcCxQhFgNgrg+IgSgbIDfiYQgagXgggCQgfgBggAVQgvAhADA0IhTAFQAChfBUg6QBDgtBGAOQBEANArA/QAqA+gNBGQgNBIg/ArQgxAhg0AAQgPAAgQgDgAgwBSQAZAWAcABQAdAAAcgTQAbgSALgdQAKgcgJgeg");
	this.shape_4.setTransform(314.1,355.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E69BAF").s().p("AhPCmIiaiJIA7hCICQCAQAdAZAaAAQAcABAWgaQAVgXgDgeQgDgfgdgZIiMh9IA7hCID+DjIg6BBIgggdQAGAcgHAcQgIAdgUAXQgpAug0ABIgDABQgyAAgwgsg");
	this.shape_5.setTransform(342.8,328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E69BAF").s().p("AjZBOIAUhPIDqgbIjEiFIAThRIFmgcIgVBXIjoAOIDFCEIgSBKIjsAZIDIB7IgVBVg");
	this.shape_6.setTransform(379.1,266.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E69BAF").s().p("AgkhbQghALgRAbQgSAcADAkQAEA5AvAYIgkBLQhTgzgHhlQgGhPAvg3QAvg0BLgGQBKgFA3AvQA4AwAFBMQAGBLguA2QguA1hMAGIggACgAAsBYQAfgLAQgZQAPgYgDgiQgCghgUgXQgTgXgfgIg");
	this.shape_7.setTransform(381.3,217.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E69BAF").s().p("Ah+B4IC2g8QAkgMANgXQAPgXgLggQgJgegbgMQgdgNglAMIiyA7IgbhTIFDhrIAcBTIgpANQAbAJAVAUQAVAVAKAdQATA5gZAuQgZAug/AVIjDBAg");
	this.shape_8.setTransform(372.7,180.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E69BAF").s().p("AhdDcIBVjdIjQBxIg/g3ICNlJIBDA5IhfDWIDPhzIA6A0IhXDbIDKh5IBCA6Ik2C2g");
	this.shape_9.setTransform(333.1,108.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E69BAF").s().p("AhFCiQhKghgZhEQgZhAAfhGQAehEBEgaQBDgbBGAfQBGAfAZBBQAaBCgfBFIgNAeIj3htQgGAhAQAcQAQAdAiAOQAzAXAsgeIAxBDQguAcgxAAQgnAAgqgTgAgQhmQgdAGgWAXIClBJQAFgfgOgaQgPgZgfgNQgUgJgUAAQgJAAgKACg");
	this.shape_10.setTransform(290.5,88.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E69BAF").s().p("AAyC0IAhi9QAHgkgOgYQgOgYgigGQgegFgYASQgYATgHAmIggC5IhXgPIA7lQIBWAPIgHArQAUgVAbgIQAcgJAfAGQA8AKAcAsQAdArgMBCIgjDKg");
	this.shape_11.setTransform(253.7,77);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E69BAF").s().p("AkKhFIBVgZICCDCIAOjsIBKgWICMC/IAFjqIBVgZIgOFoIhPAWIiOi9IgPDsIhQAYg");
	this.shape_12.setTransform(180,79.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E69BAF").s().p("AgpCxQhFgPgqg/Qgpg+AOhHQAPhIA/gqQBAgqBEAOQBFAOAqA/IASAcIjhCUQAZAYAhABQAfACAfgVQAwgfgCg0IBTgFQgEBghUA4QgzAigzAAQgSAAgRgEgAg8hWQgcASgKAdQgLAcAIAeICXhkQgYgVgdgBIgEAAQgbAAgaARg");
	this.shape_13.setTransform(144,100.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E69BAF").s().p("AjpgUIA7hBIAgAdQgGgcAIgcQAHgcAWgXQApgtAzgBQA0AAAxAtICYCLIg8BBIiOiCQgcgZgagBQgcgBgXAZQgVAYACAdQADAfAcAZICLCAIg8BBg");
	this.shape_14.setTransform(115,126.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E69BAF").s().p("AjBC6IDngXIjIh8IAPhMIDrggIjNh0IAShWIE3C2IgRBRIjpAiIDIB9IgRBSIlkAng");
	this.shape_15.setTransform(77,192.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E69BAF").s().p("AhxCKQg5gvgGhMQgHhMAug1QAtg2BMgHIAfgDIAXEOQAhgMARgbQARgbgDglQgEg4gxgZIAkhKQBUAxAIBlQAHBQgvA3QgtA1hMAGIgRABQhAAAgwgpgAhagxQgPAYADAiQACAgAUAYQAUAWAfAIIgPi0QgfALgPAZg");
	this.shape_16.setTransform(75.2,241.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E69BAF").s().p("AiXB8IApgOQgcgIgUgUQgVgVgLgdQgTg5AYguQAYguA/gWIDChDIAdBVIi1A/QgjAMgOAXQgPAXALAgQALAeAbAMQAcANAlgNICxg+IAdBUIlCBvg");
	this.shape_17.setTransform(84.3,277.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.8,56.7,345.1,342.7);


(lib.leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OSP1804 Leaf2 RGB V1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BCD6AE").ss(2).p("AHdgTQgwhOg3g5Qhrhxh1gWQiqgfj+BmQh/AzhdA6QBGBYBpBdQDRC8CqAfQCQAbCGhYQBVg4A2hPQAbgmgEgcQgCgPgVghg");
	this.shape.setTransform(51,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCD6AE").ss(2).p("AEHmuQhjgDhbARQirAghcBiQiFCNg6EtQgdCYgDB6QB+gNCYgpQEwhTCGiNQBxh4gCizQAAhygphkQgUgwgdgNQgPgHgugBg");
	this.shape_1.setTransform(72.1,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.6,123.6);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgEgLQgDgHgBgQQAAgHAEgPQAEgLAJgIQAIgIALgFIALgDIALgBQAIAAAQAEQALAFAHAHQAIAIAEAKQAFAQAAAIIAAAKIhZAAQABAFADAFIAHAHQAFADAEACQAGACAFAAQAKAAAHgFQAHgDAEgIIAYAPQgEAGgFAFQgFAFgHADQgHADgHACQgIACgJAAgAAegMIgEgJIgHgHQgDgDgGgBQgEgBgGgBQgFABgEABQgFACgEADQgEACgDAEIgEAJIA7AAIAAAAg");
	this.shape.setTransform(51.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA6IAAhxIAdAAIAAASQACgFADgEQADgEADgCIAJgEIAKgBQALAAAJAFIgLAcQgFgEgLAAQgFAAgEACQgEABgDADQgEAEgBAFQgCAFAAAHIAAA7g");
	this.shape_1.setTransform(41,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLA5IgMgDQgOgHgFgFQgIgJgEgKIgEgMIgBgLQAAgHAFgQQAEgKAIgIQAIgIALgFIAMgDIALgBQAIAAAQAEQAKAFAJAIQAIAIAEAKQAFAQAAAHIgBALIgEAMQgEAKgIAJQgMAJgHADQgQAFgIAAQgFAAgGgCgAgLgcQgGACgEAEQgEAEgDAGQgCAGAAAGQAAAGACAGQADAFAEAFQAEAFAGACQAGADAFAAQAGAAAGgDQAGgCAEgFQAEgFADgFQACgGAAgGQAAgGgCgGQgDgGgEgEQgEgEgGgCQgGgDgGAAQgFAAgGADg");
	this.shape_2.setTransform(29.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBNIAAhrIguA9Igsg8IAABqIgeAAIAAiZIAdAAIAtBAIAvhAIAcAAIAACZg");
	this.shape_3.setTransform(13.6,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXA6IAAg/QAAgGgBgFQgBgFgDgEIgIgFQgEgCgGAAQgEAAgEACQgFACgDAEQgEADgBAFQgCAGAAAGIAAA+IgdAAIAAhxIAdAAIAAAPQAGgIAIgFQAJgEAJAAQAKAAAIADQAIADAGAHQAGAGADAIQADAJAAALIAABEg");
	this.shape_4.setTransform(-6.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA6IAAhxIAcAAIAAASQACgFADgEQADgEADgCIAJgEIAKgBQALAAAIAFIgKAcQgGgEgKAAQgFAAgFACQgDABgDADQgDAEgCAFQgCAFAAAHIAAA7g");
	this.shape_5.setTransform(-17.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA4QgHgCgFgEQgGgFgCgHQgCgFgBgIQABgIADgIQAEgHAGgEQAGgFAKgCQAJgDANAAIAcAAIAAgCQAAgEgBgEQgCgDgDgDQgDgDgFgCQgEgBgHAAQgIAAgHAEQgGADgEAIIgbgOIAKgKIAMgIQAHgDAHgCQAJgCAIAAQANAAAJADQAKADAHAGQAGAGAEAIQADAJAAALIAABEIgcAAIAAgRQgCAFgFADQgFAEgFADIgKADQgHACgGAAQgJAAgIgDgAgSAMQgGADAAAIQAAAGAFADQAFADAIAAIAJgBQAGgCAEgDQAEgCADgEQAFgEABgEIAAgHIgaAAQgMAAgGAEg");
	this.shape_6.setTransform(-28.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgEgLQgDgHgBgQQAAgHAEgPQAFgLAIgIQAIgIALgFIALgDIALgBQAIAAAQAEQALAFAHAHQAIAIAEAKQAFAQAAAIIAAAKIhZAAQABAFADAFIAHAHQAFADAEACQAGACAFAAQAKAAAHgFQAHgDAFgIIAXAPQgEAGgGAFQgEAFgHADQgHADgHACQgIACgJAAgAAegMIgEgJIgHgHQgDgDgGgBQgEgBgGgBQgFABgEABQgFACgEADQgEACgDAEIgEAJIA7AAIAAAAg");
	this.shape_7.setTransform(-41.6,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAeAAIAAB8IBFAAIAAAdg");
	this.shape_8.setTransform(-54.2,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("ArPjlIWfAAQBfAABDBDQBEBEAABeIAAAAQAABfhEBDQhDBEhfAAI2fAAQhfAAhEhEQhDhDAAhfIAAAAQAAheBDhEQBEhDBfAAg");
	this.shape_9.setTransform(0,0,1,1.001);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005826").s().p("ArPDmQhfAAhEhEQhDhDAAhfIAAAAQAAheBDhEQBEhDBfAAIWfAAQBfAABDBDQBEBEAABeIAAAAQAABfhEBDQhDBEhfAAg");
	this.shape_10.setTransform(0,0,1,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-96,-24,192,48), null);


(lib.text5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AgvCYQgSgIgPgOQgPgPgJgVIgGgWQgCgMAAgMQAAgRAIgeQAJgTAOgPQAPgPATgIQATgIAUAAQAVAAARAIQARAJAMAPIAAh/IA2AAIAAE7Ig2AAIAAgeQgMAQgSAJQgJAEgJADQgKACgJAAQgUAAgTgIgAgUgIQgLAEgJAIQgIAIgFALQgFALABANQgBAMAFAMQAFALAIAJQAJAHALAFQAKAFALAAQANAAAMgFQAKgEAIgJQAJgJAEgLQAEgKABgNQgBgNgEgLQgEgLgJgIQgIgIgKgEQgMgEgNAAQgLAAgKAEg");
	this.shape.setTransform(98.6,126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AAsBuIAAh5QAAgLgCgKQgDgJgGgGQgFgHgIgDQgJgEgLAAQgIAAgJAEQgIADgGAHQgHAHgDAKQgEAKAAAMIAAB2Ig3AAIAAjXIA3AAIAAAbQALgOAQgJQARgIASAAQAUAAAPAGQAPAGALAMQAMALAFARQAGARAAAVIAACBg");
	this.shape_1.setTransform(74.2,130.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgKIgQgOQgPgPgIgVQgGgNgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQAAAdAIQAUAIAPAPQAPAPAIAUQAIAdAAAPIAAAUIiqAAQACAKAGAJQAFAJAIAFQAIAHALACQAKAEALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAJgMAHQgMAGgPAEQgPADgRABgAA6gXQgDgKgFgIQgFgHgIgGQgHgFgJgDQgKgCgKgBQgKAAgJADQgJADgIAFQgHAGgGAIQgFAHgEAKIBzAAIAAAAg");
	this.shape_2.setTransform(49.7,130.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AgbCeIAAk6IA3AAIAAE6g");
	this.shape_3.setTransform(32.6,125.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AgKCeQgKgDgJgEQgJgFgHgGQgHgHgGgIIAAAfIg2AAIAAk7IA3AAIAACBQALgQARgJQAJgEAJgCQAKgDAKAAQAVAAASAIQATAIAPAPQAPAPAIATQAIAeAAARQAAAMgCAMIgGAWQgJAVgPAPQgOAOgTAIQgSAIgUAAQgKAAgKgCgAgYgIQgLAEgIAIQgJAIgEALQgFALAAANQAAANAFAKQAEALAJAJQAIAJALAEQALAFAMAAQAMAAALgFQAKgFAJgHQAIgJAEgLQAFgMAAgMQAAgNgFgLQgEgLgIgIQgJgIgKgEQgLgEgMAAQgMAAgLAEg");
	this.shape_4.setTransform(15.5,126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AghCZQgPgCgNgGQgNgFgLgHQgLgJgJgKIAugkQALAPANAGQAOAIAVAAQALAAALgEQAMgEAHgIQAJgIAEgKQAEgLAAgMIAAgRQgLAQgSAJIgSAHQgKACgJAAQgUAAgUgHQgSgJgOgOQgQgPgIgUIgHgVQgCgMAAgNQAAgQAJgeQAIgUAPgPQAPgPASgHQAUgIAUAAQAKAAAJACIATAHQARAIALAPIAAgcIA3AAIAADHIgCAXIgGAUQgIAUgPAOQgPAPgVAJQgdAHgRAAQgRAAgQgDgAgVhkQgLAFgJAIQgIAIgEALQgFAMAAAMQAAAMAFAMQAEALAIAJQAJAHALAEQALAFALAAQAMAAAMgFQAKgEAJgHQAIgJAEgLQAFgMAAgMQAAgMgFgMQgEgKgIgJQgJgIgKgFQgMgFgMAAQgLAAgLAFg");
	this.shape_5.setTransform(275.6,85.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AAsBuIAAh5QAAgLgCgKQgDgJgGgGQgFgHgIgDQgJgEgKAAQgJAAgIAEQgJADgGAHQgGAHgEAKQgEAKAAAMIAAB2Ig3AAIAAjXIA3AAIAAAbQALgOAQgJQARgIASAAQAUAAAPAGQAPAGALAMQAMALAFARQAGARAAAVIAACBg");
	this.shape_6.setTransform(251.1,80.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_7.setTransform(234.4,76.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("AAsCeIAAh7QAAgLgDgJQgDgKgFgFQgFgGgJgEQgIgDgLAAQgJAAgIADQgIAEgHAGQgGAGgDAKQgEAKAAAMIAAB4Ig3AAIAAk6IA3AAIAAB9QALgPAQgIQAQgIATAAQATAAAQAGQAPAGALAMQALAMAGARQAGAPAAAVIAACDg");
	this.shape_8.setTransform(217.7,76.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE4B5C").s().p("AgeBuQgQgEgMgHQgNgGgJgLQgJgJgHgOIA1gUQAHAOANAHQANAIAQgBQAQABAJgIQAJgGAAgKQAAgKgPgGQgHgDgcgGQglgIgPgJQgLgHgHgLQgGgMAAgQQAAgOAGgMQAGgNAMgJQAMgJAQgFQARgGASAAQARAAAOADQAOAEALAFQALAGAJAJQAJAIAIALIgyAUQgHgKgKgGQgLgGgPAAQgPAAgIAGQgIAGAAAIQAAAKANAGQAIACAbAHIAcAHQAPAFAKAGQAMAHAGALQAIAMAAAQQAAAOgGAMQgGANgLAKQgMALgRAFQgSAHgXAAQgSAAgQgDg");
	this.shape_9.setTransform(195.1,81.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgKIgQgOQgPgPgIgVQgGgNgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAPIAAAUIiqAAQACALAGAIQAFAJAIAGQAIAFALADQAKAEALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAKgMAGQgMAHgPADQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAFQgHAGgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape_10.setTransform(172.5,81.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgIQAGgGAHgFQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_11.setTransform(152.1,81);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE4B5C").s().p("AgiCeIAAimIgkAAIAAgxIAkAAIAAgIQgBgbAFgRQAFgSALgKQAKgKARgFQARgFAbABIAOAAIAAAxIgJAAIgXACQgIACgFAEQgEADgBAIIgBAUIAAALIAzAAIAAAxIgzAAIAACmg");
	this.shape_12.setTransform(134.6,76.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgKIgQgOQgPgPgIgVQgGgNgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAPIAAAUIiqAAQACALAGAIQAFAJAIAGQAIAFALADQAKAEALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAKgMAGQgMAHgPADQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAFQgHAGgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape_13.setTransform(114.2,81.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgIQAGgGAHgFQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_14.setTransform(93.8,81);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE4B5C").s().p("AgvCYQgSgIgPgOQgPgPgJgVIgGgWQgCgMAAgMQAAgSAIgdQAJgUAPgOQAOgPATgIQATgIAVAAQATAAASAIQARAJALAPIAAh/IA3AAIAAE7Ig3AAIAAgeQgLAQgSAJQgJAFgJACQgKACgJAAQgUAAgTgIgAgVgIQgKAFgJAHQgIAIgFALQgFAMAAAMQAAAMAFAMQAFALAIAIQAJAJAKAEQALAFALAAQANAAAMgFQAKgEAJgJQAHgJAFgLQAFgLAAgMQAAgMgFgMQgFgLgHgIQgJgHgKgFQgMgEgNAAQgLAAgLAEg");
	this.shape_15.setTransform(62.4,76.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FE4B5C").s().p("AAsBuIAAh5QABgLgDgKQgDgJgFgGQgGgHgIgDQgJgEgLAAQgIAAgJAEQgIADgGAHQgGAHgEAKQgDAKgBAMIAAB2Ig3AAIAAjXIA3AAIAAAbQALgOAQgJQARgIASAAQAUAAAPAGQAQAGALAMQAKALAHARQAFARAAAVIAACBg");
	this.shape_16.setTransform(38,80.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FE4B5C").s().p("Ag7BrQgOgEgKgIQgKgJgFgMQgFgMAAgOQAAgQAHgOQAHgNAMgJQANgKASgFQASgEAWgBIA4AAIAAgCQAAgJgDgHQgDgIgFgFQgGgEgJgEQgJgCgLAAQgRAAgNAHQgNAHgHAOIgzgaQAIgLAKgIQALgJAMgHQANgGAPgEQAPgEARABQAYAAASAFQATAHANALQAMAMAHAPQAHARAAAUIAACEIg1AAIAAghQgGAIgIAHQgJAHgKAFQgKAFgLADQgMADgMAAQgSgBgOgFgAgjAXQgKAHAAANQAAAMAIAGQAJAGARAAQAJAAAJgDQAJgDAJgFQAIgGAHgHQAHgHAEgJIAAgLIgzAAQgXAAgMAHg");
	this.shape_17.setTransform(13.8,81.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE4B5C").s().p("AghCZQgPgCgNgGQgNgFgKgHQgLgJgKgKIAugkQAMAPAMAGQAOAIAVAAQAMAAALgEQAKgEAJgIQAHgIAFgKQAEgLAAgNIAAgQQgLAQgSAJIgTAHQgJACgKAAQgTAAgTgHQgTgIgPgPQgOgPgJgUIgGgVQgCgMgBgNQAAgQAJgdQAIgVAPgPQAPgPATgIQASgHAVAAQAKAAAJACIATAHQARAIALAPIAAgcIA4AAIAADHIgDAXIgGAUQgIAUgPAPQgPAPgVAHQgdAIgRAAQgRAAgQgDgAgVhkQgLAFgJAIQgIAIgFALQgEAMAAAMQAAAMAEAMQAFALAIAJQAJAHALAEQALAFALAAQAMAAAMgFQALgEAIgHQAIgJAEgLQAFgMAAgMQAAgMgFgMQgEgKgIgJQgIgIgLgFQgMgEgMgBQgLABgLAEg");
	this.shape_18.setTransform(258.4,36);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FE4B5C").s().p("AAtBuIAAh5QgBgLgCgKQgDgJgFgGQgGgHgIgDQgIgEgLAAQgJAAgIAEQgJADgGAHQgHAHgDAKQgEAKABAMIAAB2Ig4AAIAAjXIA4AAIAAAbQAKgOAQgJQAQgIAUAAQASAAAQAGQAPAGAMAMQAKALAGARQAGARAAAVIAACBg");
	this.shape_19.setTransform(233.9,31.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_20.setTransform(217.1,26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FE4B5C").s().p("AAACRQgNgFgJgJQgJgKgFgPQgFgPAAgWIAAhaIgoAAIAAgxIAoAAIAAgvIA2gfIAABOIA4AAIAAAxIg4AAIAABYQAAAQAGAIQAGAHALAAQALAAAJgIIAaArQgLAIgNAEQgNAEgPAAQgRAAgNgEg");
	this.shape_21.setTransform(204.2,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FE4B5C").s().p("AgeBuQgQgEgMgHQgNgGgJgLQgJgKgHgNIA1gUQAHAOANAHQANAIAQAAQAQAAAJgIQAJgGAAgKQAAgKgPgGQgHgDgcgGQglgIgPgJQgLgHgHgLQgGgMAAgQQAAgOAGgMQAGgMAMgKQAMgJAQgFQARgGASAAQARAAAOADQAOAEALAFQALAGAJAJQAJAIAIALIgyAUQgHgKgKgGQgLgGgPAAQgPAAgIAGQgIAFAAAJQAAAKANAGQAIACAbAHIAcAHQAPAFAKAGQAMAHAGALQAIAMAAAQQAAAOgGAMQgGANgLAKQgMALgRAFQgSAHgXAAQgSAAgQgDg");
	this.shape_22.setTransform(184.7,31.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FE4B5C").s().p("Ag7BrQgOgEgKgIQgKgJgFgMQgFgLAAgPQAAgQAHgOQAHgNAMgJQANgKASgEQASgFAWgBIA4AAIAAgCQAAgJgDgHQgDgIgFgEQgGgFgJgEQgJgCgLAAQgRgBgNAIQgNAHgHAOIgzgaQAIgLAKgIQALgJAMgHQANgGAPgEQAPgDARAAQAYAAASAFQATAHANALQAMAMAHAPQAHARAAAUIAACEIg1AAIAAghQgGAIgIAHQgJAHgKAFQgKAFgLADQgMADgMAAQgSgBgOgFgAgjAXQgKAHAAANQAAAMAIAGQAJAGARAAQAJAAAJgDQAJgDAJgFQAIgGAHgGQAHgIAEgJIAAgLIgzAAQgXAAgMAHg");
	this.shape_23.setTransform(162.4,31.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FE4B5C").s().p("AAACRQgNgFgJgJQgJgKgFgPQgFgPAAgWIAAhaIgoAAIAAgxIAoAAIAAgvIA2gfIAABOIA4AAIAAAxIg4AAIAABYQAAAQAGAIQAGAHALAAQALAAAJgIIAaArQgLAIgNAEQgNAEgPAAQgRAAgNgEg");
	this.shape_24.setTransform(142.7,27.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FE4B5C").s().p("AAACRQgNgFgJgJQgJgKgFgPQgFgPAAgWIAAhaIgoAAIAAgxIAoAAIAAgvIA2gfIAABOIA4AAIAAAxIg4AAIAABYQAAAQAGAIQAGAHALAAQALAAAJgIIAaArQgLAIgNAEQgNAEgPAAQgRAAgNgEg");
	this.shape_25.setTransform(116.8,27.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FE4B5C").s().p("AAsCeIAAh7QAAgLgDgJQgDgJgFgGQgFgGgJgEQgIgEgLAAQgJAAgIAEQgIAEgHAGQgGAGgDAKQgEAKAAAMIAAB4Ig3AAIAAk6IA3AAIAAB9QALgPAQgIQAQgIATAAQATAAAQAGQAPAHALALQALAMAGARQAGAPAAAVIAACDg");
	this.shape_26.setTransform(96,26.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FE4B5C").s().p("AggCZQgQgCgNgGQgNgFgLgHQgKgJgJgKIAtgkQALAPANAGQAPAIATAAQAMAAALgEQAMgEAHgIQAJgIAEgKQAEgLAAgNIAAgQQgLAQgSAJIgSAHQgKACgJAAQgUAAgUgHQgSgIgOgPQgQgPgIgUIgHgVQgCgMAAgNQABgQAIgdQAIgVAPgPQAPgPASgIQAUgHAUAAQAKAAAKACIASAHQASAIAKAPIAAgcIA3AAIAADHIgBAXIgHAUQgIAUgPAPQgPAPgVAHQgdAIgRAAQgRAAgPgDgAgVhkQgLAFgJAIQgIAIgEALQgFAMAAAMQAAAMAFAMQAEALAIAJQAJAHALAEQALAFALAAQAMAAAMgFQAKgEAJgHQAIgJAFgLQAEgMAAgMQAAgMgEgMQgFgKgIgJQgJgIgKgFQgMgEgMgBQgLABgLAEg");
	this.shape_27.setTransform(70.8,36);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_28.setTransform(53.4,26.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FE4B5C").s().p("AgbCeIAAk6IA3AAIAAE6g");
	this.shape_29.setTransform(44.1,26.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FE4B5C").s().p("ABQCSIgTg1Ih5AAIgTA1Ig6AAIBukjIA3AAIBuEjgAAqApIgqhyIgpByIBTAAg");
	this.shape_30.setTransform(16.4,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(0,0,290.8,155.8), null);


(lib.text3pinkcranberry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgLIgQgNQgPgPgIgUQgGgOgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAQIAAATIiqAAQACAKAGAJQAFAIAIAHQAIAFALAEQAKADALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAJgMAHQgMAGgPAEQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAGQgHAFgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape.setTransform(156.3,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AAACRQgNgFgJgJQgJgKgFgPQgFgPAAgWIAAhaIgoAAIAAgxIAoAAIAAgvIA2gfIAABOIA4AAIAAAxIg4AAIAABYQAAAQAGAIQAGAHALAAQALAAAJgIIAaArQgLAIgNAEQgNAEgPAAQgRAAgNgEg");
	this.shape_1.setTransform(135.6,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_2.setTransform(122,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AhfCSIAAkjIA5AAIAADsICGAAIAAA3g");
	this.shape_3.setTransform(106.3,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AArCeIg8haIghAmIAAA0Ig3AAIAAk6IA3AAIAADGIBWhjIBCAAIhRBbIBVB8g");
	this.shape_4.setTransform(74.6,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AAtBuIAAh5QAAgLgDgKQgDgJgGgGQgFgHgIgDQgIgEgLAAQgJAAgIAEQgJADgGAHQgHAHgDAKQgEAKABAMIAAB2Ig4AAIAAjXIA4AAIAAAbQAKgOAQgJQAQgIAUAAQASAAAQAGQAQAGAKAMQAMALAFARQAGARAAAVIAACBg");
	this.shape_5.setTransform(50.2,31.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AgbCdIAAjXIA3AAIAADXgAgZheQgJgKAAgPQAAgQAKgKQAKgKAOAAQAQAAAKAKQAJAKAAAQQAAAPgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape_6.setTransform(33.4,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AhvCSIAAkjIByAAQAQAAAcAIQAVAIAOAPQAPAOAIAUQAHATABAWQgBAVgHATQgJAUgOAOQgOAPgVAIQgcAIgRAAIg4AAIAABQgAg2AOIA2AAQALAAALgEQALgEAGgGQAIgHAFgKQADgKAAgMQAAgMgDgKQgFgKgIgHQgGgIgLgDQgLgFgLAAIg2AAg");
	this.shape_7.setTransform(15.8,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3pinkcranberry, new cjs.Rectangle(0,0,396.7,56.6), null);


(lib.text3new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005826").s().p("AAmBRIgmhpIgnBpIgnAAIg1ihIAqAAIAhBpIAmhpIAkAAIAmBpIAihpIAqAAIg3Chg");
	this.shape.setTransform(53.1,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005826").s().p("AgQBSIgRgEIgOgIIgNgKQgLgMgGgPQgEgKgCgXQAAgLAGgVQAHgPALgMQAMgMAPgGIAQgFIARgBQAMAAAVAGQAPAGAMALQALALAGAPQAGAWAAAMIAAAOIh/AAQACAIAEAGQAEAHAGAEQAGAFAIACQAHACAIAAQAOAAAKgFQAKgGAGgKIAiAUQgGAIgHAHQgIAHgJAFQgJAFgLACQgLADgNAAgAArgRQgCgIgEgGQgDgFgGgEQgFgEgHgCQgHgCgIAAQgHAAgHACQgHACgGAEQgFAEgEAGQgFAGgCAHIBVAAIAAAAg");
	this.shape_1.setTransform(29.8,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005826").s().p("AAiBSIAAhaQAAgIgDgIQgBgHgFgFQgEgEgGgDQgGgCgIAAQgHAAgGACQgGADgFAFQgFAFgDAIQgCAHAAAJIAABYIgpAAIAAihIAoAAIAAAVQAIgMAMgFQANgHAOAAQAOABAMAEQAMAEAHAJQAJAJAFAMQADANAAAPIAABhg");
	this.shape_2.setTransform(11.2,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3new, new cjs.Rectangle(0,0,68.9,43.5), null);


(lib.text3introducing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005826").s().p("AgYBzQgMgCgJgEQgKgEgIgGQgIgGgHgIIAigbQAJALAJAGQALAFAPAAQAJAAAIgDQAIgDAGgGQAGgGAEgIQADgIAAgJIAAgMQgJAMgNAGIgOAFQgHACgHAAQgPAAgOgGQgOgGgLgKQgLgMgHgPIgFgPQgBgJAAgKQAAgMAGgWQAGgPAMgMQAKgLAPgGQAOgFAPAAQAHAAAIABIAOAFQANAHAIALIAAgVIApAAIAACVIgBARIgFAPQgGAPgLALQgMALgPAGQgWAGgNAAQgMAAgMgCgAgQhLQgIADgGAHQgGAGgEAIQgDAJAAAJQAAAKADAIQAEAIAGAHQAGAFAIADQAJAEAIAAQAJAAAJgEQAIgDAGgFQAGgHADgIQAEgIAAgKQAAgJgEgJQgDgIgGgGQgGgHgIgDQgJgDgJAAQgIAAgJADg");
	this.shape.setTransform(166.3,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005826").s().p("AAiBSIAAhaQAAgIgDgIQgBgHgFgFQgEgEgGgDQgGgCgJAAQgGAAgGACQgGADgFAFQgFAFgDAIQgCAHAAAJIAABYIgpAAIAAihIAoAAIAAAVQAIgMAMgFQANgHAOAAQAOABAMAEQAMAEAHAJQAJAJAFAMQADANAAAPIAABhg");
	this.shape_1.setTransform(147.6,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005826").s().p("AgUB1IAAihIApAAIAAChgAgThGQgGgIAAgLQgBgMAIgIQAIgHAKAAQALAAAIAHQAIAIAAAMQAAALgIAIQgIAHgLAAQgLAAgIgHg");
	this.shape_2.setTransform(134.7,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005826").s().p("AgOBSIgQgEQgPgHgMgLQgMgMgGgPIgFgQIgBgRQAAgLAGgWQAGgPAMgLQAMgMAPgGIAQgFIAQgBQAOAAANADQAMAEAKAHQALAGAHAKQAIAJAFAMIgmAPQgGgNgKgHQgLgIgOAAQgIAAgJAEQgHADgGAHQgHAGgDAIQgEAJAAAIQAAAJAEAIQADAIAHAHQAGAGAIADQAIAEAIAAQAIAAAGgCQAGgCAFgEQAKgIAGgMIAmAPQgFAMgHAJQgIAKgKAGQgLAIgMADQgMAEgPAAg");
	this.shape_3.setTransform(121.9,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005826").s().p("AgmBOQgMgFgIgIQgIgJgFgNQgDgNgBgPIAAhhIArAAIAABbQAAAJACAGQACAIAEAEQAEAFAGACQAHADAHAAQAHAAAGgDQAGgCAFgGQAEgEADgIQADgHgBgKIAAhYIArAAIAAChIgqAAIAAgUQgIALgMAHQgMAGgNAAQgQAAgLgFg");
	this.shape_4.setTransform(103.4,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005826").s().p("AgjByQgOgGgLgLQgLgMgGgPIgFgQQgCgJAAgKQAAgNAHgWQAGgOALgLQALgLAOgGQAOgFAQgBQAPAAANAHQANAGAIALIAAhfIApAAIAADrIgpAAIAAgWQgJANgNAGQgGAEgHABQgIACgHAAQgPAAgOgGgAgPgGQgIADgGAGQgHAGgDAIQgEAJAAAJQAAAJAEAJQADAIAHAHQAGAGAIADQAIAEAJAAQAJAAAIgEQAIgEAGgFQAHgHADgIQADgJAAgJQAAgJgDgJQgDgHgHgHQgGgGgIgDQgIgDgJgBQgJABgIADg");
	this.shape_5.setTransform(84.2,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005826").s().p("AgRBSIgQgFQgUgKgHgIQgMgLgGgPIgFgQIgCgRQAAgLAHgVQAGgPAMgMQAMgMAPgGIAQgFIARgBQAMAAAWAGQAPAGAMAMQAMAMAGAPQAHAVAAALIgCARIgFAQQgGAPgMALQgRAOgKAEQgWAHgMAAQgIAAgJgCgAgQgpQgIADgGAGQgGAHgEAIQgDAIAAAJQAAAJADAIQAEAIAGAHQAGAGAIADQAIAEAIAAQAJAAAJgEQAHgDAHgGQAGgHADgIQAEgIAAgJQAAgJgEgIQgDgIgGgHQgHgGgHgDQgJgEgJAAQgIAAgIAEg");
	this.shape_6.setTransform(64.9,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005826").s().p("Ag3BSIAAihIAoAAIAAAZQADgGAFgGQAEgFAFgDQAFgEAHgCQAHgBAIgBQAPABAMAGIgPAoQgIgFgNAAQgJAAgGACQgFADgFAEQgFAEgCAIQgCAHAAAKIAABUg");
	this.shape_7.setTransform(49.1,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005826").s().p("AAABtQgJgDgHgHQgHgIgDgLQgEgMAAgRIAAhCIgeAAIAAglIAeAAIAAgjIAogYIAAA7IAqAAIAAAlIgqAAIAABBQAAAMAFAGQAEAFAIABQAJAAAGgHIATAhQgIAGgJADQgKADgLAAQgNAAgKgDg");
	this.shape_8.setTransform(35.5,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005826").s().p("AAhBSIAAhaQAAgIgBgIQgCgHgFgFQgEgEgGgDQgGgCgJAAQgGAAgGACQgHADgEAFQgFAFgCAIQgDAHAAAJIAABYIgpAAIAAihIAoAAIAAAVQAJgMAMgFQAMgHAOAAQAOABAMAEQALAEAJAJQAIAJAEAMQAFANAAAPIAABhg");
	this.shape_9.setTransform(19.6,24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005826").s().p("AgVBtIAAjaIArAAIAADag");
	this.shape_10.setTransform(6.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3introducing, new cjs.Rectangle(0,0,178.6,43.5), null);


(lib.text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005826").s().p("AgeAgQgNgNAAgTQAAgSANgMQAMgNASAAQATAAAMANQAMAMAAASQAAATgMANQgMAMgTAAQgSAAgMgMg");
	this.shape.setTransform(461.9,48.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005826").s().p("ACICKIAAibQAAgOgDgLQgDgLgGgHQgGgIgJgEQgKgEgNAAQgLAAgKAEQgJAEgIAIQgGAIgEALQgDANAAAPIAACXIhGAAIAAidQAAgOgDgKQgDgLgGgHQgGgIgJgDQgJgEgNAAQgMAAgJAEQgLAEgGAIQgHAIgEAMQgEANAAAQIAACVIhFAAIAAkNIBFAAIAAAgQAMgSAUgKQATgKAYAAQAPAAANADQAMADALAGQAKAGAHAIQAIAJAGALQAGgLAJgIQAIgJAMgFQAKgHAMgCQANgEAOAAQAZAAAUAIQATAHAOAPQAMAOAGAUQAHAUAAAaIAAClg");
	this.shape_1.setTransform(432.7,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005826").s().p("AgcCKIgcgIIgYgNIgVgRQgSgTgLgaQgGgQgEgnQAAgSALgkQALgZATgUQATgTAagKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQAKAjAAAUIAAAZIjVAAQAEANAGALQAHAKAKAIQAKAHANAEQAMAEAOAAQAYAAARgKQAQgJAKgRIA5AhQgLAPgMALQgNALgOAIQgPAJgTAEQgTAEgVABgABIgdQgEgMgGgLQgGgJgJgGQgKgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_2.setTransform(393.9,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005826").s().p("AA3DFIAAiZQAAgOgEgMQgDgLgHgHQgGgJgLgDQgLgFgNAAQgLAAgLAFQgKAEgIAIQgIAIgEAMQgEAMgBAQIAACVIhEAAIAAmJIBEAAIAACdQAOgSAUgKQAVgKAXAAQAYgBAUAIQATAIANAOQAOAPAIAVQAHAUAAAaIAACjg");
	this.shape_3.setTransform(363.3,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005826").s().p("AAAC1QgQgFgLgMQgMgMgGgTQgGgUAAgbIAAhwIgyAAIAAg9IAyAAIAAg7IBDgoIAABjIBHAAIAAA9IhHAAIAABuQAAAUAIAKQAIAIANAAQAOAAAMgKIAfA2QgOAKgQAFQgQAGgTAAQgVAAgQgGg");
	this.shape_4.setTransform(337.9,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005826").s().p("AAAC1QgRgFgLgMQgLgMgGgTQgGgUAAgbIAAhwIgyAAIAAg9IAyAAIAAg7IBDgoIAABjIBHAAIAAA9IhHAAIAABuQAAAUAIAKQAIAIANAAQAOAAALgKIAgA2QgOAKgQAFQgQAGgTAAQgVAAgQgGg");
	this.shape_5.setTransform(305.3,34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005826").s().p("AgcCKIgcgIIgYgNIgVgRQgSgTgKgaQgHgQgDgnQgBgSAMgkQAKgZATgUQATgTAagKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQALAjAAAUIAAAZIjWAAQADANAHALQAHAKAKAIQAKAHANAEQANAEAOAAQAXAAARgKQAQgJAKgRIA5AhQgLAPgMALQgMALgPAIQgQAJgSAEQgTAEgVABgABIgdQgDgMgHgLQgGgJgJgGQgJgHgMgDQgMgEgNAAQgMAAgLAEQgMAEgKAGQgJAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_6.setTransform(278.5,39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005826").s().p("AgpDAQgTgDgQgHQgQgGgOgKQgOgKgLgOIA5gtQAPATAPAIQASAKAZAAQAQAAAOgFQANgGAKgJQAKgKAFgNQAGgNAAgQIAAgVQgPAVgVAKIgYAJQgMADgMAAQgZAAgXgKQgYgKgSgRQgTgTgKgZIgJgbQgCgPAAgQQAAgVALgkQAKgaASgSQASgTAZgJQAXgKAaAAQANAAAMACIAXAJQAVALAOASIAAgjIBFAAIAAD5IgCAcIgJAaQgKAZgSASQgUATgZAJQglALgUgBQgWAAgUgDgAgbh9QgNAFgKALQgLAKgGAOQgFAOgBAQQABAQAFAOQAGANALALQAKAJANAGQAOAGAPAAQAPAAAOgGQANgGALgJQAKgLAFgNQAHgOAAgQQAAgPgHgPQgFgOgKgKQgLgLgNgFQgOgGgPAAQgPAAgOAGg");
	this.shape_7.setTransform(246.2,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005826").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAHgJAJgFQAKgGALgCQALgEANAAQAaAAAUALIgZBEQgNgJgXAAQgNAAgLADQgKAEgHAHQgIAIgFAMQgEAMABARIAACOg");
	this.shape_8.setTransform(220.4,38.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005826").s().p("AgdCKIgbgIQgggSgNgNQgTgTgLgaIgIgaIgDgcQAAgTALgjQALgZATgUQAUgTAZgKIAbgJIAdgCQAUAAAkALQAaAKATATQAUAUALAZQALAjAAATIgDAcIgIAaQgLAagTATQgcAXgRAIQglAKgUABQgOAAgPgDgAgchFQgNAFgKALQgKALgGANQgGAOAAAPQAAAPAGAOQAGANAKALQAKAKANAGQAOAGAOAAQAPAAAOgGQANgGALgKQAKgLAFgNQAGgOAAgPQAAgPgGgOQgFgNgKgLQgLgLgNgFQgOgGgPAAQgOAAgOAGg");
	this.shape_9.setTransform(192.6,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005826").s().p("AgrDFIAAjPIgtAAIAAg+IAtAAIAAgKQgBghAGgVQAGgXANgNQANgMAWgHQAVgFAiAAIASAAIAAA/IgMAAIgcACQgLACgFAEQgGAGgCAJIgBAZIAAANIBBAAIAAA+IhBAAIAADPg");
	this.shape_10.setTransform(166.5,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005826").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAIgJAJgFQAIgGAMgCQALgEAOAAQAZAAAUALIgZBEQgNgJgXAAQgNAAgLADQgKAEgIAHQgHAIgFAMQgDAMAAARIAACOg");
	this.shape_11.setTransform(135.4,38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005826").s().p("AgbCKIgcgIIgZgNIgUgRQgUgTgKgaQgGgQgEgnQABgSAKgkQALgZATgUQAUgTAZgKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQALAjgBAUIAAAZIjVAAQADANAHALQAHAKAKAIQAKAHANAEQANAEANAAQAYAAARgKQAQgJALgRIA4AhQgKAPgNALQgNALgOAIQgQAJgSAEQgSAEgXABgABIgdQgDgMgHgLQgGgJgJgGQgKgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_12.setTransform(107.9,39);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005826").s().p("AgiCHIhokNIBJAAIBCC1IBCi1IBIAAIhqENg");
	this.shape_13.setTransform(78,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005826").s().p("AgbCKIgcgIIgZgNIgUgRQgUgTgKgaQgGgQgEgnQABgSAKgkQALgZATgUQAUgTAZgKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQALAjgBAUIAAAZIjVAAQAEANAGALQAHAKAKAIQAKAHANAEQANAEANAAQAYAAARgKQAQgJALgRIA4AhQgKAPgNALQgNALgOAIQgQAJgSAEQgSAEgXABgABIgdQgDgMgHgLQgGgJgKgGQgJgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_14.setTransform(48,39);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005826").s().p("AA4CKIAAiYQAAgOgEgMQgDgLgHgIQgHgJgKgEQgLgEgNAAQgLAAgLAEQgKAFgIAIQgIAJgEAMQgFAMAAAQIAACUIhFAAIAAkNIBFAAIAAAiQANgTAUgKQAVgLAYAAQAYAAATAIQATAHAOAPQAOAPAHAVQAHAVAAAaIAACig");
	this.shape_15.setTransform(17.4,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text22, new cjs.Rectangle(0,0,469.8,69.8), null);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005826").s().p("AgiDFIAAmJIBFAAIAAGJg");
	this.shape.setTransform(423.1,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005826").s().p("AgiDFIAAmJIBFAAIAAGJg");
	this.shape_1.setTransform(411.3,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005826").s().p("AgjA2QAWgQALgPQALgPACgPQgIAMgPAAQgPAAgKgKQgKgKAAgQQAAgUANgNQANgMATAAQAMAAAJAEQAKAEAGAIQAHAHADALQADAKAAALQAAAPgEANQgFANgIANQgIAMgMALIgYAVg");
	this.shape_2.setTransform(398.9,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005826").s().p("AhACDQgUgIgOgPQgNgPgHgVQgHgVAAgaIAAihIBHAAIAACXQAAAOADAMQADALAHAIQAHAIAKAEQALAFANAAQAMAAAKgFQAKgEAIgIQAIgJAEgMQAEgMAAgQIAAiTIBGgBIAAENIhFABIAAgjQgNATgUAKQgUALgYAAQgZAAgTgHg");
	this.shape_3.setTransform(377.2,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005826").s().p("AgdCKIgbgIQgggSgNgNQgTgTgLgaIgIgaIgDgcQAAgTALgjQALgZATgUQAUgTAZgKIAbgJIAdgCQAUAAAkALQAaAKATATQAUAUALAZQALAjAAATIgDAcIgIAaQgLAagTATQgcAXgRAIQglAKgUABQgOAAgPgDgAgchFQgNAFgKALQgKALgGANQgGAOAAAPQAAAPAGAOQAGANAKALQAKAKANAGQAOAGAOAAQAPAAAOgGQANgGALgKQAKgLAFgNQAGgOAAgPQAAgPgGgOQgFgNgKgLQgLgLgNgFQgOgGgPAAQgOAAgOAGg");
	this.shape_4.setTransform(346.3,39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005826").s().p("Ah1C2QgUgHgQgLIAog4QAIAHAIAFQAKAEALAAQASAAAMgKQANgJAKgYIAEgLIhskBIBJAAIBFCtIBDitIBIAAIh1EbQgKAbgLAQQgMATgMAKQgNALgRAFQgQAFgWAAQgUgBgVgGg");
	this.shape_5.setTransform(314.6,44.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005826").s().p("Ag7C+QgXgKgSgSQgTgTgKgZIgJgcQgCgPAAgPQAAgWALglQAKgYASgTQASgTAYgJQAYgKAaAAQAZAAAWAKQAVALAOATIAAifIBEAAIAAGKIhEAAIAAglQgOATgWALQgLAGgMADQgMADgMAAQgZAAgYgKgAgagKQgNAFgLAKQgKALgGANQgGAOAAAQQAAAPAGAPQAGANAKALQALALANAFQAOAGAOAAQAQAAAOgGQANgGALgKQAKgLAFgOQAGgOAAgPQAAgQgGgOQgFgNgKgKQgLgKgNgGQgOgGgQAAQgOAAgOAGg");
	this.shape_6.setTransform(273.5,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005826").s().p("AA4CKIAAiYQAAgOgEgMQgDgLgHgIQgHgJgKgEQgLgEgNAAQgLAAgLAEQgKAFgIAIQgIAJgEAMQgFAMAAAQIAACUIhFAAIAAkNIBFAAIAAAiQANgTAUgKQAVgLAYAAQAYAAATAIQATAHAOAPQAOAPAHAVQAHAVAAAaIAACig");
	this.shape_7.setTransform(242.8,38.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005826").s().p("AhKCGQgSgFgMgLQgMgKgGgPQgHgPAAgSQAAgUAJgSQAIgRAQgKQAQgMAWgGQAXgGAcAAIBGAAIAAgEQAAgLgEgJQgEgJgHgGQgHgHgLgEQgLgDgPAAQgVAAgQAJQgQAKgJARIhAggQALgOAMgLQAOgLAPgIQAQgJASgEQAUgFAVABQAdgBAYAIQAXAIAQAOQAQAOAIAUQAJAUAAAaIAAClIhDAAIAAgpQgHAKgKAJQgLAIgNAGQgNAHgNADQgPADgQABQgVAAgSgHgAgrAdQgOAJAAAQQAAAPALAHQAKAIAVAAQANAAALgEQALgEALgGQALgHAIgJQAIgJAFgLIAAgOIg/AAQgdAAgOAJg");
	this.shape_8.setTransform(212.4,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005826").s().p("AiMDAIAAl5IBDAAIAAAlQAOgUAWgLQALgGANgDQAMgDANAAQAZAAAXAKQAYAKASASQATATAKAaQAKAkAAAWQAAAQgCAPIgIAaQgKAZgTATQgSATgYAJQgXAKgZAAQgbAAgWgKQgVgKgOgSIAACNgAgfh5QgNAGgLALQgJAKgGAOQgGAOAAAPQAAAQAGAOQAGANAJAKQALAKANAGQAPAGAPAAQAOAAAOgGQANgFAKgLQALgJAGgOQAFgOABgQQgBgPgFgPQgGgNgLgLQgKgKgNgGQgOgGgOAAQgPAAgPAGg");
	this.shape_9.setTransform(171,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005826").s().p("AgiDEIAAkNIBFAAIAAENgAgfh2QgMgMAAgUQAAgTAMgMQANgOASAAQAUAAAMAOQAMAMAAATQAAAUgMAMQgMAMgUAAQgTAAgMgMg");
	this.shape_10.setTransform(148.4,32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005826").s().p("AglCJQgUgEgQgKQgPgIgMgNQgMgLgIgRIBDgaQAIASARAJQAPAJAVAAQATABAMgKQALgHAAgNQABgNgUgHQgJgEgigHQgvgKgSgMQgPgJgHgNQgJgPAAgVQAAgRAIgPQAIgPAOgMQAPgMAUgGQAVgHAXAAQAVAAASAEQASADAOAJQANAGAMAMQALAKAKANIg/AaQgJgOgMgHQgOgHgTgBQgSABgKAHQgKAHAAALQAAAMAPAHQAKAEAjAHIAiAJQATAGANAJQAPAIAIAOQAJAPAAAVQAAAQgHAQQgIAQgOAMQgOAOgWAIQgXAHgcAAQgXAAgTgEg");
	this.shape_11.setTransform(129,38.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005826").s().p("AgcCKIgcgIIgYgNIgVgRQgSgTgKgaQgHgQgDgnQgBgSALgkQALgZATgUQATgTAagKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQALAjgBAUIAAAZIjVAAQADANAHALQAHAKAKAIQAKAHANAEQANAEAOAAQAXAAARgKQAQgJAKgRIA5AhQgLAPgLALQgNALgPAIQgQAJgSAEQgTAEgVABgABIgdQgEgMgGgLQgGgJgJgGQgJgHgMgDQgMgEgNAAQgMAAgLAEQgMAEgKAGQgJAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_12.setTransform(89.5,39);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005826").s().p("AA4CKIAAiYQAAgOgEgMQgDgLgHgIQgHgJgKgEQgLgEgNAAQgLAAgLAEQgKAFgIAIQgIAJgEAMQgFAMAAAQIAACUIhFAAIAAkNIBFAAIAAAiQANgTAUgKQAVgLAYAAQAYAAATAIQATAHAOAPQAOAPAHAVQAHAVAAAaIAACig");
	this.shape_13.setTransform(58.8,38.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005826").s().p("AglC4QgSgEgSgHQgQgHgPgKQgPgLgMgNQgNgMgLgPQgJgPgIgRQgGgRgEgSQgEgTAAgTQAAgSAEgTQAEgSAGgRQAIgRAJgPQALgOANgNQAMgNAPgLQAPgKAQgHQASgHASgEQASgDATAAQATAAATADQARAEASAHQAQAHAPAKQAPALANANQANANAKAOQAKAPAIARQAGARAEASQAEATAAASQAAATgEATQgEASgGARQgIARgKAPQgKAPgNAMQgNANgPALQgPAKgQAHQgRAHgSAEQgTADgTAAQgTAAgSgDgAgthsQgVAJgQAQQgPAQgJAWQgJAWAAAXQAAAYAJAWQAJAVAPAQQAQAQAVAKQAWAJAXAAQAYAAAWgJQAVgKAQgQQAPgQAJgVQAJgWAAgYQAAgXgJgWQgJgWgPgQQgRgQgUgJQgXgKgXAAQgXAAgWAKg");
	this.shape_14.setTransform(23.1,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text21, new cjs.Rectangle(0,0,430.8,69.8), null);


(lib.text12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AgmCwQgNgNAAgSQAAgUANgMQAMgMAUAAQASAAAMAMQAMAMAAAUQAAASgMANQgNANgRAAQgUAAgMgNgAgkBFIAAgDQAAgUADgRQAEgOAFgMQAKgSATgPIAdgXQANgOAAgSQAAgSgOgMQgNgMgUAAQgUAAgOAMQgNAKgHASIg+gaQAHgRAKgNQALgOAOgKQAPgKATgFQATgGAXABQAZgBAVAIQAWAIAPANQAPAOAJASQAIAUAAAWQAAARgEANQgEAMgHALQgJANgYAPQgYAQgHAKQgIAIgDAKQgFAMAAAOIAAADg");
	this.shape.setTransform(419.6,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AgmCJQgTgEgQgKQgPgIgMgNQgMgLgIgRIBDgaQAIASAQAJQAQAJAUAAQAVABALgKQAMgHgBgNQAAgNgTgHQgJgEgigHQgugKgTgMQgPgJgIgNQgIgPAAgVQAAgRAIgPQAIgPAPgMQAOgMAUgGQAVgHAYAAQAUAAASAEQASADAOAJQANAGAMAMQALAKAKANIg/AaQgJgOgNgHQgOgHgRgBQgTABgLAHQgJAHgBALQAAAMAQAHQALAEAiAHIAjAJQASAGANAJQAPAIAIAOQAJAPAAAVQAAAQgHAQQgIAQgNAMQgQAOgUAIQgYAHgcAAQgXAAgUgEg");
	this.shape_1.setTransform(392.5,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("AgcCKIgcgIIgYgNIgVgRQgSgTgLgaQgGgQgDgnQgBgSALgkQALgZATgUQATgTAagKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQAKAjAAAUIAAAZIjVAAQAEANAGALQAHAKAKAIQAKAHANAEQAMAEAPAAQAXAAARgKQAQgJAKgRIA5AhQgLAPgMALQgNALgOAIQgPAJgTAEQgSAEgWABgABIgdQgEgMgGgLQgGgJgJgGQgKgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_2.setTransform(364.2,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AgiDEIAAkNIBFAAIAAENgAgfh2QgMgMAAgUQAAgTAMgMQANgOASAAQAUAAAMAOQAMAMAAATQAAAUgMAMQgMAMgUAAQgTAAgMgMg");
	this.shape_3.setTransform(342.5,32.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAHgJAJgFQAKgGALgCQALgEANAAQAaAAAUALIgZBEQgNgJgXAAQgOAAgKADQgKAEgHAHQgIAIgFAMQgEAMABARIAACOg");
	this.shape_4.setTransform(326.6,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAIgJAIgFQAJgGAMgCQALgEANAAQAaAAAUALIgZBEQgNgJgXAAQgOAAgKADQgKAEgIAHQgIAIgDAMQgFAMAAARIAACOg");
	this.shape_5.setTransform(304.7,38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AgcCKIgcgIIgYgNIgVgRQgSgTgLgaQgGgQgDgnQgBgSALgkQALgZATgUQATgTAagKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQAKAjAAAUIAAAZIjVAAQADANAHALQAHAKAKAIQAKAHANAEQANAEAOAAQAXAAARgKQAQgJAKgRIA5AhQgLAPgMALQgMALgPAIQgQAJgSAEQgTAEgVABgABIgdQgEgMgGgLQgGgJgJgGQgJgHgMgDQgMgEgNAAQgMAAgLAEQgMAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_6.setTransform(277.2,39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AgNDFQgMgDgMgGQgLgFgIgIQgJgIgHgKIAAAmIhFAAIAAmKIBFAAIAACiQAOgVAVgLQALgFANgDQAMgDAMAAQAaAAAYAKQAXAJASATQASATALAYQALAlAAAWQAAAPgDAPIgIAcQgLAZgSATQgSASgXAKQgYAKgZAAQgNAAgMgDgAgegKQgOAGgKAKQgKAKgHANQgFAOAAAQQAAAPAFAOQAHAOAKALQAKAKAOAGQAOAGAPAAQAPAAANgGQAOgFAKgLQAKgLAGgNQAFgPAAgPQAAgQgFgOQgGgNgKgLQgKgKgOgFQgNgGgPAAQgPAAgOAGg");
	this.shape_7.setTransform(245.9,33);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("AA4CKIAAiYQAAgOgEgMQgDgLgHgIQgHgJgKgEQgLgEgNAAQgLAAgLAEQgKAFgIAIQgIAJgEAMQgFAMAAAQIAACUIhFAAIAAkNIBFAAIAAAiQANgTAUgKQAVgLAYAAQAYAAATAIQATAHAOAPQAOAPAHAVQAHAVAAAaIAACig");
	this.shape_8.setTransform(214.3,38.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE4B5C").s().p("AhKCGQgSgFgMgLQgMgKgGgPQgHgPAAgSQAAgUAJgSQAIgRAQgKQAQgMAWgGQAXgGAcAAIBGAAIAAgEQAAgLgEgJQgEgJgHgGQgHgHgLgEQgLgDgPAAQgVAAgQAJQgQAKgJARIhAggQALgOAMgLQAOgLAPgIQAQgJASgEQAUgFAVABQAdgBAYAIQAXAIAQAOQAQAOAIAUQAJAUAAAaIAAClIhDAAIAAgpQgHAKgKAJQgLAIgNAGQgNAHgNADQgPADgQABQgVAAgSgHgAgrAdQgOAJAAAQQAAAPALAHQAKAIAVAAQANAAALgEQALgEALgGQALgHAIgJQAIgJAFgLIAAgOIg/AAQgdAAgOAJg");
	this.shape_9.setTransform(183.9,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE4B5C").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAHgJAJgFQAKgGALgCQAMgEAMAAQAaAAAUALIgZBEQgNgJgXAAQgNAAgLADQgKAEgHAHQgIAIgFAMQgDAMAAARIAACOg");
	this.shape_10.setTransform(159.4,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE4B5C").s().p("AgYCKIgbgIQgZgLgUgUQgTgSgKgaIgJgbIgCgcQAAgTALgkQAKgZAUgTQATgUAZgJIAbgJIAcgCQAXAAAVAFQAUAHARALQARAMANAPQANAQAIATIhAAZQgIgWgSgMQgRgMgYAAQgOAAgOAGQgNAGgKAKQgKALgGANQgGAPAAAOQAAAPAGAOQAGANAKALQAKAKAOAGQANAGAPAAQAMAAAKgEQAKgDAJgGQARgNAJgVIBAAaQgJAUgMAPQgNAQgRALQgQAMgVAGQgVAGgXABg");
	this.shape_11.setTransform(132.7,39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE4B5C").s().p("AA2DFIhMhvIgpAuIAABBIhFAAIAAmJIBFAAIAAD4IBsh8IBTAAIhmByIBrCbg");
	this.shape_12.setTransform(92.4,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE4B5C").s().p("AA4CKIAAiYQAAgOgEgMQgDgLgHgIQgHgJgKgEQgLgEgNAAQgLAAgLAEQgKAFgIAIQgIAJgEAMQgFAMAAAQIAACUIhFAAIAAkNIBFAAIAAAiQANgTAUgKQAVgLAYAAQAYAAATAIQATAHAOAPQAOAPAHAVQAHAVAAAaIAACig");
	this.shape_13.setTransform(61.7,38.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE4B5C").s().p("AgiDEIAAkNIBFAAIAAENgAgfh2QgMgMAAgUQAAgTAMgMQANgOASAAQAUAAAMAOQAMAMAAATQAAAUgMAMQgMAMgUAAQgTAAgMgMg");
	this.shape_14.setTransform(40.6,32.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE4B5C").s().p("AiNDAIAAl5IBFAAIAAAlQANgUAWgLQALgGAMgDQANgDAMAAQAaAAAYAKQAXAKASASQASATALAaQALAkAAAWQAAAQgEAPIgHAaQgLAZgSATQgTATgWAJQgYAKgZAAQgaAAgWgKQgXgKgNgSIAACNgAgeh5QgOAGgKALQgKAKgHAOQgFAOAAAPQAAAQAFAOQAHANAKAKQAKAKAOAGQAOAGAPAAQAOAAAOgGQAOgFAKgLQAKgJAFgOQAHgOgBgQQABgPgHgPQgFgNgKgLQgKgKgOgGQgOgGgOAAQgPAAgOAGg");
	this.shape_15.setTransform(19,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text12, new cjs.Rectangle(0,0,435.4,69.8), null);


(lib.text11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AgrDFIAAjPIgtAAIAAg+IAtAAIAAgKQgBghAGgVQAGgXANgNQANgMAWgHQAVgFAiAAIASAAIAAA/IgMAAIgcACQgLACgFAEQgGAGgCAJIgBAZIAAANIBBAAIAAA+IhBAAIAADPg");
	this.shape.setTransform(360.9,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AgdCKIgbgIQgggSgNgNQgTgTgLgaIgIgaIgDgcQAAgTALgjQALgZATgUQAUgTAZgKIAbgJIAdgCQAUAAAkALQAaAKATATQAUAUALAZQALAjAAATIgDAcIgIAaQgLAagTATQgcAXgRAIQglAKgUABQgOAAgPgDgAgchFQgNAFgKALQgKALgGANQgGAOAAAPQAAAPAGAOQAGANAKALQAKAKANAGQAOAGAOAAQAPAAAOgGQANgGALgKQAKgLAFgNQAGgOAAgPQAAgPgGgOQgFgNgKgLQgLgLgNgFQgOgGgPAAQgOAAgOAGg");
	this.shape_1.setTransform(335.1,39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("Ag7C+QgXgKgSgSQgTgTgKgZIgJgcQgCgPAAgPQAAgWALglQAKgYASgTQASgTAYgJQAYgKAaAAQAZAAAWAKQAVALAOATIAAifIBEAAIAAGKIhEAAIAAglQgOATgWALQgLAGgMADQgMADgMAAQgZAAgYgKgAgagKQgNAFgLAKQgKALgGANQgGAOAAAQQAAAPAGAPQAGANAKALQALALANAFQAOAGAOAAQAQAAAOgGQANgGALgKQAKgLAFgOQAGgOAAgPQAAgQgGgOQgFgNgKgKQgLgKgNgGQgOgGgQAAQgOAAgOAGg");
	this.shape_2.setTransform(291.4,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAHgJAJgFQAKgGALgCQAMgEAMAAQAaAAAUALIgZBEQgNgJgXAAQgNAAgLADQgKAEgHAHQgIAIgFAMQgDAMAAARIAACOg");
	this.shape_3.setTransform(265.7,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AhKCGQgSgFgMgLQgMgKgGgPQgHgPAAgSQAAgUAJgSQAIgRAQgKQAQgMAWgGQAXgGAcAAIBGAAIAAgEQAAgLgEgJQgEgJgHgGQgHgHgLgEQgLgDgPAAQgVAAgQAJQgQAKgJARIhAggQALgOAMgLQAOgLAPgIQAQgJASgEQAUgFAVABQAdgBAYAIQAXAIAQAOQAQAOAIAUQAJAUAAAaIAAClIhDAAIAAgpQgHAKgKAJQgLAIgNAGQgNAHgNADQgPADgQABQgVAAgSgHgAgrAdQgOAJAAAQQAAAPALAHQAKAIAVAAQANAAALgEQALgEALgGQALgHAIgJQAIgJAFgLIAAgOIg/AAQgdAAgOAJg");
	this.shape_4.setTransform(238.5,39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AgbCKIgcgIIgZgNIgUgRQgUgTgJgaQgHgQgEgnQAAgSAMgkQAKgZATgUQAUgTAZgKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQALAjAAAUIAAAZIjWAAQAEANAGALQAHAKAKAIQAKAHANAEQAMAEAOAAQAYAAARgKQAQgJALgRIA4AhQgKAPgMALQgNALgPAIQgPAJgTAEQgSAEgXABgABIgdQgEgMgGgLQgGgJgKgGQgIgHgMgDQgLgEgOAAQgMAAgMAEQgLAEgKAGQgJAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_5.setTransform(208.4,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AA3DFIAAiZQAAgOgDgMQgEgLgHgHQgGgJgLgDQgLgFgNAAQgLAAgKAFQgLAEgIAIQgIAIgEAMQgFAMABAQIAACVIhFAAIAAmJIBFAAIAACdQANgSAUgKQAUgKAYAAQAYgBATAIQAUAIAOAOQAOAPAGAVQAIAUAAAaIAACjg");
	this.shape_6.setTransform(177.8,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("AhdCKIAAkNIBEAAIAAApQAFgMAHgJQAIgJAJgFQAJgGALgCQAMgEANAAQAZAAAUALIgZBEQgNgJgXAAQgNAAgLADQgKAEgIAHQgHAIgEAMQgEAMgBARIAACOg");
	this.shape_7.setTransform(141.6,38.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("AgbCKIgdgIIgYgNIgVgRQgSgTgLgaQgGgQgEgnQABgSAKgkQALgZATgUQAUgTAZgKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQAKAjAAAUIAAAZIjVAAQAEANAGALQAHAKAKAIQAKAHANAEQAMAEAOAAQAYAAARgKQAQgJALgRIA4AhQgKAPgNALQgNALgOAIQgQAJgSAEQgSAEgXABgABIgdQgDgMgHgLQgGgJgJgGQgKgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_8.setTransform(114.1,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE4B5C").s().p("AgiCHIhokNIBJAAIBCC1IBDi1IBHAAIhqENg");
	this.shape_9.setTransform(84.2,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE4B5C").s().p("AgbCKIgdgIIgYgNIgVgRQgSgTgLgaQgGgQgEgnQABgSAKgkQALgZATgUQAUgTAZgKIAbgJIAcgCQAUAAAkAKQAZAKATASQATATAKAaQAKAjAAAUIAAAZIjVAAQAEANAGALQAHAKAKAIQAKAHANAEQAMAEAOAAQAYAAARgKQAQgJALgRIA4AhQgKAPgNALQgNALgOAIQgQAJgSAEQgSAEgWABgABIgdQgDgMgHgLQgGgJgJgGQgKgHgLgDQgMgEgNAAQgMAAgMAEQgLAEgJAGQgKAHgHAKQgHAJgEAMICPAAIAAAAg");
	this.shape_10.setTransform(54.2,39);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE4B5C").s().p("ABSC3IikkAIAAEAIhFAAIAAltIBMAAICfD4IAAj4IBEAAIAAFtg");
	this.shape_11.setTransform(20.4,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text11, new cjs.Rectangle(0,0,373,69.8), null);


(lib.textoceanspray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE4B5C").s().p("AgQBUQgJgBgIgEQgIgDgHgFQgHgEgFgGIgLgNQgFgHgDgIQgDgHgCgJQgCgIAAgJQAAgIACgJQACgIADgIQADgIAFgHIALgMQAFgGAHgFQAHgFAIgDQAIgDAJgCQAIgBAIAAIASABQAIACAIADQAIADAHAFIAMALQAGAFAFAHQAFAHADAIQADAIACAIQACAJAAAIQAAAJgCAIQgCAJgDAIQgDAHgFAHQgFAHgGAGIgMAKQgHAFgIADQgIAEgIABQgJACgJAAQgIAAgIgCgAgXg3QgKAEgJAJQgIAIgEALQgFALAAAMQAAAMAFALQAEALAIAJQAIAIALAFIAMADIALACQANAAALgFQALgFAIgIQAIgJAFgLQAEgLAAgMQAAgMgFgLQgEgLgIgIQgJgJgKgEQgMgFgMAAQgLAAgMAFgAANApIgVgpIAJAAQAGAAADgDQAEgCAAgFQAAgGgEgCQgDgCgGAAIgJAAIAAAUIAAApIgaAAIAAhTIAmAAQAJAAAGADQAHACAFAEQAFAEACAFQADAGAAAGQAAAJgEAGQgEAHgIADIAQAcgAgIAAIAAgUIAJAAQAGAAADACQAEACAAAGQAAAFgEACQgDADgGAAgAgIAAg");
	this.shape.setTransform(261.6,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE4B5C").s().p("AhdCRQgQgFgNgJIAggtQAGAGAHAEQAIADAIAAQAPAAAJgHQALgIAHgTIAEgJIhWjOIA6AAIA4CLIA1iLIA5AAIhdDjQgJAVgIAOQgJAOgKAJQgLAIgNAEQgNAEgSAAQgQAAgQgGg");
	this.shape_1.setTransform(238.8,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE4B5C").s().p("Ag7BrQgOgEgKgIQgKgJgFgMQgFgLAAgPQAAgQAHgOQAHgNAMgJQANgKASgEQASgFAWgBIA4AAIAAgCQAAgJgDgHQgDgIgFgEQgGgFgJgEQgJgCgLAAQgRgBgNAIQgNAHgHAOIgzgaQAIgLAKgIQALgJAMgHQANgGAPgEQAPgDARAAQAYAAASAFQATAHANALQAMAMAHAPQAHARAAAUIAACEIg1AAIAAghQgGAIgIAHQgJAHgKAFQgKAFgLADQgMADgMAAQgSgBgOgFgAgjAXQgKAHAAANQAAAMAIAGQAJAGARAAQAJAAAJgDQAJgDAJgFQAIgGAHgGQAHgIAEgJIAAgLIgzAAQgXAAgMAHg");
	this.shape_2.setTransform(216.4,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE4B5C").s().p("AhKBuIAAjXIA2AAIAAAhQAEgJAGgHQAGgIAHgEQAHgEAJgDQAJgCALAAQAUAAAQAJIgUA2QgKgIgTAAQgKAAgJADQgIADgGAGQgGAGgDAKQgDAKAAANIAABxg");
	this.shape_3.setTransform(199,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE4B5C").s().p("AhwCaIAAkuIA2AAIAAAeQALgQASgJQAJgEAJgDQAKgCAKAAQAVAAASAHQATAIAPAPQAPAPAIAVQAIAdAAARQAAAMgCANIgGAUQgJAVgPAPQgOAOgTAJQgSAHgUABQgVgBgSgHQgSgJgKgPIAABygAgYhgQgLAEgIAIQgJAJgEALQgFALAAANQAAAMAFALQAEALAJAIQAIAIALAEQALAGAMAAQAMAAALgGQAKgEAJgIQAIgIAEgKQAFgMAAgMQAAgNgFgLQgEgLgIgJQgJgIgKgEQgLgFgMAAQgMAAgLAFg");
	this.shape_4.setTransform(178.3,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE4B5C").s().p("AgfCSQgTgEgQgJQgPgHgNgMQgMgKgLgOIAxgnQAHALAJAJQAJAJAJAGQAKAFAMADQALADAMAAQAMAAAJgDQAJgCAGgFQAGgFADgHQADgGAAgIQAAgKgFgHQgFgGgJgFQgLgGglgIQgtgLgSgLQgOgKgHgNQgJgQAAgVQAAgRAIgQQAIgQANgMQAOgMATgGQAUgHAVAAQATAAAQADQAQADAOAHQANAGANAKQALAJALANIgtAkQgNgSgPgJQgIgFgKgCQgKgDgNAAQgKAAgJADQgJADgFAFQgLAJAAAPQAAAJAFAGQAFAFAJAEQAJAEAlAIIAiAJQASAGANAJQAOAJAIAPQAFAIACAJQACAKAAAMQAAASgIARQgHARgOAMQgPANgTAHQgUAHgYAAQgWAAgUgEg");
	this.shape_5.setTransform(152.5,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE4B5C").s().p("AAtBuIAAh5QAAgLgDgKQgDgJgGgGQgFgHgIgDQgIgEgLAAQgJAAgIAEQgJADgGAHQgHAHgDAKQgEAKABAMIAAB2Ig4AAIAAjXIA4AAIAAAbQAKgOAQgJQAQgIAUAAQASAAAQAGQAQAGAKAMQAMALAFARQAGARAAAVIAACBg");
	this.shape_6.setTransform(119.9,31.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE4B5C").s().p("Ag7BrQgOgEgKgIQgKgJgFgMQgFgLAAgPQAAgQAHgOQAHgNAMgJQANgKASgEQASgFAWgBIA4AAIAAgCQAAgJgDgHQgDgIgFgEQgGgFgJgEQgJgCgLAAQgRgBgNAIQgNAHgHAOIgzgaQAIgLAKgIQALgJAMgHQANgGAPgEQAPgDARAAQAYAAASAFQATAHANALQAMAMAHAPQAHARAAAUIAACEIg1AAIAAghQgGAIgIAHQgJAHgKAFQgKAFgLADQgMADgMAAQgSgBgOgFgAgjAXQgKAHAAANQAAAMAIAGQAJAGARAAQAJAAAJgDQAJgDAJgFQAIgGAHgGQAHgIAEgJIAAgLIgzAAQgXAAgMAHg");
	this.shape_7.setTransform(95.7,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE4B5C").s().p("AgWBuIgWgGIgUgLIgQgNQgPgPgIgUQgGgOgCgfQAAgOAIgdQAJgUAPgQQAPgPAVgIIAVgHIAXgCQAQgBAdAJQAUAIAPAPQAPAPAIAUQAIAdAAAQIAAATIiqAAQACAKAGAJQAFAIAIAHQAIAFALAEQAKADALAAQASAAAOgIQANgHAIgOIAtAaQgIAMgKAJQgKAJgMAHQgMAGgPAEQgPAEgRAAgAA6gXQgDgKgFgIQgFgIgIgFQgHgFgJgDQgKgDgKABQgKAAgJACQgJADgIAGQgHAFgGAIQgFAIgEAJIBzAAIAAAAg");
	this.shape_8.setTransform(71.8,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE4B5C").s().p("AgTBuIgVgGQgVgJgPgPQgQgPgIgVIgHgVIgCgXQAAgPAJgdQAIgTAQgQQAPgPAVgIIAVgHIAWgCQATAAAQAEQARAFANAKQAOAIAKANQAKAMAGAQIgyAUQgHgRgOgKQgOgKgTAAQgLAAgLAFQgLAFgIAIQgIAJgFAKQgEAMAAALQAAAMAEALQAFALAIAJQAIAHALAFQALAFALAAQAKAAAIgDQAJgCAHgFQANgKAHgRIA0AVQgHAPgKANQgLAMgNAJQgNAKgRAEQgQAGgTAAg");
	this.shape_9.setTransform(47.5,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE4B5C").s().p("AgeCTQgOgDgNgGQgOgGgMgHQgMgJgKgKQgKgKgIgMQgJgMgFgOQgGgNgDgPQgCgPAAgPQAAgPACgOQADgPAGgOQAFgNAJgMQAIgMAKgKQAKgKAMgIQAMgJAOgFQANgGAOgDQAPgDAPAAQAPAAAPADQAOADAOAGQANAFANAJQAMAIAKAKQAKAKAIAMQAIAMAGANQAFAOAEAPQADAOAAAPQAAAPgDAPQgEAPgFANQgGAOgIAMQgIAMgKAKQgKAKgMAJQgNAHgMAGQgPAGgOADQgPADgPAAQgPAAgPgDgAgkhWQgRAHgMANQgNANgHARQgHASAAASQAAATAHASQAHAQANANQAMAOARAHQASAIASgBQATABARgIQASgHAMgOQANgNAHgQQAGgSABgTQgBgSgGgSQgIgRgMgNQgNgNgRgHQgRgIgTAAQgTAAgRAIg");
	this.shape_10.setTransform(18.8,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textoceanspray, new cjs.Rectangle(0,0,335.4,56.6), null);


(lib.clickthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bottleshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,121.2).s().p("AtMNNQleleAAnvQAAnuFeleQFeleHuAAQHvAAFeFeQFeFeAAHuQAAHvleFeQleFenvAAQnuAAleleg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,120.2).s().p("AtGNGQlalbAAnrQAAnqFalcQFclaHqAAQHrAAFbFaQFcFcgBHqQABHrlcFbQlbFcnrgBQnqABlclcg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,119.2).s().p("As/M/QlXlYAAnnQAAnlFXlaQFalXHlAAQHnAAFYFXQFZFagBHlQABHnlZFYQlYFZnngBQnlABlalZg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,118.2).s().p("As3M3QlWlUAAnjQAAnhFWlWQFWlWHhAAQHjAAFUFWQFWFWAAHhQAAHjlWFUQlUFWnjAAQnhAAlWlWg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,117.1).s().p("AswMwQlSlSAAneQAAndFSlTQFTlSHdAAQHeAAFSFSQFTFTAAHdQAAHelTFSQlSFTneAAQndAAlTlTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,116.1).s().p("AspMpQlPlPAAnaQAAnZFPlQQFQlPHZAAQHaAAFPFPQFQFQAAHZQAAHalQFPQlPFQnaAAQnZAAlQlQg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,115.1).s().p("AsiMjQlMlNAAnWQAAnVFMlNQFNlMHVAAQHWAAFNFMQFMFNAAHVQAAHWlMFNQlNFMnWAAQnVAAlNlMg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,114.1).s().p("AsbMcQlJlKAAnSQAAnRFJlKQFKlJHRAAQHSAAFKFJQFJFKAAHRQAAHSlJFKQlKFJnSAAQnRAAlKlJg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,113).s().p("AsTMUQlHlHAAnNQAAnMFHlHQFHlHHMAAQHNAAFHFHQFHFHAAHMQAAHNlHFHQlHFHnNAAQnMAAlHlHg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,112).s().p("AsMMNQlElDAAnKQAAnIFElEQFElEHIAAQHKAAFDFEQFEFEAAHIQAAHKlEFDQlDFEnKAAQnIAAlElEg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,111).s().p("AsGMGQk/lAAAnGQAAnFE/lBQFBk/HFAAQHGAAFAE/QFBFBgBHFQABHGlBFAQlAFBnGgBQnFABlBlBg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,110).s().p("Ar/L/Qk8k9gBnCQABnAE8k/QE/k8HAgBQHCABE9E8QE+E/gBHAQABHCk+E9Qk9E+nCgBQnAABk/k+g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,109).s().p("Ar3L4Qk7k7AAm9QAAm8E7k7QE7k7G8AAQG9AAE7E7QE6E7ABG8QgBG9k6E7Qk7E6m9ABQm8gBk7k6g");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,107.9).s().p("ArwLwQk4k3AAm5QAAm4E4k4QE4k4G4AAQG5AAE3E4QE4E4ABG4QgBG5k4E3Qk3E4m5ABQm4gBk4k4g");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,106.9).s().p("ArpLpQk1k0AAm1QAAm0E1k1QE1k1G0AAQG1AAE0E1QE2E1AAG0QAAG1k2E0Qk0E2m1AAQm0AAk1k2g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,105.9).s().p("AriLjQkykzAAmwQAAmvEykzQEzkyGvAAQGwAAEzEyQExEzABGvQgBGwkxEzQkzExmwABQmvgBkzkxg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,104.9).s().p("ArbLcQkukwAAmsQAAmsEukvQEvkuGsAAQGsAAEwEuQEuEvAAGsQAAGskuEwQkwEumsAAQmsAAkvkug");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,103.8).s().p("ArULUQkrksAAmoQAAmnErktQEtkrGnAAQGoAAEsErQEsEtAAGnQAAGoksEsQksEsmoAAQmnAAktksg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,102.8).s().p("ArMLNQkpkpAAmkQAAmjEpkpQEpkpGjAAQGkAAEpEpQEpEpAAGjQAAGkkpEpQkpEpmkAAQmjAAkpkpg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,101.8).s().p("ArFLGQkmkmAAmgQAAmfEmkmQEmkmGfAAQGgAAEmEmQEmEmAAGfQAAGgkmEmQkmEmmgAAQmfAAkmkmg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,102.7).s().p("ArMLMQkokoAAmkQAAmjEokpQEpkoGjAAQGkAAEoEoQEpEpAAGjQAAGkkpEoQkoEpmkAAQmjAAkpkpg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,103.6).s().p("ArTLTQkqksAAmnQAAmmEqktQEtkqGmAAQGnAAEsEqQErEtAAGmQAAGnkrEsQksErmnAAQmmAAktkrg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,104.6).s().p("ArZLaQktkvAAmrQAAmrEtkuQEuktGrAAQGrAAEvEtQEtEuAAGrQAAGrktEvQkvEtmrAAQmrAAkuktg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,105.5).s().p("ArfLfQkwkwAAmvQAAmuEwkxQExkwGuAAQGvAAEwEwQEyExgBGuQABGvkyEwQkwEymvgBQmuABkxkyg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,106.4).s().p("ArmLmQkzkzABmzQgBmyEzk0QE0kzGyABQGzgBEzEzQEzE0AAGyQAAGzkzEzQkzEzmzAAQmyAAk0kzg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,107.3).s().p("ArsLtQk1k3AAm2QAAm1E1k3QE3k1G1AAQG2AAE3E1QE2E3gBG1QABG2k2E3Qk3E2m2gBQm1ABk3k2g");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,108.3).s().p("AryLzQk5k4AAm7QAAm6E5k4QE4k5G6AAQG7AAE4E5QE5E4AAG6QAAG7k5E4Qk4E5m7AAQm6AAk4k5g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,109.2).s().p("Ar5L5Qk7k7AAm+QAAm9E7k8QE8k7G9AAQG+AAE7E7QE8E8AAG9QAAG+k8E7Qk7E8m+AAQm9AAk8k8g");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,110.1).s().p("AsAMAQk9k+AAnCQAAnBE9k/QE/k9HBAAQHCAAE+E9QE+E/AAHBQAAHCk+E+Qk+E+nCAAQnBAAk/k+g");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,111).s().p("AsGMHQlAlBAAnGQAAnFFAlBQFBlAHFAAQHGAAFBFAQFAFBAAHFQAAHGlAFBQlBFAnGAAQnFAAlBlAg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,112).s().p("AsMMMQlElDABnJQgBnJFElDQFDlEHJABQHJgBFDFEQFEFDAAHJQAAHJlEFDQlDFEnJAAQnJAAlDlEg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,112.9).s().p("AsTMTQlFlGAAnNQAAnMFFlHQFHlFHMAAQHNAAFGFFQFHFHgBHMQABHNlHFGQlGFHnNgBQnMABlHlHg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,113.8).s().p("AsZMaQlJlJABnRQgBnQFJlJQFJlJHQABQHRgBFJFJQFIFJAAHQQAAHRlIFJQlJFInRAAQnQAAlJlIg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,114.8).s().p("AsfMgQlMlMABnUQgBnUFMlLQFLlMHUABQHUgBFMFMQFLFLAAHUQAAHUlLFMQlMFLnUAAQnUAAlLlLg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,115.7).s().p("AsmMmQlOlOAAnYQAAnYFOlOQFOlOHYAAQHYAAFOFOQFPFOAAHYQAAHYlPFOQlOFPnYAAQnYAAlOlPg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,116.6).s().p("AstMtQlQlRAAncQAAnbFQlSQFSlQHbAAQHcAAFRFQQFRFSAAHbQAAHclRFRQlRFRncAAQnbAAlSlRg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,117.5).s().p("AszM0QlTlUAAngQAAnfFTlUQFUlTHfAAQHgAAFUFTQFTFUAAHfQAAHglTFUQlUFTngAAQnfAAlUlTg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,118.5).s().p("As5M5QlWlVAAnkQAAniFWlXQFXlWHiAAQHkAAFVFWQFXFXAAHiQAAHklXFVQlVFXnkAAQniAAlXlXg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,119.4).s().p("AtANAQlZlYABnoQgBnmFZlaQFalZHmABQHogBFYFZQFZFaAAHmQAAHolZFYQlYFZnoAAQnmAAlalZg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,120.3).s().p("AtGNHQlblcAAnrQAAnqFblcQFclbHqAAQHrAAFcFbQFbFcAAHqQAAHrlbFcQlcFbnrAAQnqAAlclbg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,0.69],0,0,0,0,0,139.4).s().p("AvMPMQmSmTAAo5QAAo4GSmUQGUmSI4AAQI5AAGTGSQGTGUAAI4QAAI5mTGTQmTGTo5AAQo4AAmUmTg");
	this.shape_40.setTransform(0,0,0.869,0.869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-119.5,239.1,239.1);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-128,-502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-502,269,512);


(lib.berry3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berry3();
	this.instance.parent = this;
	this.instance.setTransform(-54,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.berry3_1, new cjs.Rectangle(-54,-51.5,108,103), null);


(lib.berry2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berry2();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.berry2_1, new cjs.Rectangle(-34.5,-36.5,69,73), null);


(lib.berry1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.berry1();
	this.instance.parent = this;
	this.instance.setTransform(-39,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.berry1_1, new cjs.Rectangle(-39,-35,77,70), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text4
	this.t6 = new lib.text35();
	this.t6.parent = this;
	this.t6.setTransform(139.3,215.3,1,1,0,0,0,139.5,28.3);

	this.t5 = new lib.text34();
	this.t5.parent = this;
	this.t5.setTransform(139.3,165.8,1,1,0,0,0,139.5,28.3);

	this.t4 = new lib.text3pinkcranberry();
	this.t4.parent = this;
	this.t4.setTransform(-0.2,88);

	this.t3 = new lib.textoceanspray();
	this.t3.parent = this;
	this.t3.setTransform(0,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6}]}).wait(1));

	// text3
	this.t2 = new lib.text3new();
	this.t2.parent = this;
	this.t2.setTransform(218.6,22,1,1,0,0,0,34.5,21.7);

	this.t1 = new lib.text3introducing();
	this.t1.parent = this;
	this.t1.setTransform(92,21.7,1,1,0,0,0,89.3,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-0.2,0,396.7,243.6), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.text22();
	this.t2.parent = this;
	this.t2.setTransform(0,29.1,1,1,0,0,0,234.9,34.9);

	this.t1 = new lib.text21();
	this.t1.parent = this;
	this.t1.setTransform(0,-28.8,1,1,0,0,0,215.4,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-234.9,-63.7,469.8,127.7), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.text12();
	this.t2.parent = this;
	this.t2.setTransform(0,29.2,1,1,0,0,0,217.7,34.9);

	this.t1 = new lib.text11();
	this.t1.parent = this;
	this.t1.setTransform(0,-28.8,1,1,0,0,0,186.5,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-217.7,-63.7,435.4,127.8), null);


(lib.berry3float = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_116 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(116).call(this.frame_116).wait(1));

	// Layer 1
	this.b2 = new lib.berry3_1();
	this.b2.parent = this;
	this.b2.setTransform(-0.1,0.1,0.765,0.765,0,0,0,19.4,-13);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1).to({rotation:10.7,y:16.2},44).to({regX:19.3,regY:-12.7,rotation:1.5,x:-0.2,y:19.8},16).to({regX:19.1,regY:-12.8,rotation:-8.4,y:-5.8},45,cjs.Ease.quadOut).to({regX:19.4,regY:-13,rotation:0,x:-0.1,y:0.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-29.4,82.6,78.8);


(lib.berry3anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{anim:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.gotoAndPlay('anim');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// berry
	this.instance = new lib.berry3_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,0.1,1,1,0,0,0,20.7,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-37,108,103);


(lib.berry2float = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(97).call(this.frame_97).wait(1));

	// Layer 1
	this.b1 = new lib.berry2_1();
	this.b1.parent = this;
	this.b1.setTransform(0,0,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get(this.b1).to({rotation:-25.7,y:9.3},41,cjs.Ease.quadIn).to({regY:0.1,rotation:-2.7,y:14.3},10).to({regY:0,rotation:0,y:0},46,cjs.Ease.cubicOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-17.1,32.3,34.2);


(lib.berry2anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"anim":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.gotoAndPlay('anim');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// berry
	this.instance = new lib.berry2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:22.7},11).wait(5).to({rotation:0},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-36.5,69,73);


(lib.berry1float = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_118 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

	// Layer 1
	this.b1 = new lib.berry1_1();
	this.b1.parent = this;
	this.b1.setTransform(0,0,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get(this.b1).to({regX:-0.1,regY:0.1,rotation:-17.2,y:9.3},44,cjs.Ease.quadIn).to({regX:0,rotation:-2.7,y:11.9},20).to({regY:0,rotation:0,y:0},54,cjs.Ease.cubicOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-16.4,36.1,32.8);


(lib.berry1anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"anim":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.gotoAndPlay('anim');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// berry
	this.instance = new lib.berry1_1();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:38.2},9).wait(5).to({rotation:-29.5},9).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-35,77,70);


(lib.berries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var berriesArr = [
			this.b1,
			this.b2,
			this.b3,
			this.b4,
			this.b5,
			this.b6,
			this.b7,
			this.b8,
			this.b9,
			this.b10,
			this.b11,
			this.b12
		];
		
		var _this = this;
		var numBerries = berriesArr.length;
		
		this.showBerries = function() {	
			for (var i = 0; i < numBerries; i++) {
				var b = berriesArr[i];
				b.gotoAndPlay("anim");
			}
			
			var tl = new TimelineMax();
			tl
			.staggerFrom( berriesArr, 1.5, {
				scaleX: 0.01,
				scaleY: 0.01,
				ease: Elastic.easeOut.config(1, 0.3)
			}, 0.05);
			
		};
		
		this.hideBerries = function() {
			var tl = new TimelineMax();
			tl
			.staggerTo( berriesArr, 0.12, {
				scaleX: 0.01,
				scaleY: 0.01,
				alpha: 0,
				ease: Back.easeInOut
			}, 0.05);
			
		};
		
		function playAnim(target){
			console.log(target)
			//target.gotoAndPlay('anim');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// b9
	this.b9 = new lib.berry2anim();
	this.b9.parent = this;
	this.b9.setTransform(80.7,411.5,1,1,-110.3);

	this.timeline.addTween(cjs.Tween.get(this.b9).wait(1));

	// b11
	this.b11 = new lib.berry1anim();
	this.b11.parent = this;
	this.b11.setTransform(375.3,412.8,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.b11).wait(1));

	// b12
	this.b12 = new lib.berry2anim();
	this.b12.parent = this;
	this.b12.setTransform(516.4,415.3,1,1,81.2);

	this.timeline.addTween(cjs.Tween.get(this.b12).wait(1));

	// b8
	this.b8 = new lib.berry2anim();
	this.b8.parent = this;
	this.b8.setTransform(519.5,249.6,1,1,-120);

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(1));

	// b5
	this.b5 = new lib.berry2anim();
	this.b5.parent = this;
	this.b5.setTransform(80.8,249.9);

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(1));

	// b6
	this.b6 = new lib.berry1anim();
	this.b6.parent = this;
	this.b6.setTransform(228.9,249.9,1,1,105);

	this.timeline.addTween(cjs.Tween.get(this.b6).wait(1));

	// b4
	this.b4 = new lib.berry2anim();
	this.b4.parent = this;
	this.b4.setTransform(516.6,89);

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(1));

	// b3
	this.b3 = new lib.berry2anim();
	this.b3.parent = this;
	this.b3.setTransform(375,85.7,1,1,-112);

	this.timeline.addTween(cjs.Tween.get(this.b3).wait(1));

	// b10
	this.b10 = new lib.berry3anim();
	this.b10.parent = this;
	this.b10.setTransform(227.3,418.8,1,1,62.7);

	this.timeline.addTween(cjs.Tween.get(this.b10).wait(1));

	// b7
	this.b7 = new lib.berry3anim();
	this.b7.parent = this;
	this.b7.setTransform(372,251.3,1,1,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.b7).wait(1));

	// b2
	this.b2 = new lib.berry2anim();
	this.b2.parent = this;
	this.b2.setTransform(229.5,88.5,1,1,132);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	// b1
	this.b1 = new lib.berry1anim();
	this.b1.parent = this;
	this.b1.setTransform(81.5,88);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

}).prototype = getMCSymbolPrototype(lib.berries, new cjs.Rectangle(0,0,600,500), null);


(lib.backgroundBerries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var berriesArr = [
			this.b1,
			this.b2,
			this.b3,
			this.b4,
			this.b5
		];
		
		var numBerries = berriesArr.length;
		
		
		function playBerry(berry, delay) {
			TweenMax.from(berry, 1.5, {
				scaleX: 0.01,
				scaleY: 0.01,
				delay: delay,
				ease: Elastic.easeOut.config(1, 0.3)
			})
			berry.gotoAndPlay("loop");
		}
		
		this.showBerries = function() {
			var tl = new TimelineMax();
			
			for(var i = 0; i < numBerries; i++) {
				var delay = exportRoot.randRange(0, 3) * 0.2;
				var b = berriesArr[i];
				
				b.size = {
					width: b.scaleX,
					height: b.scaleY
				};
				playBerry(b, delay);
			}  
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.b1 = new lib.berry2float();
	this.b1.parent = this;
	this.b1.setTransform(238.8,150.7);

	this.b2 = new lib.berry3float();
	this.b2.parent = this;
	this.b2.setTransform(432.4,117.6);

	this.b5 = new lib.berry2float();
	this.b5.parent = this;
	this.b5.setTransform(164.7,352.9,1.019,1.019,0,0,0,0.1,0);

	this.b3 = new lib.berry1float();
	this.b3.parent = this;
	this.b3.setTransform(458.9,353.4,1.13,1.13,0,0,0,0.1,0.2);

	this.b4 = new lib.berry3float();
	this.b4.parent = this;
	this.b4.setTransform(330.3,378.7,0.505,0.505,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4},{t:this.b3},{t:this.b5},{t:this.b2},{t:this.b1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundBerries, new cjs.Rectangle(0,0,600,500), null);


(lib.leafanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// berry2-anim
	this.instance = new lib.berry2anim();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,0.222,0.222,-46.8,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:0.2,scaleX:0.52,scaleY:0.52},7).to({regY:0.3,scaleX:0.43,scaleY:0.43},4).to({regX:-0.2,regY:0.2,scaleX:0.39,scaleY:0.39,rotation:-46.7},4).to({regX:-0.1,regY:0.3,scaleX:0.43,scaleY:0.43,rotation:-46.8},3).wait(9));

	// new
	this.instance_1 = new lib._new("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,-0.3,0.219,0.219,105,0,0,230.3,227.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:230.7,regY:228.2,scaleX:0.3,scaleY:0.3,rotation:30,x:0.1,y:-0.2},13).to({regX:230.8,regY:228,scaleX:0.26,scaleY:0.26,y:-0.3},5).wait(3));

	// leaf
	this.instance_2 = new lib.leaf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.9,-16.1,0.811,0.811,0,0,0,170.8,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-6,y:2.9},7).to({x:0,y:-0.1},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-11.3,22.3,22.3);


(lib.bottleanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"anim":1,"float":122,end:160,floatLoop:187});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.loop = false;
		this.loopCount = 0;
	}
	this.frame_159 = function() {
		/*
		if (this.loop === true) {
			this.gotoAndPlay('float');
		} else {
			this.gotoAndPlay('end');
		}*/
	}
	this.frame_178 = function() {
		//this.shadow.gotoAndPlay('loop');
	}
	this.frame_276 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(159).call(this.frame_159).wait(19).call(this.frame_178).wait(98).call(this.frame_276).wait(1));

	// petal
	this.instance = new lib.petal("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(105.4,-245.1,0.049,0.049,0,0,0,2,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({regX:1.7,regY:1.7,scaleX:0.18,scaleY:0.18},15).to({regX:1.6,regY:1.6,scaleX:0.13,scaleY:0.13},4).wait(99).to({startPosition:0},0).to({regX:1.5,regY:1.2,rotation:86.2,x:85.6,y:-237.7},37,cjs.Ease.quadOut).wait(66));

	// petal
	this.instance_1 = new lib.petal("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-111.3,-79,0.045,0.045,0,0,0,2.2,2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({regY:1.9,scaleX:0.14,scaleY:0.14,x:-111.2},10).to({regX:1.6,regY:1.6,scaleX:0.1,scaleY:0.1,x:-111.3},5).wait(94).to({startPosition:0},0).to({regX:1.4,regY:0.9,rotation:-105,x:-108.9,y:-65.1},37,cjs.Ease.quadOut).wait(70));

	// petal-ring
	this.instance_2 = new lib.petalring("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-93.4,-174.1,0.036,0.036);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({regX:-0.1,regY:-0.4,scaleX:0.12,scaleY:0.12,rotation:-69.2,x:-93.5,y:-174},15).to({regX:-0.2,regY:-0.5,scaleX:0.1,scaleY:0.1},3).wait(90).to({startPosition:0},0).to({regX:0.4,regY:-0.4,rotation:-131.9,x:-129.3,y:-170.3},36,cjs.Ease.quadOut).wait(76));

	// berry3-anim
	this.instance_3 = new lib.berry3anim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-63.8,-267.2,0.155,0.155);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regY:0.1,scaleX:0.61,scaleY:0.61,y:-267.1},14).to({regY:0,scaleX:0.54,scaleY:0.54,y:-267.2},4).to({scaleX:0.46,scaleY:0.46},2).to({scaleX:0.54,scaleY:0.54},2).wait(96).to({scaleX:0.37,scaleY:0.37,x:-95.8,y:-275},37).wait(73));

	// bottle
	this.instance_4 = new lib.bottle_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8,721);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:6.5,regY:-246,x:-1.5,y:474.5},0).wait(1).to({y:473.3},0).wait(1).to({y:471.3},0).wait(1).to({y:468.5},0).wait(1).to({y:465},0).wait(1).to({y:460.7},0).wait(1).to({y:455.8},0).wait(1).to({y:450.1},0).wait(1).to({y:443.8},0).wait(1).to({y:436.9},0).wait(1).to({y:429.3},0).wait(1).to({x:-1.6,y:421.1},0).wait(1).to({y:412.3},0).wait(1).to({y:403},0).wait(1).to({y:393.1},0).wait(1).to({y:382.6},0).wait(1).to({x:-1.7,y:371.6},0).wait(1).to({y:360.2},0).wait(1).to({y:348.2},0).wait(1).to({y:335.7},0).wait(1).to({x:-1.8,y:322.8},0).wait(1).to({y:309.5},0).wait(1).to({y:295.7},0).wait(1).to({y:281.6},0).wait(1).to({x:-1.9,y:267},0).wait(1).to({y:252.1},0).wait(1).to({y:236.8},0).wait(1).to({x:-2,y:221.2},0).wait(1).to({y:205.4},0).wait(1).to({y:189.2},0).wait(1).to({x:-2.1,y:172.8},0).wait(1).to({y:156.2},0).wait(1).to({y:139.5},0).wait(1).to({x:-2.2,y:122.6},0).wait(1).to({y:105.7},0).wait(1).to({y:88.8},0).wait(1).to({x:-2.3,y:71.9},0).wait(1).to({y:55.3},0).wait(1).to({y:38.9},0).wait(1).to({x:-2.4,y:23.1},0).wait(1).to({y:8.1},0).wait(1).to({y:-5.9},0).wait(1).to({regX:0,regY:0,x:-9,y:228},0).to({rotation:-2,x:-8,y:246},20).to({rotation:-1.5,x:-7.6,y:251.3},18).to({rotation:-0.4,x:-4,y:241.1},16).to({regX:-0.1,regY:0.1,rotation:-2.2,x:-5.7,y:238.1},8).to({rotation:-2.7,x:-2.5,y:235.3},17).to({rotation:-1.7,x:-5.2,y:245.4},14).to({rotation:-1,x:-5,y:239.1},10).to({rotation:-2.7,x:-2.5,y:235.3},13).to({regX:0,regY:0.4,scaleX:0.82,scaleY:0.82,rotation:-10.8,x:25.1,y:125.5},19).wait(1).to({regX:6.5,regY:-246,x:-7.7,y:-73.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0.4,x:25.1,y:125.5},0).wait(1).to({regX:6.5,regY:-246,x:-7.5,y:-73.2},0).wait(1).to({rotation:-10.7,x:-7.2,y:-72.9},0).wait(1).to({rotation:-10.6,x:-7,y:-72.5},0).wait(1).to({rotation:-10.5,x:-6.8,y:-72.2},0).wait(1).to({rotation:-10.4,x:-6.5,y:-71.9},0).wait(1).to({x:-6.3,y:-71.5},0).wait(1).to({rotation:-10.3,x:-6.1,y:-71.2},0).wait(1).to({rotation:-10.2,x:-5.9,y:-70.9},0).wait(1).to({rotation:-10.1,x:-5.7,y:-70.6},0).wait(1).to({rotation:-10,x:-5.4,y:-70.3},0).wait(1).to({rotation:-9.9,x:-5.2,y:-69.9},0).wait(1).to({x:-5,y:-69.6},0).wait(1).to({rotation:-9.8,x:-4.8,y:-69.3},0).wait(1).to({rotation:-9.7,x:-4.6,y:-68.9},0).wait(1).to({regX:0.1,regY:0.4,rotation:-9.6,x:24.2,y:131},0).wait(1).to({regX:6.5,regY:-246,rotation:-9.7,x:-4.7,y:-69.2},0).wait(1).to({x:-5.1,y:-69.6},0).wait(1).to({rotation:-9.8,x:-5.4,y:-70.1},0).wait(1).to({x:-5.7,y:-70.6},0).wait(1).to({x:-6.1,y:-71},0).wait(1).to({rotation:-9.9,x:-6.4,y:-71.5},0).wait(1).to({x:-6.8,y:-72},0).wait(1).to({rotation:-10,x:-7.1,y:-72.5},0).wait(1).to({x:-7.4,y:-72.9},0).wait(1).to({rotation:-10.1,x:-7.8,y:-73.5},0).wait(1).to({x:-8.1,y:-73.9},0).wait(1).to({regX:0,regY:0.5,x:21.9,y:125.1},0).wait(1).to({regX:6.5,regY:-246,rotation:-10.2,x:-8.3,y:-74.1},0).wait(1).to({y:-73.7},0).wait(1).to({rotation:-10.3,x:-8.2,y:-73.3},0).wait(1).to({y:-73},0).wait(1).to({rotation:-10.4,x:-8.1,y:-72.6},0).wait(1).to({y:-72.2},0).wait(1).to({rotation:-10.5,x:-8,y:-71.8},0).wait(1).to({y:-71.5},0).wait(1).to({rotation:-10.6,x:-7.9,y:-71.2},0).wait(1).to({y:-70.8},0).wait(1).to({rotation:-10.7,x:-7.8,y:-70.4},0).wait(1).to({y:-70.1},0).wait(1).to({rotation:-10.8,x:-7.7,y:-69.7},0).wait(1).to({regX:0,regY:0.4,x:25.1,y:129.8},0).wait(1).to({regX:6.5,regY:-246,x:-7.7,y:-69.6},0).wait(1).to({y:-69.9},0).wait(1).to({y:-70.2},0).wait(1).to({y:-70.5},0).wait(1).to({y:-70.8},0).wait(1).to({y:-71.1},0).wait(1).to({y:-71.4},0).wait(1).to({y:-71.7},0).wait(1).to({y:-72},0).wait(1).to({y:-72.3},0).wait(1).to({y:-72.6},0).wait(1).to({y:-72.9},0).wait(1).to({y:-73.2},0).wait(1).to({regX:0,regY:0.4,x:25.1,y:125.5},0).wait(1).to({regX:6.5,regY:-246,x:-7.7,y:-73.1},0).wait(1).to({y:-72.8},0).wait(1).to({y:-72.4},0).wait(1).to({y:-72.1},0).wait(1).to({y:-71.7},0).wait(1).to({y:-71.4},0).wait(1).to({y:-71},0).wait(1).to({y:-70.7},0).wait(1).to({y:-70.3},0).wait(1).to({y:-70},0).wait(1).to({y:-69.6},0).wait(1).to({regX:0,regY:0.4,x:25.1,y:129.8},0).to({y:125.5},21,cjs.Ease.quadOut).wait(3));

	// shadow
	this.shadow = new lib.bottleshadow();
	this.shadow.parent = this;
	this.shadow.setTransform(9,242.1,1.503,0.167);
	this.shadow.alpha = 0.301;
	this.shadow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(164).to({_off:false},0).to({scaleX:1.28,scaleY:0.14,y:162.1},14).wait(99));

	// petal-ring
	this.instance_5 = new lib.petalring("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(116.2,96.2,0.027,0.027);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({scaleX:0.15,scaleY:0.15},15).to({regX:-0.4,regY:0.1,scaleX:0.12,scaleY:0.12,rotation:-165.1},3).wait(106).to({startPosition:0},0).to({regX:0.7,regY:-0.3,scaleX:0.09,scaleY:0.09,rotation:-292.3,x:116.8,y:54.9},33,cjs.Ease.quadOut).wait(72));

	// leaf-anim
	this.instance_6 = new lib.leafanim("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-118.3,66.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},0).wait(94).to({regX:-0.6,regY:0.5,x:-118.9,y:66.8,startPosition:26},0).to({regX:-0.8,regY:0.4,scaleX:0.98,scaleY:0.98,x:-91,y:2},27,cjs.Ease.quadOut).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,219,269,512);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/**
		* Squarewave CreateJS Template 1.1 (September 2016)
		**/
		var root = this;
		var finished = false;
		
		/**** uncomment to use within creative ******/
		/*
		root.clickthrough.on('mouseover' , onRollOver );
		root.clickthrough.on('mouseout' , onRollOut );
		root.clickthrough.on('click' , onClick );
		*/
		
		var frame3Text = [root.text3.t1, root.text3.t2, root.text3.t3, root.text3.t4, root.text3.t5, root.text3.t6];
		
		this.onInit = function()
		{
			var tl = new TimelineMax({onComplete: function(){ root.finished = true; }});
			
			// frame 1
			tl.add("frame1", 0)
			.from(root.berries, 0.3, {alpha: 0}, "frame1")
			.call(root.berries.showBerries, null, this, 'frame1')
			
			// frame 2
			.add("frame2", 2.5)
			.to(root.berries, 0.01, {alpha: 0}, 'frame2')
			
			// bg berries
			.from(root.bgBerries, 0.01, {alpha: 0}, 'frame2+=0.2')
			.call(root.bgBerries.showBerries, null, this, 'frame2+=0.2')
		
			.from(root.text1.t1, 0.3, {alpha: 0}, "frame2+=0.4")
			.from(root.text1.t2, 0.3, {alpha: 0}, "frame2+=0.8")
			
			// frame 3
			.add("frame3", 5.5)
			.to(root.text1, 0.3, {alpha: 0}, "frame3")
			.from(root.text2.t1, 0.3, {alpha: 0}, "frame3+=0.4")
			.from(root.text2.t2, 0.3, {alpha: 0}, "frame3+=0.8")
			
			// frame 4
			.add("frame4", 8.5)
			.to(root.text2, 0.3, {alpha: 0}, "frame4")
			.to(root.bgBerries, 0.01, {alpha: 0}, 'frame4')
			
			// introducing new
			.staggerFrom(frame3Text, 0.55, {alpha: 0, ease:Power2.easeOut}, 0.15, "frame4+=0.2")
			
			.from(root.bottle, 0.01, {alpha: 0}, "frame4")
			.add(function(){ root.bottle.gotoAndPlay('anim'); }, 'frame4')
			
			// frame 5
			.add("frame5", 13.5)
			.to(root.text3, 0.3, {alpha: 0}, "frame5")
			
			.from(root.text4, 0.3, {alpha: 0}, "frame5+=0.6")
			.add( function() { root.bottle.loop = false; }, 'frame5')
			.from(root.cta, 0.3, {
				alpha: 0,
				scaleX: 0,
				scaleY: 0,
				ease: Back.easeOut,
			}, "frame5+=0.8")
			
			//tl.play("frame4")
			console.log('running time: ' + tl.totalDuration())
		}
		
		this.onRollOverEvent = function(e)
		{
			// wake up creative if asleep //
			if( root.adHelper && !root.adHelper.awake ) root.adHelper.wake();
			
			console.log("creative-mouse over" );
			
			if (root.finished === true) root.bottle.gotoAndPlay('floatLoop');
			
			TweenMax.to(root.cta, 0.3, {scaleX: 1.2, scaleY: 1.2, ease:Back.easeInOut})
		}
		
		this.onRollOutEvent = function(e)
		{
			console.log("creative-mouse out" );
			
			TweenMax.to(root.cta, 0.3, {scaleX: 1, scaleY: 1, ease:Back.easeOut})
		}
		
		
		this.onClickEvent = function(e)
		{
			console.log("creative-click");
		}
		
		
		/**
		* Utils
		*
		**/
		
		// generate a random number between two numbers
		this.randRange = function(min, max)
		{
		     return Math.round(min + (max - min) * Math.random());
		}
		
		
		
		/**
		* AD HELPER METHODS
		* 
		* If everything is setup correctly, you can use 
		* root.adHelper.sleep() & root.adHelper.wake() 
		* to manually control AdHelper.
		* NOTE: sleep() pauses CreateJS AND TweenLite
		*
		**/
		this.adHelper = null; // adhelper reference //
		this.onSlowDown = function()
		{
			console.log("creative-slowdown");
		}
		
		this.onSleep = function()
		{
			console.log("creative-sleep");
		}
		
		this.onWake = function()
		{
			console.log("creative-wake");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickthrough
	this.clickthrough = new lib.clickthrough();
	this.clickthrough.parent = this;
	this.clickthrough.setTransform(300,250,2,2,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.parent = this;
	this.cta.setTransform(125.6,308.3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text4
	this.text4 = new lib.text5();
	this.text4.parent = this;
	this.text4.setTransform(170.8,192.1,1,1,0,0,0,145.4,77.9);

	this.timeline.addTween(cjs.Tween.get(this.text4).wait(1));

	// text3
	this.text3 = new lib.text3();
	this.text3.parent = this;
	this.text3.setTransform(194.8,214.9,1,1,0,0,0,167.7,97.1);

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(1));

	// text2
	this.text2 = new lib.text2();
	this.text2.parent = this;
	this.text2.setTransform(299.9,247.4);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text1
	this.text1 = new lib.text1();
	this.text1.parent = this;
	this.text1.setTransform(300.6,247.1);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1));

	// bottle
	this.bottle = new lib.bottleanim();
	this.bottle.parent = this;
	this.bottle.setTransform(458.5,314);

	this.timeline.addTween(cjs.Tween.get(this.bottle).wait(1));

	// background berries
	this.bgBerries = new lib.backgroundBerries();
	this.bgBerries.parent = this;
	this.bgBerries.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.bgBerries).wait(1));

	// berries
	this.berries = new lib.berries();
	this.berries.parent = this;
	this.berries.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.berries).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,600,1045);
// library properties:
lib.properties = {
	id: '63D68772D0B59A489DF8701B95D380F2',
	width: 600,
	height: 500,
	fps: 30,
	color: "#FDEEEE",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/berry1.png", id:"berry1"},
		{src:"images/berry2.png", id:"berry2"},
		{src:"images/berry3.png", id:"berry3"},
		{src:"images/bottle.png", id:"bottle"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['63D68772D0B59A489DF8701B95D380F2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;