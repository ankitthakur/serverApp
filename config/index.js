var Conf = function (app, express, mongoose) {
    
    'use strict';
    
    this.displayName = 'Conf';
    
    var setup;
    
    setup = function (app, express) {
    
        /* express config */
        var ExpressConfig = require('./expressConfig'),
            expressConfig = new ExpressConfig(app, express),
            
            /* mongoose config */
            MongooseConfig = require('./mongooseConfig'),
            mongooseConfig = new MongooseConfig(),
            
            /* error config */
            ErrorsConfig = require('./errorConfig'),
            errorConfig = new ExpressConfig(app, express);
        
    };
    
    setup(app, express, mongoose);

};

module.exports = Conf;