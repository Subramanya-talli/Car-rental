const { Router } = require("express");
const { getUser, createNewUser } = require("../controllers/userControllers");
const router = Router();

router.post('/signup', createNewUser)
router.get('/signin', getUser)


module.exports = router;