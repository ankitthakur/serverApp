var ViewConfig = function (app, express) {

    this.displayName = 'ViewConfig';

    var routes;

    setup = function (app, express) {

        var cons = require('consolidate'),
            swig = require('swig'),
            path = require('path'),
            lessMiddleware = require('less-middleware'),
            VIEWS_DIR = __dirname;


        app.configure(function () {

            app.use(express.static(path.join(__dirname + '')));

            app.engine('html', cons.swig);

            // set .html as the default extension 
            app.set('view engine', 'html');
            app.set('views', VIEWS_DIR);

            console.log(VIEWS_DIR);
            console.log(path.join(__dirname + '/css'));

            /* 
            Swig will cache templates for you, but you can disable
            that and use Express's caching instead, if you like:
            */
            app.set('view cache', false);
        });
    }


    setup(app, express);
}

module.exports = ViewConfig;