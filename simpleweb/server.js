const express = require("express");
const redis = require("redis");
const PORT = process.env.PORT || 3001;
const app = express();

const client = redis.createClient();
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is" + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
