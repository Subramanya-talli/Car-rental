const jwt = require("jsonwebtoken")
const secretKey = process.env.secret_key

const createToken = function(user)
{
    const payload = {
        id : user._id,
        email : user.email,
        role: user.role
    };

    const token = jwt.sign(payload,secretKey);
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