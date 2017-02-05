var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log("ban ket noi thanh cong port 3000");
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));




app.get('/getdata', function(req, res){
	var user = req.data;
	 console.log("co truy cap toi route nay thong qua fetch API");

	
});

app.get('/', function(req, res){
  res.render('index');
})
