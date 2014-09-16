exports.editWindow = function(rowData) {	
	Ti.API.debug('My Row Data for Edit: ' + JSON.stringify(rowData));

	var done = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.ADD
	});

	var cancel = Ti.UI.createButton({

		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});

	var mainMain = Ti.UI.createWindow({
		backgroundColor : "#fff",
		layout : 'vertical',
		title : "Add",
		rightNavButton : done,
		leftNavButton : cancel,
	});

	var win1 = Titanium.UI.iOS.createNavigationWindow({
		window : mainMain

	});

	// TextField for name.
	var aTextField = Ti.UI.createTextField({
		height : 35,
		top : 80,
		left : 40,
		width : 240,
		hintText : 'Enter Name',
		value : rowData.name,
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	aTextField.addEventListener('return', function(e) {
		aTextField.blur();
	});

	// TextField for description.
	var aTextField2 = Ti.UI.createTextField({
		height : 35,
		top : 110,
		left : 40,
		width : 240,
		hintText : 'Enter short Description',
		value : rowData.description,
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	aTextField2.addEventListener('return', function(e) {
		aTextField2.blur();
	});

	//	add/done event listener button
	done.addEventListener('click', function() {
		var person = {};
		person.name = aTextField.value;
		person.desc = aTextField2.value;
		person.id = rowData.id;

		alert("botton clicked working");

		var saveData = database.save(person);
		table.setData(saveData);

		win1.close();
	});

	//cancel event listener button
	cancel.addEventListener('click', function() {
		win1.close();
	});

	win1.open();
	win1.add(aTextField);
	win1.add(aTextField2);

};
