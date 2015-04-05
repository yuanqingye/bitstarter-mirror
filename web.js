var express = require('express')
var app = express();
var fs = require('fs')

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

var buf = fs.readFileSync("bitstarter.html")

app.get('/', function(request, response) {
  response.send(buf.toString('ascii'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
