//1st step
var url = "http://api.wunderground.com/api/beaa77acd06bb26b/conditions/q/CA/San_Francisco.json"; // weather api url


//2nd step

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        //Ti.API.info("Response: "+this.responseText);
    	var json=JSON.parse(this.responseText);
    	Ti.App.Properties.setObject("weather_info", json); // saving the weather api json
    	showInfo(); // calling the function to view information
    	//alert(json.current_observation.station_id);
    },
    onerror: function(e) {
        //Ti.API.debug(e.error);
        showInfo(); // if error then show information if there is old information found
        alert('Network error');
    },
    timeout:10000
});
xhr.open("GET", url);
xhr.send();


function showInfo(){    //
	var json = Ti.App.Properties.getObject("weather_info", null); //getting the object from weather info
	
	var tabGroup = Titanium.UI.createTabGroup();
	var dataWindow = Ti.UI.createWindow({
		backgroundColor : "black",
		fullscreen : true,
		layout: 'vertical',
		title : "Weather Info"
	});
	
	//====tab1======
	var tab1 = Titanium.UI.createTab({
		icon : 'KS_nav_views.png',
		title : 'Weather',
		window : dataWindow
	});
	
	if(json != null){       //checking if JSON is null or the old data    null means user didn't get info from the internet
		// the main scroll view where all the information will be included
		var scrollView = Ti.UI.createScrollView({
			showVerticalScrowIndicator : true,
			layout : "vertical"
		});
		
		//===============================//info get http://jsonviewer.stack.hu/
		
		var imgWeather = Ti.UI.createImageView({
			image: json.current_observation.icon_url,
			top: 10
		});
		
		// weather location
		var lblLocation = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Location: ' + json.current_observation.display_location.full,
			top: 10
		});
		
		// weather observation time
		var lblObserveTime = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Observation Time: ' + json.current_observation.observation_time,
			top: 10
		});
		
		// weather type
		var lblWeather = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Weather: ' + json.current_observation.weather,
			top: 10
		});
		
		// temparature
		var lblTemperature = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Temperature: ' + json.current_observation.temperature_string,
			top: 10
		});
		
		// humidity
		var lblHumidity = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Humidity: ' + json.current_observation.relative_humidity,
			top: 10
		});
		
		// wind type
		var lblWind = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Wind: ' + json.current_observation.wind_string,
			top: 10
		});
		
		// wind direction
		var lblWindDir = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Wind Direction: ' + json.current_observation.wind_dir,
			top: 10
		});
		
		// wind(degrees)
		var lblWindDegrees = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Wind(degrees): ' + json.current_observation.wind_degrees,
			top: 10
		});
		
		// wind(mph)
		var lblWindMph = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Wind(mph): ' + json.current_observation.wind_mph,
			top: 10
		});
		
		// pressure(mb)
		var lblPressureMb = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Pressure(mb): ' + json.current_observation.pressure_mb,
			top: 10
		});
		
		// pressure(in)
		var lblPressureIn = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Pressure(in): ' + json.current_observation.pressure_in,
			top: 10
		});
		
		// dewpoint
		var lblDewPoint = Ti.UI.createLabel({
			color: 'white',
			left: 10,
			text: 'Dewpoint: ' + json.current_observation.dewpoint_string,
			top: 10
		});
		
		scrollView.add(imgWeather);
		scrollView.add(lblLocation);
		scrollView.add(lblObserveTime);
		scrollView.add(lblWeather);
		scrollView.add(lblTemperature);
		scrollView.add(lblHumidity);
		scrollView.add(lblWind);
		scrollView.add(lblWindDir);
		scrollView.add(lblWindDegrees);
		scrollView.add(lblWindMph);
		scrollView.add(lblPressureMb);
		scrollView.add(lblPressureIn);
		scrollView.add(lblDewPoint);
		dataWindow.add(scrollView);
	}
	else {
		// when there is no information to show(for connectivity error or api result null)
		var lblInfo = Ti.UI.createLabel({
			color: 'white',
			text: 'No information found'
		});
		dataWindow.add(lblInfo);
	}
	
	tabGroup.addTab(tab1);
	tabGroup.open();
}
		
		
		
		
