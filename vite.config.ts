import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ou votre plugin react actuel

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 1. Redirige tous les imports de 'react-native' vers 'react-native-web'
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    // 2. Empêche Vite d'analyser le dossier 'react-native' natif qui contient du Flow
    exclude: ['react-native'],
  },
  define: {
    // 3. Optionnel mais recommandé : simule les variables globales attendues par React Native
    global: 'window',
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
});