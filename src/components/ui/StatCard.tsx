import React, { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS, FONT_WEIGHT } from '../../constants';
import { useResponsive } from '../../hooks/useResponsive';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  badge?: string;
  badgeColor?: string;
  color?: string; // Couleur de fond de l'icône
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label, badge, badgeColor, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: isMobile ? SPACING.md : SPACING.xl,
        background: COLORS.white,
        borderRadius: BORDER_RADIUS.lg,
        // Ombre portée multi-couches pour plus de réalisme
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: `1px solid ${isHovered ? COLORS.primary + '33' : COLORS.gray100}`,
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.md,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ 
          width: 48, 
          height: 48, 
          background: color || COLORS.gray50, 
          borderRadius: BORDER_RADIUS.md,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {icon}
        </div>
        {badge && (
          <div style={{ 
            padding: '4px 10px', 
            background: badgeColor ? `${badgeColor}15` : '#F0FDF4', 
            borderRadius: BORDER_RADIUS.full,
          }}>
            <span style={{ 
              color: badgeColor || '#16A34A', 
              fontSize: 12, 
              fontWeight: FONT_WEIGHT.semibold 
            }}>
              {badge}
            </span>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ color: COLORS.gray500, fontSize: 14, fontWeight: FONT_WEIGHT.regular }}>
          {label}
        </span>
        <span style={{ color: COLORS.gray900, fontSize: 28, fontWeight: '700' }}>
          {value}
        </span>
      </div>
    </div>
  );
};