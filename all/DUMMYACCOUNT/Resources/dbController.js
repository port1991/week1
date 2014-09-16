/* Database Controller */
var db = Ti.Database.open("db"); // initializing db

// creating list table if not exists
db.execute('CREATE TABLE IF NOT EXISTS list (name TEXT, description TEXT)');
db.close();

// Retrieve ALL data from the databasee
exports.findAll = function() {
	var data = [];
	db = Titanium.Database.open('db');
	var row_databse = db.execute('SELECT * FROM list order by name');
		
	while (row_databse.validRow) {
		var row = Ti.UI.createTableViewRow({
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
	
		row.add(labelForCountry);
		row.country = row_databse.fieldByName('name');
		
	    data.push(row);

		row_databse.next();
	}
	db.close();
	
	return data;
};

exports.countryCount = function() {
	db = Titanium.Database.open('db'); // initializing database
	var rows = db.execute('SELECT * FROM list'); // getting existing country list from database
	var count = rows.rowCount; // total number of countries
	db.close();
	return count;
};

// saving single entry
exports.save = function(country) {
	//console.log(country+' - dbcontroller');
	db = Titanium.Database.open('db'); // initializing database
	db.execute("INSERT OR REPLACE into list(name, description) VALUES(?,?)", country, country);
	
	var countries = new Array(); // initializing new country array
	var row_databse = db.execute('SELECT * FROM list order by name');
	//console.log("dbcontroller-row count: "+ row_databse.rowCount);
	while (row_databse.validRow) {
		//console.log(row_databse.fieldByName('name'));
		countries.push(row_databse.fieldByName('name'));
		row_databse.next();
	}
	db.close();
	
	//console.log("db controller: "+JSON.stringify(countries));
	
	var cc = require('CloudController'); // create instance for cloud controller
	cc.saveIntoCloud(countries);
};



//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================



// saving all countries from api into sqlite db
exports.saveAllCountries = function(json) {
	var countries = new Array(); // initializing new country array
	db = Titanium.Database.open('db'); // initializing database
	for(var i=0; i<json.length; i++){
		//console.log(json[i].name);
		countries.push(json[i].name);
		db.execute("INSERT OR REPLACE into list(name, description) VALUES(?,?)", json[i].name, json[i].name);
	}
	db.close(); // closing database
	
	return countries;
};

// saving all countries from api into sqlite db
exports.saveFromCloud = function(json) {
	db = Titanium.Database.open('db'); // initializing database
	for(var i=0; i<json.length; i++){
		//console.log(json[i]);
		db.execute("INSERT OR REPLACE into list(name, description) VALUES(?,?)", json[i], json[i]);
	}
	db.close(); // closing database
};