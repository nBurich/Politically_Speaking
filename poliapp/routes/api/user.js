const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// find user by login info
router
  .route("/")
  .get(loginController.login);
  .post()

module.exports = router;

