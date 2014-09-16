var mainWindow = Ti.UI.createWindow ({
	title: 'Create a Note',
	backgroundImage: 'grid2.png',
	fullscreen: true,
	layout: 'vertical'
});

var title = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
 // keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  hintText: 'Title',
  top: 40,
  width: 300, height : 40
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
  top: 20,
  width: 300, height : 150
});

//=================SAVE BUTTON=======================

var btnSave= Ti.UI.createButton({
	backgroundImage: 'q.png',
	title: "SAVE",
	font : {fontFamily:"Helvetica",fontsize:100,fontWeight: "bold"},
	color: 'black',
	top: 30,
	height: 40,
	width: 100,

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
//====================================================
//======================CAMERA========================
//====================================================

// camera button to start camera
var btnCamera = Ti.UI.createButton({
	backgroundImage: 'Circle_Yellow.png',
	font : {fontSize:18,fontWeight: "bold"},
	color: 'black',
	title: "Camera",
	height: 100,
	width: 100,
	top: 20
});
btnCamera.addEventListener('click', function(e){
	Titanium.Media.showCamera({
		success:function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: '+event.mediaType);
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Ti.UI.createImageView({
					width:win.width,
					height:win.height,
					image:event.media
				});
				win.add(imageView);
			} else {
				alert("got the wrong type back ="+event.mediaType);
			}
		},
		cancel:function() {
			// called when user cancels taking a picture
		},
		error:function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({title:'Camera'});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery:true,
	    // allowEditing and mediaTypes are iOS-only settings
		allowEditing:true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	});
});


mainWindow.add(title);
mainWindow.add(textArea);
mainWindow.add(btnSave);
mainWindow.add(btnCamera);
exports.mainWindow = mainWindow;



