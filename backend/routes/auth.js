const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Simple demo login (in production use proper auth middleware)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Demo credentials
    if (email === 'admin@cliniccenter.com' && password === 'admin123') {
      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET || 'fallback_secret');
      res.json({ token, user: { email, role: 'admin' } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
