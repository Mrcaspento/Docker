const express = require("express");
const redis = require("redis");
const process = require("process");
const PORT = process.env.PORT || 8081;
const app = express();

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
  // ^^ default port for redis-servers
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0);
  //exit status code ^^ 0 is good and anyother number means something went wrong
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT} !`);
});
