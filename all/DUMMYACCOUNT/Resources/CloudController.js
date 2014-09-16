/* Cloud Controller */
var Cloud = require("ti.cloud"); // initializing module

// login into cloud
exports.login = function() {
	Cloud.Users.login({
	    login: 'portilla_1@msn.com',
	    password: 'mhpr1991'
	}, function (e) {
	    if (e.success) {
	        //var user = e.users[0];
	        //alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + Cloud.sessionId + '\n' +'username: ' + user.username);
	    } else {
	    	console.log("Login error: "+ e);
	        //alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};

// getting data from cloud
exports.getData = function() {
	Cloud.KeyValues.get({
	    name: 'countries'
	}, function (e) {
	    if (e.success) {
	        var keyvalue = e.keyvalues[0];
	        console.log('Success key-value:\n' + 'name: ' + keyvalue.name + '\n' + 'value: ' + keyvalue.value);
	        return JSON.parse(keyvalue.value);
	    } else {
	    	console.log('Error key-value:\n' + ((e.error && e.message) || JSON.stringify(e)));
	    	return null;
	    }
	});
};

// saving all countries into cloud
exports.saveIntoCloud = function(countries) {
	//console.log(JSON.stringify(countries));
	Cloud.KeyValues.set({
	    name: 'countries',
	    value: JSON.stringify(countries)
	}, function (e) {
	    if (e.success) {
	        console.log('Success');
	        return true;
	    } else {
	        console.log('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
	        return false;
	    }
	});
};
