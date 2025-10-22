module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/enjoycafe',
  JWT_SECRET: process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@enjoycafe.ro',
  ADMIN_PASS: process.env.ADMIN_PASS || 'admin123!',
  NODE_ENV: process.env.NODE_ENV || 'development'
};


