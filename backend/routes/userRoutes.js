const { Router } = require("express");
const { getUser, createNewUser, verifyUser } = require("../controllers/userControllers");
const router = Router();

router.post('/signup', createNewUser)
router.post('/signin', verifyUser)



module.exports = router;