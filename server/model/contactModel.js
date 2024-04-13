const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  cid: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  facebook: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Contacts", contactSchema);
