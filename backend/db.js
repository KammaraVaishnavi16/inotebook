const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017";
const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectTOMongo = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectTOMongo;
