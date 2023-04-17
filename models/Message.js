const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail, isMobilePhone } = require("validator");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name"],
      trim: true,
      minlength: [3, "The minimum name length is 3"],
    },
    phoneNo: {
      type: String,
      required: [true, "Enter your phone number"],
      trim: true,
      validate: [isMobilePhone, "This phone number is invalid"],
    },
    email: {
      type: String,
      required: [true, "Enter your email"],
      trim: true,
      lowercase: true,
      validate: [isEmail, "This email is invalid"],
    },
    message: {
      type: String,
      required: [true, "Enter your message here"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
