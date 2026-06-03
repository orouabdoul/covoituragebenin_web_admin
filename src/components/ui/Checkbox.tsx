import React from 'react';
import { COLORS, SPACING, FONT_SIZE, LINE_HEIGHT } from '../../constants';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, icon }) => {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: SPACING.sm,
        cursor: 'pointer',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          width: 16,
          height: 16,
          cursor: 'pointer',
          accentColor: COLORS.primary,
        }}
      />
      <span
        style={{
          color: COLORS.gray600,
          fontSize: FONT_SIZE.sm,
          lineHeight: `${LINE_HEIGHT.sm}px`,
        }}
      >
        {label}
      </span>
      {icon && <div style={{ marginLeft: 'auto' }}>{icon}</div>}
    </label>
  );
};
