Ti.Database.install("db.sqlite", "db"); // installing sqlite db into app
var cc = require('CloudController'); // create instance for cloud controller
var dbController = require('dbController'); // create instance for database controller

cc.login(); // login to the cloud to get the user session
var initialized = updateDB(); // function for updating database from api

if(initialized) {
	var tabGroup = Titanium.UI.createTabGroup();

	// first tab prepare
	var window1 = require('notes');
	var tab1 = Ti.UI.createTab({
		icon: 'sample-504-doghouse.png',
		title: 'My Notes',
		window: window1.noteWindow
	});
	
	// second tab prepare
	var press = require('create');
	var tab2 = Titanium.UI.createTab({
		icon : 'KS_nav_views.png',
		title : 'Create New',
		window : press.mainWindow
	});
	
	// adding all tabs
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.open();
}


// =========== AYUDANTE DE functions =============
function updateDB(){
	var count = dbController.countryCount(); // getting number of countries saved into database or any information
	if(count == 0) { // checking if database empty then update the database
		var json = cc.getData(); // getting data from cloud (mickey mouse)
		if(json == null) { // if cloud data is null then update from api (like the brain og goofy)
			var url =  "http:restcountries.eu/rest/v1";// "http://api.gbif.org/v1/species/5231190/parents";//" // api url    REMEMBER TO CHANGE THIS!
			var xhr = Ti.Network.createHTTPClient({
			    onload: function(e) {
			        //Ti.API.info("Response: "+this.responseText);
			    	var json=JSON.parse(this.responseText); // parse api response text into json object
			    	var countries = dbController.saveAllCountries(json); // save all countries into database and return country array
			    	cc.saveIntoCloud(countries); // save the countries into cloud
			    },
			    onerror: function(e) {
			        alert('Network error');
			    },
			    timeout:10000
			});
			xhr.open("GET", url);
			xhr.send();
		}
		else {
			dbController.saveFromCloud(json);
		}
	}
	
	return true;
}