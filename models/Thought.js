const { Schema, model, Types } = require('mongoose');


//reaction schema
const reactionSchema = new Schema (
    {
        reactionId: {
            // Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            // Default vaule is set to a new ObjectId
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
           // Set default value to the current timestamp
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
        },
    },
        {   
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

// thought schema

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        // array of nested documents created with the reactionSchema
        reactions: [reactionSchema],
        },
        {
            toJSON: {
                virtuals: true,
                getters: true,
            },
            id: false,
        }
)

// get total count of friends 
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})


// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;