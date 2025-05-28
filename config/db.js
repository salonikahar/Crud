const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employee');

const db = mongoose.connection;

db.once('open', function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log("db is connected")
})

module.exports = db;


