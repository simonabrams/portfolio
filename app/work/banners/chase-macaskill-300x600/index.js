(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.boxopen = function() {
	this.initialize(img.boxopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,151);


(lib.lidclosed = function() {
	this.initialize(img.lidclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,183);


(lib.lidopen = function() {
	this.initialize(img.lidopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,108);// helper functions:

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


(lib.textLegalwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAcIAFgUIgKgjIAEAAIAIAeIAUgeIAFAAIgYAjIgEAUg");
	this.shape.setTransform(96.7,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAcIANg3IADAAIgLA0IAYAAIgBADg");
	this.shape_1.setTransform(91.9,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgXAAIgHAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgFAAgHQAAgLgNAAIgHAAg");
	this.shape_2.setTransform(87.7,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgWAAIgIAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgEAAgIQAAgLgNAAIgHAAg");
	this.shape_3.setTransform(82.9,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAdIgCgUIgTAAIgMAUIgEAAIAfg5IACAAIAIA5gAAIgQIgLAVIARAAIgDgag");
	this.shape_4.setTransform(77.7,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAcIgHgBIAAgFQAHAEAHAAQAGAAAFgEQAEgDAAgGIgBgEIgCgDIgDgDIgFgDQgGgCgCgDQgCgDAAgFQAAgEACgEQACgDAFgCQAEgCAEAAIAHABIAHACIgCADIgGgCIgGgBQgGAAgDADQgEADAAAGQAAADACADQADAEADACIAIADIAEAFQABACAAAEQAAAFgDADQgCAEgFADQgFABgEAAg");
	this.shape_5.setTransform(71.4,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAcIgUgwIgLAwIgDAAIAMg3IADAAIAUAxIAAAAIAKgxIAEAAIgNA3g");
	this.shape_6.setTransform(66.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAYQgFgGAAgLQAAgKADgIQAFgJAFgEQAHgFAHABQAKAAAFAFQAFAHAAAKQAAAIgEAKQgDAIgGAFQgHAFgHgBQgKAAgFgFgAgHgUQgGAEgDAHQgDAHAAAIQAAAJAEAGQAFAFAHAAQAGAAAGgEQAEgEADgIQAEgHAAgJQAAgKgFgEQgDgEgIgBQgHAAgEAFg");
	this.shape_7.setTransform(60.7,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_8.setTransform(56.5,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAcIALg0IgRAAIABgDIAmAAIgBADIgRAAIgLA0g");
	this.shape_9.setTransform(53.9,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAdIgCgUIgTAAIgMAUIgEAAIAfg5IADAAIAHA5gAgCAFIAQAAIgDgag");
	this.shape_10.setTransform(48.4,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAcIALg0IgQAAIAAgDIAlAAIAAADIgSAAIgKA0g");
	this.shape_11.setTransform(45.2,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_12.setTransform(41.5,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOAcIAMgzIgBAAIgdAzIgCAAIgIgzIgBAAIgKAzIgEAAIAMg3IAFAAIAIAvIAcgvIAGAAIgLA3g");
	this.shape_13.setTransform(36.9,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_14.setTransform(32.3,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAcIALg3IAEAAIgLA0IAYAAIgBADg");
	this.shape_15.setTransform(29,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAcIAMg3IALAAQALgBAGAGQAFAFAAAMQAAAKgEAHQgFAJgHAEQgHADgJAAgAgRAZIAIAAQAIAAAGgEQAHgDAEgIQADgHAAgIQAAgTgTAAIgHAAg");
	this.shape_16.setTransform(21.9,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAKAcIgTgwIgBAAIgKAwIgEAAIAMg3IAEAAIASAxIABAAIAKgxIAEAAIgMA3g");
	this.shape_17.setTransform(16.4,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAcIAMg3IAbAAIAAADIgYAAIgEAWIAWAAIgBACIgWAAIgFAZIAXAAIgBADg");
	this.shape_18.setTransform(11.4,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgXAAIgHAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgFAAgHQAAgLgNAAIgHAAg");
	this.shape_19.setTransform(6.6,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAcIgGgBIAAgFQAHAEAGAAQAGAAAFgEQAEgDAAgGIAAgEIgCgDIgEgDIgEgDQgHgBgBgEQgDgDAAgFQAAgEADgEQACgDAEgCQAEgCAEAAIAHABIAGACIAAADIgHgCIgGgBQgGAAgDADQgEAEAAAFIACAGIAGAGIAJADIADAFIABAGQAAAFgDADQgBAEgGADQgEABgFAAg");
	this.shape_20.setTransform(2,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textLegalwhite, new cjs.Rectangle(0,0,98.6,5.9), null);


(lib.textLegal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AgNAcIAFgUIgKgjIAEAAIAIAeIAUgeIAFAAIgYAjIgEAUg");
	this.shape.setTransform(96.7,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050304").s().p("AgOAcIANg3IADAAIgLA0IAYAAIgBADg");
	this.shape_1.setTransform(91.9,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050304").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgXAAIgHAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgFAAgHQAAgLgNAAIgHAAg");
	this.shape_2.setTransform(87.7,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050304").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgWAAIgIAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgEAAgIQAAgLgNAAIgHAAg");
	this.shape_3.setTransform(82.9,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050304").s().p("AARAdIgCgUIgTAAIgMAUIgEAAIAfg5IACAAIAIA5gAAIgQIgLAVIARAAIgDgag");
	this.shape_4.setTransform(77.7,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050304").s().p("AgMAcIgHgBIAAgFQAHAEAHAAQAGAAAFgEQAEgDAAgGIgBgEIgCgDIgDgDIgFgDQgGgCgCgDQgCgDAAgFQAAgEACgEQACgDAFgCQAEgCAEAAIAHABIAHACIgCADIgGgCIgGgBQgGAAgDADQgEADAAAGQAAADACADQADAEADACIAIADIAEAFQABACAAAEQAAAFgDADQgCAEgFADQgFABgEAAg");
	this.shape_5.setTransform(71.4,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050304").s().p("AAKAcIgUgwIgLAwIgDAAIAMg3IADAAIAUAxIAAAAIAKgxIAEAAIgNA3g");
	this.shape_6.setTransform(66.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050304").s().p("AgSAYQgFgGAAgLQAAgKADgIQAFgJAFgEQAHgFAHABQAKAAAFAFQAFAHAAAKQAAAIgEAKQgDAIgGAFQgHAFgHgBQgKAAgFgFgAgHgUQgGAEgDAHQgDAHAAAIQAAAJAEAGQAFAFAHAAQAGAAAGgEQAEgEADgIQAEgHAAgJQAAgKgFgEQgDgEgIgBQgHAAgEAFg");
	this.shape_7.setTransform(60.7,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050304").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_8.setTransform(56.5,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050304").s().p("AgNAcIALg0IgRAAIABgDIAmAAIgBADIgRAAIgLA0g");
	this.shape_9.setTransform(53.9,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050304").s().p("AARAdIgCgUIgTAAIgMAUIgEAAIAfg5IADAAIAHA5gAgCAFIAQAAIgDgag");
	this.shape_10.setTransform(48.4,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050304").s().p("AgNAcIALg0IgQAAIAAgDIAlAAIAAADIgSAAIgKA0g");
	this.shape_11.setTransform(45.2,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050304").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_12.setTransform(41.5,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050304").s().p("AAOAcIAMgzIgBAAIgdAzIgCAAIgIgzIgBAAIgKAzIgEAAIAMg3IAFAAIAIAvIAcgvIAGAAIgLA3g");
	this.shape_13.setTransform(36.9,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#050304").s().p("AgHAcIALg3IAEAAIgLA3g");
	this.shape_14.setTransform(32.3,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#050304").s().p("AgNAcIALg3IAEAAIgLA0IAYAAIgBADg");
	this.shape_15.setTransform(29,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#050304").s().p("AgWAcIAMg3IALAAQALgBAGAGQAFAFAAAMQAAAKgEAHQgFAJgHAEQgHADgJAAgAgRAZIAIAAQAIAAAGgEQAHgDAEgIQADgHAAgIQAAgTgTAAIgHAAg");
	this.shape_16.setTransform(21.9,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#050304").s().p("AAKAcIgTgwIgBAAIgKAwIgEAAIAMg3IAEAAIASAxIABAAIAKgxIAEAAIgMA3g");
	this.shape_17.setTransform(16.4,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#050304").s().p("AgTAcIAMg3IAbAAIAAADIgYAAIgEAWIAWAAIgBACIgWAAIgFAZIAXAAIgBADg");
	this.shape_18.setTransform(11.4,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#050304").s().p("AgTAcIAMg3IALAAQAIgBAEAEQAEAEAAAGQAAATgXAAIgHAAIgFAXgAgKABIAIAAQAIAAAFgCQAFgFAAgHQAAgLgNAAIgHAAg");
	this.shape_19.setTransform(6.6,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#050304").s().p("AgMAcIgGgBIAAgFQAHAEAGAAQAGAAAFgEQAEgDAAgGIAAgEIgCgDIgEgDIgEgDQgHgBgBgEQgDgDAAgFQAAgEADgEQACgDAEgCQAEgCAEAAIAHABIAGACIAAADIgHgCIgGgBQgGAAgDADQgEAEAAAFIACAGIAGAGIAJADIADAFIABAGQAAAFgDADQgBAEgGADQgEABgFAAg");
	this.shape_20.setTransform(2,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textLegal, new cjs.Rectangle(0,0,98.6,5.9), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKDWIAAgfQAxAUBLAAQA3AAAggaQAhgZAAgpQAAgZgLgSQgLgQgYgOQgZgOgugRQhFgVgbgcQgagcAAguQAAgzAoggQApggA8AAQA/AAA4AYIgLAcQg3gYg1AAQgxAAgdAXQgeAYAAAnQAAAYAKARQAIAQAVANQAXAOAvARQA3ASAZAQQAaARAMAWQANAVAAAgQAAA4gqAhQgqAhhDAAQhTAAgsgSg");
	this.shape.setTransform(163.7,23.7,0.239,0.239);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6DiIAAnDID1AAIAAAdIjWAAIAACrIDLAAIAAAcIjLAAIAADCIDWAAIAAAdg");
	this.shape_1.setTransform(155.1,23.7,0.239,0.239);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPDiIAAnDIAfAAIAAHDg");
	this.shape_2.setTransform(148.1,23.7,0.239,0.239);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABvDiIhzjFIhwAAIAADFIggAAIAAnDIBsAAQBTAAAoAfQAoAfAAA/QAAAtgYAfQgYAfgxANIB7DOgAh0ACIBWAAQA4AAAggZQAfgZAAgyQAAgzgfgYQgfgXhFAAIhKAAg");
	this.shape_3.setTransform(141.7,23.7,0.239,0.239);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiTCqQg2g/AAhrQAAhsA2g9QA3g+BcAAQBfAAA1A+QA2A+AABrQAABrg2A/Qg1A+hfAAQheAAg1g+gAh7iUQgrA0AABgQAABiArA0QArA1BQAAQBSAAAqg1QArg0AAhiQAAhhgrg0Qgrg0hRAAQhPAAgsA1g");
	this.shape_4.setTransform(130.2,23.7,0.239,0.239);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+CsQg5g8AAhvQAAhDAcg2QAcg1A1gdQA0gdBEAAQBKAAA6AbIgMAcQg7gbg/AAQhYAAg0A3Qg0A3AABdQgBBmAyAzQAyA0BfAAQA+AAAsgSIAAifIiHAAIAAgcICnAAIAADNQhAAbhTAAQhqAAg5g8g");
	this.shape_5.setTransform(118.3,23.7,0.239,0.239);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah6DiIAAnDID1AAIAAAdIjWAAIAACrIDKAAIAAAcIjKAAIAADCIDWAAIAAAdg");
	this.shape_6.setTransform(108.5,23.7,0.239,0.239);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPDiIAAmlIiSAAIAAgeIFEAAIAAAeIiTAAIAAGlg");
	this.shape_7.setTransform(99.4,23.7,0.239,0.239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACaDiIg/ifIi2AAIg/CfIgiAAIC1nDIATAAICyHDgAgQh7Ig/CiICgAAIg+iiIgSg1QgIAegJAXg");
	this.shape_8.setTransform(90.4,23.6,0.239,0.239);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhvCrQg3g/AAhsQAAhEAag2QAbg0AxgcQAxgdA/AAQBCAAA0AZIgMAcQgygZg2ABQhUAAgwA2QgxA2AABeQAABhAuA0QAuA2BVAAQA6AAAugOIAAAcQgsAPhEAAQhfAAg2g9g");
	this.shape_9.setTransform(80.8,23.7,0.239,0.239);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiKDWIAAgfQAxAUBLAAQA3AAAggaQAhgZAAgpQAAgbgLgQQgKgPgZgPQgZgOgugRQhDgVgdgcQgagcAAguQAAgzAoggQApggA8AAQA/AAA4AYIgLAcQg3gYg1AAQgxAAgdAXQgeAXABAoQgBAZAKAQQAIAQAVANQAXAOAvARQA3ASAZAQQAZARANAWQANAWAAAfQAAA4gqAhQgpAhhEAAQhTAAgsgSg");
	this.shape_10.setTransform(66.6,23.7,0.239,0.239);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiKDWIAAgfQAxAUBLAAQA2AAAhgaQAhgZAAgpQAAgbgLgQQgKgQgZgOQgYgOgvgRQhEgVgbgcQgbgcAAguQAAgzAoggQAoggA9AAQBAAAA3AYIgLAcQg3gYg0AAQgyAAgdAXQgeAYAAAnQAAAZAJAQQAJAQAVANQAWANAwASQA3ASAYAQQAbARAMAWQAMAWAAAfQAAA5gpAgQgpAhhEAAQhTAAgsgSg");
	this.shape_11.setTransform(57.8,23.7,0.239,0.239);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah6DiIAAnDID1AAIAAAdIjWAAIAACrIDKAAIAAAcIjKAAIAADCIDWAAIAAAdg");
	this.shape_12.setTransform(49.2,23.7,0.239,0.239);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACEDiIkKmQIgDAAQAEBNAAAfIAAEkIgeAAIAAnDIAfAAIEKGPIACAAQgDg3AAgyIAAkmIAfAAIAAHDg");
	this.shape_13.setTransform(38.7,23.7,0.239,0.239);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPDiIAAnDIAfAAIAAHDg");
	this.shape_14.setTransform(30.7,23.7,0.239,0.239);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiLDWIAAgfQAyAUBLAAQA3AAAggaQAhgYAAgqQAAgagLgRQgLgQgZgOQgXgOgvgRQhEgVgbgcQgbgcAAguQAAgzAoggQApggA8AAQBAAAA3AYIgLAcQg3gYg0AAQgyAAgdAXQgeAYAAAnQAAAZAKAQQAIAQAVANQAXAOAvARQA1ARAbARQAaARAMAWQAMAVAAAgQAAA4gpAhQgqAhhEAAQhSAAgtgSg");
	this.shape_15.setTransform(24.1,23.7,0.239,0.239);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah7C5QgsgrAAhQIAAkiIAfAAIAAEjQAABBAlAlQAkAkBBAAQBAAAAjgkQAkgjAAhAIAAkmIAfAAIAAEjQAABOgtAsQgtAshPAAQhOAAgsgsg");
	this.shape_16.setTransform(14,23.7,0.239,0.239);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiUDiIAAnDIB9AAQBSAAAnAdQAoAcAAA6QAAAngZAaQgXAagvAHIAAACQA3AJAZAYQAaAbgBAuQAAA+gpAiQgqAihKAAgAh0DGIBqAAQB8AAAAhmQAAhdiCAAIhkAAgAh0gYIBkAAQA+AAAdgVQAcgVAAgtQAAgtgggUQgfgVhBAAIhbAAg");
	this.shape_17.setTransform(3.5,23.7,0.239,0.239);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPDiIAAmlIiSAAIAAgdIFEAAIAAAdIiTAAIAAGlg");
	this.shape_18.setTransform(162.9,5.6,0.239,0.239);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhvCrQg3g+AAhtQAAhGAag0QAbg0AxgdQAwgcBAAAQBDAAAzAZIgMAcQgxgYg3gBQhUAAgwA2QgyA3AABeQAABgAuA1QAvA2BUAAQA5AAAwgOIAAAbQguAQhCAAQheAAg3g9g");
	this.shape_19.setTransform(153.9,5.6,0.239,0.239);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah6DiIAAnCID1AAIAAAcIjWAAIAACrIDKAAIAAAcIjKAAIAADCIDWAAIAAAdg");
	this.shape_20.setTransform(144.5,5.6,0.239,0.239);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah6DiIAAnCIAfAAIAAGkIDWAAIAAAeg");
	this.shape_21.setTransform(136.1,5.6,0.239,0.239);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah6DiIAAnCID1AAIAAAcIjWAAIAACrIDKAAIAAAcIjKAAIAADCIDWAAIAAAdg");
	this.shape_22.setTransform(127.2,5.6,0.239,0.239);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiLDWIAAggQAyAVBLAAQA3AAAggZQAhgagBgqQABgZgLgRQgMgRgYgNQgXgOgvgQQhFgYgagbQgbgcAAgtQAAgzAnggQAoggA+AAQA/AAA4AYIgLAbQg5gYgyAAQgxAAgeAYQgeAXAAAoQAAAZAJAQQAKAQAUANQAUANAyASQAzAQAdASQAaASAMAUQAMAXAAAfQABA4gqAhQgqAhhEAAQhTAAgsgSg");
	this.shape_23.setTransform(118,5.6,0.239,0.239);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACEDiIkKmQIgDAAQAEBDAAApIAAEkIgeAAIAAnCIAfAAIELGOIABAAQgCg9AAgsIAAklIAeAAIAAHCg");
	this.shape_24.setTransform(103.3,5.6,0.239,0.239);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiTCqQg2g/AAhrQAAhrA2g/QA2g9BdAAQBfAAA1A+QA2A+AABrQAABrg2A/Qg2A+heAAQhdAAg2g+gAh7iUQgsA0AABgQAABhAsA1QArA1BQAAQBSAAAqg1QArg1AAhhQAAhhgrg0Qgqg0hSAAQhPAAgsA1g");
	this.shape_25.setTransform(91.5,5.5,0.239,0.239);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiQDQIAAhGQAfAPAjAIQAgAJAhAAQAqAAAWgRQAUgQAAgdQAAgagTgRQgTgSg7gYQg+gXgZghQgaggABgtQAAg4AoggQAnghBDAAQBCAABAAcIgYA9Qg8gagwAAQgiAAgTAQQgSAPAAAaQAAARAHANQAHANASAKQASANAqARQAzAWAVAQQAYASAKAWQALAWAAAfQAAA9grAiQgsAihLAAQhNAAgxgYg");
	this.shape_26.setTransform(76.5,5.6,0.239,0.239);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkDiIAAmDIiFAAIAAg/IFSAAIAAA/IiEAAIAAGDg");
	this.shape_27.setTransform(67.4,5.6,0.239,0.239);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABhDiIjclnIgDAAIACAUQAEA6AAAvIAADqIhDAAIAAnCIBaAAIDcFkIACAAIgDgzQgBgoAAgeIAAjrIBDAAIAAHCg");
	this.shape_28.setTransform(56.6,5.6,0.239,0.239);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkDiIAAnCIBJAAIAAHCg");
	this.shape_29.setTransform(47.8,5.6,0.239,0.239);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AibCsQg3g9AAhvQAAhvA3g9QA3g7BlAAQBlAAA3A8QA3A8AABvQAABtg3A+Qg4A9hlAAQhkAAg3g8gAhih9QgiArAABSQAABSAhAsQAiArBBAAQBCAAAhgqQAigrAAhUQAAhSghgrQghgrhCAAQhBAAgiArg");
	this.shape_30.setTransform(39,5.5,0.239,0.239);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiVDiIAAnCICDAAQBTAAArAiQApAjAABDQAABHguAkQguAmhUAAIgwAAIAACpgAhLgEIAoAAQA3AAAbgUQAbgUgBgqQAAgngYgSQgWgUgzAAIgzAAg");
	this.shape_31.setTransform(28.1,5.6,0.239,0.239);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABuDiIhvi5IhyC5IhPAAICWjpIiNjZIBTAAIBnCqIBoiqIBPAAIiMDaICXDog");
	this.shape_32.setTransform(13.3,5.6,0.239,0.239);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiXDQIAAhBQAfAPAeAHQAhAHAdABQA0AAAZgUQAagTAAgpQAAglgcgQQgcgRg9AAIgoAAIAAg6IAoAAQBrAAAAhLQAAgcgTgQQgTgRgjABQgaAAgYAHQgZAJgfATIgjgzQA+gtBSAAQBDAAAmAdQAnAeAAAzQAAArgZAcQgZAdguAKIAAADQA2AGAcAbQAbAbAAAsQAABBguAkQguAjhUAAQhMAAgzgYg");
	this.shape_33.setTransform(3.6,5.6,0.239,0.239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(0,0,167,29.2), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AAbA2IgbgvIgbAAIAAAvIgHAAIAAhqIAZAAQAUAAAIAHQAKAHAAAPQAAAKgFAIQgHAGgKADIAcAygAgbABIAVAAQAMAAAIgGQAHgFAAgNQAAgLgHgHQgIgFgPAAIgSAAg");
	this.shape.setTransform(154.8,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_1.setTransform(145.4,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050304").s().p("AgDA2IAAhjIgiAAIAAgHIBLAAIAAAHIgiAAIAABjg");
	this.shape_2.setTransform(136.4,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_3.setTransform(128.2,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_4.setTransform(119.4,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050304").s().p("AAbA2IgbhjIgaBjIgGAAIgehqIAIAAIAXBSIACALQACgJAGgVIASg/IAHAAIAbBeIACgMIAWhSIAIAAIgdBqg");
	this.shape_5.setTransform(107.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050304").s().p("AggAyIAAgHQALAFATAAQAMAAAHgGQAIgGAAgKQAAgGgDgEQgCgDgGgEIgQgIQgQgDgGgHQgGgHAAgLQAAgMAJgHQAKgIANAAQAOAAAOAFIgDAHQgNgGgMAAQgLAAgHAGQgHAGAAAJQAAAFACAFQADADAFAEQAEADALAEQALADAIAEQAGAEADAFQADAHAAAGQAAANgKAIQgJAIgQAAQgTAAgLgFg");
	this.shape_6.setTransform(96.4,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgHAAIAAhqIAHAAIAAAvIA9AAIAAgvIAHAAIAABqg");
	this.shape_7.setTransform(82,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050304").s().p("AgaAoQgMgOAAgaQAAgQAGgMQAGgMALgIQAMgGAOAAQAQAAAMAGIgDAGQgLgFgNgBQgTAAgLAOQgMAMAAAWQAAAXALANQALAMASAAQAOAAALgDIAAAHQgMADgOAAQgWAAgNgPg");
	this.shape_8.setTransform(71.6,23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050304").s().p("AgcAsQgLgLAAgSIAAhEIAIAAIAABEQAAAPAIAJQAKAJANAAQAPAAAJgJQAIgIAAgPIAAhFIAIAAIAABEQAAASgLALQgKAKgTAAQgSAAgKgKg");
	this.shape_9.setTransform(60.8,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050304").s().p("AAqA2IAAhQIABgSIgBAAIgoBiIgDAAIgohiIgBAAIABBiIgHAAIAAhqIALAAIAlBcIAAAAIAmhcIALAAIAABqg");
	this.shape_10.setTransform(48.4,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050304").s().p("AgDA2IAAhjIgiAAIAAgHIBLAAIAAAHIgiAAIAABjg");
	this.shape_11.setTransform(33,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050304").s().p("AAkA2IgOgmIgrAAIgOAmIgJAAIArhrIAEAAIAqBrgAgDgcIgPAlIAlAAIgTgyIgDANg");
	this.shape_12.setTransform(24.1,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgIAAIAAhqIAIAAIAAAvIA9AAIAAgvIAIAAIAABqg");
	this.shape_13.setTransform(13.7,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#050304").s().p("AgDA2IAAhjIgiAAIAAgHIBLAAIAAAHIgiAAIAABjg");
	this.shape_14.setTransform(3.8,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#050304").s().p("AgdAoQgNgOAAgaQAAgOAGgOQAHgMANgIQALgGAQAAQARAAAOAGIgDAHQgNgHgPAAQgUAAgNAOQgMAOAAAUQAAAYAMAMQALAMAWAAQAPABAKgFIAAglIggAAIAAgHIAnAAIAAAwQgOAHgUAAQgYAAgOgPg");
	this.shape_15.setTransform(138.1,5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#050304").s().p("AAfA2Ig9hfIgCAAIACAaIAABFIgHAAIAAhqIAHAAIA+BdIAAAAIAAhdIAGAAIAABqg");
	this.shape_16.setTransform(126.9,5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_17.setTransform(119,5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#050304").s().p("AgfA2IAAhqIAaAAQAlAAAAAeQAAAQgKAHQgMAJgRAAIgRAAIAAAsgAgYADIAPAAQARAAAIgFQAIgGAAgOQAAgMgIgGQgHgGgPAAIgSAAg");
	this.shape_18.setTransform(112.6,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#050304").s().p("AgfA2IAAhqIAaAAQAlAAAAAeQAAAQgLAHQgLAJgRAAIgRAAIAAAsgAgYADIAPAAQARAAAIgFQAIgGAAgOQAAgMgHgGQgIgGgPAAIgSAAg");
	this.shape_19.setTransform(103.3,5.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_20.setTransform(96.1,5.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgHAAIAAhqIAHAAIAAAvIA9AAIAAgvIAHAAIAABqg");
	this.shape_21.setTransform(88.3,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#050304").s().p("AggAyIAAgHQALAFASAAQANAAAHgGQAIgGAAgKQAAgFgDgFQgCgEgGgDIgQgHQgQgEgGgHQgHgHAAgLQAAgMAKgHQAJgIAOAAQAOAAAOAFIgDAHQgOgGgLAAQgLAAgHAGQgHAGAAAJQAAAGACAEQADADAEAEIAQAHQAMADAHAEQAGAEADAFQADAGAAAHQAAANgKAIQgKAIgPAAQgTAAgLgFg");
	this.shape_22.setTransform(78.3,5.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#050304").s().p("AgdAoQgNgOAAgaQAAgPAGgNQAHgMAMgIQANgGAPAAQARAAAOAGIgDAHQgNgHgQAAQgTAAgNAOQgMANAAAVQAAAXALANQAMAMAWAAQAOABALgFIAAglIggAAIAAgHIAnAAIAAAwQgOAHgUAAQgYAAgOgPg");
	this.shape_23.setTransform(63.6,5.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#050304").s().p("AAfA2Ig+hfIgBAAIABBfIgGAAIAAhqIAGAAIA+BdIABAAIgBhdIAHAAIAABqg");
	this.shape_24.setTransform(52.4,5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_25.setTransform(44.6,5.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#050304").s().p("AAaA2Igng4IgOAMIAAAsIgIAAIAAhqIAIAAIAAA2IA0g2IAJAAIgqAtIAsA9g");
	this.shape_26.setTransform(38.5,5.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050304").s().p("AAkA2IgPgmIgqAAIgPAmIgIAAIArhrIAEAAIAqBrgAgSAJIAlAAIgTgyg");
	this.shape_27.setTransform(28.4,5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#050304").s().p("AAqA2IABhiIgBAAIgoBiIgDAAIgohiIgBAAIABBiIgHAAIAAhqIALAAIAlBcIAmhcIALAAIAABqg");
	this.shape_28.setTransform(16.9,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(0,0,158.3,29), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AggAyIAAgHQAMAFARAAQANAAAHgGQAIgGAAgKQAAgGgCgEQgDgEgGgDIgQgIQgQgDgGgHQgHgHABgLQAAgMAJgHQAJgIAOAAQAOAAAOAFIgDAHQgOgGgLAAQgLAAgGAGQgIAGAAAJQAAAFADAFQACAEAFADIAQAHQALADAHAEQAIAFABAEQADAGAAAHQAAANgJAIQgLAIgPAAQgUAAgKgFg");
	this.shape.setTransform(162.2,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_1.setTransform(153.7,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_2.setTransform(146.8,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050304").s().p("AAaA2IgagvIgbAAIAAAvIgHAAIAAhqIAZAAQATAAAKAHQAJAHAAAPQAAAKgGAIQgFAGgMADIAdAygAgbABIAVAAQAMAAAIgGQAHgFAAgNQAAgLgHgHQgIgFgPAAIgSAAg");
	this.shape_3.setTransform(140.4,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050304").s().p("AgiAoQgNgPAAgZQAAgZANgOQANgPAVAAQAXAAAMAPQANAOAAAZQAAAagNAOQgMAPgXAAQgVAAgNgPgAgcgiQgLAMAAAWQAAAXALANQAKAMASAAQAUAAAJgMQALgNAAgXQAAgWgLgMQgJgNgUAAQgSAAgKANg");
	this.shape_4.setTransform(129.1,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050304").s().p("AgdApQgOgOAAgbQABgPAGgNQAHgMAMgHQANgHAPAAQAQAAAPAGIgDAHQgNgGgQAAQgTAAgNANQgNANAAAVQAAAYAMAMQAMANAWAAQAPAAAKgFIAAglIggAAIAAgHIAoAAIAAAxQgQAGgTAAQgYAAgOgOg");
	this.shape_5.setTransform(117.3,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_6.setTransform(107.5,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050304").s().p("AgDA2IAAhjIgiAAIAAgHIBLAAIAAAHIgiAAIAABjg");
	this.shape_7.setTransform(98.6,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050304").s().p("AAkA2IgOgmIgrAAIgPAmIgIAAIArhrIAEAAIAqBrgAgSAJIAlAAIgTgyg");
	this.shape_8.setTransform(89.6,23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050304").s().p("AgaAoQgMgOAAgaQAAgQAGgMQAGgMALgIQAMgGAOAAQAQAAAMAFIgDAHQgLgFgNgBQgTAAgMAOQgLAMAAAWQAAAXALANQAKAMAUAAQAOAAAKgDIAAAGQgLAEgPAAQgVAAgOgPg");
	this.shape_9.setTransform(80.1,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050304").s().p("AggAyIAAgHQALAFATAAQAMAAAHgGQAIgGAAgKQAAgGgCgEQgDgEgGgDIgPgIQgQgDgIgHQgFgHAAgLQgBgMAKgHQAJgIAOAAQAPAAANAFIgDAHQgNgGgMAAQgKAAgIAGQgHAGAAAJQAAAFADAFQACAEAEADQAEACAMAFQALADAIAEQAHAFACAEQADAGAAAHQAAAOgKAHQgKAIgPAAQgTAAgLgFg");
	this.shape_10.setTransform(66.1,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050304").s().p("AggAyIAAgHQAMAFARAAQANAAAIgGQAHgGAAgKQAAgFgDgFQgCgEgGgDIgPgIQgRgDgGgHQgGgHgBgLQAAgMAKgHQAJgIAOAAQAPAAANAFIgCAHQgPgGgLAAQgKAAgIAGQgHAGAAAJQAAAFACAFQAEAEADADQAEACAMAFQALADAIAEQAGAEADAFQADAGAAAHQAAAOgKAHQgKAIgPAAQgUAAgKgFg");
	this.shape_11.setTransform(57.3,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_12.setTransform(48.8,23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050304").s().p("AAgA2Ig/hfIAAAAIABBfIgIAAIAAhqIAIAAIA+BdIABAAIgBhdIAHAAIAABqg");
	this.shape_13.setTransform(38.4,23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_14.setTransform(30.5,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#050304").s().p("AggAyIAAgHQAKAFAUAAQAMAAAHgGQAIgGAAgKQAAgFgCgFQgEgEgFgDIgQgIQgRgEgGgGQgFgHAAgLQgBgMAKgHQAKgIANAAQAOAAAOAFIgDAHQgOgGgLAAQgKAAgIAGQgHAGAAAJQAAAFADAFQABADAGAEQAEADALAEQAKADAJAEQAHAEACAFQADAGAAAHQAAANgKAIQgJAIgQAAQgTAAgLgFg");
	this.shape_15.setTransform(24,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#050304").s().p("AgcAsQgLgLAAgSIAAhEIAHAAIAABEQAAAPAJAJQAKAJANAAQAQAAAIgJQAJgIAAgPIAAhFIAHAAIAABEQAAASgLALQgKAKgTAAQgSAAgKgKg");
	this.shape_16.setTransform(13.9,23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#050304").s().p("AgiA2IAAhqIAdAAQAUAAAIAGQAKAHAAAOQAAAJgGAGQgGAHgLABIAAABQANABAGAFQAGAHAAAKQAAAPgKAJQgJAHgRABgAgbAvIAZAAQAdAAAAgZQAAgVgeAAIgYAAgAgbgFIAYAAQAOAAAHgFQAHgFAAgKQAAgLgIgFQgHgFgPAAIgWAAg");
	this.shape_17.setTransform(3.5,23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#050304").s().p("AAaA2IgagvIgbAAIAAAvIgHAAIAAhqIAZAAQATAAAKAHQAJAHAAAPQAAAKgGAIQgFAGgMADIAdAygAgbABIAVAAQAMAAAIgGQAHgFAAgNQAAgLgHgHQgIgFgPAAIgSAAg");
	this.shape_18.setTransform(131.7,5.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAvAAIAAAGIgvAAIAAAtIAyAAIAAAIg");
	this.shape_19.setTransform(122.3,5.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgIAAIAAhqIAIAAIAAAvIA9AAIAAgvIAIAAIAABqg");
	this.shape_20.setTransform(111.9,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#050304").s().p("AgCA2IAAhjIgjAAIAAgHIBLAAIAAAHIgiAAIAABjg");
	this.shape_21.setTransform(102,5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#050304").s().p("AgiAoQgNgPAAgZQAAgZANgOQANgPAVAAQAXAAAMAPQANAOAAAZQAAAagNAOQgMAPgXAAQgVAAgNgPgAgcgiQgLAMAAAWQAAAXALANQALAMARAAQATAAALgMQAKgNAAgXQAAgWgKgMQgLgNgTAAQgSAAgKANg");
	this.shape_22.setTransform(91.7,5.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#050304").s().p("AAfA2Ig+hfIAAAAIAABfIgHAAIAAhqIAIAAIA+BdIAAAAIAAhdIAHAAIAABqg");
	this.shape_23.setTransform(75.5,5.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_24.setTransform(67.7,5.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#050304").s().p("AgnA2IAAhqIAdAAQAZAAAMANQAOANAAAaQAAAagPANQgNAOgbABgAggAvIARAAQAwAAAAgvQAAgWgMgMQgNgMgUAAIgUAAg");
	this.shape_25.setTransform(55.7,5.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#050304").s().p("AAfA2Ig+hfIAAAAIAABfIgHAAIAAhqIAIAAIA+BdIAAAAIAAhdIAHAAIAABqg");
	this.shape_26.setTransform(44.1,5.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050304").s().p("AAkA2IgPgmIgpAAIgPAmIgJAAIArhrIAEAAIAqBrgAgSAJIAlAAIgTgyg");
	this.shape_27.setTransform(33.7,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,165.5,29.1), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AggAyIAAgHQALAFASAAQANAAAHgGQAIgGAAgKQAAgGgDgEQgCgDgGgEIgQgIQgQgDgGgHQgHgHAAgLQAAgMAKgHQAJgIAOAAQAOAAAOAFIgDAHQgNgGgMAAQgLAAgHAGQgHAFAAAKQAAAGACAEQADADAEAEIAQAHQAMADAHAEQAGAEADAFQADAFAAAIQAAANgKAIQgJAIgQAAQgUAAgKgFg");
	this.shape.setTransform(89.5,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050304").s().p("AgcA2IAAhqIA5AAIAAAHIgyAAIAAAoIAwAAIAAAGIgwAAIAAAuIAyAAIAAAHg");
	this.shape_1.setTransform(80.9,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050304").s().p("AggAyIAAgHQAMAFARAAQANAAAHgGQAIgGAAgKQAAgGgCgEQgDgDgFgEIgRgIQgQgDgGgHQgGgHAAgLQAAgMAJgHQAJgIAOAAQAPAAAOAFIgEAHQgNgGgMAAQgLAAgGAGQgIAFABAKQAAAGACAEQACADAFAEIAQAHQALADAHAEQAHAEADAFQACAHAAAGQAAANgJAIQgKAIgQAAQgUAAgKgFg");
	this.shape_2.setTransform(71.9,59.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050304").s().p("AAkA2IgOgmIgrAAIgPAmIgIAAIArhrIAEAAIAqBrgAgSAJIAlAAIgTgyg");
	this.shape_3.setTransform(62.7,59.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgHAAIAAhqIAHAAIAAAvIA9AAIAAgvIAHAAIAABqg");
	this.shape_4.setTransform(52.2,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050304").s().p("AgaAoQgMgOAAgaQAAgQAGgMQAGgMALgIQAMgGAOAAQAQAAAMAFIgDAHQgLgFgNgBQgTAAgMAOQgLAMAAAWQAAAXALANQAKAMAUAAQAOAAAKgDIAAAGQgLAEgPAAQgVAAgOgPg");
	this.shape_5.setTransform(41.8,59.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050304").s().p("AAaA2IgagvIgbAAIAAAvIgHAAIAAhqIAZAAQATAAAKAHQAJAHAAAPQAAAKgGAIQgFAGgMADIAdAygAgbABIAVAAQAMAAAIgGQAHgFAAgNQAAgLgHgHQgIgFgPAAIgSAAg");
	this.shape_6.setTransform(32.5,59.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050304").s().p("AgdAsQgKgKAAgTIAAhEIAIAAIAABEQAAAQAIAIQAJAJAOAAQAPAAAJgJQAIgIAAgPIAAhFIAIAAIAABEQAAASgLALQgLAKgSAAQgSAAgLgKg");
	this.shape_7.setTransform(21.5,59.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050304").s().p("AgfA2IAAhqIAaAAQAlAAAAAeQAAAQgKAHQgMAJgRAAIgRAAIAAAsgAgYADIAPAAQARAAAIgFQAIgGAAgOQAAgMgIgGQgHgGgPAAIgSAAg");
	this.shape_8.setTransform(11.5,59.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050304").s().p("AgdApQgNgOAAgbQgBgPAHgNQAGgMANgHQANgHAPAAQAQAAAPAGIgDAHQgNgGgPAAQgVAAgMANQgNANAAAVQAAAYAMAMQAMANAWAAQAOAAALgFIAAglIggAAIAAgHIAnAAIAAAxQgOAGgVAAQgXAAgOgOg");
	this.shape_9.setTransform(91.2,41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050304").s().p("AAfA2Ig+hfIgBAAIABBfIgHAAIAAhqIAHAAIA/BdIAAAAIgBhdIAIAAIAABqg");
	this.shape_10.setTransform(79.9,41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_11.setTransform(72,41.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050304").s().p("AgfA2IAAhqIAaAAQAlAAAAAeQAAAQgKAHQgLAJgSAAIgRAAIAAAsgAgYADIAPAAQARAAAIgFQAIgGAAgOQAAgMgIgGQgHgGgPAAIgSAAg");
	this.shape_12.setTransform(65.5,41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050304").s().p("AgfA2IAAhqIAaAAQAlAAAAAeQAAAQgKAHQgLAJgSAAIgRAAIAAAsgAgYADIAPAAQARAAAIgFQAIgGAAgOQAAgMgIgGQgHgGgPAAIgSAAg");
	this.shape_13.setTransform(56.2,41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#050304").s().p("AgDA2IAAhqIAHAAIAABqg");
	this.shape_14.setTransform(49,41.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#050304").s().p("AAfA2IAAg1Ig9AAIAAA1IgIAAIAAhqIAIAAIAAAvIA9AAIAAgvIAIAAIAABqg");
	this.shape_15.setTransform(41.1,41.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#050304").s().p("AggAyIAAgHQALAFATAAQAMAAAIgGQAHgGAAgKQAAgGgCgEQgDgDgFgEIgQgIQgRgDgGgHQgHgHABgLQgBgMAKgHQAJgIAOAAQAOAAAOAFIgDAHQgNgGgMAAQgKAAgIAGQgGAFgBAKQABAGACAEQACADAEAEIAQAHQAMADAHAEQAGAEADAFQADAHAAAGQAAANgJAIQgKAIgQAAQgTAAgLgFg");
	this.shape_16.setTransform(31.1,41.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#050304").s().p("AAfA2Ig+hfIAAAAIAABfIgHAAIAAhqIAIAAIA+BdIAAAAIAAhdIAHAAIAABqg");
	this.shape_17.setTransform(16.5,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#050304").s().p("AgiAoQgNgOAAgaQAAgZANgOQANgPAVAAQAXAAAMAPQANAOAAAZQAAAZgNAPQgMAPgXAAQgVAAgNgPgAgcgiQgLAMAAAWQAAAXALANQAKAMASAAQAUAAAJgMQALgNAAgXQAAgWgLgMQgJgNgUAAQgSAAgKANg");
	this.shape_18.setTransform(4.8,41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#050304").s().p("AghAxIAAgQQAJAEAGABQAIACAIAAQAKAAAEgEQAFgEAAgGQAAgHgFgDQgEgFgNgGQgPgFgGgHQgGgHAAgLQAAgOAKgHQAKgIAOAAQAQAAAPAGIgGAPQgOgGgLAAQgIAAgEAEQgEADAAAHQAAADABAEQACADAEACIAOAHIARAIQAGAFACAFQACAGAAAHQAAAOgKAIQgKAIgRAAQgSAAgMgGg");
	this.shape_19.setTransform(86.3,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#050304").s().p("AgHA2IAAhbIggAAIAAgPIBPAAIAAAPIgfAAIAABbg");
	this.shape_20.setTransform(77.3,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#050304").s().p("AAYA2Ig0hVIgBAAIACBVIgRAAIAAhqIAWAAIAzBTIgBhTIARAAIAABqg");
	this.shape_21.setTransform(66.6,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#050304").s().p("AgIA2IAAhqIARAAIAABqg");
	this.shape_22.setTransform(57.9,23.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#050304").s().p("AgkApQgNgPAAgaQAAgZANgPQAOgOAXAAQAXAAANAOQANAPAAAZQAAAbgNAOQgNAOgYAAQgXAAgNgOgAgWgdQgJALAAASQAAATAJALQAIAKAOAAQAQAAAHgKQAJgKgBgUQABgTgJgKQgGgKgQAAQgQAAgHAKg");
	this.shape_23.setTransform(49.1,23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#050304").s().p("AgiA2IAAhqIAeAAQAUgBAJAJQAKAIAAAQQAAARgLAHQgLAJgTAAIgLAAIAAApgAgRAAIAJAAQANAAAGgFQAGgFAAgJQAAgKgFgFQgGgEgLAAIgMAAg");
	this.shape_24.setTransform(38.4,23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#050304").s().p("AAaA2IgagsIgaAsIgTAAIAjg3IghgzIAUAAIAXAoIAZgoIATAAIgiA0IAkA2g");
	this.shape_25.setTransform(23.7,23.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#050304").s().p("AgjAxIAAgPQAJAEAFABQAHACAIAAQAMAAAFgEQAHgGAAgJQAAgJgHgDQgGgEgOgBIgJAAIAAgMIAJAAQAYgBAAgRQABgHgFgEQgEgEgIAAIgMACQgEABgJAFIgIgLQAOgLAUAAQAPAAAJAHQAJAHAAAMQAAALgGAGQgGAHgKACIAAABQANABAGAFQAGAHAAAKQAAARgLAHQgLAJgTAAQgRAAgNgGg");
	this.shape_26.setTransform(14.1,23.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050304").s().p("AAXA2Ig0hVIAAAAIAAAFIABAZIAAA3IgPAAIAAhqIAUAAIA0BTIAAAAIAAhTIAQAAIAABqg");
	this.shape_27.setTransform(62.7,5.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#050304").s().p("AAUA2IgYgrIgSAAIAAArIgRAAIAAhqIAeAAQAUAAAKAHQAKAJAAAOQAAAVgVAHIAeAwgAgWgDIANAAQALAAAFgEQAGgFAAgJQAAgIgGgFQgHgEgKAAIgMAAg");
	this.shape_28.setTransform(52.1,5.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#050304").s().p("AAfA2IgLgeIgoAAIgKAeIgSAAIAnhrIASAAIAoBrgAgFgSIgKAbIAfAAIgQgvQAAAHgFANg");
	this.shape_29.setTransform(41.1,5.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#050304").s().p("AgdA2IAAhqIA7AAIAAAOIgqAAIAAAeIAnAAIAAANIgnAAIAAAhIAqAAIAAAQg");
	this.shape_30.setTransform(31.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,95.6,64.9), null);


(lib.textheadline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABABaIACiVIgBAAIg2CVIgZAAIg0iVIgBAAQACAeAAAfIAABYIgaAAIAAiyIApAAIAyCNIAAAAIAziNIApAAIAACyg");
	this.shape.setTransform(194.8,2.8,0.238,0.239);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BSIAAgbQAMAGAOADQAQADAJAAQAQAAAJgGQAIgHAAgLQAAgKgHgHQgJgHgWgKQgYgJgKgMQgKgMAAgTQAAgWAQgNQAQgNAZAAQAZAAAaALIgJAYQgYgKgSAAQgOAAgHAGQgHAHAAAJQAAAIADAEQADAGAGAEQAIAFAPAHQAVAIAIAGQAJAGAFAKQAEAJAAAMQAAAYgRAOQgRANgeAAQgfAAgSgKg");
	this.shape_1.setTransform(190.2,2.8,0.238,0.239);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitDWIAAmrICEAAQBlAAA5A3QA5A3AABkQAABpg7A4Qg7A4htAAgAhnCbIAyAAQCZAAAAicQAAiZiOAAIg9AAg");
	this.shape_2.setTransform(183,5.2,0.238,0.239);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah4DWIAAmrIDxAAIAAA8IirAAIAAB0ICgAAIAAA5IigAAIAACHICrAAIAAA7g");
	this.shape_3.setTransform(173.2,5.2,0.238,0.239);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABQDWIhkirIhGAAIAACrIhGAAIAAmrIB5AAQBRAAApAfQAoAgAAA+QAABQhTAhIB4C9gAhagOIAxAAQAwAAAVgSQAXgRAAglQAAgkgYgQQgXgPgwAAIguAAg");
	this.shape_4.setTransform(164.4,5.2,0.238,0.239);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABRDWIhlirIhGAAIAACrIhGAAIAAmrIB6AAQBRAAAoAfQAoAgAAA+QAABQhUAhIB6C9gAhagOIAxAAQAxAAAVgSQAWgSAAgkQAAgkgYgQQgXgPgvAAIgvAAg");
	this.shape_5.setTransform(154.7,5.2,0.238,0.239);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4DWIAAmrIDxAAIAAA8IirAAIAAB0ICgAAIAAA5IigAAIAACHICrAAIAAA7g");
	this.shape_6.setTransform(145.2,5.2,0.238,0.239);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah4DWIAAmrIDxAAIAAA8IirAAIAACFICgAAIAAA7IigAAIAACvg");
	this.shape_7.setTransform(137,5.2,0.238,0.239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah4DWIAAmrIDxAAIAAA8IirAAIAAB0ICgAAIAAA5IigAAIAACHICrAAIAAA7g");
	this.shape_8.setTransform(128.5,5.2,0.238,0.239);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABRDWIhlirIhGAAIAACrIhGAAIAAmrIB6AAQBRAAAoAfQAoAgAAA+QAABQhTAhIB4C9gAhagOIAxAAQAwAAAWgSQAWgSAAgkQAAgkgYgQQgXgPgvAAIgvAAg");
	this.shape_9.setTransform(119.8,5.2,0.238,0.239);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiMDWIAAmrIB6AAQBQAAAoAhQAoAhgBBAQABBDgtAiQgrAkhRAAIgsAAIAACggAhHgEIAmAAQA1AAAYgSQAZgTAAgoQABglgXgSQgWgSgvAAIgxAAg");
	this.shape_10.setTransform(110,5.2,0.238,0.239);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiIDFIAAhCQAgAPAeAHQAgAIAdAAQAqAAATgQQATgQAAgaQAAgYgSgRQgRgQg5gYQg6gWgYgfQgYgdAAgsQAAg2AmgeQAmgfA/AAQA+AAA8AbIgWA5Qg5gYgtAAQggAAgSAPQgSAPAAAYQAAAQAHANQAIAMAPAKQATAMAmAQQAwAUAVAPQAXASAKAVQAKAVAAAdQAAA5gpAgQgpAhhIAAQhJAAgugXg");
	this.shape_11.setTransform(96.5,5.2,0.238,0.239);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiIDFIAAhCQAfAPAfAHQAgAIAeAAQAoAAAUgQQATgQAAgaQAAgYgSgRQgSgRg3gXQg7gWgYgfQgYgeAAgrQAAg2AmgeQAmgfA/AAQA+AAA9AbIgXA5Qg5gYgtAAQggAAgSAPQgRAOAAAZQAAASAGALQAIAMAQAKQAQALAoARQAvAUAWAPQAXASAKAVQAKAVAAAdQAAA5gqAgQgoAhhIAAQhIAAgvgXg");
	this.shape_12.setTransform(88.1,5.2,0.238,0.239);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah4DWIAAmrIDxAAIAAA8IirAAIAAB0ICgAAIAAA5IigAAIAACHICrAAIAAA7g");
	this.shape_13.setTransform(79.8,5.2,0.238,0.239);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABdDWIjSlUIgCAAIABATQAFA7AAApIAADdIhAAAIAAmrIBVAAIDQFSIACAAIgCgxQgCglAAgdIAAjfIBAAAIAAGrg");
	this.shape_14.setTransform(69.4,5.2,0.238,0.239);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiDWIAAmrIBFAAIAAGrg");
	this.shape_15.setTransform(61.1,5.2,0.238,0.239);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiIDFIAAhCQAgAPAeAHQAgAIAdAAQAqAAATgQQATgQAAgaQAAgYgSgRQgRgQg5gYQg6gWgYgfQgYgeAAgrQAAg2AmgeQAmgfA/AAQA+AAA8AbIgWA5Qg5gYgtAAQggAAgSAPQgSAPAAAYQAAAQAHANQAHALAQALQATAMAmAQQAwAUAVAPQAXASAKAVQAKAVAAAdQAAA5gpAgQgpAhhIAAQhJAAgugXg");
	this.shape_16.setTransform(54.4,5.2,0.238,0.239);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah8CvQgtgqAAhKIAAkTIBHAAIAAEOQAAA1AZAZQAYAZAyAAQBjAAAAhoIAAkNIBGAAIAAEUQAAAwgVAjQgUAjgmAUQgnATg0AAQhPAAgtgqg");
	this.shape_17.setTransform(44.6,5.3,0.238,0.239);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiYDWIAAmrIB/AAQBWAAAoAaQAoAaAAA3QAAAmgUAZQgSAZglAGIAAADQAuAJAUAXQAVAaAAAqQAAA6goAgQgoAhhIAAgAhSCbIBKAAQArAAAWgRQAXgQAAglQAAghgXgQQgXgQgtAAIhHAAgAhSgkIBDAAQAqAAAVgOQAUgOAAghQAAgfgWgNQgVgNgvAAIg8AAg");
	this.shape_18.setTransform(34.3,5.2,0.238,0.239);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABSDWIiFjCIgqAiIAACgIhFAAIAAmrIBFAAIAADNICsjNIBQAAIigC8ICkDvg");
	this.shape_19.setTransform(20.6,5.2,0.238,0.239);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABdDWIjSlUIgCAAIABATQAEAxAAAzIAADdIg/AAIAAmrIBVAAIDQFSIACAAIgElSIBAAAIAAGrg");
	this.shape_20.setTransform(9.2,5.2,0.238,0.239);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiDWIAAmrIBFAAIAAGrg");
	this.shape_21.setTransform(0.8,5.2,0.238,0.239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline, new cjs.Rectangle(0,0,197,10.5), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAYQgFgDgEgHQgEgHgBgHQABgGAEgHQADgHAHgDQAFgEAIAAQAIAAAGADQAHAFADAGQAFAHAAAGQAAAHgFAHQgDAHgHADQgFAEgJAAQgIAAgGgEgAgLgUQgGAEgDAFQgDAFAAAGQAAAHADAFQACAFAHAEQAGADAFAAQAHAAAFgDQAHgEACgFQAEgFgBgHQABgGgEgFQgDgFgGgEQgFgDgHAAQgFAAgGADgAAIARIgIgNIgEAAIAAANIgGAAIAAghIAKAAQAFAAAEADQADACAAAFIgCAGQgCABgDABIAJAPgAgEAAIAEAAQACAAACgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQgBgBgDAAIgEAAg");
	this.shape.setTransform(104.7,18.1,0.367,0.373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BeIhvimIgBAAIACCmIgNAAIAAi8IANAAIBvCnIABAAIgBinIANAAIAAC8g");
	this.shape_1.setTransform(99.8,20.7,0.367,0.373);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABABfIgahDIhLAAIgbBDIgPAAIBNi9IAHAAIBLC9gAghAQIBDAAIgZhDIgJgWg");
	this.shape_2.setTransform(93.4,20.7,0.367,0.373);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBIQgXgaAAguQAAgdALgVQAKgWAWgMQAUgMAaAAQAbAAAXAKIgGAMQgUgLgXAAQgiAAgVAYQgUAVAAAoQAAAoATAXQATAWAjAAQAYAAAUgGIAAAMQgSAGgdAAQgnAAgXgZg");
	this.shape_3.setTransform(87.4,20.7,0.367,0.373);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBNQgTgRABgiIAAh5IAMAAIAAB6QAAAbAQAPQAPAPAbAAQAaAAAQgPQAPgPgBgaIAAh7IAOAAIAAB6QAAAggTATQgTASghAAQghAAgSgTg");
	this.shape_4.setTransform(78,20.7,0.367,0.373);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BHQgXgaAAgtQAAgsAXgaQAXgaAmAAQAnAAAXAaQAXAaAAAsQAAAtgXAaQgXAagnAAQgmAAgXgagAgzg9QgSAWAAAnQAAApASAWQARAWAiAAQAiAAASgWQASgWAAgpQAAgogSgWQgSgVgiAAQggAAgTAWg");
	this.shape_5.setTransform(70.9,20.7,0.367,0.373);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBeIAAhIIg/h0IAPAAIA2BnIA4hnIAOAAIg/B0IAABIg");
	this.shape_6.setTransform(65.1,20.7,0.367,0.373);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BHQgWgaAAgtQAAgsAWgaQAXgaAmAAQAnAAAXAaQAWAaAAAsQAAAtgWAaQgWAagoAAQgmAAgXgagAgzg9QgSAWAAAnQAAApASAWQASAWAhAAQAiAAASgWQASgWAAgpQAAgogSgWQgSgVgiAAQggAAgTAWg");
	this.shape_7.setTransform(56,20.7,0.367,0.373);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5BaIAAgOQAUAJAfAAQAXAAAOgKQAOgMgBgQQAAgMgEgGQgGgIgJgGQgOgGgPgGQgdgJgLgLQgLgMAAgTQAAgWARgNQARgNAZAAQAaAAAXAKIgEALQgZgKgUAAQgVAAgMAKQgMAKAAAQQAAALAEAHQADAGAJAGQAIAEAVAJQAYAIAJAFQAMAIAEAJQAFAKABAMQAAAXgSAPQgRANgcAAQgjAAgSgHg");
	this.shape_8.setTransform(49.8,20.7,0.367,0.373);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AtyEKIieiXIFcAAIAACEQAAAJgGAFQgFAGgIgBgAqfheICEAAQAIABAFAFQAGAFAAAIIAACqIiXCfgEAs5AB7IAAgfQAAgHAHgBIARAAQAIABAAAHIAAAcQAAA9BcAAQBeAAAAg9IAAgrQAAgWgQgPQgMgKgWgJIhwgqQgUgIgOgRQgRgTAAgbIAAggQAAhVB4AAQB5AAAABVIAAAeQAAAHgHAAIgSAAQgGAAAAgHIAAgbQAAgdgTgPQgWgRgxAAQgxAAgWARQgSAPAAAdIAAAXQAAAkAmAPIBzArQA8AXAAAzIAAA1QAABVh8AAQh9AAAAhVgEAm/AB7IAAgfQAAgHAHgBIASAAQAHABAAAHIAAAcQAAA9BcAAQBeAAAAg9IAAgrQAAgWgQgPQgMgKgWgJIhwgqQgUgIgOgRQgRgTAAgbIAAggQAAhVB4AAQB5AAAABVIAAAeQAAAHgHAAIgSAAQgGAAAAgHIAAgbQAAgdgTgPQgWgRgxAAQgxAAgWARQgSAPAAAdIAAAXQAAAkAmAPIBzArQA8AXAAAzIAAA1QAABVh8AAQh9AAAAhVgAREB7IAAgfQAAgHAHgBIARAAQAHABAAAHIAAAcQAAA9BdAAQBdAAAAg9IAAgrQAAgWgQgPQgLgKgWgJIhwgqQgUgIgOgRQgRgTAAgbIAAggQAAhVB4AAQB5AAAABVIAAAeQAAAHgIAAIgRAAQgHAAAAgHIAAgbQAAgdgSgPQgWgRgxAAQgxAAgWARQgSAPAAAdIAAAXQAAAkAlAPIB0ArQA8AXAAAzIAAA1QAABVh9AAQh8AAAAhVgAKxB7IAAk/QAAgIAHAAIASAAQAHAAAAAIIAAE7QAAA9BdAAQBeAAAAg9IAAk7QAAgIAHAAIASAAQAGAAAAAIIAAE/QAABVh9AAQh9AAAAhVgAlZDPQgEAAAAgFIAejvIgYAAQgFABABgFIABgGQAAgFAEABIAZgBIAEghQAGguBCAAIACAAQAEAAAAAEIgBAIQAAAEgFABIgCAAQgvAAgEAeIgEAgIArAAQAFAAAAADIgCAIQAAAFgEgBIgsAAIgdDvQgBAFgEAAgEAheADLQgGAAAAgHIAAmIQAAgIAHAAIDMAAQAHAAAAAIIAAAMQAAAIgHAAIi0AAIAACYICpAAQAIAAAAAIIAAAMQAAAGgIAAIipAAIAACtIC7AAQAIAAAAAIIAAANQAAAHgIAAgAeUDLQgFAAgCgDIirkxQgGgJgHgOIgGgNIAAFRQAAAHgHAAIgQAAQgHAAAAgHIAAmIQAAgIAHAAIAQAAQADAAADADICtEzIASAiIAAlQQAAgIAHAAIAQAAQAHAAAAAIIAAGIQAAAHgHAAgAXkDLQgHAAAAgHIAAmIQAAgIAHAAIASAAQAHAAAAAIIAAGIQAAAHgHAAgAEsDLQgIAAAAgHIAAmIQAAgIAIAAIBlAAQB9AAAABSIAAApQAAA2g5ARQBJAOAAA8IAAA3QAABUh9AAgAFECwIBdAAQAyAAAXgRQAUgOAAgeIAAgxQAAg9hdAAIhdAAgAFEgUIBUAAQBXAAAAg+IAAgkQAAgdgVgOQgXgQgyAAIhNAAgA4ZDKIAAmUIFlAAIgtBGIjnAAIAABcIDgAAIAABFIjgAAIAABmIDnAAIAuBHgA/mDKIAuhHIDfAAQAQAAAHgHQAJgHABgSIAAgjQAAgUgKgHQgGgGgQAAIiqAAQgoAAgagZQgfgcAAg3IAAgTQAAg1AfgcQAbgZAqAAIEOAAIgsBGIjVAAQgQAAgHAHQgHAHAAARIAAAcQAAATAJAGQAHAHAPAAICiAAQAygBAcAbQAdAbAAA2IAAAcQAAA2gfAcQgdAag0AAgEghiADKIglhTIjRAAIgmBTIhbAAIDBmUIBRAAIDAGUgEgk5AAyICTAAIhKiogEgpXADKIAAitIjgAAIAACtIhSAAIAAmUIBSAAIAAChIDgAAIAAihIBSAAIAAGUgEgy4ADKQg5AAgigeQglgjAAg+IAAiWQAAg7AgghQAigjA+AAID/AAIgtBIIjBAAQgiAAgNAOQgNAOAAAiIAACIQAAAhAOAOQANANAgABIDAAAIAvBJgAjIBdIANhnQAGguBCAAQA/AAAAAoIAAAGIgNBgQgFAuhDAAQg/AAAAgngAiogJIgMBjQAAAaAtAAQAwAAADgfIANhjQAAgagtAAQgwAAgEAfgAAZCBQgEAAAAgEIAWiuQABgEAEAAIAJAAQAFAAgBAEIgCAUQAhgbAhAAQAFAAgBAFIgBAJQgBAEgEAAQghABggAYIgSCKQAAAEgEAAgAwKBeQgIAAgGgFQgFgFAAgIIAAiqICXifIAAFbgEAyIgBlIAAgOIANAFIAOABQAKAAADgDQAFgDAAgGQAAgFgEgEQgEgEgNgFQgNgGgFgFQgFgIAAgJQAAgLAIgHQAIgHAPAAQANAAAOAGIgFAMQgOgFgJAAQgHAAgEADQgEADAAAGQAAAEACACQABADAEACIANAHQAKADAFAFQAFAEACAEQACAFAAAGQAAANgJAGQgJAIgQAAQgQAAgKgGgEA0qgBgIABhPIgBAAIgcBPIgOAAIgbhPIAAAAIABBPIgOAAIAAhfIAVAAIAbBLIAbhLIAWAAIAABfgAtxhzIAAiEQAAgHAFgGQAGgFAIgBICqAAICfCXg");
	this.shape_9.setTransform(74.5,5.9,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,149,24.3), null);


(lib.lidopen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lidopen();
	this.instance.parent = this;
	this.instance.setTransform(-234,-216,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lidopen_1, new cjs.Rectangle(-234,-216,468,216), null);


(lib.lidclosed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lidclosed();
	this.instance.parent = this;
	this.instance.setTransform(-179,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lidclosed_1, new cjs.Rectangle(-179,0,358,366), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-238,-151,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(-238,-151,476,302), null);


(lib.boxshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("AsJOdIiJiyIgE6HIZsAAIDBEvIgFYKgAuKLoICFCuIaQAAIAF4CIi+kpI5hAAg");
	this.shape.setTransform(96.4,97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.596)").s().p("AsNOlIiNi4IgD6RIZ3AAIDFE0IgFYVgAuSLrICJCyIabAAIAF4KIjBkvI5sAAg");
	this.shape_1.setTransform(96.4,97);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AsROsIiQi8IgE6bIaDAAIDIE5IgFYegAuaLtICNC4IanAAIAF4VIjFk0I53AAg");
	this.shape_2.setTransform(96.4,97);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.396)").s().p("AsUO0IiVjCIgE6lIaPAAIDLE/IgEYogAuhLwICQC8IayAAIAF4eIjIk5I6DAAg");
	this.shape_3.setTransform(96.4,97);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.294)").s().p("AsYO7IiYjGIgE6vIaaAAIDPFEIgFYxgAupLyICVDCIa9AAIAE4oIjLk/I6PAAg");
	this.shape_4.setTransform(96.4,97);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.196)").s().p("AscPDIibjMIgF65IanAAIDSFJIgGY8gAuwL1ICYDGIbIAAIAF4xIjPlEI6aAAg");
	this.shape_5.setTransform(96.4,97);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.094)").s().p("AsfPKIigjQIgE7DIaxAAIDWFOIgFZFgAu3L3ICbDMIbTAAIAG48IjSlJI6nAAg");
	this.shape_6.setTransform(96.4,97);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.898)").s().p("AsCOOIiBipIgE5yIZVAAIC6EjIgFX4gAt8LjIB+CkIZ6AAIAE3uIi3kfI5IAAg");
	this.shape_7.setTransform(96.4,97);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.796)").s().p("AsFOWIiFiuIgF59IZhAAIC+EpIgFYCgAuDLlICBCpIaFAAIAF34Ii6kjI5VAAg");
	this.shape_8.setTransform(96.4,97);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ar+OHIh+ikIgD5pIZIAAIC3EfIgEXug");
	this.shape_9.setTransform(96.4,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxshadow, new cjs.Rectangle(0,0,192.8,194.1), null);


(lib.bggradient = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00529E","#002F6B","#001C3F"],[0.208,0.443,1],2.1,-45.9,0,2.1,-45.9,456.2).s().dr(-150,-300,300,600);
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bggradient, new cjs.Rectangle(-106.5,0,513.1,600), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F6B").s().dr(-128.5,-19,257,38);
	this.shape.setTransform(150,300,1.167,15.789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,0,300,600), null);


(lib.boxbottom = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boxopen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.boxshadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.6,288.8,1,1,0,0,0,96.4,97);
	this.instance_1.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxbottom, new cjs.Rectangle(0,0,300,600), null);


(lib.boxclosed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lid-closed
	this.instance = new lib.lidclosed_1();
	this.instance.parent = this;
	this.instance.setTransform(295,556.9,1,1,0,0,0,0,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// box-bottom
	this.instance_1 = new lib.boxbottom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,1200,2,2,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxclosed, new cjs.Rectangle(0,0,600,1200), null);


(lib.backgroundboxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boxclosed();
	this.instance.parent = this;
	this.instance.setTransform(1.1,394,0.5,0.5,0,0,0,295.1,600);

	this.instance_1 = new lib.boxclosed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.6,739,0.5,0.5,0,0,0,295.1,600);

	this.instance_2 = new lib.boxclosed();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.6,519,0.5,0.5,0,0,0,295.1,600);

	this.instance_3 = new lib.boxclosed();
	this.instance_3.parent = this;
	this.instance_3.setTransform(218.6,300,0.5,0.5,0,0,0,295.1,600);

	this.instance_4 = new lib.boxclosed();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-218.4,739,0.5,0.5,0,0,0,295.1,600);

	this.instance_5 = new lib.boxclosed();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-218.4,519,0.5,0.5,0,0,0,295.1,600);

	this.instance_6 = new lib.boxclosed();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-218.4,300,0.5,0.5,0,0,0,295.1,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundboxes, new cjs.Rectangle(-366,0,737,1039), null);


(lib.boxes = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"box-open":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.playBoxAnimation = function() {
			this.gotoAndPlay("box-open");
		}
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(1));

	// lid-open
	this.instance = new lib.lidopen_1();
	this.instance.parent = this;
	this.instance.setTransform(3,-108.5,0.494,0.09,0,0,0,0.1,-41.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:0,regY:-108,scaleX:0.5,scaleY:0.23,y:-123.6},0).wait(1).to({scaleY:0.28,y:-126.9},0).wait(1).to({scaleX:0.5,scaleY:0.31,y:-129.2},0).wait(1).to({scaleY:0.34,y:-131.1},0).wait(1).to({scaleX:0.5,scaleY:0.36,y:-132.6},0).wait(1).to({scaleY:0.38,y:-133.9},0).wait(1).to({scaleY:0.4,y:-135},0).wait(1).to({scaleX:0.5,scaleY:0.41,y:-136},0).wait(1).to({scaleY:0.42,y:-136.8},0).wait(1).to({scaleY:0.44,y:-137.6},0).wait(1).to({scaleY:0.45,y:-138.2},0).wait(1).to({scaleY:0.45,y:-138.8},0).wait(1).to({scaleY:0.46,y:-139.3},0).wait(1).to({scaleY:0.47,y:-139.7},0).wait(1).to({scaleX:0.5,scaleY:0.47,y:-140.1},0).wait(1).to({scaleY:0.48,y:-140.5},0).wait(1).to({scaleY:0.48,y:-140.8},0).wait(1).to({scaleY:0.49,y:-141},0).wait(1).to({scaleY:0.49,y:-141.2},0).wait(1).to({scaleY:0.49,y:-141.4},0).wait(1).to({scaleY:0.5,y:-141.6},0).wait(1).to({scaleY:0.5,y:-141.7},0).wait(1).to({scaleY:0.5,y:-141.8},0).wait(1).to({scaleY:0.5},0).wait(1).to({scaleY:0.5,y:-141.9},0).wait(1).to({regY:-41,y:-108.5},0).wait(1));

	// lid-closed
	this.instance_1 = new lib.lidclosed_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-21,0.5,0.5,0,0,0,0,183);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.lidclosed, null, new cjs.Matrix2D(1,0,0,1,-89.5,-91.5)).s().p("At+OTIAA8lIb9AAIAAclg");
	this.shape.setTransform(0,-21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.lidclosed, null, new cjs.Matrix2D(1.258,0,0,0.407,-111.5,-37.5)).s().p("Aw3GJIDIsRIb9AAICqMRg");
	this.shape_1.setTransform(-1.5,-73.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.lidclosed, null, new cjs.Matrix2D(1.341,0,0,0.253,-356.4,-26.7)).s().p("Aw3BiIDIjDIb9AAICqDDg");
	this.shape_2.setTransform(-1.5,-103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(27));

	// box-bottom
	this.boxBottom = new lib.boxbottom();
	this.boxBottom.parent = this;
	this.boxBottom.setTransform(150,300,1,1,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.boxBottom).wait(32));

	// bg boxes
	this.bgBoxes = new lib.backgroundboxes();
	this.bgBoxes.parent = this;
	this.bgBoxes.setTransform(0,-91.9,1,1,0,0,0,0,519.5);

	this.timeline.addTween(cjs.Tween.get(this.bgBoxes).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366,-611.4,737,1039);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:1,boxOpen:174,endframe:286});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.exit.on("click", function () {
			window.open(window.clickTag, '_blank')
		});
	}
	this.frame_1 = function() {
		this.complete = false;
		
		// scales the boxes
		var boxes = this.boxes;
		var bgtl = new TimelineMax();
		bgtl.add("zoom", 0.2)
			.from(boxes, 1.5, {
				scaleX: 1.6,
				scaleY: 1.6,
				ease: Strong.easeOut,
				delay: 0.2
			}, "zoom");
	}
	this.frame_13 = function() {
		// show the cta button
		showCta();
	}
	this.frame_174 = function() {
		this.boxes.playBoxAnimation();
	}
	this.frame_286 = function() {
		fadeClip(cta, 'out');
	}
	this.frame_314 = function() {
		toggleControlColor();
		
		fadeClip(cta, 'in');
	}
	this.frame_335 = function() {
		this.stop();
		this.complete = true;
		showReplayButton();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(161).call(this.frame_174).wait(112).call(this.frame_286).wait(28).call(this.frame_314).wait(21).call(this.frame_335).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(336));

	// exit
	this.exit = new lib.exit();
	this.exit.parent = this;
	this.exit.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.exit, 0, 1, 2, false, new lib.exit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exit).wait(336));

	// card
	this.card = new lib.card_1();
	this.card.parent = this;
	this.card.setTransform(150.3,582.2,0.221,0.22,0,0,0,1.2,0.9);
	this.card.alpha = 0;
	this.card._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card).wait(13).to({_off:false},0).wait(1).to({regX:0,regY:0,x:150,y:581.8,alpha:0.004},0).wait(1).to({y:581.2,alpha:0.019},0).wait(1).to({y:579.9,alpha:0.052},0).wait(1).to({y:577.2,alpha:0.12},0).wait(1).to({y:570.6,alpha:0.284},0).wait(1).to({y:559.3,alpha:0.566},0).wait(1).to({y:553.1,alpha:0.722},0).wait(1).to({y:549.6,alpha:0.811},0).wait(1).to({y:547.2,alpha:0.869},0).wait(1).to({y:545.6,alpha:0.91},0).wait(1).to({y:544.4,alpha:0.939},0).wait(1).to({y:543.6,alpha:0.961},0).wait(1).to({y:542.9,alpha:0.977},0).wait(1).to({y:542.5,alpha:0.988},0).wait(1).to({y:542.2,alpha:0.995},0).wait(1).to({y:542,alpha:0.999},0).wait(1).to({regX:1.2,regY:0.9,x:150.3,y:542.2,alpha:1},0).wait(269).to({regX:0,regY:0,x:150,y:541.3},0).wait(1).to({y:538.8},0).wait(1).to({y:534},0).wait(1).to({y:526.6},0).wait(1).to({y:518.4},0).wait(1).to({regX:1.2,regY:0.9,x:150.3,y:512.2},0).wait(1).to({regX:0,regY:0,scaleX:0.25,scaleY:0.25,x:149.7,y:488.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.3,y:449.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:148.6,y:392.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:148.1,y:346.6},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:147.7,y:318.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:147.5,y:300.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:147.4,y:288.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:147.3,y:280.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:147.2,y:274.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:270.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:147.1,y:268},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:266.7},0).wait(1).to({regX:1.4,regY:1.4,scaleX:0.5,scaleY:0.5,x:147.7},0).wait(19));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(150,545.5,1,1,0,0,0,74.5,12.2);
	this.logo.alpha = 0;
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(315).to({_off:false},0).wait(1).to({regY:12.1,y:545.2,alpha:0.008},0).wait(1).to({y:544.6,alpha:0.037},0).wait(1).to({y:543.4,alpha:0.097},0).wait(1).to({y:541.3,alpha:0.203},0).wait(1).to({y:538.2,alpha:0.358},0).wait(1).to({y:534.9,alpha:0.524},0).wait(1).to({y:532.2,alpha:0.66},0).wait(1).to({y:530.1,alpha:0.76},0).wait(1).to({y:528.7,alpha:0.834},0).wait(1).to({y:527.6,alpha:0.889},0).wait(1).to({y:526.8,alpha:0.929},0).wait(1).to({y:526.2,alpha:0.958},0).wait(1).to({y:525.8,alpha:0.978},0).wait(1).to({y:525.5,alpha:0.991},0).wait(1).to({y:525.4,alpha:0.998},0).wait(1).to({regY:12.2,y:525.5,alpha:1},0).wait(5));

	// text-legal
	this.textLegal = new lib.textLegalwhite();
	this.textLegal.parent = this;
	this.textLegal.setTransform(150,430.4,1,1,0,0,0,49.2,3);
	this.textLegal.alpha = 0;
	this.textLegal._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textLegal).wait(315).to({_off:false},0).wait(1).to({regX:49.3,x:150.1,alpha:0.008},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.358},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:49.2,x:150,alpha:1},0).wait(5));

	// headline
	this.headline = new lib.textheadline();
	this.headline.parent = this;
	this.headline.setTransform(152,106.2,1,1,0,0,0,98.5,5.2);
	this.headline.alpha = 0;
	this.headline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.headline).wait(315).to({_off:false},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.358},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(5));

	// text-4
	this.text4 = new lib.text4();
	this.text4.parent = this;
	this.text4.setTransform(150,403.6,1,1,0,0,0,83.5,14.6);
	this.text4.alpha = 0;
	this.text4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text4).wait(315).to({_off:false},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.358},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(5));

	// bg gradient
	this.instance = new lib.bggradient();
	this.instance.parent = this;
	this.instance.setTransform(149.9,300.1,1,1,0,0,0,149.8,300);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.instance.cache(-108,-2,517,604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(308).to({_off:false},0).wait(1).to({regX:150,x:150.1,y:300,alpha:0.582},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.99},0).wait(1).to({x:150,alpha:1},0).wait(22));

	// bar
	this.bar = new lib.bar();
	this.bar.parent = this;
	this.bar.setTransform(150,640,1,0.063,0,0,0,150,299.9);
	this.bar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(7).to({_off:false},0).wait(1).to({regY:300,scaleY:0.06,y:639.5},0).wait(1).to({y:637.9},0).wait(1).to({scaleY:0.07,y:634.8},0).wait(1).to({scaleY:0.07,y:630.2},0).wait(1).to({scaleY:0.07,y:623.9},0).wait(1).to({scaleY:0.08,y:616.4},0).wait(1).to({scaleY:0.08,y:608.1},0).wait(1).to({scaleY:0.08,y:599.9},0).wait(1).to({scaleY:0.09,y:592.7},0).wait(1).to({scaleY:0.09,y:586.6},0).wait(1).to({scaleY:0.09,y:581.7},0).wait(1).to({scaleY:0.1,y:577.9},0).wait(1).to({scaleY:0.1,y:575},0).wait(1).to({scaleY:0.1,y:572.9},0).wait(1).to({scaleY:0.1,y:571.6},0).wait(1).to({y:570.8},0).wait(1).to({regY:300.6,y:570.6},0).wait(272).to({regY:300,scaleY:0.1,y:570.4},0).wait(1).to({scaleY:0.1,y:569.9},0).wait(1).to({scaleY:0.1,y:569},0).wait(1).to({scaleY:0.11,y:567.6},0).wait(1).to({scaleY:0.11,y:566.1},0).wait(1).to({regY:300.5,scaleY:0.12,y:565},0).wait(1).to({regY:300,scaleY:0.2,y:539.9},0).wait(1).to({scaleY:0.33,y:502.4},0).wait(1).to({scaleY:0.5,y:450.9},0).wait(1).to({scaleY:0.66,y:401.9},0).wait(1).to({scaleY:0.77,y:367.5},0).wait(1).to({scaleY:0.85,y:344.5},0).wait(1).to({scaleY:0.9,y:328.8},0).wait(1).to({scaleY:0.94,y:318},0).wait(1).to({scaleY:0.97,y:310.4},0).wait(1).to({scaleY:0.98,y:305.2},0).wait(1).to({scaleY:0.99,y:302},0).wait(1).to({scaleY:1,y:300.2},0).wait(1).to({regY:300.2,scaleY:1},0).wait(22));

	// text-3
	this.text3 = new lib.text3();
	this.text3.parent = this;
	this.text3.setTransform(150,403.5,1,1,0,0,0,79.1,14.5);
	this.text3.alpha = 0;
	this.text3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(186).to({_off:false},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.374},0).wait(1).to({alpha:0.513},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.779},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(80).to({alpha:0.619},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.146},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(36));

	// text-legal
	this.textLegal_1 = new lib.textLegal();
	this.textLegal_1.parent = this;
	this.textLegal_1.setTransform(150,430.4,1,1,0,0,0,49.2,3);
	this.textLegal_1.alpha = 0;
	this.textLegal_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.textLegal_1).wait(33).to({_off:false},0).wait(1).to({regX:49.3,x:150.1,alpha:0.006},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.428},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:49.2,x:150,alpha:1},0).wait(119).to({regX:49.3,x:150.1,alpha:0.624},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({regX:49.2,x:150,alpha:0},0).to({_off:true},1).wait(147));

	// text-2
	this.text2 = new lib.text2();
	this.text2.parent = this;
	this.text2.setTransform(150.3,403.4,1,1,0,0,0,82.8,14.5);
	this.text2.alpha = 0;
	this.text2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(28).to({_off:false},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.428},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(124).to({alpha:0.624},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(147));

	// text-1
	this.text1 = new lib.text1();
	this.text1.parent = this;
	this.text1.setTransform(150.8,274.3,1,1,0,0,0,47.8,32.5);
	this.text1.alpha = 0;
	this.text1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(28).to({_off:false},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.428},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.847},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(124).to({alpha:0.624},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(147));

	// boxes
	this.boxes = new lib.boxes();
	this.boxes.parent = this;
	this.boxes.setTransform(149,207,1,1,0,0,0,0,-92);

	this.timeline.addTween(cjs.Tween.get(this.boxes).wait(300).to({regX:2.5,x:151.5,y:206},0).wait(1).to({y:202.1},0).wait(1).to({y:192.8},0).wait(1).to({y:173.6},0).wait(1).to({y:151.6},0).wait(1).to({y:137.3},0).wait(1).to({y:128.6},0).wait(1).to({y:123.1},0).wait(1).to({y:119.6},0).wait(1).to({y:117.4},0).wait(1).to({y:116.3},0).wait(1).to({regX:0,x:149,y:116},0).to({_off:true},4).wait(21));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D7D7").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-12.4,737,1039);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"boxopen.png", id:"boxopen"},
		{src:"card.png", id:"card"},
		{src:"lidclosed.png", id:"lidclosed"},
		{src:"lidopen.png", id:"lidopen"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;