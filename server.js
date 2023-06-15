const express = require("express");
const app = express();
const PORT = process.env.PORT || 3008;

// your code

app.listen(PORT, () => {
  console.log("server started on port 3008");
});