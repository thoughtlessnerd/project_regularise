const { fieldRepo } = require("../repository");
const { defaultRating } = require("../configs/server-config");

class fieldService {
  constructor() {
    this.fieldRepo = new fieldRepo();
  }
  getFields = async (userID) => {
    try {
      const fields = await this.fieldRepo.getFieldsByUserId(userID);
      // const lastTime = fields.lastUpdateTime.valueOf();
      // const lastDone = fields.lastDone;

      // let set = new Set();
      // for (let i = 0; i < lastDone.length; i++) {
      //   set.add(lastDone[i]);
      // }
      // const currTime = new Date().valueOf();

      // const timeDiff = (currTime - lastTime) / (1000 * 60 * 60 * 24); // changes the time to days

      // if (timeDiff >= 1) {
      //   const oldData = fields;
      //   const newData = { ...oldData, lastUpdateTime: new Date() };
      //   const ratingChange = 10;

      //   for (let key in newData.fields) {
      //     if (set.has(key)) {
      //       newData.fields[key] += ratingChange * (Math.random() * 0.5 + 1);
      //     } else {
      //       newData.fields[key] -= ratingChange * (Math.random() * 0.5 + 1);
      //     }
      //   }

      //   if (timeDiff > 1) {
      //     for (let key in newData.fields) {
      //       newData.fields[key] -= Math.floor(timeDiff - 1) * 10;
      //     }
      //   }

      //   console.log(newData.fields);

      //   await this.fieldRepo.updateFields(userID, newData);
      // }
      return fields;
    } catch (error) {
      throw error;
    }
  };
  createFields = async (userID, fields) => {
    try {
      const fieldObj = {};
      for (let i = 0; i < fields.length; i++) {
        fieldObj[fields[i]] = defaultRating;
      }
      const now = new Date();
      const lastTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 1,
        5,
        30,
        0
      ); // 00:00 UTC from yesterday
      const res = await this.fieldRepo.createFields(userID, fieldObj, lastTime);
      return res;
    } catch (error) {
      throw error;
    }
  };
  createField = async (userID, fieldName) => {
    try {
      const now = new Date();
      const lastTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 1,
        5,
        30,
        0
      ); // 00:00 UTC from yesterday
      const res = await this.fieldRepo.createField(userID, fieldName, lastTime);
      return res;
    } catch (error) {
      throw error;
    }
  };
  deleteField = async (userID, fieldName) => {
    try {
      const res = await this.fieldRepo.deleteField(userID, fieldName);
      return res;
    } catch (error) {
      throw error;
    }
  };
  setDoneFields = async (userID, fields) => {
    try {
      const res = await this.fieldRepo.setDoneFields(userID, fields);
      return res;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = fieldService;
