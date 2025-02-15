const express = require("express");
const { createNewCarEntry, getAllCarInfo, getACarInfo, updateCarInfo, deleteCarInfo } = require("../controllers/carInfoController");
const route = express.Router();
const upload = require('../middleware/upload')

route.get("/cars",  getAllCarInfo);
route.post("/car/add",  upload.single('img'), createNewCarEntry);
route.get("/car/:id", getACarInfo);
route.put("/car/:id", updateCarInfo);
route.delete("/car/:id", deleteCarInfo);

module.exports = route;