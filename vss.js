const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.end("?вопросносамовопросно?");
});

app.listen(8000);
