const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    title: {type: String, required: true},
    developer: {type: String, required: true},
    category: {type: String, required: true},
    year: {type: String, required: true},
    imagePath: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('Game', GameSchema);