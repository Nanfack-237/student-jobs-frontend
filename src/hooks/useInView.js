import { useEffect, useRef, useState } from 'react'; // Import des hooks React

// Hook personnalisé pour détecter si un élément est visible dans la fenêtre
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false); // État pour savoir si l'élément est visible
  const ref = useRef(); // Référence pour l'élément à observer

  useEffect(() => {
    const observer = new IntersectionObserver( // Création de l'observateur d'intersection
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Met à jour l'état selon la visibilité
      },
      {
        threshold: 0.1, // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px', // Marge autour de la racine
        ...options // Options personnalisées
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Commence à observer l'élément
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Arrête d'observer lors du nettoyage
      }
    };
  }, [options]); // Recrée l'effet si les options changent

  return [ref, isInView]; // Retourne la référence et l'état de visibilité
};

export default useInView; // Export du hook 