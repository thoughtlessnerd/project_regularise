const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME,
  },
  jwtconfig: {
    secret: process.env.JWT_SECRET,
    expiration: process.env.JWT_EXPIRY,
  },
  defaultRating: 800,
  externalAPI: {
    quote: process.env.QUOTE_API,
    API_NINJAS_Key: process.env.API_NINJAS_API_KEY,
  },
};
