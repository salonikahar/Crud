let mongoose = require('mongoose');

const empModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    } ,
    age: {
        type: Number,
        require: true
    } ,
    gender: {
        type: String,
        require: true
    } , 
    hobby : {
        type : Array , 
        require : true
    } , 
    city: {
        type: String,
        require: true
    } ,
    address : {
        type : String,
        require : true
    } 
})

const dataEmp = mongoose.model('emp' , empModel)

module.exports = dataEmp;