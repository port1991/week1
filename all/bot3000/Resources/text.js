
var mainWindow = Ti.UI.createWindow ({
	title: 'Create a Note',
	backgroundImage: 'grid2.png',
	fullscreen: true,
	layout: 'vertical'
});

var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
 // keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Type Here..',
  top: 60,
  width: 300, height : 150
});

var save= Ti.UI.createButton({
	text: "SAVE",
	font : {fontFamily:"Helvetica",fontsize:100,fontWeight: "bold"},
	color: 'white',
	top: 30,
	//borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	
});

mainWindow.add(textArea);
mainWindow.add(save);
exports.mainWindow = mainWindow;



