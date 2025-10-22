const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true }));

async function createAdminUser() {
  try {
    // Check if admin user already exists
    const existingUser = await User.findOne({ email: 'admin@enjoycafe.ro' });
    if (existingUser) {
      console.log('Admin user already exists!');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      email: 'admin@enjoycafe.ro',
      password: hashedPassword
    });

    await adminUser.save();
    console.log('Admin user created successfully!');
    console.log('Email: admin@enjoycafe.ro');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdminUser();
