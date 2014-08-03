var express = require('express');
var path = require('path');
var expressBundles = require('express-bundles');
var home = require('./routes/home');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(require('less-middleware')(__dirname + '/public'));

app.use(expressBundles.middleware({
  env: app.get('env'),
  src: path.join(__dirname, 'public'),
  bundles: {
    'js/bundle.js': [
      'components/angular/angular.js',
      'components/angular-ui/build/angular-ui.js',
      'components/angular-ui-router/release/angular-ui-router.js'
    ],
    'js/app-bundle.js': [
      'js/app.js',
      'js/services.js',
      'js/controllers.js',
      'js/filters.js',
      'js/directives.js'
    ]
  }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', home);


app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});