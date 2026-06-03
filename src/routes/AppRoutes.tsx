import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages';
import Dashboard from '../components/dashboard/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Route de connexion */}
      <Route path="/login" element={<Login />} />
      {/* Route du Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Redirection automatique vers login si la route est "/" ou inconnue */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
