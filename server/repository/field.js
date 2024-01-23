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
      const doc = await this.model.findOneAndUpdate(
        { userID: id },
        { fields: newData },
        { new: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async createFields(id, newFields, updateTime) {
    try {
      let update = {};
      for (let key in newFields) {
        update[`fields.${key}`] = newFields[key];
      }
      update["lastUpdateTime"] = updateTime;

      let doc = await this.model.findOneAndUpdate(
        { userID: id },
        { $set: { ...update } },
        { new: true, upsert: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async createField(id, fieldName, updateTime) {
    try {
      let doc = await this.model.findOneAndUpdate(
        { userID: id },
        {
          $set: {
            [`fields.${fieldName}`]: defaultRating,
            lastUpdateTime: updateTime,
          },
        },
        { new: true, upsert: true }
      );
      console.log(doc);
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
        { $unset: { [`fields.${fieldName}`]: 1 } },
        { new: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
  async setDoneFields(id, fields) {
    try {
      const doc = await this.model.findOneAndUpdate(
        { userID: id },
        { lastDone: fields },
        { new: true }
      );
      return doc;
    } catch (error) {
      console.log("error in field repo" + error);
      throw error;
    }
  }
}

module.exports = fieldRepo;
