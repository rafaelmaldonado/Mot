var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var app = express();

mongoose.connect('mongodb://localhost/images', function(err, res){
	if (err)
		console.log('Error conectando a la BD: ' + err);
	else
		console.log('Conexión exitosa!');
})

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.get('/', function(req, res){
	res.send('Hola Rafa');
});

require('./routes')(app);

app.listen(2101);
console.log('Servidor de Rafa funcionando correctamente en el puerto 2101');