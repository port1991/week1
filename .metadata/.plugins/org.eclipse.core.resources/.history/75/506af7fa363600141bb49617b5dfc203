Ti.API.debug('Require Database Controller');
var databaseController = require('db');

Ti.API.debug('==================\n ');

//=======================================
Ti.API.debug('Creating Main Window Elements');


// delete button creating
var delet = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.EDIT
});

// done button created after delete was pressed to finalize editing table
var done = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.DONE
});
//=====creating a main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff",
	layout : 'horizontal',
	title : "Favorites",
	leftNavButton : delet   //adding delete button to the window
});


Ti.API.debug('Create Main Navigation Window (Win1)');

//====== creating table  =======
var table = Ti.UI.createTableView({

	left : 10,
	right : 10,
	top : 10,
	bottom : 10,

});

//--------------ORM---------------------
var ormGet = new databaseController.orm();
var tableData = ormGet.findAll();

Ti.API.debug('Table Data: ' + JSON.stringify(tableData));  //DEBUG..........

//-------SETTING DATA ---------
table.setData(tableData);

//=======LOAD DATA FROM THE DATABASE==============
//==================================================
table.addEventListener('delete', function(e) {
	var deleteCountry  =  new databaseController.orm();     //deleting info from database
	var deleteData = deleteCountry.remove(e.source.id);
	table.setData(deleteData);
});
//========================

var osName = Ti.Platform.name;

if (osName === "iphone OS") {

	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;

}
//=====eliminate rows event listener  ===============

delet.addEventListener('click', function() {
	Ti.API.debug('Editing');
	table.setEditing(true);
	Ti.API.debug('Table:' + JSON.stringify(table));
	Ti.API.debug(table.editing);  //allows editing database
	dataWindow.leftNavButton = done;
});

//=====done button event listener eliminating items from the database
done.addEventListener('click', function() {
	table.editing = false;
	dataWindow.leftNavButton = delet;
});


Ti.API.debug('Adding search and table to mainWindow');
mainWindow.add(table);

exports.mainWindow = mainWindow;
exports.favoriteTable = table;
Ti.API.debug('Opening Win1');