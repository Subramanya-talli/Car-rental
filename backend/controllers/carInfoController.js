const carSchema = require("../models/CarModel");

async function creatRentalCar(req, res) {
    const {brand, distanceCovered,mileage,typeoffuel,img } = req.body;
    if (!brand || !distanceCovered || !mileage || !typeoffuel || !img) {
        return res.status(400).json({ message: "All fields are required" });
    }
  try {
    const car = await carSchema.create({brand, distanceCovered,mileage,typeoffuel,img });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
    creatRentalCar
}
