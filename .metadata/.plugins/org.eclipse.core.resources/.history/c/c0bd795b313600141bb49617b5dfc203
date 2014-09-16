console.log("data transfer starting");
	//==================MEGA FUNCTION REMOTE DATA =========================
	//======================IRON MAN ROCKS!============================

	var megaFunction = function() {
		console.log("mega function starting");

		var countryss = JSON.parse(this.responseText);

		// create Empty Countries Array

		for ( i = 0; i < 10; i++) {

			console.log("working for loop");
			console.log(countryss[i].name);
			var view = Ti.UI.createTableViewRow({
				backgroundColor : "#9ED5E8",
				height : Ti.UI.SIZE,
				country: countryss[i].name,

			});

			var labelForCountry = Ti.UI.createLabel({
				country: countryss[i].name,
				text : countryss[i].name,
				color : "black",
				top : 3,
				bottom : 3,
				height : "auto"
			});

			view.add(labelForCountry);			
		
			table.appendRow(view);
		} //end of the loop
	};
	//end of this function

	//======START Error Function========

	var superErrorFunct = function(e) {
		Ti.API.debug('Error status: ' + this.status);
		Ti.API.debug('Error: ' + e.error);
	};
	//end of this mega super error function=============

	var myClient = Ti.Network.createHTTPClient({
		onload : megaFunction,
		onerror : superErrorFunct,
		timeout : 4000 // Change this back to 4000

	});
//    ======    getting information from link adress
	myClient.open("GET", "http://restcountries.eu/rest/v1");
	console.log("working URL");
	myClient.send();