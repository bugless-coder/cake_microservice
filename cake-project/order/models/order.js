
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/cakeDB', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    cakeid: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    orderedAt:{
        type: Date,
        required: true,
        default: Date.now
    }
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);