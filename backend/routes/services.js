const express = require('express');
const router = express.Router();
const { getServices, getServiceById, createService, updateService, deleteService } = require('../controllers/serviceController');

// Public routes
router.get('/', getServices);
router.get('/:id', getServiceById);

// Admin routes
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;
