import React, { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { COLORS, SPACING } from '../../constants';
import { Sidebar } from '../login/Sidebar';
import { DashboardHeader } from './DashboardHeader';
import { StatGrid } from '../login/StatGrid';
import { ActivitySections } from '../login/ActivitySections';
 

const Dashboard: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarWidth = isMobile ? 0 : 256;

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      background: COLORS.background,
      flexDirection: 'row',
      overflow: 'hidden' // Empêche le scroll sur le body pour le gérer dans le main
    }}>
      <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main style={{ 
        flex: 1, 
        marginLeft: sidebarWidth,
        width: isMobile ? '100%' : `calc(100% - ${sidebarWidth}px)`,
        height: '100vh',
        overflowY: 'auto', // Permet de scroller le contenu du dashboard
        display: 'flex',
        flexDirection: 'column'
      }}>
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        
        <div style={{ 
          padding: isMobile ? SPACING.md : SPACING.xl,
          display: 'flex',
          flexDirection: 'column',
          gap: SPACING.xl
        }}>
          {/* Welcome Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: isMobile ? 20 : 24, 
                fontWeight: '700', 
                color: COLORS.gray900 
              }}>
                Dashboard Global
              </h1>
              <p style={{ color: COLORS.gray500, margin: 0, fontSize: 14 }}>
                Bienvenue, voici un aperçu de l'activité MINIZON.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <StatGrid />

          {/* Main Content Grid (Charts & Lists) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet || isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: SPACING.xl,
            paddingBottom: SPACING.xl // Espace de sécurité en bas
          }}>
             {/* Ici on placerait les graphiques refactorisés */}
             <ActivitySections />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;