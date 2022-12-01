const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./db/connector");
const TicketBooking = require("./routes/TicketBooking");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/booking", TicketBooking);
app.use("/users", userRouter);

app.listen(port, () =>
  console.log(
    `BookMyShow App backend listening on port http://localhost:${port}`
  )
);

module.exports = app;