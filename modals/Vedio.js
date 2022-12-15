const mongoose = require('mongoose');
// const { default: Vedio } = require('../client/src/components/Vedio');
const Schema = mongoose.Schema;

//Create Schema
const VedioSchema = new Schema({
    img_path: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    discp: {
        type:String,
        required:true
    },
    link: {
        type:String,
        required:true
    }
    // percent: {
    //     type:String,
    //     required:true
    // }
})

module.exports = Vedio = mongoose.model('vedios', VedioSchema);