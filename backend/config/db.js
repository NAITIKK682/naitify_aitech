const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Choose URI based on environment
    const mongoUri =
      process.env.NODE_ENV === 'production'
        ? process.env.MONGO_URI_ATLAS
        : process.env.MONGO_URI_LOCAL;

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,           // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Try for 5 seconds
      socketTimeoutMS: 45000,    // Close sockets after 45s of inactivity
      bufferCommands: false,     // Disable mongoose buffering
    });

    console.log(`MongoDB connected successfully to ${process.env.NODE_ENV === 'production' ? 'Atlas' : 'local'}: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
