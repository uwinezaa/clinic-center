const mongoose = require('mongoose');
const Doctor = require('./backend/models/Doctor');
const Service = require('./backend/models/Service');
const Medicine = require('./backend/models/Medicine');
mongoose.connect('mongodb://localhost:27017/clinic_center');

mongoose.connect('mongodb://localhost:27017/clinic_center')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Doctor.deleteMany({});
    await Service.deleteMany({});
    await Medicine.deleteMany({});

    // Seed Doctors
    const doctors = [
      { name: 'Dr. Bizumuremyi Mugisha Yves Constantin', specialty: 'Urologist', hospital: 'CHUB' },
      { name: 'Dr. David Hakizimana', specialty: 'Neurosurgeon / Brain Specialist', hospital: 'Frontier Diagnostic' },
      { name: 'Prof. Thahir Obeid', specialty: 'Neurologist', hospital: 'Frontier Diagnostic' },
      { name: 'Dr. Kabasinga Bana Marie Florence', specialty: 'Consultant Internal Medicine', hospital: 'Nyarugenge District Hospital' },
      { name: 'Dr. Butoyi Alphonse', specialty: "Women's Healthcare", hospital: 'Legacy Clinics' },
      { name: 'Dr. Eric Rutaganda', specialty: 'Internist', hospital: 'Legacy Clinics' }
    ];
    
    await Doctor.insertMany(doctors);
    console.log('Doctors seeded');

    // Seed Services
    const services = [
      {
        name: 'Urology Services',
        description: 'Complete urology care including diagnosis and treatment',
        diseases: ['Prostate issues', 'Kidney stones', 'Urinary infections'],
        treatments: ['Surgery', 'Laser therapy', 'Medications']
      },
      {
        name: 'Neurology Treatment',
        description: 'Advanced neurological care for brain and nervous system',
        diseases: ['Headaches', 'Epilepsy', 'Stroke', 'Parkinson'],
        treatments: ['Medication management', 'Therapy', 'Surgery']
      },
      {
        name: 'Internal Medicine',
        description: 'Comprehensive adult healthcare services',
        diseases: ['Diabetes', 'Hypertension', 'Heart disease'],
        treatments: ['Chronic disease management', 'Preventive care']
      },
      {
        name: "Women's Healthcare",
        description: 'Complete gynecological and obstetric care',
        diseases: ['Pregnancy issues', 'Menstrual disorders'],
        treatments: ['Prenatal care', 'Gynecology exams']
      }
    ];
    
    await Service.insertMany(services);
    console.log('Services seeded');

    // Seed Medicines
    const medicines = [
      {
        name: 'Paracetamol',
        description: 'Pain reliever and fever reducer',
        priceRange: '$3 - $8',
        diseases: ['Fever', 'Headache', 'Pain']
      },
      {
        name: 'Amoxicillin',
        description: 'Antibiotic for bacterial infections',
        priceRange: '$10 - $25',
        diseases: ['Infections', 'Respiratory illness']
      },
      {
        name: 'Losartan',
        description: 'Blood pressure medication',
        priceRange: '$15 - $35',
        diseases: ['Hypertension']
      },
      {
        name: 'Metformin',
        description: 'Diabetes management medication',
        priceRange: '$8 - $20',
        diseases: ['Diabetes']
      }
    ];

    await Medicine.insertMany(medicines);
    console.log('Medicines seeded');

    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
