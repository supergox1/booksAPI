const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/books", require("./Routes/bookRoutes"));
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});