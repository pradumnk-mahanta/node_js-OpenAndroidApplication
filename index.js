var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/CircularMotion', function(request, response) {
  response.render('pages/circularmotion');
});

app.get('/OscillationMotion', function(request, response) {
  response.render('pages/oscillationmotion');
});

app.listen(app.get('port'), function() {
  console.log('Node Application is Running on PORT:', app.get('port'));
});
