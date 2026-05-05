const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/clinic_center')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/services', require('./routes/services'));
app.use('/api/medicines', require('./routes/medicines'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => {
  res.json({ message: 'Clinic Center API running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
