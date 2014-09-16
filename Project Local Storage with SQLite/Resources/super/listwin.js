exports.listwin = function (_data, _title, _nav, _editable, _movable) {
	var tableView = Ti.UI.createTableView({
		objName: 'table',
		editable: _editable	
	});
	
	var tableData = [];
	
	var section = Ti.UI.createTableViewSection();
	
	tableData.push(section);
	tableView.setData(tableData);
	//====add rows to the table========
	
	for(var i = 0; i < _data.length; i++){
		
		var row = Ti.UI.createTableViewRow({
			objName: 'listwinRow',
			title: _data[i]
		});
		tableView.appendRow(row, {animated: 'true'});
	};
	
	//===button press reaction lol ============
	
	tableView.addEventListener('click',function(e){
		if(e.source.objName === 'listwinRow'){
			var row = e.source;
			var Detail = require('super/detail');
			var detail = new Detail(row.title, row.title);
			_nav.open(detail, {animated : 'true'});
		}
		
	});
	
	var editButton = Ti.UI.createButton({
		title: 'Edit'
	});
	
	var doneButton = Ti.UI.createButton({
		title: 'Done'
	});
	
	var addButton = Ti.UI.createButton({
		title: 'Add'
	});
	
	editButton.addEventListener('click', function(e){
		tableView.moving = 'true';
		tableView.editing = 'true';
		self.rightNavButton = doneButton;
	});	
};
