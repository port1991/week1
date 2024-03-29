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
	var Cloud = require("ti.cloud");
	Cloud.KeyValues.get({
	    name: 'notes' //notes is just a name can be any name
	}, function (e) {
	    if (e.success) {
	        var keyvalue = e.keyvalues[0];    // getting the data from keyvalue pairs
	        Ti.App.Properties.setObject("notes", JSON.parse(keyvalue.value));  // this is saving data to local parameter
	        tblNotes.setData(processData()); // set the notes to table by calling processData function
	        console.log('Success:\n' + 'name: ' + keyvalue.name + '\n' + 'value: ' + keyvalue.value);
	    } else {
	    	tblNotes.setData(processData()); // if it fails to get the data from cloud then show notes from local data
	      
	    }
	});
	
}

// process the note to show in table, producing table rows
function processData(){
	var data = [];
	var notes = Ti.App.Properties.getObject("notes", {});
	//console.log(JSON.stringify(notes));
	for(var i=notes.length-1; i>=0; i--){
		if(notes[i]=="") continue;
		var row = Ti.UI.createTableViewRow({
			//backgroundColor : "#9ED5E8",
			height : Ti.UI.SIZE
		});
	
		var lblNote = Ti.UI.createLabel({
			text : notes[i],
			color : "black",
			top : 3,
			bottom : 3,
			height : "auto"
		});
		row.add(lblNote);
		data.push(row);
	}
	return data;
}



