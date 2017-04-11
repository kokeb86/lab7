var express = require('express');
var router = express.Router();
var mongo= require('mongoskin');
var crypto= require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  var ob= mongo.db("mongodb://Localhost:27017/admin"
  ,{native_parser:true});
  ob.bind('dbtestCol');
  ob.dbtestCol.find({}).toArray(function(err,items){
    const encrypted= items[0];
    console.log(encrypted);
    const decipher= crypto.createDecipher("aes256","asaadsaad");
    var decrypted= decipher.update(encrypted,'hex','utf8');
    decrypted+= decipher.final('utf8');
    res.locals.goToMyIndexSpot= decrypted;
    res.locals.title= "Heyyyy..... koki";
    res.render('index');
    console.log(items);
   
    ob.close();
  })
 
});

module.exports = router;
