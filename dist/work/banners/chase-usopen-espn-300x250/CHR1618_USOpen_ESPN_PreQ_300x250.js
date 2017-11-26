(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/ball1.png", id:"ball1"},
		{src:"images/ipad.png", id:"ipad"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ball1 = function() {
	this.initialize(img.ball1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,129);


(lib.ipad = function() {
	this.initialize(img.ipad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,238);


(lib.text3c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0179C1").s().p("AAkBqIhbigIgBAAIADA7IAABlIgoAAIAAjTIA4AAIBbCdIACAAIgDg4IAAhlIAqAAIAADTg");
	this.shape.setTransform(341.8,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0179C1").s().p("AhIBqIAAjTIBEAAQAlAAAUAQQAVARgBAhQABAjgWAQQgWATgmAAIgTAAIAABLgAgbgFIAPAAQATAAAKgIQAKgIAAgRQAAgPgIgIQgJgIgRABIgUAAg");
	this.shape_1.setTransform(320.9,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0179C1").s().p("AhEBgIAAgpQAVAJAPAEQAPAEANAAQANAAAIgGQAIgFAAgMQAAgGgEgFQgDgFgHgEIgagPQgUgJgJgHQgKgIgGgLQgGgLAAgQQAAgcATgRQAUgPAggBQAQABAPADQAQAEAQAIIgPAjQgRgIgLgCQgLgDgLAAQgLAAgHAGQgHAGAAAKQAAAGADAFQADADAGAFQAGAEAVALQAeAOALANQALAOAAAVQAAAdgVARQgVARgjAAQgiAAgagOg");
	this.shape_2.setTransform(302.6,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0179C1").s().p("Ag8BqIAAjTIB5AAIAAAlIhMAAIAAAvIBHAAIAAAjIhHAAIAAA3IBMAAIAAAlg");
	this.shape_3.setTransform(286.3,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0179C1").s().p("AAeBxIAAhfQAAghgaAAQgQAAgJAMQgJALAAAdIAABMIgsAAIAAjhIAsAAIAAAuIgBAZIgBANIADAAQAPgXAfAAQAcAAAPAPQAPAPAAAbIAABrg");
	this.shape_4.setTransform(267.7,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0179C1").s().p("AhAAAQAAgoAVgVQAUgXAlABQAdAAAWALIgNAjIgUgIQgJgCgJAAQghgBAAAwQAAAwAhAAQANAAALgDQALgDALgIIAAAmQgLAHgLADQgLADgRAAQhKAAAAhVg");
	this.shape_5.setTransform(250.3,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0179C1").s().p("AgWBXQgMgOAAgbIAAhNIgVAAIAAgTIAYgPIANgiIAbAAIAAAiIAuAAIAAAiIguAAIAABNQAAAKAFAEQAFAFAJAAQAMAAAQgGIAAAiQgQAHgZAAQgZAAgMgNg");
	this.shape_6.setTransform(235.7,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0179C1").s().p("Ag6BHQgOgNAAgZQAAgbATgKQASgNAjgBIAcAAIAAgIQAAgZgZAAQgSAAgbANIgOgfQAcgOAhAAQAhgBARAOQARAPAAAdIAABrIgeAAIgJgWIgBAAQgMAOgMAGQgKAGgSAAQgZAAgNgOgAALAGQgSABgJAGQgKAHAAANQABATAVAAQANAAAKgJQAKgJgBgPIAAgNg");
	this.shape_7.setTransform(219.8,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0179C1").s().p("AAmBqIgchuIgGgZIgEgZIgDAZIgFAaIgeBtIgzAAIg2jTIAsAAIAcByQAGAgAEAZIAEgaIAGgbIAfh2IApAAIAgB2IAEAYIAFAdIAFgdIAGgcIAbhyIAtAAIg3DTg");
	this.shape_8.setTransform(197.4,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0179C1").s().p("AAeBTIAAheQAAgSgGgIQgGgJgOAAQgRAAgIANQgJAMAAAbIAABNIgsAAIAAiiIAiAAIAGAVIACAAQAIgLANgHQAMgGAQAAQAcAAAPAPQAPAQAAAdIAABpg");
	this.shape_9.setTransform(165.3,25.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0179C1").s().p("AgpBKQgRgKgLgUQgJgTAAgZQAAgnAVgWQAVgXAkABQAXAAATAKQARAKAKATQAKAUAAAYQAAAngWAXQgUAWglABQgWAAgTgLgAgYgjQgJAMAAAXQAAAYAJAMQAIANAQAAQARAAAJgNQAHgMAAgYQAAgXgIgMQgIgMgRAAQgQAAgIAMg");
	this.shape_10.setTransform(146.2,25.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0179C1").s().p("AgVBxIAAjhIArAAIAADhg");
	this.shape_11.setTransform(124.5,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0179C1").s().p("Ag0A+QgWgVAAgoQAAgoAVgWQAUgXAiABQAjAAATAUQAUATAAAjIAAATIhoAAQABAUALALQAKAKARAAQAPAAANgDQANgDAOgGIAAAiQgLAFgNADQgOAEgTAAQglAAgXgXgAAhgRQgBgRgHgJQgJgIgOgBQgNABgHAIQgJAJAAARIA8AAIAAAAg");
	this.shape_12.setTransform(111.2,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0179C1").s().p("AAfBTIAAheQAAgSgHgIQgGgJgOAAQgQAAgJANQgIAMAAAbIAABNIgtAAIAAiiIAiAAIAGAVIADAAQAHgLANgHQALgGARAAQAdAAAOAPQAPAQAAAdIAABpg");
	this.shape_13.setTransform(92.5,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0179C1").s().p("AAfBTIAAheQgBgSgGgIQgGgJgOAAQgQAAgJANQgIAMAAAbIAABNIgtAAIAAiiIAiAAIAGAVIADAAQAHgLANgHQAMgGAQAAQAdAAAOAPQAPAQAAAdIAABpg");
	this.shape_14.setTransform(72.8,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0179C1").s().p("Ag6BHQgOgNAAgZQAAgbATgKQASgNAjgBIAcAAIAAgIQAAgZgZAAQgSAAgbANIgOgfQAcgOAhAAQAhgBARAOQARAPAAAdIAABrIgeAAIgJgWIgBAAQgMAOgMAGQgKAGgSAAQgZAAgNgOgAALAGQgSABgJAGQgKAHAAANQABATAVAAQANAAAKgJQAKgJgBgPIAAgNg");
	this.shape_15.setTransform(53.3,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0179C1").s().p("AAfBxIAAhfQgBghgaAAQgQAAgJAMQgIALAAAdIAABMIgtAAIAAjhIAtAAIAAAuIgBAZIgBANIACAAQAPgXAeAAQAdAAAPAPQAPAPAAAbIAABrg");
	this.shape_16.setTransform(35,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0179C1").s().p("Ag3BRQgZgdAAg0QAAgfAMgaQAMgZAXgNQAXgNAcgBQAgABAfAPIgOAkIgYgJQgNgFgMAAQgXAAgOAUQgOASgBAhQAABHA0AAQAXAAAggLIAAAmQgaAMghAAQgsAAgZgdg");
	this.shape_17.setTransform(15.9,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,0,352.1,44.9);


(lib.text3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0179C1").s().p("AgiA9QgSgKgIgQQgKgRAAgSQAAgSAKgQQAJgRARgJQAQgKASAAQASAAASAKQAQAJAKARQAJAQAAASQAAASgJARQgJAQgRAKQgRAKgTAAQgSAAgQgKgAgcgxQgNAIgIANQgHAOgBAOQABAPAHAOQAIANANAIQAOAHAOAAQAPABAOgJQANgHAIgNQAHgOAAgPQAAgOgHgOQgIgNgNgIQgOgIgPAAQgOAAgOAIgAANArIgPggIgEAAIAAAgIgWAAIAAhVIAZAAQAPAAAJAHQAIAGAAAOQAAAPgOAFIAXAmgAgGgDIADAAQAEAAADgCQACgDAAgHQAAgGgCgCQgDgDgEAAIgDAAg");
	this.shape.setTransform(474,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0179C1").s().p("AAdBRIgNg5IgQhGIAAAAIgeB/IgvAAIgviiIAsAAIAUBJQAEARAFAjIABAAQAAgLAEgZIADgKIAUhPIAvAAIATBPIADAIIACANIACAOIABALIABAAIAFgdIAEgXIAUhJIAsAAIgwCig");
	this.shape_1.setTransform(453.1,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0179C1").s().p("Ag0A+QgWgVAAgoQAAgoAUgWQAVgXAjABQAiAAAUAUQATATAAAjIAAATIhoAAQABAUAKALQALAKARAAQAPAAANgDQANgDAPgGIAAAiQgMAFgOADQgNAEgTAAQglAAgXgXgAAhgRQAAgRgJgJQgIgIgOgBQgMABgJAIQgHAJgCARIA9AAIAAAAg");
	this.shape_2.setTransform(432.1,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0179C1").s().p("AgVBxIAAiiIArAAIAACigAgXhbQAAgVAXAAQAYAAAAAVQAAALgGAFQgGAHgMAAQgXAAAAgXg");
	this.shape_3.setTransform(418.6,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0179C1").s().p("AgVBRIg/iiIAvAAIAgBcQAFASAAAPIAAAAQABgOAGgTIAfhcIAvAAIg+Cig");
	this.shape_4.setTransform(405.5,25.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0179C1").s().p("Ag0A+QgWgVAAgoQAAgoAUgWQAVgXAjABQAiAAAUAUQATATAAAjIAAATIhoAAQABAUAKALQALAKARAAQAPAAANgDQAOgDAOgGIAAAiQgMAFgNADQgOAEgTAAQglAAgXgXgAAhgRQAAgRgJgJQgIgIgOgBQgMABgJAIQgHAJgCARIA9AAIAAAAg");
	this.shape_5.setTransform(388.8,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0179C1").s().p("AAiBqIgwhSIgZAAIAABSIgtAAIAAjTIA+AAQAqAAAVAPQAVAQAAAhQAAASgLAPQgKANgTAIIA/BdgAgngLIAPAAQAWAAAIgHQAKgHAAgPQAAgQgLgGQgIgHgWABIgOAAg");
	this.shape_6.setTransform(371.3,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0179C1").s().p("Ag0A+QgWgVAAgoQAAgoAVgWQAUgXAjABQAiAAAUAUQATATAAAjIAAATIhoAAQABAUALALQAKAKARAAQAPAAANgDQANgDAPgGIAAAiQgMAFgOADQgNAEgTAAQglAAgXgXgAAhgRQAAgRgJgJQgIgIgOgBQgNABgIAIQgIAJgBARIA9AAIAAAAg");
	this.shape_7.setTransform(343.5,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0179C1").s().p("AgkBSQgNgDgLgEIAAglQAMAGAQAEQAQAEALAAQAWAAAAgPQAAgFgCgDIgMgHIgTgKQgTgIgJgFQgJgHgDgIQgFgJAAgMQABgXAQgMQARgMAdABQAegBAcANIgOAhIgWgJQgLgDgMAAQgRAAAAALQAAAFAHAFQAFAEAUAJQATAHAJAIQAJAEAFAJQADAJAAAMQAAAZgRANQgSAOggAAQgSAAgMgDg");
	this.shape_8.setTransform(327.3,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0179C1").s().p("Ag6BHQgOgNABgZQgBgbATgKQASgNAjgBIAcAAIAAgIQAAgZgZAAQgSAAgbANIgOgfQAcgOAhAAQAggBASAOQARAPAAAdIAABrIgeAAIgJgWIgBAAQgLAOgNAGQgKAGgSAAQgYAAgOgOgAALAGQgSABgJAGQgKAHAAANQAAATAWAAQANAAAKgJQAJgJAAgPIAAgNg");
	this.shape_9.setTransform(310.2,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0179C1").s().p("AAfBxIAAhfQAAghgbAAQgQAAgJAMQgIALAAAdIAABMIgtAAIAAjhIAtAAIAAAuIgBAZIgBANIACAAQAPgXAeAAQAdAAAPAPQAPAPAAAbIAABrg");
	this.shape_10.setTransform(291.8,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0179C1").s().p("Ag3BRQgZgdAAg0QAAgfAMgaQAMgZAXgNQAXgNAcgBQAfABAgAPIgPAkIgXgJQgNgFgMAAQgXAAgOAUQgOASgBAhQAABHA0AAQAXAAAggLIAAAmQgbAMggAAQgtAAgYgdg");
	this.shape_11.setTransform(272.7,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0179C1").s().p("Ag0A+QgWgVAAgoQAAgoAUgWQAVgXAiABQAjAAATAUQAUATAAAjIAAATIhoAAQABAUAKALQALAKARAAQAPAAANgDQANgDAOgGIAAAiQgLAFgNADQgOAEgTAAQgmAAgWgXgAAhgRQgBgRgHgJQgJgIgOgBQgNABgHAIQgJAJAAARIA8AAIAAAAg");
	this.shape_12.setTransform(246.3,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0179C1").s().p("AAfBxIAAhfQgBghgaAAQgQAAgJAMQgIALAAAdIAABMIgtAAIAAjhIAtAAIAAAuIgBAZIgBANIACAAQAPgXAeAAQAdAAAPAPQAPAPAAAbIAABrg");
	this.shape_13.setTransform(227.6,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0179C1").s().p("AgVBqIAAiuIg6AAIAAglICfAAIAAAlIg6AAIAACug");
	this.shape_14.setTransform(209,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAqBRIAAhmQAAgTgJgKQgIgKgUAAQgXAAgLAOQgMAOAAAfIAABSIgYAAIAAieIATAAIAEAWIABAAQAIgMANgHQAOgGAOAAQAdAAAPAOQAPAOAAAfIAABmg");
	this.shape_15.setTransform(183.5,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmBJQgQgLgJgSQgJgTAAgZQAAgmATgWQAUgWAhAAQAhAAAUAXQAUAWAAAlQAAAngUAWQgTAWgiAAQgVAAgRgKgAgjgtQgMAPAAAeQAAAeAMAQQAMAQAXAAQAXAAANgQQAMgQAAgeQAAgdgMgQQgNgQgXAAQgXAAgMAQg");
	this.shape_16.setTransform(165.1,26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape_17.setTransform(140,26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_18.setTransform(117.6,25.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBtIAAieIAXAAIAACegAgJhQQgEgFAAgHQAAgJAEgEQAFgDAEAAQAFAAAFADQAEAEAAAJQAAAHgEAFQgFADgFAAQgEAAgFgDg");
	this.shape_19.setTransform(99.9,23.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIAKgjIANAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIAMgBIAKgCIAAATIgLADIgPABQgsAAAAgxg");
	this.shape_20.setTransform(90.7,24.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape_21.setTransform(69.4,26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_22.setTransform(47.1,25.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgKQAAgUgIgJQgIgIgSgBQgSAAgZANIgIgTQAMgHAOgDQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAOgMAGQgMAGgQAAQgYAAgNgNgAAPACQgbAAgNAJQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgNAAgWIAAgOg");
	this.shape_23.setTransform(24.2,26.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag3BJIAAgXQAMAGANADQANAEAMAAQASAAAJgGQALgHAAgMQAAgJgIgHQgJgHgVgJQgXgGgIgGQgKgHgFgHQgFgIABgLQAAgUAPgLQARgMAZAAQAaAAAZALIgIAUQgZgKgUAAQgOAAgKAFQgJAFAAAKQABAGADAFQADAFAIAEQAHAEATAHQAcAKAKAJQALALgBAQQABAWgSANQgQAMgcAAQggAAgSgKg");
	this.shape_24.setTransform(9.4,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,484.2,44.9);


(lib.text3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape.setTransform(431.2,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAqBxIAAhnQAAgSgJgJQgJgLgTAAQgXAAgMAOQgMAOABAdIAABUIgZAAIAAjhIAZAAIAABFIgBAUIABAAQAHgLANgHQANgGAPgBQAeABAPAOQAOAOAAAcIAABog");
	this.shape_1.setTransform(413.6,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIAKgjIANAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIANgBIAJgCIAAATIgLADIgPABQgsAAAAgxg");
	this.shape_2.setTransform(399,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIALgjIAMAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIANgBIAJgCIAAATIgMADIgNABQgtAAAAgxg");
	this.shape_3.setTransform(380.7,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgKQAAgUgIgJQgIgIgSgBQgSAAgZANIgIgTQAMgHAOgDQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAOgMAGQgMAGgQAAQgYAAgNgNgAAPACQgbAAgNAJQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgNAAgWIAAgOg");
	this.shape_4.setTransform(366.6,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BJIAAgXQALAGAOADQANAEANAAQAQAAALgGQAKgHAAgMQAAgJgIgHQgIgHgWgJQgXgGgJgGQgJgHgFgHQgEgIAAgLQgBgUARgLQAPgMAbAAQAZAAAZALIgJAUQgYgKgUAAQgOAAgKAFQgIAFgBAKQAAAGAEAFQAEAFAGAEQAIAEASAHQAeAKAJAJQALALAAAQQAAAWgRANQgRAMgcAAQggAAgSgKg");
	this.shape_5.setTransform(344,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape_6.setTransform(328.4,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAqBxIAAhnQAAgSgJgJQgJgLgTAAQgXAAgMAOQgLAOgBAdIAABUIgYAAIAAjhIAYAAIAABFIgBAUIACAAQAHgLANgHQAOgGAPgBQAdABAPAOQAOAOAAAcIAABog");
	this.shape_7.setTransform(310.9,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmA9QgSgVgBgnQAAgnAUgWQATgWAiAAQAMAAALADQAMACAHAEIgIAUIgSgFQgJgCgIAAQguAAAAA8QgBAeAMAQQAMAPAWAAQAUAAAVgIIAAAVQgQAJgZAAQggAAgUgWg");
	this.shape_8.setTransform(294.8,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIAKgjIANAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIANgBIAJgCIAAATIgLADIgPABQgsAAAAgxg");
	this.shape_9.setTransform(282,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgKQAAgUgIgJQgIgIgSgBQgSAAgZANIgIgTQAMgHAOgDQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAOgMAGQgMAGgQAAQgYAAgNgNgAAPACQgbAAgNAJQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgNAAgWIAAgOg");
	this.shape_10.setTransform(267.9,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_11.setTransform(246.2,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape_12.setTransform(216.1,26);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLBxIAAjhIAXAAIAADhg");
	this.shape_13.setTransform(203.9,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhFB1IAAjmIAUAAIADAWIABAAQAKgOAMgFQAMgGAOAAQAgAAASAWQARAVAAAoQAAAlgRAWQgSAWggAAQgNAAgNgGQgNgFgJgMIgCAAIACAaIAABCgAghhSQgMAOAAAdIAAAGQAAAhAMANQALAPAXAAQAUAAAMgRQAMgPAAgdQAAgegMgQQgLgRgWAAQgWAAgLAOg");
	this.shape_14.setTransform(191.4,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBtIAAieIAWAAIAACegAgIhQQgFgFAAgHQAAgJAFgEQADgDAFAAQAGAAAEADQAEAEAAAJQAAAHgEAFQgEADgGAAQgFAAgDgDg");
	this.shape_15.setTransform(178,23.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIALgjIAMAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIAMgBIAKgCIAAATIgMADIgNABQgtAAAAgxg");
	this.shape_16.setTransform(168.9,24.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLBxIAAjhIAWAAIAADhg");
	this.shape_17.setTransform(159.9,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgzBDQgPgOAAgeIAAhnIAZAAIAABmQAAATAJAKQAJAKATAAQAXAAAMgOQALgOAAgfIAAhSIAZAAIAACeIgUAAIgEgVIgBAAQgIAMgNAGQgNAGgPAAQgeAAgOgOg");
	this.shape_18.setTransform(146.8,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_19.setTransform(123.8,25.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_20.setTransform(88.2,25.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgKQAAgUgIgJQgIgIgSgBQgSAAgZANIgIgTQAMgHAOgDQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAOgMAGQgMAGgQAAQgYAAgNgNgAAPACQgbAAgNAJQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgNAAgWIAAgOg");
	this.shape_21.setTransform(65.3,26.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAApgOQAAgXgKgMQgKgMgTAAQgSAAgLAMQgMANgCAWIBSAAIAAAAg");
	this.shape_22.setTransform(49.2,26);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtBRIAAieIAUAAIADAdIACAAQAIgPAMgJQAMgIAOAAQALAAAIACIgDAWQgKgCgHAAQgUAAgMAQQgOAQABAXIAABUg");
	this.shape_23.setTransform(36.3,25.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIAKgjIANAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIAMgBIAKgCIAAATIgLADIgPABQgsAAAAgxg");
	this.shape_24.setTransform(23.8,24.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhCBkIAAgYQANAFAPAEQARACAPAAQAXAAAMgJQAMgKAAgQQABgLgFgIQgEgGgLgGQgLgHgSgHQgfgJgMgPQgNgOAAgYQAAgZASgOQATgPAdAAQAfAAAbAMIgHAWQgbgLgZAAQgRgBgMAJQgLAJAAAOQAAALAEAIQAEAHAKAGQAJAGATAHQAhAKANAOQANANAAAXQAAAcgUAQQgVAQghAAQgngBgUgJg");
	this.shape_25.setTransform(10.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.6,44.9);


(lib.text2B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("ABBDHIheiZIgtAAIAACZIhUAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhKgVIAcAAQAoAAARgNQATgOAAgdQABgcgUgMQgSgMgpAAIgaAAg");
	this.shape.setTransform(396.6,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("AhyDHIAAmNIDlAAIAABFIiQAAIAABYICGAAIAABDIiGAAIAABnICQAAIAABGg");
	this.shape_1.setTransform(360.8,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("ABPDHIAAisIidAAIAACsIhUAAIAAmNIBUAAIAACcICdAAIAAicIBUAAIAAGNg");
	this.shape_2.setTransform(322.9,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("AgoDHIAAlGIhtAAIAAhHIErAAIAABHIhsAAIAAFGg");
	this.shape_3.setTransform(285.3,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("AiLCYQgyg1AAhjQAAhjAyg1QAxg0BaAAQBcAAAxA1QAxA1AABiQAABjgxA1QgyA1hbAAQhaAAgxg1gAhKhkQgaAiAABCQAABCAaAiQAZAiAxAAQBlAAAAiGQAAiGhlAAQgwAAgaAig");
	this.shape_4.setTransform(248.4,41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032057").s().p("ABFDHIisksIgCAAIAFBwIAAC8IhMAAIAAmNIBrAAICsEpIACAAIgFhsIAAi9IBNAAIAAGNg");
	this.shape_5.setTransform(203.4,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032057").s().p("ABlDIIgdhfIiPAAIgdBfIhcAAICNmPIBmAAICOGPgAA0AiIgtiQIgHgbIgyCrIBmAAg");
	this.shape_6.setTransform(161.4,41.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032057").s().p("ACGDHIAAi9IABgcIADheIgCAAIhnE3IhMAAIhgk3IgDAAIAGB+IAAC5IhMAAIAAmNIBzAAIBfEwIACAAIBikwIBzAAIAAGNg");
	this.shape_7.setTransform(101.2,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#032057").s().p("AiLCYQgyg1AAhjQAAhjAyg1QAxg0BaAAQBcAAAxA1QAxA1AABiQAABjgxA1QgyA1hbAAQhaAAgxg1gAhKhkQgaAiAABCQAABCAaAiQAZAiAxAAQBlAAAAiGQAAiGhlAAQgwAAgaAig");
	this.shape_8.setTransform(52.5,41.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#032057").s().p("ABBDHIheiZIgtAAIAACZIhUAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhKgVIAcAAQAoAAASgNQASgOABgdQAAgcgUgMQgRgMgpAAIgbAAg");
	this.shape_9.setTransform(14.3,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiQAAIAABnICGAAIAABEIiGAAIAACdg");
	this.shape_10.setTransform(-20.9,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,0,454.2,80.3);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("ABFDHIisksIgCAAIAFBwIAAC8IhMAAIAAmNIBrAAICsEpIACAAIgFhsIAAi9IBNAAIAAGNg");
	this.shape.setTransform(416,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("ABBDHIhdiZIgtAAIAACZIhVAAIAAmNIB0AAQBQAAAnAdQAnAeAAA8QAAAkgUAbQgTAagjAQIB1CtgAhJgVIAbAAQAoAAASgNQATgOAAgdQgBgcgTgMQgRgMgpAAIgaAAg");
	this.shape_1.setTransform(377.3,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("Ah4CjQgqgoAAhEIAAkAIBUAAIAADzQAAAuASAWQAUAVAoAAQAqAAATgVQASgWAAgvIAAjyIBUAAIAAEBQABAsgUAhQgUAiglARQgmASgxAAQhNAAgrgng");
	this.shape_2.setTransform(335.2,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("AgpDHIAAlGIhtAAIAAhHIEtAAIAABHIhtAAIAAFGg");
	this.shape_3.setTransform(297.8,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiPAAIAABYICFAAIAABDIiFAAIAABnICPAAIAABGg");
	this.shape_4.setTransform(266.8,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032057").s().p("ABBDHIhdiZIgtAAIAACZIhVAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhJgVIAbAAQAoAAASgNQASgOABgdQAAgcgUgMQgRgMgpAAIgaAAg");
	this.shape_5.setTransform(234.3,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiPAAIAABYICFAAIAABDIiFAAIAABnICPAAIAABGg");
	this.shape_6.setTransform(184,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032057").s().p("ABPDHIAAisIidAAIAACsIhUAAIAAmNIBUAAIAACcICdAAIAAicIBUAAIAAGNg");
	this.shape_7.setTransform(146.1,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#032057").s().p("AgpDHIAAlGIhtAAIAAhHIEtAAIAABHIhtAAIAAFGg");
	this.shape_8.setTransform(108.5,41.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#032057").s().p("AikDHIAAmNIB9AAQBgAAA2A0QA2AzAABdQAABgg4A1Qg4A1hogBgAhQCBIAlAAQB4AAAAiBQAAiBhwAAIgtAAg");
	this.shape_9.setTransform(57.9,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#032057").s().p("ABFDHIisksIgCAAIAFBwIAAC8IhMAAIAAmNIBrAAICsEpIACAAIgFhsIAAi9IBNAAIAAGNg");
	this.shape_10.setTransform(13.6,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#032057").s().p("ABlDIIgdhfIiPAAIgdBfIhcAAICNmPIBmAAICOGPgAA0AiIgtiQIgHgbIgyCrIBmAAg");
	this.shape_11.setTransform(-28.5,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,0,490.7,80.3);


(lib.text1d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("AgoDHIAAlGIhtAAIAAhHIErAAIAABHIhsAAIAAFGg");
	this.shape.setTransform(157.1,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("ABBDHIheiZIgtAAIAACZIhUAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhKgVIAcAAQAoAAASgNQASgOABgdQAAgcgUgMQgRgMgpAAIgbAAg");
	this.shape_1.setTransform(125,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("Ah4CjQgqgoAAhEIAAkAIBUAAIAADzQAAAuASAWQATAVApAAQAqAAATgVQASgWAAgvIAAjyIBUAAIAAEBQAAAsgTAhQgUAiglARQgmASgxAAQhNAAgrgng");
	this.shape_2.setTransform(82.8,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("AiLCYQgyg1AAhjQAAhjAyg1QAxg0BaAAQBcAAAxA1QAxA1AABiQAABjgxA1QgyA1hbAAQhaAAgxg1gAhKhkQgaAiAABCQAABCAaAiQAZAiAxAAQBlAAAAiGQAAiGhlAAQgwAAgaAig");
	this.shape_3.setTransform(39.4,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("AhoCYQgvg1AAhjQAAg8AXgvQAXgvAqgZQArgZA3AAQA6AAA7AcIgbBFIgugSQgWgJgWABQgugBgaAlQgaAjAAA+QAACHBigBQAqAAA8gUIAABHQgxAUg9AAQhVAAgug1g");
	this.shape_4.setTransform(1,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,0,194.9,80.3);


(lib.text1c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("AhyDHIAAmNIDlAAIAABFIiQAAIAABYICGAAIAABDIiGAAIAABnICQAAIAABGg");
	this.shape.setTransform(256.9,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("ABFDHIisksIgCAAIAFBwIAAC8IhMAAIAAmNIBrAAICsEpIACAAIgFhsIAAi9IBNAAIAAGNg");
	this.shape_1.setTransform(217.6,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("AiLCYQgyg1AAhjQAAhjAyg1QAxg0BaAAQBcAAAxA1QAxA1AABiQAABjgxA1QgyA1hbAAQhaAAgxg1gAhKhkQgaAiAABCQAABCAaAiQAZAiAxAAQBlAAAAiGQAAiGhlAAQgwAAgaAig");
	this.shape_2.setTransform(172.5,41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("ACGDHIAAi9IAAgcIAEheIgCAAIhnE3IhMAAIhgk3IgDAAIAGB+IAAC5IhMAAIAAmNIBzAAIBfEwIACAAIBikwIBzAAIAAGNg");
	this.shape_3.setTransform(109.4,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("AiLCYQgyg1AAhjQAAhjAyg1QAxg0BaAAQBcAAAxA1QAxA1AABiQAABjgxA1QgyA1hbAAQhaAAgxg1gAhKhkQgaAiAABCQAABCAaAiQAZAiAxAAQBlAAAAiGQAAiGhlAAQgwAAgaAig");
	this.shape_4.setTransform(60.7,41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032057").s().p("ABBDHIheiZIgtAAIAACZIhUAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhKgVIAcAAQAoAAASgNQASgOABgdQAAgcgUgMQgRgMgqAAIgaAAg");
	this.shape_5.setTransform(22.5,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiQAAIAABnICGAAIAABEIiGAAIAACdg");
	this.shape_6.setTransform(-12.7,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,0,305.1,80.3);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiPAAIAABYICFAAIAABDIiFAAIAABnICPAAIAABGg");
	this.shape.setTransform(245.7,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("AgtDHIiHmNIBVAAIBMDrIAMAyIAHAnQACgZAShAIBMjrIBVAAIiHGNg");
	this.shape_1.setTransform(211,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("ABBDHIheiZIgtAAIAACZIhUAAIAAmNIB1AAQBPAAAnAdQAnAeAAA8QAAAkgUAbQgTAagkAQIB2CtgAhKgVIAcAAQAoAAASgNQASgOABgdQAAgcgUgMQgRgMgqAAIgaAAg");
	this.shape_2.setTransform(176.8,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("AhxDHIAAmNIDjAAIAABFIiPAAIAABYICFAAIAABDIiFAAIAABnICPAAIAABGg");
	this.shape_3.setTransform(141,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("AiBC1IAAhPQAoASAdAHQAbAIAYAAQAaAAAPgKQAOgLAAgWQAAgLgGgJQgHgKgMgIIgygbQglgSgSgNQgTgQgKgVQgLgVAAgcQAAg1AkgeQAkgfA9AAQAgAAAcAHQAcAIAfANIgcBCQgggNgUgFQgWgGgTABQgWAAgNALQgNALgBASQABALAFAJQAFAIAMAIQALAIAoAUQA4AbAVAZQAVAbAAAnQAAA2gnAfQgnAfhEAAQg/AAgygYg");
	this.shape_4.setTransform(109.3,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032057").s().p("AhyDHIAAmNIDlAAIAABFIiQAAIAABYICGAAIAABDIiGAAIAABnICQAAIAABGg");
	this.shape_5.setTransform(64.4,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032057").s().p("ABPDHIAAisIidAAIAACsIhUAAIAAmNIBUAAIAACcICdAAIAAicIBUAAIAAGNg");
	this.shape_6.setTransform(26.4,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032057").s().p("AgoDHIAAlGIhtAAIAAhHIErAAIAABHIhsAAIAAFGg");
	this.shape_7.setTransform(-11.2,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,0,292,80.3);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032057").s().p("ABPDHIAAisIidAAIAACsIhUAAIAAmNIBUAAIAACcICdAAIAAicIBUAAIAAGNg");
	this.shape.setTransform(158.9,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032057").s().p("AhoCYQgvg1AAhjQAAg8AXgvQAXgvAqgZQArgZA3AAQA6AAA7AcIgbBFIgugSQgWgJgWABQgugBgaAlQgaAjAAA+QAACHBigBQAqAAA8gUIAABHQgxAUg9AAQhVAAgug1g");
	this.shape_1.setTransform(120.3,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032057").s().p("AgpDHIAAlGIhtAAIAAhHIEtAAIAABHIhtAAIAAFGg");
	this.shape_2.setTransform(86.8,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032057").s().p("ABlDIIgdhfIiPAAIgdBfIhcAAICNmPIBmAAICOGPgAA0AiIgtiQIgHgbIgyCrIBmAAg");
	this.shape_3.setTransform(55.2,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032057").s().p("ABIDHIg2jPIgKguIgIgwIgHAwIgKAuIg2DPIhgAAIhmmNIBTAAIAzDYQAOA8AGAtIAHgxIALgyIA7jeIBOAAIA6DeIAJAuIAJA1IAJg1IALg0IAzjYIBTAAIhmGNg");
	this.shape_4.setTransform(11.1,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,0,200.5,80.3);


(lib.textlegal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AgEAGQgCgCAAgEQABgCABgCQACgCACAAQACAAADACQACACAAACQAAADgCACQgDACgCAAQgBAAgDgBg");
	this.shape.setTransform(401,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AgOAdQgGgEgEgIQgEgHAAgKQAAgOAIgJQAIgJAMAAQANAAAJAJQAHAJAAAOQAAAPgHAJQgJAJgNAAQgHAAgHgEgAgNgRQgEAGgBALQABAMAEAGQAFAHAIAAQAKAAAEgHQAFgGAAgMQAAgLgFgGQgEgGgKAAQgIAAgFAGg");
	this.shape_1.setTransform(395.8,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAgQgKgMAAgUQAAgMAFgJQAFgKAJgGQAKgGAKAAQAOABAKAFIgEAIQgKgFgKAAQgMAAgIAKQgIAKAAAOQAAAQAIAJQAIAKAMAAQAJAAAMgDIAAAJQgJACgNAAQgRAAgLgLg");
	this.shape_2.setTransform(388.6,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AggAlQgHgGAAgKQAAgJAEgFQAFgGAKgEIgHgIIgDgHIgBgGQAAgJAGgEQAFgFALgBQAJABAEAFQAFAEAAAJQAAAGgDAGQgFAFgHAGIAWAUQADgDACgGIAEgKIAKAAQgFARgIAIIASARIgNAAIgLgKQgHAHgIACQgEADgKgBQgMABgHgHgAgYAHIgDAHQgCADAAADQAAAHAFAEQAEAEAIAAQAMAAAJgJIgYgZIgJAGgAgSgfQgDACAAAFQAAAEACADQACAFAFAEQAHgEAEgEQABgDAAgGQAAgEgBgCQgEgEgEAAQgGAAgDAEg");
	this.shape_3.setTransform(377.5,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAYQgJgIAAgQQAAgNAIgJQAIgKALAAQAMAAAHAIQAHAIAAANIAAAEIgqAAQAAAMAFAGQAGAFAIAAQAKAAAKgEIAAAJIgKADIgLABQgMAAgIgJgAAQgFQAAgJgEgFQgEgEgHAAQgGAAgFAFQgEAFgBAIIAfAAIAAAAg");
	this.shape_4.setTransform(366.3,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAdIAAgJIAKAEIAKABQAGAAAEgDQAEgCAAgFQAAgEgDgCQgDgDgIgEIgNgDQgDgDgCgDQgCgDAAgFQAAgIAGgEQAHgFAJAAQAKAAAKAFIgDAHQgKgDgIAAQgFAAgDACQgEACAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEAEIAJAEQALADAFAEQADAEAAAGQAAAJgGAFQgHAFgKAAQgNAAgHgEg");
	this.shape_5.setTransform(360.1,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_6.setTransform(353.7,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.498)").s().p("AARAtIAAgpQAAgHgEgDQgEgEgHAAQgIAAgFAGQgFAEAAAMIAAAhIgJAAIAAhZIAJAAIAAAbIAAAIIAAAAQADgEAGgCQAFgEAFAAQALAAAGAHQAGAFAAAKIAAAqg");
	this.shape_7.setTransform(347,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAgQgKgMAAgUQAAgMAFgJQAFgKAJgGQAKgGAKAAQAOABAKAFIgEAIQgKgFgKAAQgMAAgIAKQgIAKAAAOQAAAQAIAJQAIAKAMAAQAJAAAMgDIAAAJQgJACgNAAQgRAAgLgLg");
	this.shape_8.setTransform(339.7,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.498)").s().p("AARAgIAAgnQAAgIgEgEQgEgEgHAAQgIAAgFAGQgFAFAAAMIAAAgIgJAAIAAg+IAHAAIACAJIABAAQADgFAFgDQAFgCAFAAQAMAAAFAFQAGAGAAAMIAAAog");
	this.shape_9.setTransform(329,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_10.setTransform(321.7,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.498)").s().p("AgWAqQgHgFAAgIQAAgGAEgEQAEgFAGgBQgCgBgCgDQgBgCAAgDQAAgEABAAIAGgFQgFgCgDgFQgDgFAAgHQAAgKAGgGQAHgGALAAQADAAAEACIAXAAIAAAGIgMABIADAFIABAIQAAAJgGAGQgHAGgJAAIgGgBQgGADAAADQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQADACAFAAIAJAAQALAAAFAEQAGAEAAAJQAAAKgJAGQgIAGgPAAQgMAAgHgFgAgQATQgEAEAAAGQAAAFAFACQAEADAIAAQALAAAGgDQAFgEAAgGQAAgGgDgCQgDgCgJAAIgKAAQgGAAgEADgAgLgjQgDAEAAAHQAAAHADADQAEAEAHAAQAMAAAAgOQAAgPgMAAQgHAAgEAEg");
	this.shape_11.setTransform(315.3,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAgIAAg+IAIAAIABAMIABAAQADgGAEgEQAEgDAGAAIAIABIgBAJIgHgBQgJAAgDAGQgGAGABAKIAAAgg");
	this.shape_12.setTransform(310.2,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.498)").s().p("AgOAdQgHgEgDgIQgEgHAAgKQAAgOAIgJQAIgJAMAAQANAAAJAJQAHAJAAAOQAAAPgHAJQgJAJgNAAQgHAAgHgEgAgNgRQgFAGAAALQAAAMAFAGQAFAHAIAAQAJAAAFgHQAFgGAAgMQAAgLgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_13.setTransform(303.7,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.498)").s().p("AAgAqIAAg1IABgVIgBAAIgdBKIgGAAIgdhKIgBAAIABAWIAAA0IgJAAIAAhTIAPAAIAaBEIAAAAIAbhEIAPAAIAABTg");
	this.shape_14.setTransform(294.7,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.498)").s().p("AgZAqIAAhTIAVAAQAfAAAAAZQgBANgIAFQgJAHgPAAIgKAAIAAAhgAgQAAIAJAAQAMAAAGgCQAFgFABgJQgBgIgFgFQgGgEgKAAIgLAAg");
	this.shape_15.setTransform(286,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.498)").s().p("AgOA0IAAgIIAJAAQAFAAACgDQADgEAAgGIAAhUIAKAAIAABTQAAAMgGAFQgFAHgJAAQgFgBgEgBg");
	this.shape_16.setTransform(279.5,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAhQgHgJgBgSQAAgXAKgNQAKgNARAAIALABIAAAJQgFgBgGgBQgLAAgIAJQgHAJgBARIABAAQAGgJANAAQALAAAHAHQAGAFAAAMQABANgIAIQgIAHgMAAQgLABgIgLgAgHAAQgFABgCAEQgCAEgBAEQAAAGACAFQADAGAEADQAFACADAAQAIABAFgGQAFgFgBgKQAAgIgDgGQgFgCgJAAQgDAAgEABg");
	this.shape_17.setTransform(272.5,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.498)").s().p("AAFAqIAAg7IABgOIgDACIgMAMIgFgHIAUgRIAJAAIAABTg");
	this.shape_18.setTransform(264.8,10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.498)").s().p("AgUAhQgHgMAAgVQAAgVAHgKQAHgMANAAQANAAAIAMQAHALAAAUQAAAWgHALQgHALgOgBQgMABgIgLgAgNgaQgEAJAAARQAAASAEAJQAFAIAIAAQAJABAFgKQAEgIAAgSQAAgRgEgJQgFgIgJAAQgIAAgFAIg");
	this.shape_19.setTransform(258.7,10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.498)").s().p("AgaArIAAgIIAWgXIAMgNIAEgJIACgJQAAgGgEgFQgEgDgGAAQgFgBgEACQgFACgHAFIgEgHQAMgKANAAQALAAAGAHQAHAFAAALQAAAIgEAIQgFAGgNAMIgRASIAAABIArAAIAAAJg");
	this.shape_20.setTransform(251.8,10.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAlQgKgGgGgJQgGgLABgLQgBgKAGgKQAGgLAKgGQALgFAKgBQALABALAFQAJAGAHALQAFAKAAAKQABALgGALQgGAJgKAGQgLAHgLgBQgLABgKgHgAgSgfQgIAFgFAIQgFAJgBAJQABAKAFAIQAFAKAIAFQAKAEAIAAQAJAAAKgEQAIgFAFgKQAFgIABgKQgBgJgFgJQgFgIgIgFQgKgFgJAAQgJAAgJAFgAgOATQgGgGgBgNQABgLAGgHQAGgHAKAAQAHAAAHAEIgDAGQgGgDgFAAQgFAAgEAGQgFAFAAAHQAAAKAFAFQADAEAGAAQAEAAAIgDIAAAIIgFABIgIABQgJABgGgIg");
	this.shape_21.setTransform(240.4,10.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAgQgKgMAAgUQAAgMAFgJQAFgKAJgGQAKgGAKAAQAOABAKAFIgEAIQgKgFgKAAQgMAAgIAKQgIAKAAAOQAAAQAIAJQAIAKAMAAQAJAAAMgDIAAAJQgJACgNAAQgRAAgLgLg");
	this.shape_22.setTransform(228.7,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.498)").s().p("AgDAqIAAhTIAHAAIAABTg");
	this.shape_23.setTransform(223.1,10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.498)").s().p("AggAqIAAhTIAaAAQARAAALALQAMALgBATQAAAUgLALQgLALgUAAgAgXAiIAMAAQAQAAAJgJQAJgJAAgQQAAgQgJgIQgHgJgQAAIgOAAg");
	this.shape_24.setTransform(217.3,10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.498)").s().p("AgWAqIAAhTIAtAAIAAAIIgkAAIAAAgIAiAAIAAAHIgiAAIAAAkg");
	this.shape_25.setTransform(210.1,10.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAgIAAg+IAIAAIABAMIABAAQADgGAEgEQAEgDAGAAIAIABIgBAJIgHgBQgJAAgDAGQgFAGAAAKIAAAgg");
	this.shape_26.setTransform(201.5,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAYQgJgIAAgQQAAgNAIgJQAIgKALAAQAMAAAHAIQAHAIAAANIAAAEIgqAAQAAAMAFAGQAGAFAIAAQAKAAAKgEIAAAJIgKADIgLABQgMAAgIgJgAAQgFQAAgJgEgFQgEgEgHAAQgGAAgFAFQgEAFgBAIIAfAAIAAAAg");
	this.shape_27.setTransform(195.3,11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.498)").s().p("AgIAsQgGgDgDgFIgBAAIgCAIIgHAAIAAhYIAKAAIAAAVIgBAOIABAAQAHgKALAAQANAAAHAJQAHAJAAANQAAAQgHAJQgIAIgMAAQgEAAgFgBgAgNgFQgEAFAAAMQAAAOAEAGQAFAFAIAAQAJAAAEgGQAFgGAAgNQAAgMgFgFQgEgFgJAAQgIgBgFAGg");
	this.shape_28.setTransform(188.4,10.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.498)").s().p("AAjAgIAAgoQAAgHgDgEQgDgEgHAAQgJAAgEAFQgFAGAAAKIAAAiIgIAAIAAgoQAAgHgDgEQgDgEgHAAQgJAAgEAGQgFAFAAAMIAAAgIgJAAIAAg+IAHAAIACAJIABAAQACgFAFgDQAFgCAHAAQAPAAACALIABAAQADgFAFgDQAFgDAHAAQALAAAGAFQAFAGAAAMIAAAog");
	this.shape_29.setTransform(179,11.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAYQgJgIAAgQQAAgNAIgJQAIgKALAAQAMAAAHAIQAHAIAAANIAAAEIgqAAQAAAMAFAGQAGAFAIAAQAKAAAKgEIAAAJIgKADIgLABQgMAAgIgJgAAQgFQAAgJgEgFQgEgEgHAAQgGAAgFAFQgEAFgBAIIAfAAIAAAAg");
	this.shape_30.setTransform(170.1,11.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.498)").s().p("AAgAqIAAg1IABgVIgBAAIgdBKIgGAAIgdhKIgBAAIABAWIAAA0IgJAAIAAhTIAPAAIAaBEIAAAAIAbhEIAPAAIAABTg");
	this.shape_31.setTransform(161.3,10.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.498)").s().p("AgEAGQgBgCAAgEQgBgCACgCQACgCACAAQADAAABACQACACAAACQAAADgCACQgBACgDAAQgCAAgCgBg");
	this.shape_32.setTransform(151.3,14.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.498)").s().p("AAbAqIgLgbIggAAIgLAbIgJAAIAihUIAGAAIAhBUgAAOAGIgKgYIgEgMIgCAMIgKAYIAaAAg");
	this.shape_33.setTransform(145.9,10.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.498)").s().p("AgEAGQgBgCAAgEQgBgCACgCQACgCACAAQACAAACACQACACAAACQAAADgCACQgCACgCAAQgCAAgCgBg");
	this.shape_34.setTransform(140.6,14.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.498)").s().p("AAWAqIgthGIgBAAIABAYIAAAuIgJAAIAAhTIALAAIAtBFIAAAAIAAgKIAAgMIAAgvIAJAAIAABTg");
	this.shape_35.setTransform(134.5,10.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.498)").s().p("AgIAOIAEgOIADgNIAJAAIAAABIgEAMIgEAOg");
	this.shape_36.setTransform(125.2,14.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.498)").s().p("AANAtIgUgfIgIAHIAAAYIgJAAIAAhZIAJAAIAAAuIAAAKIAAAAIAIgJIATgUIALAAIgXAZIAZAlg");
	this.shape_37.setTransform(121.3,10.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.498)").s().p("AARAgIAAgnQAAgIgEgEQgEgEgHAAQgIAAgFAGQgFAFAAAMIAAAgIgJAAIAAg+IAHAAIACAJIABAAQADgFAFgDQAFgCAFAAQAMAAAFAFQAGAGAAAMIAAAog");
	this.shape_38.setTransform(114.1,11.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_39.setTransform(106.8,11.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.498)").s().p("AgcAqIAAhTIAYAAQAPAAAHAFQAJAFgBALQABAHgFAFQgEAFgJACIAAAAQAUACAAARQAAALgHAHQgJAGgNAAgAgTAiIATAAQAIAAAGgEQAEgEAAgJQABgIgGgEQgFgDgJAAIgSAAgAgTgFIARAAQAIAAAGgDQAEgDAAgIQAAgHgFgEQgGgDgIAAIgQAAg");
	this.shape_40.setTransform(100.1,10.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAYQgJgIAAgQQAAgNAIgJQAIgKALAAQAMAAAHAIQAHAIAAANIAAAEIgqAAQAAAMAFAGQAGAFAIAAQAKAAAKgEIAAAJIgKADIgLABQgMAAgIgJgAAQgFQAAgJgEgFQgEgEgHAAQgGAAgFAFQgEAFgBAIIAfAAIAAAAg");
	this.shape_41.setTransform(89.5,11.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAdIAAgJIAKAEIAKABQAGAAAEgDQAEgCAAgFQAAgEgDgCQgDgDgIgEIgNgDQgDgDgCgDQgCgDAAgFQAAgIAGgEQAHgFAJAAQAKAAAKAFIgDAHQgKgDgIAAQgFAAgDACQgEACAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEAEIAJAEQALADAFAEQADAEAAAGQAAAJgGAFQgHAFgKAAQgNAAgHgEg");
	this.shape_42.setTransform(83.3,11.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_43.setTransform(76.9,11.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.498)").s().p("AARAtIAAgpQAAgHgEgDQgEgEgHAAQgIAAgFAGQgFAEAAAMIAAAhIgJAAIAAhZIAJAAIAAAbIAAAIIAAAAQADgEAGgCQAFgEAFAAQALAAAGAHQAGAFAAAKIAAAqg");
	this.shape_44.setTransform(70.2,10.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.498)").s().p("AgVAgQgKgMAAgUQAAgMAFgJQAFgKAJgGQAKgGAKAAQAOABAKAFIgEAIQgKgFgKAAQgMAAgIAKQgIAKAAAOQAAAQAIAJQAIAKAMAAQAJAAAMgDIAAAJQgJACgNAAQgRAAgLgLg");
	this.shape_45.setTransform(62.9,10.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.498)").s().p("AARAgIAAgnQAAgIgEgEQgEgEgHAAQgIAAgFAGQgFAFAAAMIAAAgIgJAAIAAg+IAHAAIACAJIABAAQADgFAFgDQAFgCAFAAQAMAAAFAFQAGAGAAAMIAAAog");
	this.shape_46.setTransform(52.2,11.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.498)").s().p("AgTAcQgFgFAAgJQAAgRAdgBIALgBIAAgEQAAgHgDgEQgEgDgHAAQgGAAgKAEIgDgHIAKgEIAKgCQALAAAGAGQAFAFAAALIAAAqIgHAAIgCgJIAAAAQgFAGgFACQgFACgFAAQgJAAgGgFgAAGABQgKAAgFADQgFADAAAHQAAAFADADQADADAGAAQAHAAAFgFQAGgFAAgJIAAgGg");
	this.shape_47.setTransform(44.9,11.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.498)").s().p("AgWAqQgHgFAAgIQAAgGAEgEQAEgFAGgBQgCgBgCgDQgBgCAAgDQAAgEABAAIAGgFQgFgCgDgFQgDgFAAgHQAAgKAGgGQAHgGALAAQADAAAEACIAXAAIAAAGIgMABIADAFIABAIQAAAJgGAGQgHAGgJAAIgGgBQgGADAAADQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQADACAFAAIAJAAQALAAAFAEQAGAEAAAJQAAAKgJAGQgIAGgPAAQgMAAgHgFgAgQATQgEAEAAAGQAAAFAFACQAEADAIAAQALAAAGgDQAFgEAAgGQAAgGgDgCQgDgCgJAAIgKAAQgGAAgEADgAgLgjQgDAEAAAHQAAAHADADQAEAEAHAAQAMAAAAgOQAAgPgMAAQgHAAgEAEg");
	this.shape_48.setTransform(38.5,13);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.498)").s().p("AgRAgIAAg+IAIAAIABAMIAAAAQAEgGAEgEQAEgDAGAAIAIABIgCAJIgHgBQgHAAgEAGQgFAGgBAKIAAAgg");
	this.shape_49.setTransform(33.4,11.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.498)").s().p("AgOAdQgHgEgDgIQgEgHAAgKQAAgOAIgJQAIgJAMAAQAOAAAHAJQAIAJAAAOQAAAPgIAJQgHAJgOAAQgHAAgHgEgAgNgRQgFAGABALQgBAMAFAGQAFAHAIAAQAKAAAEgHQAFgGAAgMQAAgLgFgGQgEgGgKAAQgIAAgFAGg");
	this.shape_50.setTransform(26.9,11.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.498)").s().p("AAgAqIAAg1IABgVIgBAAIgdBKIgGAAIgdhKIgBAAIABAWIAAA0IgJAAIAAhTIAPAAIAaBEIAAAAIAbhEIAPAAIAABTg");
	this.shape_51.setTransform(17.9,10.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.498)").s().p("AgaAqIAAhTIAXAAQAdAAAAAZQABANgKAFQgIAHgPAAIgKAAIAAAhgAgQAAIAJAAQAMAAAFgCQAHgFgBgJQABgIgHgFQgFgEgJAAIgMAAg");
	this.shape_52.setTransform(9.2,10.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.498)").s().p("AgOA0IAAgIIAJAAQAFAAACgDQADgEAAgGIAAhUIAKAAIAABTQAAAMgGAFQgFAHgJAAQgFgBgEgBg");
	this.shape_53.setTransform(2.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.6,20.4);


(lib.tablet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ipad();
	this.instance.setTransform(-194,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-119,388,238);


(lib.logousopen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATD8QiegCh5g4QBrAqCGABQChADB1g3QB1g2AChQQABgygvgpQgxgthZgWQAYgVAGgYQBoAdA+AzQA/A2gCA7QgCBah+A+Qh6A7ioAAIgOAAgAilBfQgUgVAAgcQAAgcATgTQAVgXAeAAQAdAAAVAVQAUATAAAcQAAAcgTAVQgVAXgeAAQgdAAgVgVgAiXgBQgMAOAAAbQAAAZAMAVQAPAXAXAAQAVAAANgQQAMgRAAgaQAAgZgMgVQgPgWgXAAQgVAAgNARgAk3BtIgEgcIAEAAQADAMAIAHQAIAJAMAAQALAAAIgHQAHgHAAgLQAAgRgcgPQgdgQAAgYQAAgQAMgKQALgKATAAIAXADIADAXIgEAAQgDgUgWAAQgLAAgGAIQgHAHAAAIQAAARAeAPQAeAQAAAXQAAASgOALQgNALgSAAQgPAAgPgHgAmxBDIAAhFQAAgJgFgDQgDgCgJAAIAAgFIA2AAIAAAFQgJAAgEACQgFADAAAJIAABAQAAAuAmAAQAkAAAAgnIAAg3QAAgVgDgFQgCgDgOgBIAAgFIAsAAIAAAFQgLAAgCAHQgCAFAAARIAAA4QAAAVgNAMQgNAOgZAAQgzAAgBgxgAEoBzIhlhwIAABIQAAAVADAGQAEAGAQAAIAAAFIg0AAIAAgFQALAAAEgDQAGgFAAgRIAAhOQAAgLgGgFQgFgFgNAAIAAgFIAiAAQAFAHAOAOIAdAfIAwA0IAAhNQAAgMgFgFQgEgFgPAAIAAgFIAyAAIAAAFQgKAAgDADQgFAEAAALIAABxgAAzBxIAAgFQANAAADgEQADgEAAgOIAAhWQAAgKgEgDQgCgCgNgBIAAgFIBfAAIAAAbIgDABQgCgLgIgGQgHgFgPAAIgWAAIAAA1IAZAAQALAAADgGIADgKIAEAAIAAArIgEAAQAAgNgFgDQgDgDgNAAIgVAAIAAAhQAAASACAEQAEAGAOAAIAMAAQAPgBAHgEQAIgFAFgPIAFABIgIAegAgsBxIAAgFQAJAAADgCQAFgDAAgJIAAhdQAAgJgDgEQgDgEgLAAIAAgFIAuAAQATAAANAIQARAKAAATQAAAQgOAMQgMALgQAAIgJgBIAAgGIAGAAQAMAAAHgKQAGgIAAgMQAAgSgLgIQgJgHgLAAIgIABIAABsQAAAJAFADQADACAIAAIAAAFgAiGhLIgJgNQAWAIANgLQAMgLgGgLQgHgLgPABQgJABgTAIQgTAIgTACQgVADgUgIIgQgJQATACAHgIQAFgHgDgHQgCgGgIgDQgEgBgPAFQgTAGgZACQgcABgXgPQgLgIgGgIQANAKAdgDQAQgCAUgLQAWgNAKgCQAegIAbASQAMAHAPgEQAQgFAAgQQAAgMgQgCIgQAAIAMgHQARgIASAAQAMgBAPAFIAbAKQAOAGAOgCQAPgCABgMQACgLgNgEIgNgCIAPgGQARgHAJgBIAJgBQAZAAAUAKQAMAFAZgBQgUAJgQAQQgLAKgIAOQgZALgZADQgPADgTgEQgWgEgOADQgRAEgMAHIgJAGIAYgCQAaAAAJAHQAMAJACAKQABAGgCADIALgIQAOgJASABQAcAAACAFQAEAjAgATIABABQgggLgYAAQgOABgYALQgbAMgRADIgJAAQgQAAgLgJgAAuheQgbgRgDgbIAAgGQArgOAdgcQAYgYAJgcIANAAQAeAAAWANQAZAQAEAbQggAMgZAYQgeAegGAhQgOACgMAAQgcAAgWgNgACniIQAVgUAbgLQgDAbgYAXQgVAVggAKQAHgZAZgZgAAsjKQAagZAkgIQgJAVgSASQgcAaghALQAFgXAVgUgADZjaQgFgFAAgIQAAgIAFgFQAFgFAIAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgIAAgFgGgADbjyQgFAEAAAHQAAAHAFAFQAEAEAHAAQAHAAAEgEQAFgFAAgHQAAgHgFgEQgEgFgHAAQgHAAgEAFgADrjdIAAAAIAAgBIAAgBQAAgEgCgBIgEgBIgDAAIAAAIIgDAAIAAgUIAHAAIAFABQAEACAAADQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAABIgDABIADACIABADIAAAEgADijnIADAAIAEgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgFgBIgDAAg");
	this.shape.setTransform(45.2,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.4,50.5);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAYIgKgLQgDgFAAgIQAAgHADgGQAGgHAEgDQAGgDAHAAQAIAAAFADQAIAHACADQAEAGAAAHQAAAIgEAFQgDAHgHAEQgFADgIAAQgHAAgGgDgAgLgTQgGACgDAHQgDAFAAAFQAAAEADAHQADAHAGACQAGADAFABQAFgBAHgDQAGgDACgGQADgFAAgGQAAgFgDgFQgCgGgGgDQgGgEgGAAQgEAAgHAEgAAHAQIgHgOIgEAAIAAAOIgGAAIAAggIAKAAQADAAAEABQAEAEAAAFIABAAQAAADgDADQgBAAgEABIAJAPgAgDAAIADAAQACAAACgBQABgBAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgBgDAAIgDAAg");
	this.shape.setTransform(389.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEgBIQgXgaAAguQAAgaALgXQALgVAUgNQAVgMAbAAQAcAAAWAKIgFAMQgXgKgVgBQgjAAgVAYQgUAVAAAnQAAApATAWQATAVAkAAQAXABAVgHIAAANQgWAHgZAAQgmAAgZgagAAbBOQgSgSAAggIAAh5IANAAIAAB5QAAAbAPAOQAPAPAcAAQAbAAAPgPQAPgOAAgaIAAh6IANAAIAAB5QAAAhgTARQgTATgigBQghABgSgTgAisBGQgXgZAAgtQAAgsAXgZQAXgaAnAAQAnAAAXAaQAWAaAAArQAAAugWAYQgXAagnAAQgnAAgXgagAijg9QgSAWAAAnQAAAnASAYQARAVAjAAQAiAAASgVQASgWAAgpQAAgngSgWQgSgXgiAAQgjAAgRAXgApCBGQgWgYAAguQAAgsAXgZQAXgaAnAAQAnAAAXAaQAVAZAAAsQAAAtgWAZQgXAagnAAQgnAAgXgagAo4g9QgSAXAAAmQAAAnASAYQARAVAjAAQAiAAASgVQASgWAAgpQAAgngSgWQgSgXgiAAQgjAAgRAXgArnBYIAAgNQAWAKAeAAQAWAAAPgLQAOgLAAgRQAAgJgFgJQgEgGgLgHQgIgFgWgIQgfgKgJgKQgLgMAAgTQAAgVARgOQAQgNAbAAQAbAAAXAKIgFALQgXgKgWAAQgWAAgLAKQgMAJAAARQAAAMAEAFQAGAIAGAEQAHAFAXAIQAWAIALAFQAMAJAEAHQAEAMAAANIAAAAQAAAWgRAPQgSANgcAAQgiAAgTgIgALaBeIhwimIgBAAIACAtIAAB5IgNAAIAAi7IANAAIBwCnIABAAIgBgsIAAh7IANAAIAAC7gAIyBeIgZhCIhNAAIgaBCIgPAAIBMi7IAIAAIBKC7gAHrgxIgaBAIBEAAIgihYQgDALgFANgAkWBeIAAhIIg/hzIAPAAIA3BlIA3hlIAOAAIg+BzIAABIg");
	this.shape_1.setTransform(308.6,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj1COIAAh6IibAAIAAB6Ig6AAIAAkZIA6AAIAABwICbAAIAAhwIA5AAIAAEZgAH+CNIAAkYID4AAIggAwIigAAIAABBICcAAIAAAuIicAAIAABHICgAAIAhAygABlCNIgZg6IiPAAIgaA6IhAAAICHkYIA1AAICHEYgAA2AjIgzhzIgxBzIBkAAgAqdCNQgoAAgXgWQgagXAAgsIAAhnQAAgoAXgXQAXgZArAAICzAAIghAyIiHAAQgXAAgIAKQgJAJAAAXIAABeQgBAYAKAJQAJAJAWAAICGAAIAhA0gAC8CMIAhgyICaAAQAXAAAAgXIAAgYQAAgOgGgFQgFgEgLAAIh2AAQgcAAgSgRQgVgSAAgnIAAgOQAAgkAWgUQASgRAdAAIC8AAIgfAxIiUAAQgMAAgEAFQgFAFAAAMIAAAUQAAAOAGAEQAEAEALAAIBxAAQAjAAATATQAUASAAAkIAAATQAAAngVATQgUASgjAAg");
	this.shape_2.setTransform(75.9,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0179C1").s().p("AhYD3IiSiNIFBAAIAAB8QAAAHgFAEQgFAGgHAAgABshVIB6AAQAHAAAFAEQAFAFAAAIIABCcIiMCUgAjlBWQgHAAgFgEQgFgFAAgIIgBibICMiUIAAFAgAhVhpIAAh7QAAgIAFgEQAEgFAHgBICcAAICVCNg");
	this.shape_3.setTransform(191.1,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392.1,49.4);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu3AGGIAAsLMBdvAAAIAAMLg");
	this.shape.setTransform(300,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,78);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B0B0B0","#FFFFFF"],[0,1],0,234,0,-233.9).s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.ballshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.863)").s().p("AAABAQizAAh/gNQiTgPADgkIAAAAIAAAAQgDgjCTgPQB/gNCzAAQC0AAB/ANQCTAPgDAjIAAAAIAAAAQADAkiTAPQh/ANizAAIgBAAgAEyAuQCNgPAAgfIAAAAIAAAAQABgeiOgPQh/gNizAAQiyAAh/ANQiOAPABAeIAAAAIAAAAQAAAfCNAPQB/ANCyAAQCzAAB/gNg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.929)").s().p("AAAA7QiyAAh/gNQiNgPAAgfIAAAAIAAAAQgBgeCOgPQB/gNCyAAQCzAAB/ANQCOAPgBAeIAAAAIAAAAQAAAfiNAPQh+ANizAAIgBAAgAkxgoQiIAOABAaIAAAAQgBAbCIAOQB/ANCyAAQCzAAB/gNQCIgOgBgbIAAAAQABgaiIgOQh/gNizAAIAAAAQiyAAh/ANg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.729)").s().p("AkzA9QifgRAFgsQgFgrCfgRQCAgNCzAAQC0AACAANQCfARgFArQAFAsifARQiAANi0AAQizAAiAgNgAEzA4QCZgQgDgoIAAAAIAAAAQADgniZgQQh/gNi0AAQizAAh/ANQiZAQADAnIAAAAQgDAoCZAQQB/ANCzAAQC0AAB/gNg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.663)").s().p("AkzBCQilgRAGgxQgGgwClgRQB/gNC0AAQC1AAB/ANQClARgGAwQAGAxilARQh/ANi1AAQi0AAh/gNgAkzg8QifARAFArQgFAsCfARQCAANCzAAQC0AACAgNQCfgRgFgsQAFgrifgRQiAgNi0AAQizAAiAANg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.529)").s().p("Ak0BMQixgSAJg6QgJg5CxgSQCAgNC0AAQC1AACAANQCxASgJA5QAJA6ixASQiAANi1AAQi0AAiAgNgAk0hGQiqASAHA0QgHA1CqASQCAANC0AAQC1AACAgNQCqgSgHg1QAHg0iqgSQiAgNi1AAQi0AAiAANg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.463)").s().p("Ak1BRQi2gTAKg+QgKg9C2gTQCBgNC0AAQC1AACBANQC2ATgKA9QAKA+i2ATQiBANi1AAQi0AAiBgNgAk0hLQixASAJA5QgJA6CxASQCAANC0AAQC1AACAgNQCxgSgJg6QAJg5ixgSQiAgNi1AAQi0AAiAANg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.329)").s().p("AAABoQi1AAiBgNIAAAAQjCgUANhHQgNhGDCgUIAAAAQCBgNC1AAQC2AACBANIAAAAQDCAUgNBGQANBHjCAUIAAAAQiBANi2AAIAAAAgAk2hVQi8AUAMBBQgMBCC8AUQCBANC1AAQC2AACBgNQC8gUgMhCQAMhBi8gUQiBgNi2AAIAAAAQi1AAiBANg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.263)").s().p("AAABtQi1AAiCgNQjIgVAPhLQgPhKDIgVQCCgNC1AAQC2AACCANQDIAVgPBKQAPBLjIAVQiBANi2AAIgBAAgAE3BbIAAAAQDCgUgNhHQANhGjCgUIAAAAQiBgNi2AAQi1AAiBANIAAAAQjCAUANBGQgNBHDCAUIAAAAQCBANC1AAQC2AACBgNg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.129)").s().p("AAAB3Qi2AAiCgNQjUgWAShUQgShTDUgWQCCgNC2AAQC3AACCANQDUAWgSBTQASBUjUAWQiBANi3AAIgBAAgAE4BlQDOgWgQhPQAQhOjOgWQiBgNi3AAQi2AAiBANQjOAWAQBOQgQBPDOAWQCBANC2AAQC3AACBgNg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.063)").s().p("Ak4BuQjbgWAUhYQgUhXDbgWQCCgOC2AAQC3AACCAOQDbAWgUBXQAUBYjbAWQiCAOi3AAQi2AAiCgOgAE5BqQDUgWgShUQAShTjUgWQiCgNi3AAQi2AAiCANQjUAWASBTQgSBUDUAWQCCANC2AAQC3AACCgNg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.596)").s().p("Ak0BHQiqgSAHg1QgHg0CqgSQCAgNC0AAQC1AACAANQCqASgHA0QAHA1iqASQiAANi1AAQi0AAiAgNgAkzhBQilARAGAwQgGAxClARQB/ANC0AAQC1AAB/gNQClgRgGgxQAGgwilgRQh/gNi1AAQi0AAh/ANg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.396)").s().p("AAABjQi1AAiBgNQi8gUAMhCQgMhBC8gUQCBgNC1AAQC2AACBANQC8AUgMBBQAMBCi8AUQiBANi2AAIAAAAgAk1hQQi2ATAKA9QgKA+C2ATQCBANC0AAQC1AACBgNQC2gTgKg+QAKg9i2gTQiBgNi1AAIAAAAQi1AAiAANg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.196)").s().p("AAAByQi2AAiBgNQjOgWAQhPQgQhODOgWQCBgNC2AAQC3AACBANQDOAWgQBOQAQBPjOAWQiBANi2AAIgBAAgAE4BgQDIgVgPhLQAPhKjIgVQiCgNi2AAQi1AAiCANQjIAVAPBKQgPBLDIAVQCCANC1AAQC2AACCgNg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.796)").s().p("AAABFQizAAh/gNQiZgQADgoIAAAAQgDgnCZgQQB/gNCzAAQC0AAB/ANQCZAQgDAnIAAAAIAAAAQADAoiZAQQh+ANi0AAIgBAAgAEzAzQCTgPgDgkIAAAAIAAAAQADgjiTgPQh/gNi0AAQizAAh/ANQiTAPADAjIAAAAIAAAAQgDAkCTAPQB/ANCzAAQC0AAB/gNg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAA2QiyAAh/gNQiIgOABgbIAAAAQgBgaCIgOQB/gNCyAAQCzAAB/ANQCIAOgBAaIAAAAQABAbiIAOQh/ANizAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-12.4,102.9,24.9);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball1.png
	this.instance = new lib.ball1();
	this.instance.setTransform(-65,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-64.5,130,129);


// stage content:
(lib.CHR1618_USOpen_ESPN_PreQ_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.complete = false;
	}
	this.frame_194 = function() {
		showCta();
	}
	this.frame_210 = function() {
		this.complete = true;
		this.stop();
		showReplayButton();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(194).call(this.frame_194).wait(16).call(this.frame_210).wait(1));

	// text3c
	this.text3c = new lib.text3c();
	this.text3c.setTransform(300.1,-30.8,1,1,0,0,0,180,22.4);
	this.text3c._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text3c).wait(175).to({_off:false},0).wait(1).to({regX:179.5,regY:22.8,x:299.6,y:-25.9},0).wait(1).to({y:0.1},0).wait(1).to({y:46.2},0).wait(1).to({y:71.3},0).wait(1).to({y:85.7},0).wait(1).to({y:95},0).wait(1).to({y:101.2},0).wait(1).to({y:105.3},0).wait(1).to({y:107.8},0).wait(1).to({y:109.2},0).wait(1).to({regX:180,regY:22.4,x:300.1},0).wait(25));

	// text3b
	this.text3b = new lib.text3b();
	this.text3b.setTransform(300,-66.5,1,1,0,0,0,242.1,22.4);
	this.text3b._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text3b).wait(175).to({_off:false},0).wait(1).to({regX:242.4,regY:21.6,x:300.3,y:-62.8},0).wait(1).to({y:-36.8},0).wait(1).to({y:9.4},0).wait(1).to({y:34.4},0).wait(1).to({y:48.8},0).wait(1).to({y:58.1},0).wait(1).to({y:64.3},0).wait(1).to({y:68.4},0).wait(1).to({y:70.9},0).wait(1).to({y:72.3},0).wait(1).to({regX:242.1,regY:22.4,x:300,y:73.5},0).wait(25));

	// text3
	this.text3 = new lib.text3a();
	this.text3.setTransform(300,-100.5,1,1,0,0,0,220.8,22.4);
	this.text3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(175).to({_off:false},0).wait(1).to({regY:26.2,y:-92.2},0).wait(1).to({y:-66.2},0).wait(1).to({y:-20},0).wait(1).to({y:5},0).wait(1).to({y:19.5},0).wait(1).to({y:28.7},0).wait(1).to({y:34.9},0).wait(1).to({y:39},0).wait(1).to({y:41.5},0).wait(1).to({y:42.9},0).wait(1).to({regY:22.4,y:39.5},0).wait(25));

	// tablet
	this.tablet = new lib.tablet();
	this.tablet.setTransform(1083.7,247.3,1.2,1.2);
	this.tablet._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tablet).wait(120).to({_off:false},0).wait(20).to({x:1081.9},0).wait(1).to({x:1075.6},0).wait(1).to({x:1063},0).wait(1).to({x:1041.2},0).wait(1).to({x:1004.2},0).wait(1).to({x:939.2},0).wait(1).to({x:821.7},0).wait(1).to({x:678.5},0).wait(1).to({x:577.8},0).wait(1).to({x:510.7},0).wait(1).to({x:462.6},0).wait(1).to({x:426.2},0).wait(1).to({x:397.9},0).wait(1).to({x:375.3},0).wait(1).to({x:357.3},0).wait(1).to({x:342.7},0).wait(1).to({x:331},0).wait(1).to({x:321.7},0).wait(1).to({x:314.4},0).wait(1).to({x:308.8},0).wait(1).to({x:304.8},0).wait(1).to({x:302},0).wait(1).to({x:300.5},0).wait(1).to({x:300},0).wait(6).to({scaleX:1,scaleY:1,y:262.3},10).wait(32));

	// ball2
	this.instance = new lib.ball();
	this.instance.setTransform(67.7,358.5,1,1,-82.2,0,0,1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(20).to({regX:0,rotation:-83.7,x:66.2,y:359.5},0).wait(1).to({rotation:-88.9,x:61.4},0).wait(1).to({rotation:-99.1,x:52,y:359.4},0).wait(1).to({rotation:-116.8,x:35.7,y:359.3},0).wait(1).to({rotation:-146.9,x:7.9,y:359},0).wait(1).to({rotation:-199.9,x:-41.7,y:358.1},0).wait(1).to({rotation:-295.4,x:-132.6,y:357.5},0).wait(1).to({rotation:-412,x:-242,y:359},0).wait(1).to({rotation:-493.9,x:-317.5,y:358.9},0).wait(1).to({rotation:-548.5,x:-368.5,y:358},0).wait(1).to({rotation:-587.7,x:-405.5,y:357.4},0).wait(1).to({rotation:-617.3,x:-433.7,y:357.2},0).wait(1).to({rotation:-640.4,x:-455.7,y:357.1},0).wait(1).to({rotation:-658.7,x:-473.1,y:357.2},0).wait(1).to({rotation:-673.4,x:-487.1,y:357.3},0).wait(1).to({rotation:-685.2,x:-498.3,y:357.5},0).wait(1).to({rotation:-694.8,x:-507.3,y:357.6},0).wait(1).to({rotation:-702.3,x:-514.5,y:357.7},0).wait(1).to({rotation:-708.3,x:-520.1,y:357.8},0).wait(1).to({rotation:-712.8,x:-524.4,y:357.9},0).wait(1).to({rotation:-716.1,x:-527.5},0).wait(1).to({rotation:-718.3,x:-529.5,y:358},0).wait(1).to({rotation:-719.6,x:-530.7},0).wait(1).to({regX:1,regY:0.1,rotation:-720,x:-530.1,y:358.1},0).to({_off:true},1).wait(47));

	// ball1
	this.instance_1 = new lib.ball();
	this.instance_1.setTransform(520.2,359.2,0.999,0.999,-30.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(20).to({rotation:-31.9,x:518.6,y:359.1},0).wait(1).to({rotation:-37.5,x:513.4},0).wait(1).to({rotation:-48.5,x:503},0).wait(1).to({rotation:-67.7,x:484.9},0).wait(1).to({rotation:-100.2,x:454.2,y:359},0).wait(1).to({rotation:-157.5,x:400.2,y:358.9},0).wait(1).to({rotation:-260.9,x:302.7,y:358.6},0).wait(1).to({rotation:-386.9,x:183.8,y:358.4},0).wait(1).to({rotation:-475.5,x:100.2,y:358.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-534.6,x:44.5,y:358.1},0).wait(1).to({rotation:-576.9,x:4.5,y:358},0).wait(1).to({rotation:-608.9,x:-25.6,y:357.9},0).wait(1).to({rotation:-633.9,x:-49.2,y:357.8},0).wait(1).to({rotation:-653.7,x:-67.9},0).wait(1).to({rotation:-669.6,x:-82.9},0).wait(1).to({rotation:-682.4,x:-94.9,y:357.7},0).wait(1).to({rotation:-692.7,x:-104.7},0).wait(1).to({rotation:-700.9,x:-112.4},0).wait(1).to({rotation:-707.3,x:-118.5},0).wait(1).to({rotation:-712.2,x:-123.1},0).wait(1).to({rotation:-715.8,x:-126.4},0).wait(1).to({rotation:-718.2,x:-128.7},0).wait(1).to({rotation:-719.6,x:-130},0).wait(1).to({rotation:-720,x:-130.4},0).to({_off:true},1).wait(13).to({_off:false,scaleX:0.69,scaleY:0.69,rotation:-824,x:-75.8,y:302.5},0).wait(1).to({rotation:-817.9,x:-74.3},0).wait(1).to({rotation:-813.1,x:-70.5},0).wait(1).to({rotation:-808.6,x:-64.2},0).wait(1).to({rotation:-804.3,x:-55.5},0).wait(1).to({rotation:-800.2,x:-44.9},0).wait(1).to({rotation:-796.1,x:-32.9},0).wait(1).to({rotation:-792.2,x:-20.3},0).wait(1).to({rotation:-788.3,x:-7.7},0).wait(1).to({rotation:-784.5,x:4.6},0).wait(1).to({rotation:-780.8,x:16.3},0).wait(1).to({rotation:-777.2,x:27.1},0).wait(1).to({rotation:-773.6,x:37.2},0).wait(1).to({rotation:-770.1,x:46.3},0).wait(1).to({rotation:-766.7,x:54.7},0).wait(1).to({rotation:-763.4,x:62.3},0).wait(1).to({rotation:-760.1,x:69.1},0).wait(1).to({rotation:-756.9,x:75.3},0).wait(1).to({rotation:-753.8,x:80.9},0).wait(1).to({rotation:-750.7,x:85.9},0).wait(1).to({rotation:-747.8,x:90.4},0).wait(1).to({rotation:-744.9,x:94.4},0).wait(1).to({rotation:-742.1,x:97.9},0).wait(1).to({rotation:-739.4,x:101.1},0).wait(1).to({rotation:-736.9,x:103.8},0).wait(1).to({rotation:-734.4,x:106.1},0).wait(1).to({rotation:-732,x:108.2},0).wait(1).to({rotation:-729.7,x:109.9},0).wait(1).to({rotation:-727.6,x:111.2},0).wait(1).to({rotation:-725.7,x:112.3},0).wait(1).to({rotation:-724.5,x:113.2},0).wait(1).to({rotation:-723.2,x:113.8},0).wait(1).to({rotation:-721.7,x:114.1},0).wait(1).to({rotation:-720,x:114.2},0).wait(1));

	// ball shadow
	this.instance_2 = new lib.ballshadow();
	this.instance_2.setTransform(-77.1,342.6,0.714,0.714);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(177).to({_off:false},0).wait(1).to({x:-75.7,alpha:0.201},0).wait(1).to({x:-71.8,alpha:0.202},0).wait(1).to({x:-65.5,alpha:0.204},0).wait(1).to({x:-56.9,alpha:0.205},0).wait(1).to({x:-46.2,alpha:0.207},0).wait(1).to({x:-34.3,alpha:0.208},0).wait(1).to({x:-21.7,alpha:0.21},0).wait(1).to({x:-9,alpha:0.212},0).wait(1).to({x:3.3,alpha:0.213},0).wait(1).to({x:14.9,alpha:0.215},0).wait(1).to({x:25.8,alpha:0.216},0).wait(1).to({x:35.8,alpha:0.218},0).wait(1).to({x:45,alpha:0.219},0).wait(1).to({x:53.3,alpha:0.221},0).wait(1).to({x:60.9,alpha:0.222},0).wait(1).to({x:67.8,alpha:0.224},0).wait(1).to({x:74,alpha:0.225},0).wait(1).to({x:79.6,alpha:0.227},0).wait(1).to({x:84.6,alpha:0.228},0).wait(1).to({x:89.1,alpha:0.23},0).wait(1).to({x:93.1,alpha:0.232},0).wait(1).to({x:96.6,alpha:0.233},0).wait(1).to({x:99.7,alpha:0.235},0).wait(1).to({x:102.4,alpha:0.236},0).wait(1).to({x:104.8,alpha:0.238},0).wait(1).to({x:106.8,alpha:0.239},0).wait(1).to({x:108.5,alpha:0.241},0).wait(1).to({x:109.9,alpha:0.242},0).wait(1).to({x:111,alpha:0.244},0).wait(1).to({x:111.8,alpha:0.245},0).wait(1).to({x:112.4,alpha:0.247},0).wait(1).to({x:112.7,alpha:0.248},0).wait(1).to({x:112.9,alpha:0.25},0).wait(1));

	// ball2
	this.instance_3 = new lib.ball();
	this.instance_3.setTransform(-121.4,-41.5,1,1,-0.3,0,0,1,1.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:5.7,x:-36,y:-22.3},0).wait(1).to({rotation:11.9,x:45.3,y:14},0).wait(1).to({rotation:18.2,x:120.2,y:62},0).wait(1).to({rotation:24.7,x:186.9,y:121},0).wait(1).to({rotation:31.3,x:242.7,y:190.3},0).wait(1).to({rotation:38,x:284.1,y:269},0).wait(1).to({rotation:44.8,x:307.8,y:354.6},0).wait(1).to({rotation:51.9,x:335.9,y:318.2},0).wait(1).to({rotation:59.2,x:371.7,y:289.1},0).wait(1).to({rotation:66.9,x:411.4,y:265.5},0).wait(1).to({rotation:75,x:453.4,y:246.2},0).wait(1).to({rotation:84.1,x:496.9,y:230.7},0).wait(1).to({rotation:96,x:541.6,y:218.9},0).wait(1).to({rotation:85.2,x:497.8,y:214.1},0).wait(1).to({rotation:74.4,x:453.6,y:214.2},0).wait(1).to({rotation:63.6,x:409.9,y:220.1},0).wait(1).to({rotation:52.7,x:367.6,y:232.7},0).wait(1).to({rotation:41.9,x:328.2,y:252.5},0).wait(1).to({rotation:31.1,x:293.5,y:279.7},0).wait(1).to({rotation:20.3,x:265.5,y:313.7},0).wait(1).to({rotation:9.5,x:247,y:353.7},0).wait(1).to({rotation:4.1,x:236.5,y:336.2},0).wait(1).to({rotation:-0.4,x:221.9,y:322},0).wait(1).to({rotation:-4.5,x:202.3,y:316.9},0).wait(1).to({rotation:-8.6,x:180,y:322.7},0).wait(1).to({rotation:-12.5,x:162.2,y:337.7},0).wait(1).to({rotation:-16.3,x:149.1,y:357},0).wait(1).to({rotation:-20,x:141.5,y:346.1},0).wait(1).to({rotation:-23.8,x:129.5,y:340.7},0).wait(1).to({rotation:-27.4,x:116.2,y:344.9},0).wait(1).to({rotation:-31,x:109.7,y:357.5},0).wait(1).to({rotation:-34.5,x:106.5,y:357.6},0).wait(1).to({rotation:-38,x:103.4},0).wait(1).to({rotation:-41.6,x:100.2,y:357.7},0).wait(1).to({rotation:-45.2,x:97.1,y:357.8},0).wait(1).to({rotation:-48.9,x:94,y:357.9},0).wait(1).to({rotation:-52.5,x:90.9,y:358},0).wait(1).to({rotation:-56.2,x:87.8,y:358.1},0).wait(1).to({rotation:-59.8,x:84.7},0).wait(1).to({rotation:-63.5,x:81.6,y:358.2},0).wait(1).to({rotation:-67.2,x:78.5,y:358.3},0).wait(1).to({rotation:-70.9,x:75.4,y:358.4},0).wait(1).to({rotation:-74.6,x:72.3},0).wait(1).to({rotation:-78.3,x:69.2,y:358.5},0).wait(1).to({rotation:-82,x:66.2,y:358.6},0).to({_off:true},1).wait(91));

	// ball1
	this.instance_4 = new lib.ball();
	this.instance_4.setTransform(714.5,-22.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).wait(1).to({rotation:72.3,x:633.8,y:-21.9},0).wait(1).to({rotation:153.2,x:553.1,y:-16.7},0).wait(1).to({rotation:242.3,x:473.1,y:-5.5},0).wait(1).to({rotation:340.6,x:394.6,y:13},0).wait(1).to({rotation:450.3,x:318.5,y:40.1},0).wait(1).to({rotation:575.3,x:246.4,y:76.4},0).wait(1).to({rotation:722.7,x:179.6,y:121.8},0).wait(1).to({rotation:549.7,x:118.8,y:174.9},0).wait(1).to({rotation:494.5,x:63.5,y:233.9},0).wait(1).to({rotation:502.3,x:118.9,y:246.8},0).wait(1).to({rotation:510.9,x:170.5,y:270.8},0).wait(1).to({rotation:519.7,x:213.2,y:308.3},0).wait(1).to({rotation:528.5,x:238.2,y:359.1},0).wait(1).to({rotation:537.3,x:261.9,y:339.3},0).wait(1).to({rotation:546,x:290.5,y:327.1},0).wait(1).to({rotation:554.6,x:321.2,y:322.1},0).wait(1).to({rotation:563.1,x:342.5,y:330.2},0).wait(1).to({rotation:571.4,x:361.6,y:343},0).wait(1).to({rotation:579.5,x:377.8,y:359.2},0).wait(1).to({rotation:587.5,x:391.8,y:348.7},0).wait(1).to({rotation:595.3,x:408.6,y:343},0).wait(1).to({rotation:602.9,x:426.2,y:340.6},0).wait(1).to({rotation:610.3,x:441.1,y:343.5},0).wait(1).to({rotation:617.6,x:454.9,y:349.8},0).wait(1).to({rotation:624.6,x:466.1,y:360},0).wait(1).to({rotation:634.6,x:469.7,y:359.9},0).wait(1).to({rotation:641.4,x:473.3},0).wait(1).to({rotation:647,x:476.9,y:359.8},0).wait(1).to({rotation:652,x:480.5},0).wait(1).to({rotation:656.5,x:484.2,y:359.7},0).wait(1).to({rotation:660.7,x:487.8},0).wait(1).to({rotation:664.5,x:491.3,y:359.6},0).wait(1).to({rotation:668.2,x:494.9},0).wait(1).to({rotation:671.7,x:498.5,y:359.5},0).wait(1).to({rotation:675,x:502.1},0).wait(1).to({rotation:678.2,x:505.7,y:359.4},0).wait(1).to({rotation:681.3,x:509.4,y:359.3},0).wait(1).to({rotation:684.2,x:512.9},0).wait(1).to({rotation:687,x:516.6,y:359.2},0).wait(1).to({rotation:689.7,x:520.1},0).wait(62).to({_off:true},1).wait(91));

	// text2b
	this.text2b = new lib.text2B();
	this.text2b.setTransform(194.7,136,1,1,0,0,0,82.2,31.9);
	this.text2b.alpha = 0;
	this.text2b._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text2b).wait(57).to({_off:false},0).wait(1).to({regX:190.1,regY:41.8,x:302.6,y:148.9,alpha:0.044},0).wait(1).to({y:161.7,alpha:0.228},0).wait(1).to({y:181.3,alpha:0.512},0).wait(1).to({y:195.6,alpha:0.719},0).wait(1).to({y:204.4,alpha:0.846},0).wait(1).to({y:209.8,alpha:0.924},0).wait(1).to({y:213,alpha:0.97},0).wait(1).to({y:214.6,alpha:0.993},0).wait(1).to({regX:82.2,regY:31.9,x:194.7,y:205.2,alpha:1},0).wait(74).to({regX:190.1,regY:41.8,x:301,y:215.1},0).wait(1).to({x:295.8},0).wait(1).to({x:285.5},0).wait(1).to({x:267.5},0).wait(1).to({x:237},0).wait(1).to({x:183.5},0).wait(1).to({x:86.7},0).wait(1).to({x:-31.4},0).wait(1).to({x:-114.4},0).wait(1).to({x:-169.7},0).wait(1).to({x:-209.4},0).wait(1).to({x:-239.4},0).wait(1).to({x:-262.7},0).wait(1).to({x:-281.3},0).wait(1).to({x:-296.2},0).wait(1).to({x:-308.2},0).wait(1).to({x:-317.8},0).wait(1).to({x:-325.5},0).wait(1).to({x:-331.5},0).wait(1).to({x:-336.1},0).wait(1).to({x:-339.5},0).wait(1).to({x:-341.7},0).wait(1).to({x:-343},0).wait(1).to({regX:82.2,regY:31.9,x:-451.3,y:205.2},0).to({_off:true},1).wait(47));

	// text2a
	this.text2a = new lib.text2a();
	this.text2a.setTransform(186.7,136,1,1,0,0,0,82.2,31.9);
	this.text2a.alpha = 0;
	this.text2a._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text2a).wait(55).to({_off:false},0).wait(1).to({regX:193,regY:42,x:297.5,y:146.2,alpha:0.028},0).wait(1).to({y:147,alpha:0.141},0).wait(1).to({y:148.4,alpha:0.359},0).wait(1).to({y:149.8,alpha:0.579},0).wait(1).to({y:150.8,alpha:0.734},0).wait(1).to({y:151.5,alpha:0.837},0).wait(1).to({y:151.9,alpha:0.907},0).wait(1).to({y:152.2,alpha:0.952},0).wait(1).to({y:152.4,alpha:0.98},0).wait(1).to({y:152.5,alpha:0.995},0).wait(1).to({regX:82.2,regY:31.9,x:186.7,y:142.4,alpha:1},0).wait(74).to({regX:193,regY:42,x:296,y:152.5},0).wait(1).to({x:290.8},0).wait(1).to({x:280.4},0).wait(1).to({x:262.5},0).wait(1).to({x:232},0).wait(1).to({x:178.4},0).wait(1).to({x:81.6},0).wait(1).to({x:-36.4},0).wait(1).to({x:-119.4},0).wait(1).to({x:-174.8},0).wait(1).to({x:-214.5},0).wait(1).to({x:-244.4},0).wait(1).to({x:-267.8},0).wait(1).to({x:-286.3},0).wait(1).to({x:-301.2},0).wait(1).to({x:-313.2},0).wait(1).to({x:-322.9},0).wait(1).to({x:-330.6},0).wait(1).to({x:-336.6},0).wait(1).to({x:-341.2},0).wait(1).to({x:-344.5},0).wait(1).to({x:-346.8},0).wait(1).to({x:-348},0).wait(1).to({regX:82.2,regY:31.9,x:-459.3,y:142.4},0).to({_off:true},1).wait(47));

	// text1d
	this.text1d = new lib.text1d();
	this.text1d.setTransform(300.1,108,1,1,0,0,0,78,31.9);
	this.text1d.alpha = 0;
	this.text1d._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text1d).wait(4).to({_off:false},0).wait(1).to({regX:79,regY:41.8,x:301.1,y:125.4,alpha:0.041},0).wait(1).to({y:166,alpha:0.259},0).wait(1).to({y:232.3,alpha:0.616},0).wait(1).to({y:265.3,alpha:0.794},0).wait(1).to({y:283.2,alpha:0.89},0).wait(1).to({y:293.6,alpha:0.946},0).wait(1).to({y:299.7,alpha:0.979},0).wait(1).to({y:302.7,alpha:0.995},0).wait(1).to({regX:78,regY:31.9,x:300.1,y:293.8,alpha:1},0).wait(38).to({alpha:0},3,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// text1c
	this.text1c = new lib.text1c();
	this.text1c.setTransform(300,108,1,1,0,0,0,121.2,31.9);
	this.text1c.alpha = 0;
	this.text1c._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text1c).wait(3).to({_off:false},0).wait(1).to({regX:122.1,regY:41.8,x:300.9,y:121.9,alpha:0.032},0).wait(1).to({y:141.7,alpha:0.189},0).wait(1).to({y:184.8,alpha:0.531},0).wait(1).to({y:210.8,alpha:0.737},0).wait(1).to({y:224.8,alpha:0.848},0).wait(1).to({y:233.3,alpha:0.916},0).wait(1).to({y:238.6,alpha:0.958},0).wait(1).to({y:241.8,alpha:0.983},0).wait(1).to({y:243.5,alpha:0.996},0).wait(1).to({regX:121.2,regY:31.9,x:300,y:234.1,alpha:1},0).wait(38).to({alpha:0},3,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// text1b
	this.text1b = new lib.text1b();
	this.text1b.setTransform(300,108,1,1,0,0,0,116.5,31.9);
	this.text1b.alpha = 0;
	this.text1b._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text1b).wait(2).to({_off:false},0).wait(1).to({regX:115.4,regY:41.9,x:298.9,y:119.7,alpha:0.026},0).wait(1).to({y:127.6,alpha:0.143},0).wait(1).to({y:147.9,alpha:0.445},0).wait(1).to({y:163.6,alpha:0.678},0).wait(1).to({y:172.1,alpha:0.805},0).wait(1).to({y:177.4,alpha:0.883},0).wait(1).to({y:180.8,alpha:0.933},0).wait(1).to({y:183,alpha:0.966},0).wait(1).to({y:184.3,alpha:0.986},0).wait(1).to({y:185,alpha:0.997},0).wait(1).to({regX:116.5,regY:31.9,x:300,y:175.3,alpha:1},0).wait(38).to({alpha:0},3,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// text1a
	this.text1a = new lib.text1a();
	this.text1a.setTransform(300.1,108,1,1,0,0,0,82.2,31.9);
	this.text1a.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text1a).wait(1).to({regX:79.7,regY:41.9,x:297.6,y:118,alpha:0.018},0).wait(1).to({y:118.4,alpha:0.091},0).wait(1).to({y:119.3,alpha:0.29},0).wait(1).to({y:120.5,alpha:0.553},0).wait(1).to({y:121.2,alpha:0.713},0).wait(1).to({y:121.7,alpha:0.812},0).wait(1).to({y:122,alpha:0.878},0).wait(1).to({y:122.2,alpha:0.924},0).wait(1).to({y:122.3,alpha:0.955},0).wait(1).to({y:122.4,alpha:0.977},0).wait(1).to({y:122.5,alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:82.2,regY:31.9,x:300.1,y:112.6,alpha:1},0).wait(38).to({alpha:0},3,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// legal
	this.instance_5 = new lib.textlegal();
	this.instance_5.setTransform(300,503.2,1,1,0,0,0,202.3,10.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).to({y:483.2,alpha:1},7).wait(24));

	// vertical
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAgZIAAAz");
	this.shape.setTransform(170.9,434.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAAA0IAAhn");
	this.shape_1.setTransform(170.9,434.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AAABOIAAib");
	this.shape_2.setTransform(170.9,435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAABnIAAjN");
	this.shape_3.setTransform(170.9,435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAACBIAAkB");
	this.shape_4.setTransform(170.9,435);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("AAACbIAAk1");
	this.shape_5.setTransform(170.9,435);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAAC0IAAln");
	this.shape_6.setTransform(170.9,435);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AAAjNIAAGb");
	this.shape_7.setTransform(170.9,435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},179).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(25));

	// uso mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_179 = new cjs.Graphics().p("AoiExIAAphIRFAAIAAJhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_graphics_179,x:113.4,y:434.8}).wait(32));

	// logo-usopen
	this.instance_6 = new lib.logousopen();
	this.instance_6.setTransform(187.5,414.2,0.87,0.87);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).wait(1).to({regX:45.2,regY:25.2,x:224.9,y:436.1},0).wait(1).to({x:215.6},0).wait(1).to({x:171.9},0).wait(1).to({x:134.8},0).wait(1).to({x:121.1},0).wait(1).to({x:114.1},0).wait(1).to({x:110.2},0).wait(1).to({x:108.3},0).wait(1).to({regX:0,regY:0,x:68.5,y:414.2},0).wait(23));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(300.9,460.1,0.876,0.876,0,0,0,196.1,24.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(175).to({regX:196,x:302.5,y:459.5},0).wait(1).to({x:310.4,y:456.6},0).wait(1).to({x:328.3,y:450},0).wait(1).to({x:343.4,y:444.5},0).wait(1).to({x:351.8,y:441.5},0).wait(1).to({x:356.5,y:439.7},0).wait(1).to({x:359.3,y:438.7},0).wait(1).to({x:360.6,y:438.2},0).wait(1).to({regX:196.1,x:361.1,y:438.1},0).wait(28));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(300,461,1,1,0,0,0,300,39);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(149).to({scaleY:2.31,y:410},16).wait(46));

	// bg
	this.bg = new lib.bg();
	this.bg.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,600,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;