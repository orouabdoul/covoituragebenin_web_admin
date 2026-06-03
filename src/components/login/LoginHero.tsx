import React from 'react';
import { TrendingUp, Shield, Activity, Lock, Eye, Car } from 'lucide-react';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, BORDER_RADIUS } from '../../constants';
import { StatCard } from '../ui';
import { useResponsive } from '../../hooks/useResponsive';

export const LoginHero: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();

  const stats = [
    {
      icon: <Activity size={18} />,
      value: '24,573',
      label: 'Utilisateurs actifs',
      badge: 'LIVE',
      badgeColor: COLORS.gray400,
    },
    {
      icon: <TrendingUp size={18} />,
      value: '1,847',
      label: 'Trajets quotidiens',
      badge: 'TODAY',
      badgeColor: COLORS.gray400,
    },
    {
      icon: <Shield size={18} />,
      value: '99.9%',
      label: 'Transactions sécurisées',
      badge: 'SECURE',
      badgeColor: COLORS.gray400,
    },
    {
      icon: <TrendingUp size={18} />,
      value: '100%',
      label: 'Disponibilité plateforme',
      badge: 'UP',
      badgeColor: COLORS.primaryLight,
    },
  ];

  return (
    <div
      style={{
        width: isMobile ? '100%' : isTablet ? '50%' : 720,
        minHeight: isMobile ? '40vh' : '100vh',
        padding: isMobile ? `${SPACING.xxl}px ${SPACING.xl}px` : SPACING.xxxl,
        background: COLORS.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        textAlign: isMobile ? 'center' : 'left',
        gap: isMobile ? SPACING.xl : SPACING.xxl,
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 64,
          height: 64,
          padding: SPACING.md,
          background: COLORS.primary,
          boxShadow: '0px 0px 20.56px rgba(0, 168, 107, 0.31)',
          borderRadius: BORDER_RADIUS.lg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Car size={32} color={COLORS.white} strokeWidth={2.5} />
      </div>

      {/* Title */}
      <div>
        <h1
          style={{
            margin: 0,
            color: COLORS.white,
            fontSize: isMobile ? 42 : FONT_SIZE.xxxl,
            fontWeight: FONT_WEIGHT.bold,
            lineHeight: `${FONT_SIZE.xxxl}px`,
          }}
        >
          MINIZON
        </h1>
      </div>

      {/* Subtitle */}
      <div>
        <h2
          style={{
            margin: 0,
            color: COLORS.primary,
            fontSize: FONT_SIZE.xl,
            fontWeight: FONT_WEIGHT.semibold,
            lineHeight: `${LINE_HEIGHT.xl}px`,
          }}
        >
          Admin Platform
        </h2>
      </div>

      {/* Description */}
      <div>
        <p
          style={{
            margin: 0,
            maxWidth: 448,
            color: COLORS.gray300,
            fontSize: FONT_SIZE.lg,
            lineHeight: `${LINE_HEIGHT.lg}px`,
          }}
        >
          Centre intelligent de supervision mobilité africaine
        </p>
      </div>

      {/* Tagline */}
      <div>
        <p
          style={{
            margin: 0,
            maxWidth: 448,
            color: COLORS.gray400,
            fontSize: FONT_SIZE.sm,
            lineHeight: `${LINE_HEIGHT.sm}px`,
          }}
        >
          Plateforme sécurisée de gestion opérationnelle
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: SPACING.md,
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Security Badges */}
      <div
        style={{
          display: 'flex',
          gap: SPACING.md,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm }}>
          <Lock size={12} color={COLORS.primary} />
          <span
            style={{
              color: COLORS.gray300,
              fontSize: FONT_SIZE.xs,
              lineHeight: `${LINE_HEIGHT.xs}px`,
            }}
          >
            SSL Sécurisé
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm }}>
          <Eye size={12} color={COLORS.primary} />
          <span
            style={{
              color: COLORS.gray300,
              fontSize: FONT_SIZE.xs,
              lineHeight: `${LINE_HEIGHT.xs}px`,
            }}
          >
            Monitoring 24/7
          </span>
        </div>
      </div>
    </div>
  );
};
