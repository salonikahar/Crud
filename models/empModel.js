let mongoose = require('mongoose');
let path = require('path')
let multer = require('multer');
const { type } = require('os');
let empImage = '/uploads';


const empModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    hobby: {
        type: Array,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    image: {
    type: String,
    require: true
    }
})

const empstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', empImage))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now())
    }
})

empModel.statics.fileUploads = multer({ storage: empstorage }).single('image')
empModel.statics.imagepath = empImage ;

const dataEmp = mongoose.model('emp', empModel)

module.exports = dataEmp;