const Users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleErrors = require("../utils/handleerrors");

const { SECRET_KEY } = process.env;

const generateToken = (id) => {
  return jwt.sign({ userId: id }, SECRET_KEY, { expiresIn: "24h" });
};

// signup
const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await Users.create({ fullname, email, password });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(404).json({ errors });
  }
};

// get all users
const allUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json(error);
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ msg: "Pls provide valid info" });
    }

    const user = await Users.findOne({ email });

    if (!user) {
      throw Error("no email");
    }

    const authenticated = await bcrypt.compare(password, user.password);
    if (!authenticated) {
      throw Error("incorrect password");
    }

    const token = generateToken(user._id);
    res.status(200).json({ data: user, token });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(404).json(errors);
  }
};

// // logout
// const logout = (req, res) => {
//   res.cookie("jwt", "", { maxAge: 1000 });
// };

module.exports = { signUp, allUsers, login };
