
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var insert = { songName: 'Oruvartha Solla', film: 'Iya', musicDirector: 'AR Rahman', singer: 'shankar mahadhevan'};
  db.collection("songdetails").insertOne(insert, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
