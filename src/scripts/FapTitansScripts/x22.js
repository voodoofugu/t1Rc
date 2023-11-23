(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGjE+IosCTIk5niIFtm/IIYDQg");
	this.shape.setTransform(45.1,46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0033").s().p("AnCgRIFtm/IIXDQIgfI+IosCTg");
	this.shape_1.setTransform(45.1,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.2,95.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGuAAQAACxh+B/Qh/B+ixAAQixAAh+h+Qh+h/AAixQAAixB+h+QB+h+CxAAQCxAAB/B+QB+B+AACxg");
	this.shape.setTransform(43,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AkvEwQh9h/gBixQABixB9h+QB+h9CxgBQCxABB/B9QB+B+AACxQAACxh+B/Qh/B+ixAAQixAAh+h+g");
	this.shape_1.setTransform(43,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,88,88);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	console.log("UNT", this);
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(275.5,200.5,1,1,0,0,0,45.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:275.8},0).wait(1).to({x:276.8},0).wait(1).to({x:278.4},0).wait(1).to({x:280.8},0).wait(1).to({x:284},0).wait(1).to({x:288},0).wait(1).to({x:293},0).wait(1).to({x:298.9},0).wait(1).to({x:305.9},0).wait(1).to({x:314},0).wait(1).to({x:323.3},0).wait(1).to({x:333.7},0).wait(1).to({x:345.5},0).wait(1).to({x:358.4},0).wait(1).to({x:372.5},0).wait(1).to({x:387.7},0).wait(1).to({x:403.9},0).wait(1).to({x:420.9},0).wait(1).to({x:438.4},0).wait(1).to({x:456.3},0).wait(1).to({x:474.1},0).wait(1).to({x:454.1},0).wait(1).to({x:422.6},0).wait(1).to({x:392.1},0).wait(1).to({x:363.1,y:205.1},0).wait(1).to({x:335.7,y:209.6},0).wait(1).to({x:310,y:214.2},0).wait(1).to({x:286,y:218.7},0).wait(1).to({x:263.8,y:223.3},0).wait(1).to({x:243.3,y:227.9},0).wait(1).to({x:224.4,y:232.4},0).wait(1).to({x:207.1,y:237},0).wait(1).to({x:191.4,y:241.5},0).wait(1).to({x:177.1,y:246.1},0).wait(1).to({x:164.2,y:250.7},0).wait(1).to({x:152.5,y:255.2},0).wait(1).to({x:142.1,y:259.8},0).wait(1).to({x:132.8,y:264.3},0).wait(1).to({x:124.5,y:268.9},0).wait(1).to({x:117.3,y:273.5},0).wait(1).to({x:111.1,y:278},0).wait(1).to({x:105.7,y:282.6},0).wait(1).to({x:101.2,y:287.1},0).wait(1).to({x:97.5,y:291.7},0).wait(1).to({x:94.5,y:296.3},0).wait(1).to({x:92.3,y:300.8},0).wait(1).to({x:90.7,y:305.4},0).wait(1).to({x:89.8,y:309.9},0).wait(1).to({x:89.5,y:314.5},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(100,94,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:111.1},0).wait(1).to({x:122.2},0).wait(1).to({x:133.3},0).wait(1).to({x:144.3},0).wait(1).to({x:155.4},0).wait(1).to({x:166.5},0).wait(1).to({x:177.6},0).wait(1).to({x:188.7},0).wait(1).to({x:199.8},0).wait(1).to({x:210.8},0).wait(1).to({x:221.9},0).wait(1).to({x:233},0).wait(1).to({x:244.1},0).wait(1).to({x:255.2},0).wait(1).to({x:266.3},0).wait(1).to({x:277.3},0).wait(1).to({x:288.4},0).wait(1).to({x:299.5},0).wait(1).to({x:310.6},0).wait(1).to({x:321.7},0).wait(1).to({x:332.8},0).wait(1).to({x:343.8},0).wait(1).to({x:354.9},0).wait(1).to({x:366},0).wait(1).to({x:369.2,y:103.4},0).wait(1).to({x:372.5,y:112.7},0).wait(1).to({x:375.7,y:122.1},0).wait(1).to({x:379,y:131.4},0).wait(1).to({x:382.2,y:140.8},0).wait(1).to({x:385.4,y:150.1},0).wait(1).to({x:388.7,y:159.5},0).wait(1).to({x:391.9,y:168.9},0).wait(1).to({x:395.2,y:178.2},0).wait(1).to({x:398.4,y:187.6},0).wait(1).to({x:401.6,y:196.9},0).wait(1).to({x:404.9,y:206.3},0).wait(1).to({x:408.1,y:215.7},0).wait(1).to({x:411.4,y:225},0).wait(1).to({x:414.6,y:234.4},0).wait(1).to({x:417.8,y:243.7},0).wait(1).to({x:421.1,y:253.1},0).wait(1).to({x:424.3,y:262.4},0).wait(1).to({x:427.6,y:271.8},0).wait(1).to({x:430.8,y:281.2},0).wait(1).to({x:434,y:290.5},0).wait(1).to({x:437.3,y:299.9},0).wait(1).to({x:440.5,y:309.2},0).wait(1).to({x:443.8,y:318.6},0).wait(1).to({x:447,y:328},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331,250,265.6,198.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;

console.log("loaded...x");
