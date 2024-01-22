const { userService } = require("../services");

class userController {
  constructor() {
    this.service = new userService();
  }
  getUser = async (req, res) => {
    try {
      const user = await this.service.getUser(req.user);
      res.status(200).json({ message: "success", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  signUp = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      };
      // console.log(req.body);
      const user = await this.service.signUp(data);
      res.status(201).json({ message: "signed up", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  signIn = async (req, res) => {
    try {
      const data = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await this.service.signIn(data);
      res.status(200).json({ message: "signed in", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = new userController();
