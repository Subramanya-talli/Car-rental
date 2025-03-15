const { validateToken } = require("../service/authentication");

function checkForAuthenticationCookie(cookiee) {
  return (req, res, next) => {
    const token_Value = req.cookies[cookiee];
    if (!token_Value) {
      return next();
    }

    try {
      const userPayLoad = validateToken(token_Value);
      req.user = userPayLoad;
      console.log(req.user)
    } catch (error) {
      console.error(error.message);
    }
    next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
