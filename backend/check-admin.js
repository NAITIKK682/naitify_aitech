// create-admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User'); // Make sure this path is correct

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const createAdmin = async () => {
  const password = 'Admin@123'; // Set your desired admin password
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new User({
    name: 'Naitify Admin',
    email: 'naitify.aitech@gmail.com',
    password: hashedPassword,
    role: 'admin',
    isActive: true
  });

  await admin.save();
  console.log('Admin created/updated with hashed password:', {
    name: admin.name,
    email: admin.email,
    role: admin.role
  });

  mongoose.connection.close();
};

createAdmin();
