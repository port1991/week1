
var save = require ('sql');




var create = function() {

var win = Ti.UI.createWindow ({
	title: '',
	//barImage:'ironmanicon.png',
	backgroundImage: 'grid.png',
	//fullscreen: true
	layout:'vertical',
	fullscreen: true
});

var t1 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	color: '#336699',
	width: 200,
	top: 20,
});

var t2 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 	color: '#336699',
	width: 200,
	top: 20
});

var t3 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	color: '#336699',
	width: 200,
	top: 20
});

var submit= Ti.UI.createLabel({
	text: "SUBMIT",
	font : {fontFamily:"Helvetica",fontsize:20,fontWeight: "bold"},
	color: 'white',
	top: 20
});
// 
// var first= Ti.UI.createLabel({
	// text: "",
	// font : {fontFamily:"Helvetica",fontsize:20,fontWeight: "bold"},
	// color: 'white',
	// top: 20
// });
// var second= Ti.UI.createLabel({
	// text: "",
	// font : {fontFamily:"Helvetica",fontsize:20,fontWeight: "bold"},
	// color: 'white',
	// top: 20
// });
// 
// var third= Ti.UI.createLabel({
	// text: "",
	// font : {fontFamily:"Helvetica",fontsize:20,fontWeight: "bold"},
	// color: 'white',
	// top: 20
// });

submit.addEventListener('click',function(e){
	save.save(t1.value,t2.value,t3.value);
	// var temp = save.read(); 
	// first.text = tem[0].t1;
	// second.text = tem[1].t2;
	// third.text = tem[2].t3;
	
	
});

win.add(t1);
win.add(t2);
win.add(t3);
win.add(submit);
// win.add(first);
// win.add(second);
// win.add(third);
win.open();

};


exports.create = create;