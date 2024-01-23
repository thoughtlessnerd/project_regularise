const crudRepo = require("./crud");
const Field = require("../models/field");
const { defaultRating } = require("../configs/server-config");

class fieldRepo extends crudRepo {
  constructor() {
    super(Field);
  }
  async getFieldsByUserId(id) {
    try {
      const doc = await this.model.findOne({ userID: id });
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async updateFields(id, newData) {
    try {
      const doc = await this.model.findOneAndUpdate({ userID: id }, newData);
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async createFields(id, newFields) {
    try {
      let update = {};
      for (let key in newFields) {
        update[`fields.${key}`] = newFields[key];
      }

      let doc = await this.model.findOneAndUpdate(
        { userID: id },
        { $set: { ...update } },
        { upsert: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async createField(id, fieldName) {
    try {
      let doc = await this.model.findOneAndUpdate(
        { userID: id },
        { $set: { [`fields.${fieldName}`]: defaultRating } },
        { upsert: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async deleteField(id, fieldName) {
    try {
      const doc = await this.model.findOneAndUpdate(
        { userID: id },
        { $unset: { [`fields.${fieldName}`]: 1 } }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
}

module.exports = fieldRepo;
