const Quote = require("../models/quote");
const crudRepo = require("../repository/crud");

class quoteRepo extends crudRepo {
  constructor() {
    super(Quote);
  }

  async getQuoteByDate(date) {
    try {
      const doc = await this.model.findOne({ date });
      return doc;
    } catch (error) {
      console.log("error in quote repo" + error);
      throw error;
    }
  }

  async createQuote(data) {
    try {
      let doc = await this.model.create(data);
      return doc;
    } catch (error) {
      console.log("error in quote repo" + error);
      throw error;
    }
  }
}

module.exports = quoteRepo;
