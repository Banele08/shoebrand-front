import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NikePage from './pages/NikePage';
import PumaPage from './pages/PumaPage';
import ReebokPage from './pages/ReebokPage';
import AdminHeader from './components/Header/AdminHeader';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import BrandUserDashboard from './Dashboard/BrandUserDashboard';
import SuperAdminDashboard from './Dashboard/SuperAdminDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard'
import PrivateRoute from './components/Auth/PrivateRoute'
import { useEffect } from 'react';
import api from './services/api';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nike" element={<NikePage />} />
            <Route path="/puma" element={<PumaPage />} />
            <Route path="/reebok" element={<ReebokPage />} />
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
        </BrowserRouter>
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