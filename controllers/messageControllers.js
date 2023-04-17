const Message = require("../models/Message");

const createMessage = async (req, res) => {
  try {
    const { name, phoneNo, email, message } = req.body;
    if (!name || !phoneNo || !email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Pls provide the necessary info to send your message",
      });
    }

    const msg = await Message.create(req.body);
    res.status(200).json({ success: true, data: msg });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res
      .status(200)
      .json({ success: true, noOfMsg: messages.length, data: messages });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { createMessage, getMessages };
