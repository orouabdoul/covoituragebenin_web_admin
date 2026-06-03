import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserPlus, MapPin, RefreshCw } from 'lucide-react';
import { COLORS, SPACING, FONT_WEIGHT, BORDER_RADIUS } from '../../constants';

// Données simulées pour le graphique
const growthData = [
  { day: 'Lun', users: 1200 },
  { day: 'Mar', users: 1900 },
  { day: 'Mer', users: 1500 },
  { day: 'Jeu', users: 2200 },
  { day: 'Ven', users: 3000 },
  { day: 'Sam', users: 2400 },
  { day: 'Dim', users: 3400 },
];

// Données simulées pour les activités
const recentActivities = [
  { 
    id: 1, 
    icon: <UserPlus size={16} color={COLORS.success} />, 
    title: 'Koffi Mensah', 
    subtitle: 'Nouvel utilisateur inscrit', 
    time: '2 min', 
    status: COLORS.success 
  },
  { 
    id: 2, 
    icon: <MapPin size={16} color={COLORS.primary} />, 
    title: 'Cotonou → Porto-Novo', 
    subtitle: 'Nouveau trajet publié par Jean-B.', 
    time: '5 min', 
    status: COLORS.primary 
  },
];

export const ActivitySections: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <>
      {/* Section Croissance Utilisateurs */}
      <div style={{
        padding: SPACING.xl,
        background: COLORS.white,
        borderRadius: BORDER_RADIUS.lg,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: `1px solid ${COLORS.gray100}`,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.lg
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: COLORS.gray900, fontSize: 18, fontWeight: FONT_WEIGHT.semibold }}>
            Croissance Utilisateurs
          </div>
          <div style={{ color: COLORS.primary, fontSize: 14, cursor: 'pointer' }}>7 derniers jours</div>
        </div>
        <div style={{ flex: 1, width: '100%', marginTop: 10 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLORS.gray100} />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: COLORS.gray500, fontSize: 12 }} 
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: BORDER_RADIUS.md, 
                  border: 'none', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stroke={COLORS.primary} 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorUsers)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Section Activité Temps Réel */}
      <div style={{
        padding: SPACING.xl,
        background: COLORS.white,
        borderRadius: BORDER_RADIUS.lg,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: `1px solid ${COLORS.gray100}`,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.lg
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: COLORS.gray900, fontSize: 18, fontWeight: FONT_WEIGHT.semibold }}>
            Activité Temps Réel
          </div>
          <div 
            onClick={() => setIsRefreshing(true)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 6, 
              color: COLORS.primary, 
              fontSize: 14, 
              cursor: 'pointer' 
            }}
          >
            <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
            Actualiser
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
          {recentActivities.map((activity) => (
            <div key={activity.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: SPACING.md,
              padding: SPACING.md,
              background: COLORS.gray50,
              borderRadius: BORDER_RADIUS.md,
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: BORDER_RADIUS.full,
                background: COLORS.white,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                {activity.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: FONT_WEIGHT.semibold, fontSize: 14, color: COLORS.gray900 }}>{activity.title}</div>
                <div style={{ fontSize: 12, color: COLORS.gray500 }}>{activity.subtitle}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: COLORS.gray400 }}>{activity.time}</span>
                <div style={{ width: 8, height: 8, borderRadius: 50, background: activity.status }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};