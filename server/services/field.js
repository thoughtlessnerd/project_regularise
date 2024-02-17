const { fieldRepo } = require("../repository");
const { defaultRating } = require("../configs/server-config");

class fieldService {
  constructor() {
    this.fieldRepo = new fieldRepo();
  }
  getFields = async (userID) => {
    try {
      const fields = await this.fieldRepo.getFieldsByUserId(userID);
      if (!fields) {
        return null;
      }
      const streaks = fields.streaks;
      const lastTime = fields.lastUpdateTime;
      const lastDone = fields.lastDone;
      const history = fields.history;
      const newHistory = { ...history };
      const update = {};

      // Get the current date and time in UTC
      let currentDate = new Date();
      let lastDay = lastTime.getUTCDate();
      let lastMonth = lastTime.getUTCMonth();
      let currentMonth = currentDate.getUTCMonth();

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

      let timeDiff =
        (currentDate.valueOf() - lastTime.valueOf()) / (1000 * 60 * 60 * 24); // changes the time to days

      if (timeDiff >= 1) {
        const oldFields = fields.fields;
        const newFields = { ...oldFields };
        const ratingChange = 10;
        let idx = 0;

        for (let key in newFields) {
          if (lastDone.includes(key)) {
            streaks[key] += 1;
            update[key] = 1;

            newFields[key] += Math.floor(
              ratingChange * (Math.random() * 0.5 + 1)
            );

            let elem = newHistory[key][newHistory[key].length - 1];

            elem = elem | (1 << (lastDay - 1));

            newHistory[key][newHistory[key].length - 1] = elem;
          } else {
            streaks[key] = 0;
            update[key] = 0;
            newFields[key] -= Math.floor(
              ratingChange * (Math.random() * 0.5 + 1)
            );
          }
          idx++;
        }

        timeDiff--;

        if (timeDiff >= 1) {
          let idx = 0;
          for (let key in newFields) {
            streaks[key] = 0;
            update[key] = 0;
            newFields[key] -= Math.floor(
              ratingChange * (Math.random() * 0.5 + 1) * Math.floor(timeDiff)
            );

            idx++;
          }
        }

        if (currentMonth !== lastMonth) {
          for (let key in newHistory) {
            newHistory[key].shift();
            newHistory[key].push(0);
          }
        }

        return await this.fieldRepo.update(
          { userID },
          {
            fields: newFields,
            lastDone: [],
            lastUpdateTime: currentDate,
            history: newHistory,
            streaks,
            update,
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
      let history = new Array(13).fill(0); // 13 numbers for 13 months

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
        currentDate,
        history
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
