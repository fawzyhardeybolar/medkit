const jwt = require("jsonwebtoken");

// const requiredAuthProcess = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
//       if (err) {
//         return res.status(401).json({ msg: "auth failed" });
//       } else {
//         next();
//       }
//     });
//   } else {
//     return res.status(401).json({ msg: "auth failed" });
//   }
// };

// const checkCurrentUser = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
//       if (err) {
//         next();
//       } else {
//         const user = await Users.findById(decodedToken.id);
//         res.locals.user = user.email;
//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };

const auth = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "auth failed" });
  }
  const token = authHeaders.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { userId: payload.userId }; // {userId: 43567gi08;}
    next();
  } catch (error) {
    return res.status(401).json({ msg: "auth failed" });
  }
};

// fir, las, num , createdBy - req.body.createdBy = req.user.userId

module.exports = { auth };
