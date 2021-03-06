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

app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));  
app.use(bodyParser.json({limit: '2mb'}));  
app.use(methodOverride());
app.use(express.static('images', { maxAge: 86400000 }));

app.get('/', function(req, res){
	res.send('API REST Motive');
});

require('./routes')(app);

app.listen(2101);
console.log('Servidor de Rafa funcionando correctamente en el puerto 2101');