const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection successful"))
  .catch((error) => console.log("error with connection", error));

  module.exports = mongoose;
