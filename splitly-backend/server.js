const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const authRoutes = require("./routes/authRoute");
const dashoardRoutes = require("./routes/dashboardRoute");
const { restrictToLoginUser } = require("./middlewares/authMiddleware");
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middlewares/errorMiddleware");
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true, 
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// server.js or app.js

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "same-origin-allow-popups");
  next();
});

app.use("/", authRoutes);

app.use("/dashboard", restrictToLoginUser, dashoardRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Splitly!");
});

// app.use((req, res) => {
//   res
//     .status(404)
//     .send("404 Not Found: The requested URL was not found on this server.");
// });

app.use(errorMiddleware);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
