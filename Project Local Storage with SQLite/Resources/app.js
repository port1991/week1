var win = Ti.UI.createWindow({
	layout: 'vertical'
});

var data =[];

var tableFun = require ('super/listwin');

var nav = Ti.UI.iOS.createNavigationWindow();

var table = tableFun.listWin(data, 'Items', nav, true, true);

nav.window = table;
win.add(nav);
win.open();









/*var d = require('listwin');


//===== INSTALLING THE DATABASE========

Ti.Database.install('list2000.sqlite','listDB');

//======LOAD DATA FROM DB=======
*/