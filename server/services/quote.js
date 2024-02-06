const { quoteRepo } = require("../repository");
const { externalAPI } = require("../configs/server-config");

class quoteService {
  constructor() {
    this.quoteRepo = new quoteRepo();
  }

  getQuoteForToday = async () => {
    try {
      const date = new Date().setUTCHours(0, 0, 0, 0);
      let doc = await this.quoteRepo.getQuoteByDate(date);

      if (!doc) {
        let length = externalAPI.quoteCategories.length;
        let data = await fetch(
          externalAPI.quote +
            "?category=" +
            externalAPI.quoteCategories[Math.floor(Math.random() * length)],
          {
            headers: {
              "X-Api-Key": externalAPI.API_NINJAS_Key,
            },
          }
        );

        data = await data.json();

        doc = await this.quoteRepo.createQuote({
          date,
          quote: data[0].quote,
          author: data[0].author,
        });
      }

      return doc;
    } catch (error) {
      console.log("error in quote service" + error);
      throw error;
    }
  };
}

module.exports = quoteService;
