import React from 'react';
import { LoginHero, LoginForm } from '../components/login';
import { useResponsive } from '../hooks/useResponsive';
import { COLORS } from '../constants';

export const Login: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: '100vh',
        background: COLORS.background,
        width: '100%',
      }}
    >
      <LoginHero />
      <LoginForm />
    </div>
  );
};
