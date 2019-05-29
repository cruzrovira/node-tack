let { Schema, model } = require('mongoose');
let tackSchema = new Schema({
  tack: {type: String},
  created_at: {type: Date, default: Date.now()}
})

module.exports = model("tack", tackSchema)