// import mongoose
const { connect, connection } = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

// Connects Mongoose and MongoDB using the connection string
connect(connectionString);

// Export connection 
module.exports = connection;
