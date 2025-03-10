const { validateToken } = require("../service/authentication");

function checkForAuthenticationCookie(cookie) {
  return (req, res, next) => {
    const token_Value = req.cookies[cookie];
    console.log("Received Token from Cookie:", token_Value);
    if (!token_Value) {
      return next();
    }
    try {
      const userPayLoad = validateToken(token_Value);
      req.user = userPayLoad;
    } catch (error) {
      console.error("JWT Validation Error:", error.message);
    }
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
