import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, LogIn, HelpCircle, FileText, Shield } from 'lucide-react';
import { COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, BORDER_RADIUS } from '../../constants';
import { Input, Checkbox, Button } from '../ui';
import { useResponsive } from '../../hooks/useResponsive';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('admin@minizon.com');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log('Connexion en cours...');
    navigate('/onboarding');
  };

  return (
    <div
      style={{
        width: isMobile ? '100%' : '50%',
        minHeight: isMobile ? 'auto' : '100vh',
        padding: isMobile ? `${SPACING.xxl}px ${SPACING.xl}px` : SPACING.xl,
        background: COLORS.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 448,
          display: 'flex',
          flexDirection: 'column',
          gap: SPACING.lg,
        }}
      >
        {/* Form Card */}
        <div
          style={{
            padding: SPACING.xl,
            background: COLORS.white,
            boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
            borderRadius: BORDER_RADIUS.xl,
            border: `1px solid ${COLORS.gray100}`,
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING.xl,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: SPACING.sm,
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                margin: 0,
                color: COLORS.gray900,
                fontSize: FONT_SIZE.xxl,
                fontWeight: FONT_WEIGHT.bold,
                lineHeight: `${LINE_HEIGHT.xxl}px`,
              }}
            >
              Connexion
              <br />
              Administrateur
            </h1>
            <p
              style={{
                margin: 0,
                color: COLORS.gray600,
                fontSize: FONT_SIZE.base,
                lineHeight: `${LINE_HEIGHT.base}px`,
              }}
            >
              Accédez au centre de contrôle sécurisé MINIZON
            </p>
          </div>

          {/* Form Fields */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }} 
            style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}
          >
            <Input
              label="Email administrateur"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="admin@minizon.com"
              leftIcon={<Mail size={16} />}
            />

            <Input
              label="Mot de passe sécurisé"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••••••"
              leftIcon={<Lock size={16} />}
              rightIcon={<Eye size={20} />}
            />

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  label="Se souvenir de moi"
                  checked={rememberMe}
                  onChange={setRememberMe}
                />
                <a
                  href="#"
                  style={{
                    color: COLORS.primary,
                    fontSize: FONT_SIZE.sm,
                    lineHeight: `${LINE_HEIGHT.sm}px`,
                    textDecoration: 'none',
                  }}
                >
                  Mot de passe oublié?
                </a>
              </div>

              <Checkbox
                label="Authentification 2FA"
                checked={twoFactor}
                onChange={setTwoFactor}
                icon={<Shield size={16} color={COLORS.primary} />}
              />
            </div>

            {/* Login Button */}
            <Button 
              onClick={() => handleLogin()} 
              icon={<LogIn size={16} />}
            >
              Se connecter
            </Button>

            {/* Footer Links */}
            <div
              style={{
                paddingTop: SPACING.md,
                borderTop: `1px solid ${COLORS.gray100}`,
                display: 'flex',
                justifyContent: 'center',
                gap: SPACING.lg,
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: SPACING.xs,
                  color: COLORS.gray600,
                  fontSize: FONT_SIZE.sm,
                  lineHeight: `${LINE_HEIGHT.sm}px`,
                  textDecoration: 'none',
                }}
              >
                <HelpCircle size={14} />
                Support technique
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: SPACING.xs,
                  color: COLORS.gray600,
                  fontSize: FONT_SIZE.sm,
                  lineHeight: `${LINE_HEIGHT.sm}px`,
                  textDecoration: 'none',
                }}
              >
                <FileText size={14} />
                Politique sécurité
              </a>
            </div>
          </form>
        </div>

        {/* Security Indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: SPACING.lg,
            flexWrap: 'wrap',
          }}
        >
          {['SSL Sécurisé', 'Protection données', 'Connexion chiffrée'].map((text, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING.xs,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: COLORS.success,
                  borderRadius: BORDER_RADIUS.full,
                  opacity: 0.54 + index * 0.04,
                }}
              />
              <span
                style={{
                  color: COLORS.gray500,
                  fontSize: FONT_SIZE.xs,
                  lineHeight: `${LINE_HEIGHT.xs}px`,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
