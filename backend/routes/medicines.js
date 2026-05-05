const express = require('express');
const router = express.Router();
const { getMedicines, getMedicineById, createMedicine, updateMedicine, deleteMedicine } = require('../controllers/medicineController');

// Public routes
router.get('/', getMedicines);
router.get('/:id', getMedicineById);

// Admin routes
router.post('/', createMedicine);
router.put('/:id', updateMedicine);
router.delete('/:id', deleteMedicine);

module.exports = router;
