const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

// Public routes
router.get('/', getDoctors);
router.get('/:id', getDoctorById);

// Admin routes (add auth middleware later)
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;
