import React from 'react';

interface IconProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ children, size = 16, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
      }}
    >
      {children}
    </div>
  );
};
