import { StrictMode } from 'react'; // Import du mode strict de React
import { createRoot } from 'react-dom/client'; // Import de createRoot pour React 18
import './index.css'; // Import des styles globaux
import App from './App.jsx'; // Import du composant principal App

// Point d'entrée principal de l'application
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Mode strict pour détecter les problèmes */}
    <App /> {/* Rendu du composant principal App qui gère le routage */}
  </StrictMode>,
);
