import React from 'react';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, BORDER_RADIUS } from '../../constants';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.sm }}>
      <label
        style={{
          color: COLORS.gray700,
          fontSize: FONT_SIZE.sm,
          fontWeight: FONT_WEIGHT.semibold,
          lineHeight: `${LINE_HEIGHT.sm}px`,
        }}
      >
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        {leftIcon && (
          <div
            style={{
              position: 'absolute',
              left: SPACING.md,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              color: COLORS.gray400,
            }}
          >
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: `${SPACING.md}px ${rightIcon ? SPACING.xxl + SPACING.md : SPACING.md}px ${SPACING.md}px ${leftIcon ? SPACING.xxl + SPACING.md : SPACING.md}px`,
            fontSize: FONT_SIZE.base,
            lineHeight: `${LINE_HEIGHT.base}px`,
            color: COLORS.black,
            backgroundColor: COLORS.white,
            border: `1px solid ${COLORS.gray300}`,
            borderRadius: BORDER_RADIUS.md,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {rightIcon && (
          <div
            style={{
              position: 'absolute',
              right: SPACING.md,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              color: COLORS.gray400,
              cursor: 'pointer',
            }}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};
