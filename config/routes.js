//routes
module.exports = function (app, passport) {
	//index
	app.get('/', function(req, res) {
		res.render('../app/views/PlatformUser/index.ejs');
	});

	//Login form
	app.get('/login', function(req, res){
		res.render('../app/views/PlatformUser/login.ejs', {message: req.flash('loginMessage')});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', //redireccion luego que el usuario se loggea
		failureRedirect: '/login', //login de nuevo si falla el inicio de sesion
		failureFlash: true //activar mensajes
	}));

	//registro
	app.get('/signup', function(req,res){
		res.render('../app/views/PlatformUser/signup.ejs', {message: req.flash('signupMessage')});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.post('/routes', function(req,res){
		
		console.log(req.body);
		var route = new rutas(req.body);
		route.save(function(err){
			console.log(route);
		});
		// var userId = req.params.id;
		// var update = req.body.route;
		
		// Route.findByIdAndUpdate(routeId, update, function (err, routeUpdated){
		// 	if(err){
		// 		res.status(500).send({message:'No se ha podido procesar la solicitud, ruta no actualizada'});
		// 	}else{
		// 		if(!routeUpdated){
		// 			res.status(400).send({message : 'parámetros inválidos para realizar la actualización'});
		// 		}else{
		// 			res.status(200).send({route : routeUpdated});
		// 		}
		// 	}
		// });
		

		// res.require('../app/models/user');
	});

	//panel usuario
	app.get('/profile', isLoggedIn, function(req,res){
		res.render('../app/views/PlatformUser/profile.ejs', {user: req.user});
	});

	//logout
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	//404

	app.use(function (req, res, next) {
		res.status(404);
		if (req.accepts('html')) {
			res.render('../app/views/PlatformUser/profile.ejs');
		}
	});
};

//funcion para validar si el usuario ha iniciado sesion o no
function isLoggedIn(req,res,next) {
	//si es un usuario autenticado, continua todo normal
	if (req.isAuthenticated()) return next();

	res.redirect('/');
}
