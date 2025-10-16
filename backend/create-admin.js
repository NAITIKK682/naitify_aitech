require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const createAdminUser = async () => {
  try {
    await connectDB();

    // Delete existing admin
    await User.deleteOne({ email: "naitify.aitech@gmail.com" });

    // Hash the password
    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    // Create admin
    const user = await User.create({
      name: "Naitify Admin",
      email: "naitify.aitech@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin user created:", {
      name: user.name,
      email: user.email,
      role: user.role,
    });

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

createAdminUser();
