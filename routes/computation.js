var express = require('express');
var router = express.Router();
var x,y;
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.random()*10;
        y=Math.random()*10;
        var hypval = Math.pow(x)
        var signval = Math.sign(x)
        var tanhval = Math.tanh(y) 
        var truncval = Math.trunc(y);
        
        res.send('Math.hypval() applied for ' +x +' is ' +hypval+'\nMath.sign() applied for ' +y +' is ' +signval+'\n Math.tanh() applied for number ' +y+' is '+truncval);
    }
    else{
        x =req.query.x;
        var hypval = Math.pow(x)
        var signval = Math.sign(x)
        var tanhval = Math.tanh(y) 
        var truncval = Math.trunc(y) ;
        res.send('Math.hypval() applied for ' + x +' is ' +hypval+'\nMath.sign() applied for ' + y +' is ' +signval+'\n Math.tanh() applied for number ' +y+' is '+truncval);
    }
});
module.exports = router;