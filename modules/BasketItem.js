const mongoose = require('mongoose');

const BasketItem = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('basketItem',BasketItem);