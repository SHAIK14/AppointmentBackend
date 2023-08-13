const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const sequelize = require("./utils/database");
const adminRoutes = require("./routes/admin");
app.use(cors());
app.use(bodyParser.json());
app.use("/admin", adminRoutes);
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
