const { db } = require("./server-config");
const mongoose = require("mongoose");

async function connectToDatabase() {
  const uri = "mongodb://" + db.uri + "/" + db.name;
  await mongoose.connect(uri);
  console.log("Connected to database at " + uri);
}

module.exports = {
  connectToDatabase,
};
