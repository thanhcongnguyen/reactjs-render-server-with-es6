var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log("ban ket noi thanh cong port 3000");
});
var jsonParser = require('body-parser').json();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));




app.post('/getdata',jsonParser, function(req, res){
   var a = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   res.send(a)
	 
});

app.get('/', function(req, res){
  res.render('index');
})
