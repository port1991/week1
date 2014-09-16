Ti.API.debug('Creating Main Window Elements');

//var tabGroup = Titanium.UI.createTabGroup();



var pluss = Ti.UI.createButton({

	systemButton : Ti.UI.iPhone.SystemButton.ADD
});

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



//===========

Ti.API.debug('Create Main Navigation Window (Win1)');
var win1 = Titanium.UI.iOS.createNavigationWindow({
	window : mainWindow

});
//===========================

var search = Titanium.UI.createSearchBar({
	barColor : '#000',
	showCancel : true,
	// height:43,
	top : 0,
});
//====the table
var table = Ti.UI.createTableView({

	left : 10,
	right : 10,
	top : 10,
	bottom : 10,
	search : search

});

var edit = require('Add');










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
			 var editLongPress = require('editWindow');
			 //editLongPress.editWindow(rowData) ;
		}
	});
	dialog.show();

});
//========================

var osName = Ti.Platform.name;

if (osName === "iphone OS") {

	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;

}





///================add new items to ros table
pluss.addEventListener('click', function() {
	edit.editWindow();
	console.log("edit working?");
});

//=====eliminate rows

delet.addEventListener('click', function() {
	table.editing = true;
	mainWindow.leftNavButton = done;
});

//=====done eliminating items from the rows app
done.addEventListener('click', function() {
	table.editing = false;
	mainWindow.leftNavButton = delet;
});


Ti.API.debug('Adding search and table to mainWindow');
mainWindow.add(search);
mainWindow.add(table);

Ti.API.debug('Opening Win1');

win1.open();


