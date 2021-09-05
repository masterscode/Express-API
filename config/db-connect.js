const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongol")
  .then(() => console.log("connection successful"))
  .catch((error) => console.log("error with connection", error));

  module.exports = mongoose;
