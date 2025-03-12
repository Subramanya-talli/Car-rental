const {validateToken} = require("../service/authentication")


function checkForAuthenticationCookie(cookie) {
  return (req, res, next) => {

    console.log("🔍 Middleware is running...");
    console.log(req.cookies)
    const token_Value = req.cookies[cookie];
    console.log(token_Value)
    if (!token_Value) {
      return next();
    }

    try {
      const userPayLoad = validateToken(token_Value);
      console.log("✅ Decoded Token Payload:", userPayLoad);
      req.user = userPayLoad;
    } catch (error) {
      console.error("❌ JWT Validation Error:", error.message);
    }
    
    next();
  };
}



module.exports = {
  checkForAuthenticationCookie,
};
