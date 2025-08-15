import { motion } from 'framer-motion'; // Import de Framer Motion pour les animations

// Variantes d'animation pour les transitions de page
const pageVariants = {
  initial: {
    opacity: 0, // Page transparente au début
    x: -50, // Légèrement décalée vers la gauche
    scale: 0.95 // Légèrement réduite
  },
  in: {
    opacity: 1, // Page opaque
    x: 0, // Position normale
    scale: 1 // Taille normale
  },
  out: {
    opacity: 0, // Page transparente à la sortie
    x: 50, // Légèrement décalée vers la droite
    scale: 0.95 // Légèrement réduite
  }
};

// Configuration de la transition
const pageTransition = {
  type: "tween", // Type de transition
  ease: "anticipate", // Fonction d'accélération
  duration: 0.5 // Durée de l'animation en secondes
};

// Composant de transition de page
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial" // État initial
      animate="in" // État d'animation
      exit="out" // État de sortie
      variants={pageVariants} // Variantes d'animation
      transition={pageTransition} // Configuration de transition
      style={{
        position: 'relative', // Position relative
        width: '100%', // Largeur complète
        minHeight: '100vh' // Hauteur minimale de la fenêtre
      }}
    >
      {children} {/* Contenu de la page */}
    </motion.div>
  );
};

export default PageTransition; // Export du composant 