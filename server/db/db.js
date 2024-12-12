const mongoose = require("mongoose");

const db = mongoose.Schema({
    _id: String,
    data: Object,
    createdAt: { 
        type: Date, 
        default: Date.now,
        index: { expires: '3d' }
      },
})

module.exports = mongoose.model("db", db);