import React, { useState } from 'react'; // Import de React et du hook useState
import { Link, useLocation } from 'react-router-dom'; // Import des composants de navigation
import { motion, AnimatePresence } from 'framer-motion'; // Import de Framer Motion pour les animations
import './Navbar.css'; // Import du fichier CSS pour les styles

// Composant de barre de navigation
function Navbar() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu mobile
  const location = useLocation(); // Hook pour obtenir la route actuelle

  // Fonction pour basculer l'affichage du menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
  };

  // Fonction pour fermer le menu mobile lors d'un clic sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false); // Ferme le menu
  };

  // Fonction pour vérifier si un lien est actif
  const isActiveLink = (path) => {
    return location.pathname === path; // Retourne true si le chemin correspond à la route actuelle
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }} // Commence en haut de l'écran
      animate={{ y: 0 }} // Se déplace à sa position normale
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation fluide
    > {/* Conteneur principal de la navbar */}
      <div className="navbar-container"> {/* Conteneur avec largeur maximale */}
        
        {/* Logo et nom du site */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Légère augmentation au survol
          whileTap={{ scale: 0.95 }} // Légère réduction au clic
        >
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <motion.span 
              className="logo-icon"
              animate={{ rotate: [0, 5, -5, 0] }} // Animation de rotation subtile
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} // Répète toutes les 5 secondes
            >
              💼
            </motion.span> {/* Icône du logo */}
            <span className="logo-text">JobStage</span> {/* Nom du site */}
          </Link>
        </motion.div>

        {/* Menu de navigation pour desktop */}
        <div className="navbar-menu"> {/* Conteneur des liens de navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Commence invisible et en haut
            animate={{ opacity: 1, y: 0 }} // Devient visible à sa position
            transition={{ delay: 0.2, duration: 0.5 }} // Animation avec délai
          >
            <Link 
              to="/" 
              className={`navbar-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Accueil {/* Lien vers la page d'accueil */}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Commence invisible et en haut
            animate={{ opacity: 1, y: 0 }} // Devient visible à sa position
            transition={{ delay: 0.3, duration: 0.5 }} // Animation avec délai plus long
          >
            <Link 
              to="/about" 
              className={`navbar-link ${isActiveLink('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              À propos {/* Lien vers la page à propos */}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Commence invisible et en haut
            animate={{ opacity: 1, y: 0 }} // Devient visible à sa position
            transition={{ delay: 0.4, duration: 0.5 }} // Animation avec délai plus long
          >
            <Link 
              to="/login" 
              className={`navbar-link ${isActiveLink('/login') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Connexion {/* Lien vers la page de connexion */}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Commence invisible et en haut
            animate={{ opacity: 1, y: 0 }} // Devient visible à sa position
            transition={{ delay: 0.5, duration: 0.5 }} // Animation avec délai plus long
            whileHover={{ scale: 1.05 }} // Animation au survol
            whileTap={{ scale: 0.95 }} // Animation au clic
          >
            <Link 
              to="/register" 
              className={`navbar-link navbar-cta ${isActiveLink('/register') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Inscription {/* Lien vers la page d'inscription (bouton principal) */}
            </Link>
          </motion.div>
        </div>

        {/* Bouton hamburger pour mobile */}
        <button 
          className={`navbar-hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
        >
          <span className="hamburger-line"></span> {/* Première ligne du hamburger */}
          <span className="hamburger-line"></span> {/* Deuxième ligne du hamburger */}
          <span className="hamburger-line"></span> {/* Troisième ligne du hamburger */}
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="navbar-mobile"
              initial={{ x: "100%", opacity: 0 }} // Commence à droite et invisible
              animate={{ x: 0, opacity: 1 }} // Glisse vers la position normale
              exit={{ x: "100%", opacity: 0 }} // Sort vers la droite
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animation élastique
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }} // Commence en bas et invisible
                animate={{ y: 0, opacity: 1 }} // Monte à sa position
                transition={{ delay: 0.1 }} // Petit délai
              >
                <Link 
                  to="/" 
                  className={`navbar-mobile-link ${isActiveLink('/') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="mobile-link-icon">🏠</span> {/* Icône pour mobile */}
                  Accueil {/* Lien vers la page d'accueil */}
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }} // Commence en bas et invisible
                animate={{ y: 0, opacity: 1 }} // Monte à sa position
                transition={{ delay: 0.2 }} // Délai plus long
              >
                <Link 
                  to="/about" 
                  className={`navbar-mobile-link ${isActiveLink('/about') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="mobile-link-icon">ℹ️</span> {/* Icône pour mobile */}
                  À propos {/* Lien vers la page à propos */}
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }} // Commence en bas et invisible
                animate={{ y: 0, opacity: 1 }} // Monte à sa position
                transition={{ delay: 0.3 }} // Délai plus long
              >
                <Link 
                  to="/login" 
                  className={`navbar-mobile-link ${isActiveLink('/login') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="mobile-link-icon">🔑</span> {/* Icône pour mobile */}
                  Connexion {/* Lien vers la page de connexion */}
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }} // Commence en bas et invisible
                animate={{ y: 0, opacity: 1 }} // Monte à sa position
                transition={{ delay: 0.4 }} // Délai plus long
              >
                <Link 
                  to="/register" 
                  className={`navbar-mobile-link ${isActiveLink('/register') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="mobile-link-icon">📝</span> {/* Icône pour mobile */}
                  Inscription {/* Lien vers la page d'inscription */}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay pour fermer le menu mobile en cliquant à côté */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="navbar-overlay" 
            onClick={closeMenu}
            initial={{ opacity: 0 }} // Commence transparent
            animate={{ opacity: 1 }} // Devient opaque
            exit={{ opacity: 0 }} // Redevient transparent
            transition={{ duration: 0.3 }} // Animation rapide
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar; // Export du composant 