import express from "express";
import marketerService from "./marketerService.js";

const app = express();
const service = new marketerService();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(8080, (req, res) => {
  console.log("server running on port 8080");
});

app.post("/marketer/createOffer", async (req, res) => {
  const { name, amount, price } = req.body;
  await service.createOffer(name, amount, price);

  res.send("produced successfully");
});

app.delete("/marketer/deleteOffer/:id", async (req, res) => {
  const id = req.params.id;
  await service.deleteOffer(id);
  res.send("produced successfully");
});
