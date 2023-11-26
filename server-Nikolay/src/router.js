const router = require("express").Router();

const UserController = require("./controllers/userController")
 

 router.use("/users", UserController);

// router.get("*", (req, res) => res.redirect("/404"));

module.exports = router;
