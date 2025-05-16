const express = require("express");
const app = express();
const port = process.env.Port || 8080;

// Middleware to parse JSON requests
app.use("/", require("./routes"));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
