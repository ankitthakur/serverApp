
var MongooseSchema               = require('./MongooseSchema');

var UserSchema                   = function () {

    'use strict';
    
    if (!(this instanceof UserSchema)) {
        return new UserSchema();
    }
    
    var mandatoryStringType         = {type: String, required: true},
        indexedStringType             = {type: String, index: true, required: true},
        indexedUniqueStringType       = {type: String, required: true, index: { unique: true, sparse: true }},
        optionalStringType            = {type: String, required: false},
        mandatoryNumberType           = {type: Number, required: true},
        indexedNumberType             = {type: Number, index: true, required: true},
        optionalNumberType            = {type: Number, required: false},
        dayType                       = {type: Number, min: 1, max: 31, required: false },
        monthType                     = {type: Number, min: 1, max: 12, required: false },
    
    // schema
        UserSchemaProperties          = {
            firstName: optionalStringType,
            lastName: optionalStringType,
            username: indexedStringType,
            email: indexedUniqueStringType,
            password: mandatoryStringType,
            birthdate: {
                day: dayType,
                month: monthType,
                year: optionalNumberType
            },
            registerDate: {
                day: dayType,
                month: monthType,
                year: optionalNumberType
            },
            lastVisitDate: {
                day: dayType,
                month: monthType,
                year: optionalNumberType
            },
            age: optionalNumberType,
            image: optionalStringType
        };
    
    this.schema                     = this.getSchema(UserSchemaProperties);
};

UserSchema.prototype             = new MongooseSchema();
UserSchema.prototype.constructor = UserSchema;
module.exports                   = UserSchema;
