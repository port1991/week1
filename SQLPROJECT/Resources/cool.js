//var loadFile = require("json");
var edit = require('edit');

//=======================================     

var pluss = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.ADD
});

var delet = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.EDIT
});

var done = Ti.UI.createButton({
	
	systemButton: Ti.UI.iPhone.SystemButton.DONE
});



var mainWindow = Ti.UI.createWindow ({
	backgroundColor:"#fff",
	layout: 'horizontal',
	title: "Normal and Rare fruits",
	rightNavButton: pluss,
	leftNavButton: delet
});

//==============================================


var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: mainWindow
   
});



var details = function(){
	
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "white",
		title: this.title,    //this is the title that got on the top top, you know top -_-  near the navigation bar window
		rightNavButton: pluss,
		
	
	});
	

	var header = Ti.UI.createLabel({
		text: this.title,
		backgroundColor: "#fff",
		left: 0,
		right: 0,
		color: "#000",
		height: 50,
		font: {fontSize: " 14dp"},
		top: 0,
		textAlign: "center"
	});
	
	
	
	var detailText = Ti.UI.createLabel({
		text: this.detail,
		color: "black",
		top:250
	});
	
		var detailColor = Ti.UI.createLabel({
		text: this.colo,
		color: "black",
		top:280
	});
	
	var image = Ti.UI.createImageView({
	image: this.ima,
	top: 60,
	//left: 30,
	height: "25%"
	
	});
	
	var detailNutrition = Ti.UI.createLabel({
		text: this.nutri,
		color: "black",
		top:305
	});
	
	detailWindow.add(detailNutrition);
	detailWindow.add(image);
	detailWindow.add(detailText);
	detailWindow.add(detailColor);
	win1.openWindow(detailWindow);
};



//===========================

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true,
   // height:43,
    top:0,
});

var table = Ti.UI.createTableView({
	
	left: 10,
	right: 10,
	top: 10,
	bottom: 10,
	search: search
	
	
});
//========================


var osName = Ti.Platform.name;


if( osName === "iphone OS") {
	
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}


var test = Ti.UI.createTableViewSection();

for(var n in loadFile.json) {
	var tableSector = [];
	
	
	var mega = Ti.UI.createTableViewSection({
		headerTitle: loadFile.json[n].headTitle,
	});
	
	
	
	for(var i =0, j=loadFile.json[n].list.length ; i<j ; i++){
		var supera = Ti.UI.createTableViewRow({
			title: loadFile.json[n].list[i].title,
			detail: loadFile.json[n].list[i].desc,
			colo: loadFile.json[n].list[i].color,
			ima: loadFile.json[n].list[i].image,
			nutri: loadFile.json[n].list[i].nutrition,
			
		});
		
		mega.add(supera);
		supera.addEventListener("click", details);
	}
	
	
	tableSector.push(mega);
	
}

table.setData(tableSector);


pluss.addEventListener('click',function(){
	edit.editWindow();
	console.log("edit working?");
});

delet.addEventListener('click',function(){
	table.editing = true;
	mainWindow.leftNavButton = done;
});

done.addEventListener('click',function(){
	table.editing = false;
	mainWindow.leftNavButton = delet;
});



mainWindow.add(search);
mainWindow.add(table);
win1.open();