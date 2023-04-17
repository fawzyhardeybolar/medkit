const Subscribe = require("../models/Subscribe")

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, msg: "Pls provide your email to subscribe" });
    }

    const sub = await Subscribe.create(req.body);
    res.status(200).json({ success: true, data: sub });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { subscribe };
