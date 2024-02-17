const { userService } = require("../services");
const { v4 } = require("uuid");

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
        userID: v4(),
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
  updateUser = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        userID: req.user,
      };
      const user = await this.service.updateUser(data);
      res.status(200).json({ message: "updated", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  updatePassword = async (req, res) => {
    try {
      const data = {
        oldPassword: req.body.oldPassword,
        newPassword: req.body.newPassword,
        userID: req.user,
      };
      const user = await this.service.updatePassword(data);

      res
        .status(200)
        .json({ message: "password updated", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  addTask = async (req, res) => {
    try {
      const data = {
        task: req.body.task,
        userID: req.user,
      };
      const user = await this.service.addTask(data);
      res.status(200).json({ message: "task added", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  deleteTask = async (req, res) => {
    try {
      const data = {
        task: req.body.task,
        userID: req.user,
      };
      const user = await this.service.deleteTask(data);
      res
        .status(200)
        .json({ message: "task deleted", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  markTaskAsDone = async (req, res) => {
    try {
      const data = {
        task: req.body.task,
        userID: req.user,
      };
      const user = await this.service.markTaskAsDone(data);
      res
        .status(200)
        .json({ message: "task marked as done", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  clearDoneTasks = async (req, res) => {
    try {
      const data = {
        userID: req.user,
      };
      const user = await this.service.clearDoneTasks(data);
      res
        .status(200)
        .json({ message: "done tasks cleared", success: true, data: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = new userController();
