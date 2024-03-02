const { User, Thought } = require("../models")

module.exports = {
    // Get all thoughts
    getThought(req, res) {
        Thought.find({})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.userId})
        .select("-__v")
        .then((thoughts) => 
            !thought
            ? res.status(404).json ({ message: "No thought found!"})
            : res.json(user)   
        )
        .catch((err) => res.status(500).json(err));
    },

    //Create a thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    //Update a thought


}