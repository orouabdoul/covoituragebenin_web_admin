import React from 'react';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, BORDER_RADIUS } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  fullWidth = true,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: fullWidth ? '100%' : 'auto',
        padding: `${SPACING.md}px ${SPACING.xl}px`,
        background: variant === 'primary' 
          ? `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
          : COLORS.white,
        color: variant === 'primary' ? COLORS.white : COLORS.gray900,
        fontSize: FONT_SIZE.base,
        fontWeight: FONT_WEIGHT.semibold,
        lineHeight: `${LINE_HEIGHT.base}px`,
        border: 'none',
        borderRadius: BORDER_RADIUS.md,
        boxShadow: variant === 'primary' 
          ? '0px 0px 27.45px rgba(0, 168, 107, 0.45)'
          : 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.sm,
      }}
    >
      {icon}
      {children}
    </button>
  );
};
