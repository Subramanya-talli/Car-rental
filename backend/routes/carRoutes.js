const express = require("express");
const { createNewCarEntry, getAllCarInfo, getACarInfo, updateCarInfo, deleteCarInfo } = require("../controllers/carInfoController");
const route = express.Router();
const upload = require('../middleware/upload')

route.get("/cars",  getAllCarInfo);
route.post("/car/add",  upload.single('img'), createNewCarEntry);
route.get("/car/get/:id", getACarInfo);
route.put("/car/edit/:id", updateCarInfo);
route.delete("/car/delete/:id", deleteCarInfo);

module.exports = route;