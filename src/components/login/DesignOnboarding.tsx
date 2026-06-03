import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Zap, BarChart3, ChevronRight, Check } from 'lucide-react';
import { COLORS, SPACING, BORDER_RADIUS, FONT_WEIGHT } from '../../constants';
import { Button } from '../ui';
import { useResponsive } from '../../hooks/useResponsive';

const STEPS = [
  {
    title: "Sécurité Maximale",
    description: "Surveillez chaque trajet avec un cryptage de bout en bout et un monitoring 24/7 pour protéger vos utilisateurs.",
    icon: <Shield size={48} color={COLORS.primary} />,
    color: "#E8F5E9"
  },
  {
    title: "Performance Zap",
    description: "Une interface optimisée pour une gestion rapide des conducteurs et des litiges en temps réel.",
    icon: <Zap size={48} color="#FACC15" />,
    color: "#FEFCE8"
  },
  {
    title: "Analytique Avancée",
    description: "Visualisez la croissance de votre plateforme avec des graphiques précis et des rapports de revenus détaillés.",
    icon: <BarChart3 size={48} color="#6366F1" />,
    color: "#EEF2FF"
  }
];

export const DesignOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: COLORS.background,
    }}>
      <div style={{
        width: '90%',
        maxWidth: 500,
        padding: isMobile ? SPACING.xl : SPACING.xxl,
        background: COLORS.white,
        borderRadius: BORDER_RADIUS.xl,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div
            key={currentStep}
            style={{ 
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: SPACING.xl,
            }}
          >
            <div style={{
              width: 100,
              height: 100,
              borderRadius: BORDER_RADIUS.full,
              background: STEPS[currentStep].color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: SPACING.md
            }}>
              {STEPS[currentStep].icon}
            </div>

            <div>
              <h2 style={{ 
                fontSize: 28, 
                fontWeight: FONT_WEIGHT.bold, 
                color: COLORS.gray900,
                marginBottom: SPACING.sm 
              }}>
                {STEPS[currentStep].title}
              </h2>
              <p style={{ 
                fontSize: 16, 
                color: COLORS.gray500, 
                lineHeight: '1.6',
                padding: `0 ${SPACING.lg}px` 
              }}>
                {STEPS[currentStep].description}
              </p>
            </div>
        </div>

        {/* Stepper Dots */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 8, 
          margin: `${SPACING.xxl}px 0` 
        }}>
          {STEPS.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === currentStep ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: index === currentStep ? COLORS.primary : COLORS.gray200,
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        <Button onClick={handleNext} icon={currentStep === STEPS.length - 1 ? <Check size={18} /> : <ChevronRight size={18} />}>
          {currentStep === STEPS.length - 1 ? "Commencer maintenant" : "Suivant"}
        </Button>

        {currentStep < STEPS.length - 1 && (
          <button 
            onClick={() => navigate('/dashboard')}
            style={{
              background: 'none',
              border: 'none',
              color: COLORS.gray400,
              fontSize: 14,
              marginTop: SPACING.lg,
              cursor: 'pointer',
              fontWeight: FONT_WEIGHT.regular
            }}
          >
            Passer l'introduction
          </button>
        )}
      </div>
    </div>
  );
};