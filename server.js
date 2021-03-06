var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function() {
  console.log('**********Listening on Port 3000**********');
});
