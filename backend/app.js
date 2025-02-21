const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env._PORT || 4000;
const CarRoutes = require("./routes/carRoutes")
const cors = require('cors');
const path = require('path')


const data_base_url = process.env._mongoDBUrl;

const connectToDataBase = require("../backend/connection")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api', CarRoutes);
// app.use('/', (req,res)=>{
//     res.send("Hello From the Nodejs");
// })

let corsOptions = {
    origin: ['http://localhost:5173']
}

app.use(cors(corsOptions));



app.listen((PORT), ()=>{
    console.log(`App is running in ${PORT}`)
})


connectToDataBase(data_base_url)
.then(()=>{
    console.log("Connected to the DataBase")
})
.catch((error)=>{
    console.log(error)
})



