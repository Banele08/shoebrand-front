import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NikePage from './pages/NikePage'
import PumaPage from './pages/PumaPage'
import Reebok from './pages/Reebok'
// import Header from './components/Header'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/Admin/AdminDashboard'
import PrivateRoute from './components/Auth/PrivateRoute'
import { useEffect } from 'react';
import api from './services/api';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nike" element={<NikePage />} />
          <Route path="/puma" element={<PumaPage />} />
          <Route path="/reebok" element={<ReebokPage />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={
        <PrivateRoute allowedRoles={['superAdmin']}>
          <AdminDashboard />
        </PrivateRoute>
      } />
      
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/brand-dashboard/:brand" element={
    <PrivateRoute allowedRoles={['brandUser']}>
      <BrandUserDashboard />
    </PrivateRoute>
  } />
  <Route path="/admin-dashboard" element={
    <PrivateRoute allowedRoles={['superAdmin']}>
      <SuperAdminDashboard />
    </PrivateRoute>
  } />
</Routes>

export default App