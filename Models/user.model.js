const mongoose = require('mongoose')
const Schema = mongoose.Schema

newSchema = new Schema ({
    name:String,
    email:String,
    password:String,
    // address:addressSchema
})

// addressSchema = new Schema ({
//     town:String,
//     city:String,
//     pin:Number,
// })
module.exports = mongoose.model('User',newSchema)

