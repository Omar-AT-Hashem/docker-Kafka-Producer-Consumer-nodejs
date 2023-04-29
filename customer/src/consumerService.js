import { Kafka } from "kafkajs";
import { Offer } from "./models/offerModel.js";
import dotenv from "dotenv";
dotenv.config();

const clientId = "mock-up-kafka-consumer-client";
const brokers = [`${process.env.KAFKA_HOST}`];
const topic = "offers";

const kafka = new Kafka({ clientId, brokers });
const consumer = kafka.consumer({ groupId: "consumer" });

export default class consumerService {
  consume = async () => {
    let data = [];
    await consumer.connect();
    await consumer.subscribe({ topic: topic });
    await consumer.run({
      eachMessage: ({ message }) => {
        const value = JSON.parse(message.value);
        console.log("Offer recieved");
        console.log(value);
        if (typeof value == "object") {
          Offer.create({
            name: value.name,
            price: value.price,
            amount: value.amount,
          });
        } else {
          Offer.destroy({ where: { id: value } });
        }
        data.push(message);
      },
    });
    return data;
  };

  async getALL() {
    const result = await Offer.findAll();
    return result;
  }

  async getByID(id) {
    const result = await Offer.findByPk(id);
    return result;
  }
}
