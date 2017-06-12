var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var insert = [
    { songName: 'thaniye thannandhaniye', film: 'rhythm', musicDirector: 'AR Rahman', singer: 'shankar mahadhevan'},
    { songName: 'evano oruvan', film: 'alaipayudhe', musicDirector: 'AR Rahman', singer: 'swarnalatha'},
    { songName: 'Roja poondhottam', film: 'kannukkul nilavu', musicDirector: 'ilayaraja', singer: 'unni krishnan'},
    { songName: 'vennilave vennilave', film: 'minsara kanavu', musicDirector: 'AR Rahman', singer: 'Hariharan'},
    { songName: 'sollamal thottu sellum', film: 'Dheena', musicDirector: 'Yuvana shankar raja', singer: 'Hariharan'}
  ];
    db.collection("songdetails").insert(insert, function(err, res) {
      if (err) throw err;
      console.log("Number of records inserted: " + res.insertedCount);
      db.close();
    });
  });
