
var express = require('express');
var app = express();

// serve all bower (vendor) files
app.use('/vendor', express.static('./bower_components'));

// serve all public html files
app.use(express.static('./public'));

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});