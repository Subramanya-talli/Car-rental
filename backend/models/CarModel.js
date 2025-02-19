const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    distanceCovered: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarInfo = mongoose.model("carinfo", carSchema);

module.exports = CarInfo;
