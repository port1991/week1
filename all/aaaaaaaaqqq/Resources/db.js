/* Database Controller */
Ti.API.debug('\nDatabase Controller Initialized\n=================');

// Create a new database or open an existing one
Ti.API.debug('-Creating/Opening ListExample Database table');

Ti.API.debug('--Open Database FIRST--');
var db = Titanium.Database.open('list');

Ti.API.debug('-Creating ListExample Table');
// db.execute('CREATE TABLE IF NOT EXISTS ListExample (id INTEGER PRIMARY KEY, name TEXT, description TEXT)');
db.close();
Ti.API.debug('--Close Database FIRST--');

// Create a database table and define columns

// Retrieve ALL data from the databasee
Ti.API.debug('-Defining findAll function');
exports.findAll = function() {
	// Open DB
	
	var data = [];
	
	Ti.API.debug('--Open Database FIND ALL--');
	db = Titanium.Database.open('db');
	var row_databse = db.execute('SELECT * FROM list');
	
	console.log("Reading from ListExample");
		
	while (row_databse.validRow) {
		var view = Ti.UI.createTableViewRow({
			//backgroundColor : "#9ED5E8",
			height : Ti.UI.SIZE
		});
	
		var labelForCountry = Ti.UI.createLabel({
			text : row_databse.fieldByName('name'),
			color : "black",
			top : 3,
			bottom : 3,
			height : "auto"
		});
	
		view.add(labelForCountry);
		view.country = row_databse.fieldByName('name');
		
	    data.push(view);

		row_databse.next();
	}
	db.close();
	Ti.API.debug('--Close Database FIND ALL--');

	
	console.log('ListExample contains ' + data.length + ' people.');
	console.log('ListExample contains ' + data);
	
	return data;
};

// Retrieve a specific row from the database
exports.findOne = function(id) {
	Ti.API.debug('Finding Item ' + id);
	
	Ti.API.debug('--Open Database FIND ONE--');
	db = Titanium.Database.open('ListExample');
	
	var currentRow = db.execute('SELECT * FROM ListExample WHERE ID=?', id);
	
	var rowData = {};
	rowData.id = currentRow.fieldByName('id');
	rowData.name = currentRow.fieldByName('name');
	rowData.description = currentRow.fieldByName('description');
	
	Ti.API.debug('Item ' + id + ' is ' + JSON.stringify(rowData));
	
	db.close();
	Ti.API.debug('--Close Database FIND ONE--');

	
	return rowData;
};

// Save a row to the database (both new and existing)
exports.save = function(person) {
	if (person.hasOwnProperty('id')) {
				
		Ti.API.debug('Edit object: ' + JSON.stringify(person));
		
		// Update an existing row
		Ti.API.debug('--Open Database EDIT--');
		db = Ti.Database.open('ListExample');
		db.execute('UPDATE ListExample SET name=?, description=? WHERE id=?', person.name,person.desc,person.id);
		db.close();
		Ti.API.debug('--Close Database EDIT--');

		var newData = findAll();
		
		return newData;
		
	} else {
		// Save a new row
		Ti.API.debug('Saving a new row for ' + person.name);
		
		Ti.API.debug('--Open Database CREATE NEW--');
		db = Ti.Database.open('ListExample');
		db.execute('INSERT INTO ListExample (name, description) VALUES (?,?)', person.name,person.desc);
		db.close();
		Ti.API.debug('--Close Database CREATE NEW--');


		Ti.API.debug(person.name + ' has been saved with ' + person.desc);
		
		var newData = findAll();
		
		return newData;
	}
};

exports.remove = function(country) {
	// Delete a row
	Ti.API.debug('--Open Database DELETE--');
	db = Ti.Database.open('db');
	db.execute('DELETE FROM list WHERE name=?', country);
	db.close();
	Ti.API.debug('--Open Database DELETE--');

};

Ti.API.debug(' \n \n --= End Database Controller =-- \n \n ');
