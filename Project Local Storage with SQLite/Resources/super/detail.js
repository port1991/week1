exports.detail = function (_title, _city){
	var self = Ti.UI.createWindow({
		title: _title,
		backgroundColor: 'white',
		layout: "absolute"
	});
	
	var city = Ti.UI.createLabel({
		text: "City: " + _city,
		left: 20,
		top: 20
	});
	
	self.add(city);
	return self;
};