var noteWindow = Ti.UI.createWindow ({
	title: 'NOTES',
	backgroundImage: 'grid2.png',
	fullscreen: true
});
noteWindow.addEventListener('focus', function(){
	getNotes();
});

var tblNotes = Ti.UI.createTableView({
	layout : "vertical"
});

noteWindow.add(tblNotes);

exports.noteWindow = noteWindow;

// get notes from cloud
function getNotes(){
	var dbController = require('dbController'); // create instance for database controller
	var data = dbController.findAll();
	tblNotes.setData(data);
	
}

