const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@cluster0.wsqaa.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;