const mongoose = require("mongoose");
require("dotenv").config();


const connect=mongoose.connect(process.env.CONNECTION_URL);

module.exports = {connect};