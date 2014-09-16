//i.API.debug(' \n \nLauching app.js\n=====================================\n ');

//Ti.API.debug('Require Add module');

//var editLongPress = require('edit');  // this is the file where to edit files

var country = "";

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
	//rightNavButton : pluss,
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

var data = [];
var db  = Titanium.Database.open('db');
var rows = db.execute('SELECT * FROM list');
while(rows.isValidRow()){
	var view = Ti.UI.createTableViewRow({
		backgroundColor : "#9ED5E8",
		height : Ti.UI.SIZE
	});
	var labelForCountry = Ti.UI.createLabel({
		//callingCode: rows.fieldByName('id'),
		country: rows.fieldByName('name'),
		text : rows.fieldByName('name'),
		color : "black",
		top : 3,
		bottom : 3,
		height : "auto"
	});

	view.add(labelForCountry);			
			
			// Push "view" row to countries array
			
			// table.setData(countries);
			//table.appendRow(view);
	data.push(view);  //pushing the view data array
	rows.next();
}
db.close();// closing aase
rows.close();    //closing rows

var table = Ti.UI.createTableView({

	left : 10,
	right : 10,
	top : 10,
	bottom : 10,
	search : search

});
table.setData(data);  //puting the data into the table

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
	var country = JSON.stringify(e.source.country);
	Ti.API.debug("Country on Delete: " + JSON.stringify(e));    //initialazing the country for deleting
	databaseController.remove(e.source);
});

// long press to edit names lol
table.addEventListener('longpress', function(e) {
	var id = e.source.id;

	console.log(id);

	var rowData = databaseController.findOne(id);

	console.log(JSON.stringify(rowData));

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


//=====eliminate rows


delet.addEventListener('click', function(e) {
 //var country = JSON.stringify(e.source.country);
 Ti.API.debug("Country: " + country);
 var db  = Titanium.Database.open('db');   //open database
 db.execute('DELETE from list where name=?', country);    //erase from the database
 db.close();   // close database.
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

exports.mainWindow = mainWindow;

Ti.API.debug('Opening Win1');
//win1.open();
