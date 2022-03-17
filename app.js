const express = require("express");
const app = express();

const bandRouter = require("./routers/bandRoute");
const personnelRouter = require("./routers/personnelRoute");

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(bandRouter);
app.use(personnelRouter);

module.exports = app;
