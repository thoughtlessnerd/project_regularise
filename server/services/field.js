const { fieldRepo } = require("../repository");
const { defaultRating } = require("../configs/server-config");

class fieldService {
  constructor() {
    this.fieldRepo = new fieldRepo();
  }
  getFields = async (userID) => {
    try {
      const fields = await this.fieldRepo.getFieldsByUserId(userID);
      const lastTime = fields.lastUpdateTime;
      const lastDone = fields.lastDone;

      // Get the current date and time in UTC
      let currentDate = new Date();

      // Set the time to 00:00:00 for the current date
      currentDate.setUTCHours(0, 0, 0, 0);

      // If the current time is already after UTC 00:00, subtract a day
      if (
        currentDate.getUTCHours() > 0 ||
        currentDate.getUTCMinutes() > 0 ||
        currentDate.getUTCSeconds() > 0
      ) {
        currentDate.setUTCDate(currentDate.getUTCDate() - 1);
      }
      console.log(currentDate);
      console.log(lastTime);

      let timeDiff =
        (currentDate.valueOf() - lastTime.valueOf()) / (1000 * 60 * 60 * 24); // changes the time to days

      console.log(timeDiff);

      if (timeDiff >= 1) {
        const oldFields = fields.fields;
        const newFields = { ...oldFields };
        const ratingChange = 10;

        for (let key in newFields) {
          if (lastDone.includes(key)) {
            newFields[key] += Math.floor(
              ratingChange * (Math.random() * 0.5 + 1)
            );
          } else {
            newFields[key] -= Math.floor(
              ratingChange * (Math.random() * 0.5 + 1)
            );
          }
        }

        timeDiff--;

        if (timeDiff >= 1) {
          for (let key in newFields) {
            newFields[key] -= Math.floor(
              ratingChange * (Math.random() * 0.5 + 1) * Math.floor(timeDiff)
            );
          }
        }

        console.log(newFields);

        return await this.fieldRepo.update(
          { userID },
          {
            fields: newFields,
            lastUpdateTime: currentDate,
          }
        );
      }
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
      // Get the current date and time in UTC
      let currentDate = new Date();

      // Set the time to 00:00:00 for the current date
      currentDate.setUTCHours(0, 0, 0, 0);

      // If the current time is already after UTC 00:00, subtract a day
      if (
        currentDate.getUTCHours() > 0 ||
        currentDate.getUTCMinutes() > 0 ||
        currentDate.getUTCSeconds() > 0
      ) {
        currentDate.setUTCDate(currentDate.getUTCDate() - 1);
      }
      const res = await this.fieldRepo.createFields(
        userID,
        fieldObj,
        currentDate
      );
      return res;
    } catch (error) {
      throw error;
    }
  };
  createField = async (userID, fieldName) => {
    try {
      // Get the current date and time in UTC
      let currentDate = new Date();

      // Set the time to 00:00:00 for the current date
      currentDate.setUTCHours(0, 0, 0, 0);

      // If the current time is already after UTC 00:00, subtract a day
      if (
        currentDate.getUTCHours() > 0 ||
        currentDate.getUTCMinutes() > 0 ||
        currentDate.getUTCSeconds() > 0
      ) {
        currentDate.setUTCDate(currentDate.getUTCDate() - 1);
      }

      const res = await this.fieldRepo.createField(
        userID,
        fieldName,
        currentDate
      );
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
