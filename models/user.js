const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
// const { error } = require("console");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Enter your full name"],
      trim: true,
      minlength: [7, "The minimum fullname length is 7"],
    },
    email: {
      type: String,
      required: [true, "Enter an Email"],
      unique: [true, "This email has already been registered, Pls log in"],
      lowercase: true,
      trim: true,
      validate: [isEmail, "This Email is not valid"],
    },
    password: {
      type: String,
      required: [true, "Enter your password"],
      minlength: [8, "This minimum password length is 8"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", userSchema);
