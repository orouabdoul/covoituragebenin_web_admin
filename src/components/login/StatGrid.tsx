import React from 'react';
import { Users, Car, MapPin, Shield, AlertCircle, CreditCard, DollarSign, Activity } from 'lucide-react';
import { SPACING } from '../../constants';
import { StatCard } from '../ui';
import { useResponsive } from '../../hooks/useResponsive';

export const StatGrid: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();

  const stats = [
    { icon: <Users size={20} color="#2563EB" />, value: '24,856', label: 'Utilisateurs Totaux', badge: '+12.5%', color: '#DBEAFE' },
    { icon: <Car size={20} color="#00A86B" />, value: '3,247', label: 'Conducteurs Actifs', badge: '+8.2%', color: '#DCFCE7' },
    { icon: <MapPin size={20} color="#9333EA" />, value: '1,842', label: 'Trajets Aujourd\'hui', badge: '+24.1%', color: '#F3E8FF' },
    { icon: <DollarSign size={20} color="#F4B400" />, value: '2.4M FCFA', label: 'Revenus Plateforme', badge: '+18.7%', color: '#FEF9C3' },
    { icon: <Activity size={20} color="#4F46E5" />, value: '21,609', label: 'Passagers Actifs', badge: '+15.3%', color: '#E0E7FF' },
    { icon: <CreditCard size={20} color="#0D9488" />, value: '4,521', label: 'Transactions Aujourd\'hui', badge: '+31.2%', color: '#CCFBF1' },
    { icon: <AlertCircle size={20} color="#E53935" />, value: '8', label: 'Litiges Ouverts', badge: '8 Ouverts', badgeColor: "#E53935", color: '#FEE2E2' },
    { icon: <Shield size={20} color="#00A86B" />, value: '4.8/5', label: 'Taux Satisfaction', badge: 'Excellent', color: '#DCFCE7' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'),
      gap: SPACING.lg,
      width: '100%',
    }}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};