let express = require("express");

let app = express();

app.get("/hello", (req, res) => {
  res.send("<h1>Hello from Anton! Success!!!!</h1>");
  res.status(200);
});

const PORT = process.env.PORT ?? 3333;

app.listen(PORT, () => { console.log(`Listening on port=${PORT}`); });
