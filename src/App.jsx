import React from "react"; // Import de React
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import des composants de routage
import { AnimatePresence } from "framer-motion"; // Import pour les animations de transition
import Navbar from "./components/Navbar"; // Import de la barre de navigation
import PageTransition from "./components/PageTransition"; // Import du composant de transition
import HomePage from "./HomePage"; // Import de la page d'accueil
import LoginPage from "./pages/LoginPage"; // Import de la page de connexion
import RegisterPage from "./pages/RegisterPage"; // Import de la page d'inscription
import AboutPage from "./pages/AboutPage"; // Import de la page à propos

// Composant pour gérer les transitions animées
const AnimatedRoutes = () => {
  const location = useLocation(); // Hook pour obtenir la localisation actuelle
  
  return (
    <AnimatePresence mode="wait"> {/* Mode wait pour attendre la fin de l'animation sortante */}
      <Routes location={location} key={location.pathname}> {/* Routes avec clé basée sur le chemin */}
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } /> {/* Route principale vers la page d'accueil */}
        <Route path="/login" element={
          <PageTransition>
            <LoginPage />
          </PageTransition>
        } /> {/* Route vers la page de connexion */}
        <Route path="/register" element={
          <PageTransition>
            <RegisterPage />
          </PageTransition>
        } /> {/* Route vers la page d'inscription */}
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } /> {/* Route vers la page à propos */}
        {/* Routes futures : dashboard, profil, offres, etc. */}
      </Routes>
    </AnimatePresence>
  );
};

// Composant principal de l'application
const App = () => {
  return (
    <Router> {/* Router principal de l'application */}
      <Navbar /> {/* Barre de navigation présente sur toutes les pages */}
      <AnimatedRoutes /> {/* Composant avec routes animées */}
    </Router>
  );
};

export default App; // Export du composant App
