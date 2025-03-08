const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env._PORT || 4000;
const CarRoutes = require("./routes/carRoutes")
const cors = require('cors');
const path = require('path')
const userRoute = require('./routes/userRoutes')
const cookieParser = require("cookie-parser");


const data_base_url = process.env._mongoDBUrl;

const connectToDataBase = require("../backend/connection");
const { checkForAuthenticationCookie } = require("./middleware/authentication");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());


app.use('/api', CarRoutes);
app.use('/user', userRoute);
app.use(checkForAuthenticationCookie('token'))


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



