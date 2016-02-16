module.exports = function(app){
	var Images = require('./images');

	//GET
	findAllImages = function(req, res){
		Images.find(function(err, images){
			if(!err)
				res.send(images);
			else
				console.log('Error ' + err);
		});
	};

	//GET
	findByID = function(req, res){
		Images.findById(req.params.id, function(err, images){
			if(!err)
				res.send(images);
			else
				console.log('Error ' + err);
		});
	};

	//POST
	addImage = function(req, res){
		console.log('POST');
		console.log(req.body);

		var images = new Images({
			user: req.body.user,
			phrase: req.body.phrase,
			likes: req.body.likes,
			category: req.body.category,
			image: req.body.image,
			date: req.body.date
		});

		images.save(function (err){
			if (!err)
				console.log("Se ha guardado la imagen");
			else
				console.log("Error: " + err);
		});

		res.send(images);
	};

	//PUT
	updateImage = function(req, res){
		Images.findById(req.params.id, function(err, images){
			images.user = req.body.user;
			images.phrase = req.body.phrase;
			images.likes = req.body.likes;
			images.category = req.body.category;
			images.image = req.body.image;
			images.date = req.body.date;
			images.save(function (err){
				if (!err)
					console.log("Se ha actualizado la imagen");
				else
					console.log("Error: " + err);
			});
		});
	};

	deleteImage = function(req, res){
		Images.findById(req.params.id, function(err, images){
			images.remove(function(err){
				if (!err)
					console.log("Se ha borrado la imagen");
				else
					console.log("Error: " + err);				
			});
		});
	};

	app.get('/images', findAllImages);
	app.get('/images/:id', findByID);
	app.post('/images', addImage);
	app.put('/images/:id', updateImage);
	app.delete('/images/:id', deleteImage);
}