const express = require("express");

const mongodb = require("./data/database");
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use("/", require("./routes"));

// Start the server
mongodb.initDb((err) => {
  if (err) {
    require("express");
  } else {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
});
