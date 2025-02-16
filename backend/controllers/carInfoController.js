const carModel = require("../models/CarModel");

async function createNewCarEntry(req, res) {
  try {
    const { brand, distanceCovered, mileage, typeoffuel } = req.body;
    if (!brand || !distanceCovered || !mileage || !typeoffuel) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    const car = await carModel.create({
      brand,
      distanceCovered,
      mileage,
      typeoffuel,
      img: {
        data: req.file.buffer, 
        contentType: req.file.mimetype,
      },
    });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllCarInfo(req, res) {
  try {
    const allCarInfo = await carModel.find();
    res.status(201).json(allCarInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function getACarInfo(req, res) {
  try {
    const { id } = req.params;
    console.log("Car ID:", id); // Debugging
    const carInfo = await carModel.findById(id);
  
    if (!id) {
      return res.status(400).json({ message: "Car Id does not found" });
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
