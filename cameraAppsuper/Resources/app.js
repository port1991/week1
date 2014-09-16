// initializing titanium cloud module
var Cloud = require("ti.cloud"); // this one is the cloud module of titanium, its a default module of titanium
Cloud.debug = true;  // this is so program knows is as developer
// authenticate user and have session to get and save data
Cloud.Users.login({
    login: 'portilla_1@msn.com', // email here
    password: 'mhpr1991' // password here
}, function (e) {
    if (e.success) {
       
    } else {
     console.log("Login error: "+ e);
        //alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
    }
});

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
	icon : 'sample-1012-sticky-note@2x.png',
	title : 'New Note',
	window : press.mainWindow
});

// var came = require('camera');
// var tabCamera = Titanium.UI.createTab({
	// icon : 'sample-834-bolt@2x.png',
	// title : 'Camera',
	// window : came.mainWindow
// });

// adding all tabs
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
//tabGroup.addTab(tabCamera);
tabGroup.open();

