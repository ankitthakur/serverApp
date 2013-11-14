var HomeRoutes = function (app) {
    
    'use strict';
    
    this.displayName = 'HomeRoutes';
    
    var routes,
        HomeViewModel = {
            Register: 'Register',
            Forgot: 'Forgot Password',
            Login: 'Login',
            Username: 'Username',
            username: 'Enter Username',
            Email: 'Email',
            email: 'Enter Email',
            Password: 'Password',
            password: 'Enter Password',
            ConfirmPassword: 'Confirm Password',
            confirmpassword: 'ReEnter Password',
            submit: 'Submit',
            cancel: 'Cancel'
        };
    
    routes = function (app) {
        
        app.get('/index', function (req, res) {
            console.log('start');
            res.render('html/home', HomeViewModel);
        });
        
    
        app.post('/register', function (req, res) {
            
            var User = require('../../../models/User'),
                userModel = new User({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email
                });
    
            userModel.save(function (err) {
                
                if (err !== null) {
                    RegisterViewModel.err = err.message;
                    res.render('html/register', RegisterViewModel);
                } else {
                    res.send(req.params);
                }
            });
        });
        
        app.post('/login', function (req, res) {
            console.log(req.body);
            res.send(req.params);
        });
        
        app.post('/forgot', function (req, res) {
            var nodemailer = require("nodemailer");
            console.log('start');
            // create reusable transport method (opens pool of SMTP connections)
            var smtpTransport = nodemailer.createTransport("SMTP", {
                host: "smtp.server.com", // hostname
                secureConnection: true, // use SSL
                port: 465, // port for secure SMTP
                auth: {
                    user: "ankitthakur@server.com",
                    pass: "password"
                }
            });
            
            console.log('configure smtp transport');
            
            // setup e-mail data with unicode symbols
            var mailOptions = {
                from: "Ankit Thakur ✔ <ankit.thakur@server.com>", // sender address
                subject: "Hello ✔", // Subject line
                text: "Hello world ✔", // plaintext body
                html: "<b>Hello world ✔</b>" // html body
            };
            
            
            console.log('mailoptions: ' + mailOptions);
            console.log('req.body.email: ' + req.body.email);
            
            mailOptions.to = req.body.email;
            
            console.log('mailoptions: ' + mailOptions);
            
            // send mail with defined transport object
            smtpTransport.sendMail(mailOptions, function(error, response){
                
                console.log('mailoptions error : ' + error);
                console.log('mailoptions response: ' + response);
                
                if(error){
                    console.log(error);
                }else{
                    console.log("Message sent: " + response.message);
                }
            
                // if you don't want to use this transport object anymore, uncomment following line
                //smtpTransport.close(); // shut down the connection pool, no more messages
            });
            
        });
    
    };
    
    routes(app);
};

module.exports = HomeRoutes;