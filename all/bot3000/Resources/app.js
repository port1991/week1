
var backgroundWindow = Ti.UI.createWindow ({
	title: 'NOTES',
	//barImage:'sample-504-doghouse.png',
	backgroundImage: 'grid2.png',
	fullscreen: true,
	//layout: 'vertical'
});
var tabGroup = Titanium.UI.createTabGroup();

//backgroundWindow.open();
// 
var table = Ti.UI.createTableView({
	
	layout : "vertical",
});


var lastTable = Ti.UI.createTab({
	icon: 'sample-504-doghouse.png',
	title: 'test',
	window: backgroundWindow
});

var press = require('text');

var tab2 = Titanium.UI.createTab({
	icon : 'KS_nav_views.png',
	title : 'text',
	window : press.mainWindow
});

backgroundWindow.add(table);
tabGroup.addTab(lastTable);
tabGroup.addTab(tab2);
tabGroup.open();

