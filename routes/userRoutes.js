const router = require("express").Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController")

// /api/users GET all and POST 
router.route("/").get(getUser).post(createUser);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.router("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;