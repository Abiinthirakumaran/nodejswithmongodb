var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("studentmarks").find({"maths_marks":{$lt:40},"science_marks":{$lt:40}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
