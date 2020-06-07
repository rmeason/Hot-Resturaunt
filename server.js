// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Star Wars Characters (DATA)
// =============================================================
var avTables = [

];

var waitlist = [

];
// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/reservation", function(req, res) {
      res.sendFile(path.join(__dirname, "reservation.html"));
    });


// Displays all characters
app.get("/api/tables", function(req, res) {
    return res.json(avTables);
  });


// Displays a single character, or returns false
app.get("/api/tables/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < avTables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(avTables[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
// app.post("/api/avTables", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newTables = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newTables);

//   table.push(newTables);

//   res.json(newTables);
// });

app.get('/api/avTables', function(req, res) {
	/*for (var i = 5; i < customers.length; i++) {
		res.json(customers[i]);
	}*/
	return res.json(waitlist);
});

  app.get('/api/waitlist', function(req, res) {
	/*for (var i = 5; i < customers.length; i++) {
		res.json(customers[i]);
	}*/
	return res.json(waitlist);
});

  app.post('/api/clear', function(req, res) {
	avTables = [];
	avReservation = [];
});


app.post('/api/new', function(req, res) {
	console.log('Works');
	var newTable = req.body;
	if (avTables.length >= 5) {
		waitlist.push(newTable);
	} else {
		avTables.push(newTable);
	}
	res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
