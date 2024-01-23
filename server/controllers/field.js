const { fieldService } = require("../services");

class fieldController {
  constructor() {
    this.service = new fieldService();
  }
  getFields = async (req, res) => {
    try {
      const userID = req.user;
      const fields = await this.service.getFields(userID);
      res.status(200).json({ message: "success", success: true, data: fields });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  createFields = async (req, res) => {
    try {
      const userID = req.user;
      const fields = req.body.fields; // REMEMBER FIELDS NEED TO BE AN ARRAY OF STRINGS
      const result = await this.service.createFields(userID, fields);
      res.status(201).json({ message: "success", success: true, data: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  createField = async (req, res) => {
    try {
      const userID = req.user;
      const fieldName = req.body.fieldName;
      const result = await this.service.createField(userID, fieldName);
      res.status(201).json({ message: "success", success: true, data: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  deleteField = async (req, res) => {
    try {
      const userID = req.user;
      const fieldName = req.body.fieldName;
      const result = await this.service.deleteField(userID, fieldName);
      res.status(200).json({ message: "success", success: true, data: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  setDoneFields = async (req, res) => {
    try {
      const userID = req.user;
      const fields = req.body.fields;
      const result = await this.service.setDoneFields(userID, fields);
      res.status(200).json({ message: "success", success: true, data: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = new fieldController();
