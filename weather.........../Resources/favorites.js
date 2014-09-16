//i.API.debug(' \n \nLauching app.js\n=====================================\n ');

//Ti.API.debug('Require Add module');

//var editLongPress = require('edit');  // this is the file where to edit files

var pluss = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.ADD
});


Ti.API.debug('Require Database Controller');
var databaseController = require('db');

Ti.API.debug('==================\n ');

//=======================================
Ti.API.debug('Creating Main Window Elements');



var delet = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.EDIT
});

var done = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.DONE
});

var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	layout : 'horizontal',
	title : "test",
	rightNavButton : pluss,
	leftNavButton : delet
});


Ti.API.debug('Create Main Navigation Window (Win1)');
/*var win1 = Titanium.UI.iOS.createNavigationWindow({
	window : mainWindow

});*/
//===========================

var search = Titanium.UI.createSearchBar({
	barColor : '#000',
	showCancel : true,
	// height:43,
	top : 0,
});

var table = Ti.UI.createTableView({

	left : 10,
	right : 10,
	top : 10,
	bottom : 10,
	search : search

});
table.setData(databaseController.findAll());

var edit = require('Add');  // this is the eliminate from the dataabase

//=======LOAD DATA FROM THE DATABASE==============
//==================================================
Ti.API.debug('Define Win1 Focus event listener');

// Listen for click events.
table.addEventListener('click', function(e) {
	alert('name: \'' + e.row.title + '\', description: \'' + e.row.discription);
});
//========================

table.addEventListener('delete', function(e) {
	databaseController.remove(e.source.country);
});

// long press to edit names lol
table.addEventListener('longpress', function(e) {
	var id = e.source.id;

	console.log(id);
	//var rowData = databaseController.findOne(id);
	//console.log(JSON.stringify(rowData));

	//add dialog option
	var dialog = Ti.UI.createOptionDialog({
		title : 'edit user',
		options : ['edit', 'cancel'],
		cancel : 1,
		selectedIndex : 1,
		id : id
	});

	//listen each option in the option dialog
	dialog.addEventListener('click', function(e) {

		if (e.index === 0) {
			 var editLongPress = require('edit');
			 editLongPress.editWindow(rowData) ;
		}
	});
	dialog.show();

});
//========================

var osName = Ti.Platform.name;

if (osName === "iphone OS") {

	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;

}

///================add new items to table
pluss.addEventListener('click', function() {
	//edit.editWindow();
	alert("working");
	console.log("edit working?");
});


//=====eliminate rows

delet.addEventListener('click', function() {
	Ti.API.debug('Editing');
	table.setEditing(true);
	Ti.API.debug('Table:' + JSON.stringify(table));
	Ti.API.debug(table.editing);
	dataWindow.leftNavButton = done;
});

//=====done eliminating items from the rows app
done.addEventListener('click', function() {
	table.editing = false;
	dataWindow.leftNavButton = delet;
});


Ti.API.debug('Adding search and table to mainWindow');
mainWindow.add(search);
mainWindow.add(table);
mainWindow.addEventListener('focus', function(e) {
    /*if (e.previousIndex == 0) {
        alert('hello');
    }*/
   table.setData(databaseController.findAll());
});

exports.mainWindow = mainWindow;

Ti.API.debug('Opening Win1');
//win1.open();
