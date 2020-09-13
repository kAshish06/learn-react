const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => {
  return res.send({ text: "Hello world" });
});
app.get("/animals", (req, res) => {
  return res.send({ animals: ["Dogs", "Cats", "Cows", "Deers", "Lions"] });
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
