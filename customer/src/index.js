import consumerService from "./consumerService.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5002, (req, res) => {
  console.log("-----server running on port 5002 -----");
});

app.get("/consumer/getAll", async (req, res) => {
  const result = await service.getALL();
  res.send(result);
});

app.get("/consumer/get/:id", async (req, res) => {
  const id = req.params.id;
  const result = await service.getByID(id);
  res.send(result);
});

const service = new consumerService();

setTimeout(() => {
  service
    .consume()
    .then(() => {
      console.log("Ready to consume");
    })
    .catch((err) => console);
}, 22000);
