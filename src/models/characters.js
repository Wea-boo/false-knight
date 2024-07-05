const mongoose = require('mongoose');
const { ROLES, RACES } = require('../constants');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        min: 1,
        max: 100,
        default: 1
    },
    class: {
        type: String,
        required: true,
        enum: ROLES

    },
    race: {
        type: String,
        required: true,
        enum: RACES
    }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;