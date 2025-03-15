const { Router } = require("express");
const { getUser, createNewUser, verifyUser, userLogout } = require("../controllers/userControllers");
const router = Router();

router.post('/signup', createNewUser)
router.post('/signin', verifyUser)
router.get('/logout', userLogout);
router.get('/:id', getUser);


module.exports = router;