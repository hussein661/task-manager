const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        validate(value){
            if(value < 18){
                throw new Error('Age must be greater than or equal to 18')
            }
        }
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(value.length < 6 || value.toLowerCase() === 'password'){
                throw new Error('Password must be at least 6 characters long')
            }
        }
    }
})

module.exports = User