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
  hintText: 'Type Here..',
  top: 60,
  width: 300, height : 150
});

var btnSave= Ti.UI.createButton({
	backgroundColor: 'white',
	title: "SAVE",
	font : {fontFamily:"Helvetica",fontsize:100,fontWeight: "bold"},
	color: 'black',
	top: 30,
	//borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	
});
btnSave.addEventListener('click', function(){
	var note = textArea.value;
	if(note != ""){  //ccheking if empty, then dont save anything
		var notes = Ti.App.Properties.getObject("notes", new Array()); // getting the old notes from local data properties
		notes.push(note); // pushing new note at the end of previous note
		Ti.App.Properties.setObject("notes", notes);   //this will save to local storage.
		
		// saving into cloud
		var Cloud = require("ti.cloud"); // initializing ti.cloud module
		Cloud.KeyValues.set({
		    name: 'notes', // this is the name you will get and set data, remember you have to put the same name
		    value: JSON.stringify(notes) // assigning values to the key "notes"
		}, function (e) {
		    if (e.success) {
		        alert('Success'); // if succces then showing note is successfully saved.
		    } else {
		        alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e))); // else showing error message
		    }
		});
		
		// setting the text area empty again
		textArea.value = "";
		//alert('Note created successfully');
	}
	//alert(textArea.value);
});

mainWindow.add(textArea);
mainWindow.add(btnSave);
exports.mainWindow = mainWindow;



