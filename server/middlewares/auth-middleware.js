const jwt = require("jsonwebtoken");
const { jwt } = require("../configs/server-config");
const { userRepo } = require("../repository");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, jwt.secret);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userRepository = new userRepo();
    const user = await userRepository.getUserById(decoded.id);
    req.user = user.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  isAuthenticated,
};
