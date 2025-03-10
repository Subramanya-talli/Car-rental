const jwt = require("jsonwebtoken")
const secretKey = process.env.secret_key


const createToken = function(user)
{
    const payload = {
        id : user._id,
        name : user.name,
        email : user.email,
        role: user.role,
    };

    const token = jwt.sign(payload, secretKey);
    console.log("Generated JWT:", token);
    return token;
}

const validateToken = function(token)
{
    const payload = jwt.verify(token, secretKey);
    return payload;
} 

module.exports = {
    createToken,
    validateToken
}