const jwt = require("jsonwebtoken");
const secretKey = process.env.secret_key;

const createToken = function (user) {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, secretKey);
  return token;
};

function validateToken(token) {
    try {
      const payload = jwt.verify(token, secretKey); // Use correct secret
      console.log("✅ Successfully Decoded Token:", payload); // 🔥 Check if `id` is included
      return payload;
    } catch (error) {
      console.error("❌ Token Validation Failed:", error.message);
      return null;
    }
  }

module.exports = {
  createToken,
  validateToken,
};
