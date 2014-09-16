exports.editWindow = function() {
	
	var done = Ti.UI.createButton({

		systemButton : Ti.UI.iPhone.SystemButton.DONE
	});

	var cancel = Ti.UI.createButton({

		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});

	var mainMain = Ti.UI.createWindow({
		backgroundColor : "#fff",
		layout : 'vrtical',
		title : "Add",
		rightNavButton : done,
		leftNavButton : cancel,
	});

	var win1 = Titanium.UI.iOS.createNavigationWindow({
		window : mainMain

	});

	var titleEdit = Ti.UI.createLabel({
		top : '10%',
		left : 15,
		text : "Title:",
		color : "black",
		font : {
			fontSize : 16,
			fontFamily : "Verdana"
		}

	});

	var titleEditBox = Ti.UI.createTextField({
		top : '15%',
		left : 15,
		width : '75%',
		height : '35',
		hintText : 'type title',
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED

	});

	var descName = Ti.UI.createLabel({
		top : '25%',
		left : 15,
		text : "Description:",
		color : "black",
		font : {
			fontSize : 16,
			fontFamily : "Verdana"
		}

	});

	var description = Ti.UI.createTextField({
		top : '30%',
		left : 15,
		width : '90%',
		height : '300',
		hintText : 'Type Here....',
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	done.addEventListener('click', function() {
		win1.close();
	});
	
	cancel.addEventListener('click', function() {
		win1.close();
	});

	mainMain.add(description);
	mainMain.add(descName);
	mainMain.add(titleEdit);
	mainMain.add(titleEditBox);
	win1.open();

}; 