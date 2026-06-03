import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Car, UserCircle, MapPin, 
  CalendarCheck, CreditCard, AlertCircle, Headphones, 
  Bell, Settings, LogOut, CarFront
} from 'lucide-react';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, BORDER_RADIUS } from '../../constants';
import { useResponsive } from '../../hooks/useResponsive';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Utilisateurs', path: '/users' },
  { icon: Car, label: 'Conducteurs', path: '/drivers' },
  { icon: UserCircle, label: 'Passagers', path: '/passengers' },
  { icon: MapPin, label: 'Trajets', path: '/rides' },
  { icon: CalendarCheck, label: 'Réservations', path: '/bookings' },
  { icon: CreditCard, label: 'Paiements', path: '/payments' },
  { icon: AlertCircle, label: 'Litiges', path: '/disputes' },
  { icon: Headphones, label: 'Support', path: '/support' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Settings, label: 'Paramètres', path: '/settings' },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onClose }) => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Overlay pour fermer le menu sur mobile */}
      {isMobile && isMobileOpen && (
        <div 
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999,
            backdropFilter: 'blur(2px)'
          }} 
        />
      )}
      
      <div style={{
        width: 256,
        height: '100vh',
        background: COLORS.primary,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: isMobile ? (isMobileOpen ? 0 : -256) : 0,
        top: 0,
        zIndex: 1000,
        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isMobile && isMobileOpen ? '10px 0 15px -3px rgba(0,0,0,0.1)' : 'none'
      }}>
      {/* Logo Section */}
      <div style={{
        padding: SPACING.xl,
        borderBottom: `1px solid rgba(255,255,255,0.1)`,
        display: 'flex',
        alignItems: 'center',
        gap: SPACING.md
      }}>
        <div style={{
          padding: SPACING.xs,
          background: COLORS.white,
          borderRadius: BORDER_RADIUS.md,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CarFront size={24} color={COLORS.primary} />
        </div>
        <div>
          <div style={{ color: COLORS.white, fontSize: FONT_SIZE.lg, fontWeight: FONT_WEIGHT.bold }}>MINIZON</div>
          <div style={{ color: COLORS.gray300, fontSize: FONT_SIZE.xs }}>Admin Dashboard</div>
        </div>
      </div>

      {/* Navigation Items */}
      <div style={{ flex: 1, padding: SPACING.md, overflowY: 'auto' }}>
        {NAV_ITEMS.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredIndex === index;
          return (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                navigate(item.path);
                if (isMobile) onClose?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING.md,
                padding: `${SPACING.md}px ${SPACING.lg}px`,
                borderRadius: BORDER_RADIUS.md,
                background: isActive ? 'rgba(255,255,255,0.15)' : isHovered ? 'rgba(255,255,255,0.05)' : 'transparent',
                cursor: 'pointer',
                marginBottom: SPACING.xs,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered ? 'translateX(4px)' : 'none'
              }}
            >
              <item.icon size={20} color={isActive || isHovered ? COLORS.white : COLORS.gray300} />
              <span style={{ 
                color: isActive || isHovered ? COLORS.white : COLORS.gray300,
                fontSize: FONT_SIZE.base,
                fontWeight: isActive ? FONT_WEIGHT.semibold : FONT_WEIGHT.regular
              }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Logout Section */}
      <div 
        onClick={() => navigate('/login')}
        style={{ 
          padding: SPACING.lg, 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: 'auto',
          cursor: 'pointer'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: SPACING.md,
          padding: SPACING.md,
          borderRadius: BORDER_RADIUS.md,
          color: COLORS.gray300,
          transition: 'all 0.2s'
        }}>
          <LogOut size={20} />
          <span style={{ fontSize: FONT_SIZE.sm, fontWeight: FONT_WEIGHT.semibold }}>Déconnexion</span>
        </div>
      </div>
    </div>
    </>
  );
};