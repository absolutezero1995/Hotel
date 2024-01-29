const router = require("express").Router();
const userController = require('../controllers/user-controller')

router.post("//signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/logout", userController.logout);

router.get('/activateLink/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;