var Home = function (app, express) {
    
    'use strict';
    
    this.displayName = 'Home';
    
    var setup;
    
    setup = function (app, express) {
        
        var path = require('path'),
            HomeConfig = require('./configs'),
            HomeRoutes = require('./routes'),
            homeConfig = new HomeConfig(app, express),
            homeRoutes = new HomeRoutes(app);
    };
    
    setup(app, express);
};

module.exports = Home;