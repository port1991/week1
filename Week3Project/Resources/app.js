
var tabGroup = Titanium.UI.createTabGroup();

	// first tab prepare
	var window1 = require('list');
	var tab1 = Ti.UI.createTab({
		icon: 'sample-394-bank.png',
		title: 'List',
		window: window1.listWindow
	});
	
	// second tab prepare
	//var press = require('create');
	// var tab2 = Titanium.UI.createTab({
		// icon : 'KS_nav_views.png',
		// title : 'Create New',
		// window : press.mainWindow
	// });
// 	
	// adding all tabs
	tabGroup.addTab(tab1);
	//tabGroup.addTab(tab2);
	tabGroup.open();