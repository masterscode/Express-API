const mongoose = require("mongoose");
const link = 'mongodb+srv://imanuel:peace2lover@cluster0.mbdwx.mongodb.net/test';
mongoose
  .connect(link)
  .then(() => console.log("connection successful"))
  .catch((error) => console.log("error with connection", error));

  module.exports = mongoose;
