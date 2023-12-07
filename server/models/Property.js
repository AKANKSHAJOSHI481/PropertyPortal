const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({    
    title: {
        type: String,
        required: true,
        min: 6,
    },
    type: {
        type: String,
        enum: ["beach", "mountain", "village"],
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 50,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sqmeters: {
        type: Number,
        required: true,
        min: 15
    },
    beds: {
        type: Number,
        required: true,
        min: 1
    },
    bathrooms: {
        type : Number,
        required: true,
        min: 1
    },
    featured: {
        type: Boolean,
        default : false,
    },
    bookmarkedUsers: {
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model("Property", PropertySchema)