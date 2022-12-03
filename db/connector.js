const mongodb = require("mongodb");

const mongoURI =
  "mongodb+srv://saadansari:mongodbfa9@bms.mg6hlxg.mongodb.net/bookmyshow?retryWrites=true&w=majority";

let mongoose = require("mongoose");
const { bookMovieSchema } = require("../models/bookMovie");
const { UserSchema } = require("../models/user");

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });

let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema); // bookmovietickets Collection
let user_connection = mongoose.model("User", UserSchema); // User Collection

exports.connection = collection_connection;
exports.Userconnection = user_connection;
