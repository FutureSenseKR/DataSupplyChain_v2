const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemTrackSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },

    store1: {
        publicKey: {
            type: String,
            required: true
        },
        encrypt: { type: String },
        time:{type:Date, default: Date.now}
    },

    store2: {
        publicKey: {
            type: String,
            required: true
        },
        encrypt: { type: String },
        time:{type:Date, default: Date.now}
    },

    store3: {
        publicKey: {
            type: String,
            required: true
        },
        encrypt: { type: String },
        time:{type:Date, default: Date.now}
    },

    integrity: {
        type: String
    },

}, { timestamps: true });

const ITEMTRACK = mongoose.model("itemTrack", itemTrackSchema)
module.exports = ITEMTRACK;

