var database = require('db');    // requiring the database
 
var tabGroup = Titanium.UI.createTabGroup();   // creating tab groups

//==========================================
//===creating main window   ==============

var dataWindow = Ti.UI.createWindow({
	title : "Countries",
	backgroundColor : "black",
	fullscreen : true,
});

//====creating tab 1 countries======
var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Countries',
	window : dataWindow
});

var press = require('favorites');  // requiring favorites.js


//  ==== creating tab 2 "favorites" ========
var tab2 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Favorites',
	window : press.mainWindow
});
//===============================

// ======== creating the table =======
var table = Ti.UI.createTableView({
	layout : "vertical",
});

//  =====  adding event listener to deleting objects========   DELETING EVENT LISTENER
table.addEventListener('delete', function(e) {

	databaseController.remove(e.source);
});


//================   LONG PRESS   ====================

	//long press to add new information to database
table.addEventListener('longpress', function(e) {
	
	var country = {
		name: e.source.country,
		description: e.source.country
	};

	//add dialog option
	var dialog = Ti.UI.createOptionDialog({
		title : 'options',
		options : ['add to Favorites', 'cancel'],
		cancel : 1,
		selectedIndex : 1,
	});

	//listen each option in the option dialog
	dialog.addEventListener('click', function(e) {

		var newCountry  =  new database.orm();      //new orm object
		var saveData = newCountry.save(country);    // thi sis the array of objects of the database
		press.favoriteTable.setData(saveData);
		alert(" country conquered ");
	});
	dialog.show();


});
var remote = require('remoteData');   // requiring remoteData.js

dataWindow.add(table); // adding table to window
tabGroup.addTab(tab1); //ading tab1 to tabgroup
tabGroup.addTab(tab2); // adding tab2 to tabgroup
tabGroup.open();       // opening the tabs on the window. Opening (countries and favorites tabs)