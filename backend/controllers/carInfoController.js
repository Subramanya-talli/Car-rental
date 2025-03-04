const carModel = require("../models/CarModel");

async function createNewCarEntry(req, res) {
  try {
    const { brand, distanceCovered, mileage, fuelType } = req.body;

    if (!brand || !distanceCovered || !mileage || !fuelType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    console.log("Uploaded File:", req.file);

    const newCar = new carModel({
      brand,
      mileage,
      distanceCovered,
      fuelType: fuelType,
      img: `/uploads/${req.file.filename}`,
    });

    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    console.error("Error creating car entry:", error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllCarInfo(req, res) {
  try {
    const cars = await carModel.find();
    cars.forEach((car) => {
      if (car.img.startsWith("C:")) {
        car.img = car.img.replace("C:/Users/subra/CarRental/backend", "");
      }
    });
    res.status(201).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getACarInfo(req, res) {
  try {
    const { id } = req.params;
    const carInfo = await carModel.findById(id);

    if (!carInfo) {
      return res.status(400).json({ message: "Car not found" });
    }

    res.status(200).json(carInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateCarInfo(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Car Id does not found" });
    }
    const carInfo = await carModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(carInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteCarInfo(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Car Id does not found" });
    }
    await carModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Car info got deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewCarEntry,
  getAllCarInfo,
  getACarInfo,
  updateCarInfo,
  deleteCarInfo,
};
