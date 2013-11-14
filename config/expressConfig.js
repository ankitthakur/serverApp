var ExpressConf = function (app, express) {
    
    'use strict';
    
    this.displayName = 'ExpressConf';
    
    var setup;
    
    setup = function (app, express) {
    
        /* all environments */
        app.set('title', 'Sample Express app');
    
        /* 
        The order of which middleware are "defined" using app.use() is very important.
        As they are invoked sequentially, thus this defines middleware precedence.
        */
        /* 
        ignore logging requests for static files, but to continue logging routes and middleware defined after logger(), 
        you would simply move static() above: 
        */
        // app.use(express.static(__dirname + '/public'));
        /* 
        express.logger() is the very first middleware you would use, logging every request 
        */
        app.use(express.logger());
        /* 
        MIDDLEWARES
        */
        /* 
        1. compress : Compress response data with gzip / deflate. 
        This middleware should be placed "high" within the stack to ensure all responses may be compressed.
        */
        app.use(express.compress());
        /* 
        2. body parser : it is simply a wrapper the json() and urlencoded().
    
        for security purpose, leave out multipart() all together. 
        Use `if (req.is('multipart/form-data')` and formidable/multiparty/parted directly.
        */
        app.use(express.json());
        app.use(express.urlencoded());
        /* 
        3. methodOverride allows us to make pseudo DELETE and PUT requests from browser forms using a hidden input element called _method
        */
        app.use(express.methodOverride());
        /* 
        4. directories : directories to serve files.
        */
        app.use(express.directory('public'));
        app.use(express.directory('static'));
        app.use(express.directory('images'));
        app.use(express.directory('media'));
    
    };
    
    setup(app, express);

};

module.exports = ExpressConf;