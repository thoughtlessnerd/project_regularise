const { quoteService } = require("../services");

class quoteController {
  constructor() {
    this.quoteService = new quoteService();
  }

  getQuoteForToday = async (req, res) => {
    try {
      // const quote = await this.quoteService.getQuoteForToday();
      return res.status(200).json({ message: "success", success: true, data: "quote" });

      // return res
      //   .status(200)
      //   .json({ message: "success", success: true, data: quote });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new quoteController();
