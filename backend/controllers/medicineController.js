const Medicine = require('../models/Medicine');

// CRUD for medicines
exports.getMedicines = async (req, res) => {
  try {
    const { disease } = req.query;
    let query = {};
    if (disease) {
      query.diseases = { $in: [new RegExp(disease, 'i')] };
    }
    const medicines = await Medicine.find(query);
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMedicine = async (req, res) => {
  const medicine = new Medicine(req.body);
  try {
    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
    res.json(medicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
    res.json({ message: 'Medicine deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
