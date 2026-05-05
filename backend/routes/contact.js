const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Simple contact form handler (could integrate with email service)
  const { name, email, message } = req.body;
  console.log('Contact form:', { name, email, message });
  res.json({ message: 'Message received! We will contact you soon.' });
});

module.exports = router;
