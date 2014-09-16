/* Database Controller */
Ti.API.debug('\nDatabase Controller Initialized\n=================');

// Create a new database or open an existing one
Ti.API.debug('-Creating/Opening countries Database table');

Ti.API.debug('--Open Database FIRST--');
var db = Titanium.Database.open('countries');//  OPEN DATABASE

Ti.API.debug('-Creating countries Table');
db.execute('CREATE TABLE IF NOT EXISTS countries (id INTEGER PRIMARY KEY, name TEXT, description TEXT)');
db.close();  // close database
Ti.API.debug('--Close Database FIRST--');

// Create a database table and define columns

// Retrieve ALL data from the databasee
exports.orm = function() {//was changed from normal functions to methods thats why we use orm here.
	Ti.API.debug('-Defining findAll function');
	this.findAll = function() {
		// Open DB

		var data = [];

		Ti.API.debug('--Open Database FIND ALL--');
		db = Titanium.Database.open('countries');   //open database
		var row_databse = db.execute('SELECT * FROM countries');

		console.log("Reading from countries");

		while (row_databse.isValidRow()) {
			Ti.API.debug(row_databse.fieldByName('name'));
			Ti.API.debug(row_databse.fieldByName('id'));

			data.push({
				title : row_databse.fieldByName('name'),    //name os the item in database
				id : row_databse.fieldByName('id')          // id of item in database
			});

			row_databse.next();
		}
		db.close();  //close database
		Ti.API.debug('--Close Database FIND ALL--');

		console.log('countries contains ' + data.length + ' country.');
		console.log('countries contains ' + data);

		return data;
	};

	// Retrieve a specific row from the database
	this.findOne = function(id) {
		Ti.API.debug('Finding Item ' + id);

		Ti.API.debug('--Open Database FIND ONE--');
		db = Titanium.Database.open('countries');   //open database

		var currentRow = db.execute('SELECT * FROM countries WHERE ID=?', id);

		var rowData = {};
		rowData.id = currentRow.fieldByName('id');
		rowData.name = currentRow.fieldByName('name');
		//rowData.description = currentRow.fieldByName('description');

		Ti.API.debug('Item ' + id + ' is ' + JSON.stringify(rowData));

		db.close();   //close database
		Ti.API.debug('--Close Database FIND ONE--');

		return rowData;
	};
	
//====================================   SAVE   ==============================================

	// Save a row to the database (both new and existing)
	this.save = function(country) {
		if (country.hasOwnProperty('id')) {

			Ti.API.debug('Edit object: ' + JSON.stringify(country));

			// Update an existing row
			Ti.API.debug('--Open Database EDIT--');
			db = Ti.Database.open('countries');  //open database
			db.execute('UPDATE countries SET name=?, description=? WHERE id=?', country.name, country.id);
			db.close();  //close database
			Ti.API.debug('--Close Database EDIT--');

			var newData = this.findAll();  //new data in database

			return newData;

		} else {
			// Save a new row
			Ti.API.debug('Saving a new row for ' + country.name);

			Ti.API.debug('--Open Database CREATE NEW--');
			db = Ti.Database.open('countries');  //open database
			db.execute('INSERT INTO countries (name, description) VALUES (?,?)', country.name, country.name);
			db.close();  //close database
			Ti.API.debug('--Close Database CREATE NEW--');

			Ti.API.debug(country.name + ' has been saved');

			var newData = this.findAll();  // same new information...
			//

			return newData;
		}
	};
    // removing rows from database
	this.remove = function(country) {
		// Delete a row
		Ti.API.debug('--Open Database DELETE--');
		db = Ti.Database.open('countries');  //open database
		db.execute('DELETE FROM countries WHERE id=?', country);
		alert("Congratulations! You Just destroy a Country");  // alerting user row was deleted
		db.close();    //close database
		Ti.API.debug('--Open Database DELETE--');

		var newData = this.findAll();
		

		return newData;

	};
};
Ti.API.debug(' \n \n --= End Database Controller =-- \n \n ');
