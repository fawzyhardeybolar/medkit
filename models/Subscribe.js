const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const subscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "This Email have been added to our newsletter"],
      trim: true,
      lowercase: true,
      validate: [isEmail, "This is not a valid email"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscribe", subscribeSchema);
