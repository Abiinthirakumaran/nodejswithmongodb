var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery ={ name:"mala",maths_marks:45,english_marks:53,science_marks:75};
  var newvalues ={$set:{ name:"mala",maths_marks:51,english_marks:53,science_marks:75}};
  db.collection("studentmarks").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
