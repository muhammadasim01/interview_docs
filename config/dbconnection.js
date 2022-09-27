const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connection to the database successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
