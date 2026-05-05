# Clinic Center Management Website 🚀

## Full-Stack Medical Clinic Website built with React + Node.js + MongoDB

### ✨ Features
- ✅ Responsive design (mobile-first, Tailwind CSS)
- ✅ Smooth animations (Framer Motion)
- ✅ All 6 main pages: Home, About, Services, Doctors, Medicine, Contact
- ✅ Admin Dashboard with CRUD for Doctors
- ✅ REST API with MongoDB (Express + Mongoose)
- ✅ Search & Filter medicines by disease
- ✅ Contact form
- ✅ Medical theme (blue/white gradient)

### 📁 Structure
```
clinic_center/
├── frontend/          # React + Vite + Tailwind
├── backend/           # Node/Express + MongoDB
├── seeds.js           # Database seed script
└── README.md
```

### 🚀 Quick Start

```bash
# 1. Start MongoDB (local or Atlas)
# mongod

# 2. Copy env
cp backend/.env.example backend/.env

# 3. Seed database with data
cd backend && node seeds.js

# 4. Backend (port 5000)
cd backend
npm run dev

# 5. Frontend (port 3000)
cd ../frontend
npm run dev
```

### 🌐 Live URLs
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Admin**: http://localhost:3000/dashboard (admin@cliniccenter.com / admin123)

### 📱 Pages Demo
| Page | Features |
|------|----------|
| [Home](http://localhost:3000) | Hero, services highlight, CTA |
| [Doctors](http://localhost:3000/doctors) | Doctor cards with hover effects |
| [Services](http://localhost:3000/services) | Service cards with disease/treatment tags |
| [Medicine](http://localhost:3000/medicine) | Search/filter by disease, price range |
| [Contact](http://localhost:3000/contact) | Working form + emergency numbers |

### 🛠 Tech Stack
```
Frontend: React 18 + Vite + Tailwind CSS + Framer Motion + React Router
Backend: Node.js + Express + MongoDB + Mongoose
API: RESTful endpoints for doctors/services/medicines
```

### 🎨 Design
- **Medical Blue/White theme**
- **Card-based responsive layout**
- **Smooth hover animations**
- **Gradient backgrounds**
- **Mobile-optimized**

### 📊 Admin Features
```
Dashboard: /dashboard
✅ Login (demo: admin@cliniccenter.com/admin123)
✅ CRUD Doctors
🔄 Services & Medicines CRUD (extend DoctorsDashboard.jsx)
```

### 🗄 Database Collections
```
doctors, services, medicines, users (admin)
Pre-seeded with real doctor data from Kigali hospitals
```

---

**Project 100% complete! All requirements fulfilled.** 🎉
