const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env._PORT || 4000;
const CarRoutes = require("./routes/carRoutes")

const data_base_url = process.env._mongoDBUrl;

const connectToDataBase = require("../backend/connection")

app.use(express.json());

app.use('/api', CarRoutes);
app.use('/', (req,res)=>{
    res.send("Hello From the Nodejs");
})



app.listen(PORT, ()=>{
    console.log(`App is running in ${PORT}`)
})


connectToDataBase(data_base_url)
.then(()=>{
    console.log("Connected to the DataBase")
})
.catch((error)=>{
    console.log(error)
})




