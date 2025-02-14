const mongoose = require("mongoose");

function connectToDataBase(data_base_url)
{
    return mongoose.connect(data_base_url);
}


module.exports = connectToDataBase;