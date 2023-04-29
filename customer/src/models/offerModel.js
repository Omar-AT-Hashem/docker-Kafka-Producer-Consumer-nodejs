import { Sequelize, DataTypes } from "sequelize";
import { db } from "../config/db.js";

export let Offer;

setTimeout(async () => {
  Offer = db.define(
    "offer",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      timestamps: false,
    }
  );

  await Offer.sync({ alter: true });
}, 21000);
