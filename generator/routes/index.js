var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb').MongoClient 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',(req,res)=>{
  console.log(req.body)
  
  Mongoclient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err)
      console.log(err)
    else
      client.db('crossroads')
      .collection('user')
      .insertOne(req.body,(err,result)=>{
        if(err)
          console.log(err)
        else
          console.log("Inserted successfully")
    })
  })

  res.send('got it')

})

module.exports = router;
