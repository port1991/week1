var save = function(e,f,g) 
{
	
	//console.log(JSON.stringfy(e));
	console.log("t1= " + e + " t2= " + f + " t3= " + g);
	
	var db = Ti.Database.open("Stuff");   // we create the database name
	db.execute('CREATE TABLE IF NOT EXISTS Stuff (id INTEGER PRIMARY KEY, t1 TEXT, t2 TEXT, t3 TEXT)');    //create table
	db.execute('INSERT INTO Stuff (t1, t2, t3) VALUES (?,?,?)', e,f,g);
	db.close();
};


var read = function() {
	var cd = Ti.Database.open("Stuff");	
	var rows = db.execute('SELECT * FROM Stuff');
	var rowArr = [];
		while(rows.isValidRow())
		{
			rowArr.push({   //we are pushing into the array an object
				t1: rows.fieldByName("t1"),
				t2: rows.fieldByName("t2"),
				t3: rows.fieldByName("t3")
				
			});// nowto the next row
			rows.next();  //cycles the table
			
		};
	db.close();
	
	
};

exports.save = save;