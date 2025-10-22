const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('./config');

// Connect to MongoDB
mongoose.connect(config.MONGO_URL)
  .then(() => console.log('MongoDB Connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true }));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 1 },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['cafea', 'ceai', 'desert', 'snack', 'altceva']
  },
  featured: { type: Boolean, default: false }
}, { timestamps: true }));

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Create admin user
    const hashedPassword = await bcrypt.hash(config.ADMIN_PASS, 10);
    
    await User.findOneAndUpdate(
      { email: config.ADMIN_EMAIL },
      { 
        email: config.ADMIN_EMAIL, 
        password: hashedPassword 
      },
      { upsert: true, new: true }
    );
    
    console.log('Admin user created:', config.ADMIN_EMAIL);

    // Create sample products
    const sampleProducts = [
      {
        name: 'Espresso',
        price: 9,
        description: 'Shot intens de cafea, aromă plină și concentrată.',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
        category: 'cafea',
        featured: true
      },
      {
        name: 'Cappuccino',
        price: 12,
        description: 'Cafea cu spumă de lapte catifelată, echilibru perfect.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        category: 'cafea',
        featured: true
      },
      {
        name: 'Matcha Latte',
        price: 16,
        description: 'Ceai verde vibrant cu lapte cremos, energie naturală.',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop',
        category: 'ceai',
        featured: false
      },
      {
        name: 'Croissant',
        price: 8,
        description: 'Croissant proaspăt cu unt, crocant și fraged.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
        category: 'snack',
        featured: false
      },
      {
        name: 'Tiramisu',
        price: 18,
        description: 'Desert italian clasic cu cafea și mascarpone.',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        category: 'desert',
        featured: true
      },
      {
        name: 'Americano',
        price: 10,
        description: 'Cafea lungă și aromată, perfectă pentru dimineață.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
        category: 'cafea',
        featured: false
      }
    ];

    // Clear existing products
    await Product.deleteMany({});
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    
    console.log('Sample products created:', sampleProducts.length);

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();


