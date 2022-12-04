const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./db/connector");
const cors = require("cors");
const TicketBooking = require("./routes/TicketBooking");
const userRouter = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/booking", TicketBooking);
app.use("/users", userRouter);

app.get("/", (req,res) => res.json("bookmyshow Backend App running successfully."));

app.listen(port, () =>
  console.log(
    `BookMyShow App backend listening on port http://localhost:${port}`
  )
);

module.exports = app;
