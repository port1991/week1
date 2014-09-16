var db = Ti.Database.install("db.sqlite", "db");
var tabGroup = Titanium.UI.createTabGroup();

//==========================================
//===main window

var dataWindow = Ti.UI.createWindow({
	title : "Countries",
	backgroundColor : "black",
	fullscreen : true,
	//rightNavButton : pluss,
	//leftNavButton : delet
});

//======windos for favorites=======

//====tab1======
var tab1 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Countries',
	window : dataWindow
});

var press = require('favorites');

var tab2 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'Favorites',
	window : press.mainWindow
});

//=====tab2=====
//===============================

//scroll view
/*	var scrollView = Ti.UI.createScrollView({
 showVerticalScrowIndicator : true,
 layout : "vertical",

 });*/


var table = Ti.UI.createTableView({
	//showVerticalScrollIndicator : true,
	layout : "vertical",
	//left : 10,
	//right : 10,
	//top : 10,
	//bottom : 10,
});


table.addEventListener('delete', function(e) {

	databaseController.remove(e.source);
});



	//long press to add countries
table.addEventListener('longpress', function(e) {

	var country = e.source.country;

	//add dialog option
	var dialog = Ti.UI.createOptionDialog({
		title : 'options',
		options : ['add to Favorites', 'cancel'],
		cancel : 1,
		selectedIndex : 1,
		//id : id
	});

	//listen each option in the option dialog
	dialog.addEventListener('click', function(e) {

		if (e.index === 0) {
			var db = Ti.Database.open("db");
			db.execute("INSERT OR REPLACE into list(name, description) VALUES(?,?)", country, country);
			db.close();
			 //var editLongPress = require('edit');
			 //editLongPress.editWindow(rowData) ;
		}
	});
	dialog.show();

});
//========================
var remote = require('remoteData');
dataWindow.add(table);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();