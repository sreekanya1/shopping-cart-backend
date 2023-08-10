const mongoose = require("mongoose");
const mongoDbConnect = () => {
  const db = process.env.DB_URL;
  console.log("db", db);
  if (!db) {
    console.log("Invalid db url");
    return;
  }
  // database connection
  mongoose
    .connect(db)
    .then(() => console.log("mongo db is connected....", db))
    .catch((err) => console.log("error occurs while connecting time", err));
};

module.exports = { mongoDbConnect };
