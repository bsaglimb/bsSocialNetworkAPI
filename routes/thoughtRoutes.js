const router = require("express").Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    DeleteReaction
} = require("../controllers/thoughtController")

// /api/thought GET all and POST 
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by Id
router.route("/:thoughtId")
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

