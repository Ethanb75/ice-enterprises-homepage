const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/services', function (req, res) {
  res.sendFile(__dirname + '/services.html');
})

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
})

app.listen(port, function () {
  console.log('i hear yah');
})