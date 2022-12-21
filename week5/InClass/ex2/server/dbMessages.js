const mongoose = require("mongoose");

const messsagingSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

module.exports = mongoose.model("messagingmessages", messsagingSchema);
