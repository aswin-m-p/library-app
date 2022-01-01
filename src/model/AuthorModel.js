const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@cluster0.wsqaa.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;