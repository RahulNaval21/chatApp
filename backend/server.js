const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json ka data

app.get("/", (req, res) => {
  res.send("Api is Running successfully");
});

app.use("/api/user", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = 4006 || process.env.PORT;
app.listen(PORT, console.log(`server started on port  ${PORT}`.yellow.bold));
