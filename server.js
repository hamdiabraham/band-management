const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected!!");
  });

app.get("/", (req, res, next) => {
  res.send("connected!!");
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`server running on ${port}`);
});
