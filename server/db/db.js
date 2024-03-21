const mongoose = require("mongoose");

const db = mongoose.Schema({
    _id: String,
    data: Object,
})

module.exports = mongoose.model("db", db);