var listWindow = Ti.UI.createWindow ({
	title: 'List Testing',
	backgroundImage: 'grid2.png',
	fullscreen: true
});
// listWindow.addEventListener('focus', function(){
	// getNotes();
// });

var wowList = Ti.UI.createTableView({
	layout : "vertical"
});

listWindow.add(wowList);

exports.listWindow = listWindow;


//tittleControl: tabs