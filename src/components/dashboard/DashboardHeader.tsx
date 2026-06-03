import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import { COLORS, SPACING, FONT_WEIGHT, BORDER_RADIUS } from '../../constants';
import { useResponsive } from '../../hooks/useResponsive';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  const { isMobile } = useResponsive();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div style={{
      alignSelf: 'stretch',
      padding: SPACING.xl,
      background: 'rgba(255, 255, 255, 0.80)',
      backdropFilter: 'blur(5px)',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      borderBottom: `1px solid ${COLORS.gray100}`,
    }}>
      <div style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: isMobile ? 8 : 16
      }}>
        {isMobile && showMobileSearch ? (
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: `${SPACING.xs}px ${SPACING.sm}px`,
            background: COLORS.white,
            borderRadius: BORDER_RADIUS.md,
            border: `1px solid ${COLORS.primary}`,
          }}>
            <Search size={16} color={COLORS.primary} />
            <input
              autoFocus
              type="text"
              placeholder="Recherche..."
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                color: COLORS.gray900, fontSize: 14, width: '100%', fontFamily: 'inherit'
              }}
            />
            <button 
              onClick={() => setShowMobileSearch(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
            >
              <X size={18} color={COLORS.gray400} />
            </button>
          </div>
        ) : (
          <>
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: isMobile ? 12 : 24, display: 'flex', flex: 1 }}>
              {isMobile && (
                <button 
                  onClick={onMenuClick}
                  style={{ 
                    background: 'none', border: 'none', cursor: 'pointer', padding: SPACING.xs,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Menu size={24} color={COLORS.gray900} />
                </button>
              )}
              {!isMobile && (
                <div style={{ color: COLORS.gray900, fontSize: 24, fontWeight: FONT_WEIGHT.bold }}>
                  Dashboard Global
                </div>
              )}
              
              {/* Barre de recherche (Desktop) */}
              {!isMobile && (
                <div style={{
                  padding: `${SPACING.sm}px ${SPACING.md}px`,
                  background: COLORS.white,
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                  borderRadius: BORDER_RADIUS.md,
                  border: `1px solid ${COLORS.gray200}`,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 8,
                  display: 'flex',
                  flex: '0 1 320px',
                }}>
                  <Search size={16} color={COLORS.gray400} />
                  <input 
                    type="text"
                    placeholder="Recherche globale..."
                    style={{
                      flex: 1, border: 'none', outline: 'none', background: 'transparent',
                      color: COLORS.gray900, fontSize: 14, width: '100%', fontFamily: 'inherit'
                    }}
                    onFocus={(e) => (e.currentTarget.parentElement!.style.border = `1px solid ${COLORS.primary}`)}
                    onBlur={(e) => (e.currentTarget.parentElement!.style.border = `1px solid ${COLORS.gray200}`)}
                  />
                </div>
              )}
            </div>

            <div style={{ justifyContent: 'flex-end', alignItems: 'center', gap: isMobile ? 12 : 16, display: 'flex' }}>
              {/* Search Toggle (Mobile) */}
              {isMobile && (
                <button 
                  onClick={() => setShowMobileSearch(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: SPACING.xs }}
                >
                  <Search size={20} color={COLORS.gray600} />
                </button>
              )}

              {/* Notifications */}
              <div style={{ position: 'relative', cursor: 'pointer', display: 'flex' }}>
                <div style={{
                  width: 16, height: 16, right: -4, top: -4, position: 'absolute',
                  background: COLORS.red, borderRadius: 9999, justifyContent: 'center',
                  alignItems: 'center', display: 'flex', zIndex: 1
                }}>
                  <div style={{ color: COLORS.white, fontSize: 10, fontWeight: 'bold' }}>3</div>
                </div>
                <Bell size={20} color={COLORS.gray600} />
              </div>

              {/* Profil Utilisateur */}
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                <img 
                  style={{ width: 32, height: 32, borderRadius: 9999 }} 
                  src="https://placehold.co/32x32" 
                  alt="Admin"
                />
                {!isMobile && (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: COLORS.gray900, fontSize: 14, fontWeight: '600' }}>Admin User</div>
                    <div style={{ color: COLORS.gray500, fontSize: 12 }}>Administrateur</div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};