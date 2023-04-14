import { OfferDTO } from "./offerDTO.js";
import { Kafka } from "kafkajs";
import dotenv from "dotenv";

dotenv.config();

const clientId = "mock-up-kafka-producer-client";
const brokers = [`${process.env.KAFKA_HOST}`];
const topic = "offers";
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

export default class marketerService {
  async createOffer(name, amount, price) {
    const offer = new OfferDTO(name, amount, price);
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: [{ value: JSON.stringify(offer) }],
    });
  }

  async deleteOffer(id) {
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: [{ value: id }],
    });
  }
}
