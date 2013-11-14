var fs = require('fs');

var mask = process.umask(0);
var socket = '/tmp/devNode4';
if (fs.existsSync(socket)) {
    fs.unlinkSync(socket);
}


var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),

    // configs
    Conf = require('./config'),
    config = new Conf(app, express, mongoose),

    // modules

    ViewConfig = require('./views'),
    viewConfig = new ViewConfig(app, express),

    // landing screen
    Home = require('./modules/home'),
    home = new Home(app, express);

app.listen(socket, function () {
    if (mask) {
        mask = null;
    }
});

console.log('app is listening to 3001');