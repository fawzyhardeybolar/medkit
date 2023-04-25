const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isMobilePhone, isDate } = require("validator");

const appointmentSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Enter your first name"],
      trim: true,
      minlength: [3, "First name minimum length is 3"],
    },
    lastname: {
      type: String,
      required: [true, "Enter your Last Name"],
      trim: true,
      minlength: [3, "Last name minimum length is 3"],
    },
    phoneNo: {
      type: String,
      required: [true, "Enter your phone number"],
      trim: true,
      validate: [isMobilePhone, "This phone number is not valid"],
    },
    appointmentDate: {
      type: String,
      required: [true, "Enter your appointment date"],
      trim: true,
      validate: [isDate, "This date is invalid"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
