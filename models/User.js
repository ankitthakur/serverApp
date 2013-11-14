/*
'User.js'
*/

/**
data                           = {
    firstName:'First Name',
    'User.js'
    lastName:'Last Name',
    username:'user@123',
    email:'email123@abc.com',
    password:'pswd@123',
    age:21,
    registrationDate:2012-03-03 11:42:00,
    lastVistDate: 2013-09-30 15:20:50
}
*/

function User(data) {

    'use strict';
    
    var UserSchema                = require('./schemas/UserSchema'),
        userSchema                  = new UserSchema();
    
    this.UserModel                   = userSchema.mongoose.model('User', userSchema.schema);
    
    this.UserModel.schema.path('email').validate(function (value) {
        
        var emailRegex               = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
        return emailRegex.test(value);
    }, 'Invalid email');
    
    this.UserModel.schema.pre('save', function (next) {
        var self = this;
        
        this.UserModel.find({email : self.email, password: self.password}, function (err, docs) {
            
            if (!docs.length) {
                next();
            } else {
//                console.log('user exists: ', self.email);
            }
        });
    });
    
    data.password = this.encryptPassword(data.password);
    
    this.user                     = new this.UserModel(data);
    
}
    
User.prototype.validate        = function (callBack) {
    'use strict';
//    console.log(err.errors.email.type);
//    console.log(err.errors.email.message);

};

User.prototype.encryptPassword = function (password) {
    'use strict';
    var crypto                      = require('crypto'),
        shasum                      = crypto.createHash('sha256');
    
    shasum.update(password);
    
    password               = shasum.digest('hex');
    
    return password;
};

User.prototype.save            = function (callBack) {
    
    'use strict';
    
    this.user.save(function (err) {
        
        if (err) {
            console.error(err); // we should handle this
        }
        callBack(err);
    });
};

User.prototype.isExist = function (email, password) {

    'use strict';
    
    password = this.encryptPassword(password);
    
    this.UserModel.find({email : email, password: password}, function (err, docs) {
        
        if (!docs.length) {
            next();
        } else {
            console.log('user exists: ', this.email);
        }
    });
};

User.prototype.model           = this.user;
module.exports                 = User;
