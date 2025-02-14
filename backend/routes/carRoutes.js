const express = require("express");
const { creatRentalCar } = require("../controllers/carInfoController");
const route = express.Router();

route.get("/cars", );
route.post("/car/add", creatRentalCar)
route.get("/car/:id")
route.put("/car/:id")
route.delete("/car/:id")

module.exports = route;