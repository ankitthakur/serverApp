var ErrorsConfig = function(app){
  
	this.displayName = 'ErrorsConfig';
  
	var setup, prototype = ErrorsConfig.prototype, constructor = ErrorsConfig;
	setup = function(app){
		
		/*
		Error Handling Middleware :
      
		Error-handling middleware are defined just like regular middleware,
		however must be defined with an arity of 4, that is the signature (err, req, res, next)
      
		*/
		/* 1. log errors */
		logErrors = function(err, req, res, next){
			console.error(err.stack);
			return next(err);
		}
		/* 2. all errors */,
		allErrors = function(err, req, res, next){
			res.status(500);
			return res.render('error', {
				error: err
			});
		}
    
		app.use(logErrors);
		app.use(allErrors);
	};
  
  
	setup(app);
  
  
}

module.exports = ErrorsConfig;