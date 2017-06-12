var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("studentmarks", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
