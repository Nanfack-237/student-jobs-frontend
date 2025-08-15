import React, { useState } from 'react'; // Import de React et du hook useState
import { Link, useNavigate } from 'react-router-dom'; // Import des composants de navigation
import './LoginPage.css'; // Import du fichier CSS pour les styles

// Composant de page de connexion
function LoginPage() {
  // États locaux pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    email: '', // Adresse email de l'utilisateur
    password: '', // Mot de passe de l'utilisateur
    rememberMe: false // Case à cocher "Se souvenir de moi"
  });
  
  // États pour gérer les messages et l'état de chargement
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [error, setError] = useState(''); // Messages d'erreur
  const [success, setSuccess] = useState(''); // Messages de succès
  
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target; // Récupération des propriétés du champ
    setFormData(prev => ({
      ...prev, // Conservation des autres valeurs
      [name]: type === 'checkbox' ? checked : value // Mise à jour de la valeur appropriée
    }));
    
    // Effacer les messages d'erreur quand l'utilisateur tape
    if (error) setError('');
    if (success) setSuccess('');
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    if (!formData.email) {
      setError('L\'adresse email est requise'); // Erreur si email vide
      return false;
    }
    
    if (!formData.email.includes('@')) {
      setError('Veuillez entrer une adresse email valide'); // Erreur si email invalide
      return false;
    }
    
    if (!formData.password) {
      setError('Le mot de passe est requis'); // Erreur si mot de passe vide
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères'); // Erreur si mot de passe trop court
      return false;
    }
    
    return true; // Formulaire valide
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    
    if (!validateForm()) return; // Arrêt si le formulaire n'est pas valide
    
    setIsLoading(true); // Activation de l'état de chargement
    setError(''); // Effacement des erreurs précédentes
    
    try {
      // Simulation d'une requête de connexion (à remplacer par votre vraie logique)
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulation d'attente
      
      // Simulation d'une connexion réussie
      setSuccess('Connexion réussie ! Redirection en cours...'); // Message de succès
      
      // Redirection vers la page d'accueil après connexion
      setTimeout(() => {
        navigate('/'); // Navigation vers la page d'accueil
      }, 1000);
      
    } catch (err) {
      setError('Erreur de connexion. Vérifiez vos identifiants.'); // Gestion des erreurs
    } finally {
      setIsLoading(false); // Désactivation de l'état de chargement
    }
  };

  // Fonction pour gérer la connexion avec Google (simulation)
  const handleGoogleLogin = () => {
    setSuccess('Redirection vers Google...'); // Message pour la connexion Google
    // Ici vous pourriez intégrer la vraie authentification Google
  };

  // Rendu du composant
  return (
    <div className="login-page"> {/* Conteneur principal de la page */}
      <div className="login-container"> {/* Conteneur du formulaire */}
        
        {/* En-tête de la page */}
        <div className="login-header">
          <div className="login-icon">🔑</div> {/* Icône de connexion */}
          <h1 className="login-title">Connexion</h1> {/* Titre principal */}
          <p className="login-subtitle">
            Connectez-vous à votre compte JobStage
          </p> {/* Sous-titre */}
        </div>

        {/* Formulaire de connexion */}
        <form className="login-form" onSubmit={handleSubmit}>
          
          {/* Champ email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Adresse email {/* Label du champ email */}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="votre@email.com"
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          {/* Champ mot de passe */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mot de passe {/* Label du champ mot de passe */}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Votre mot de passe"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {/* Options supplémentaires */}
          <div className="form-options">
            {/* Case à cocher "Se souvenir de moi" */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                disabled={isLoading}
                className="checkbox-input"
              />
              <span className="checkbox-text">Se souvenir de moi</span> {/* Texte de la case à cocher */}
            </label>
            
            {/* Lien mot de passe oublié */}
            <Link to="/forgot-password" className="forgot-link">
              Mot de passe oublié ? {/* Lien vers la récupération de mot de passe */}
            </Link>
          </div>

          {/* Messages d'erreur et de succès */}
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span> {/* Icône d'erreur */}
              {error} {/* Message d'erreur */}
            </div>
          )}
          
          {success && (
            <div className="success-message">
              <span className="success-icon">✅</span> {/* Icône de succès */}
              {success} {/* Message de succès */}
            </div>
          )}

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span> {/* Spinner de chargement */}
                Connexion en cours...
              </>
            ) : (
              'Se connecter' // Texte normal du bouton
            )}
          </button>
        </form>

        {/* Séparateur */}
        <div className="login-divider">
          <span className="divider-text">ou</span> {/* Texte du séparateur */}
        </div>

        {/* Connexion avec Google */}
        <button 
          className="google-login-button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <span className="google-icon">🔍</span> {/* Icône Google */}
          Continuer avec Google {/* Texte du bouton Google */}
        </button>

        {/* Lien vers l'inscription */}
        <div className="login-footer">
          <p className="footer-text">
            Pas encore de compte ? {/* Question pour les nouveaux utilisateurs */}
            <Link to="/register" className="register-link">
              Créer un compte {/* Lien vers l'inscription */}
            </Link>
          </p>
        </div>

        {/* Informations de sécurité */}
        <div className="security-info">
          <div className="security-item">
            <span className="security-icon">🔒</span> {/* Icône de sécurité */}
            <span className="security-text">Connexion sécurisée SSL</span> {/* Texte de sécurité */}
          </div>
          <div className="security-item">
            <span className="security-icon">🛡️</span> {/* Icône de protection */}
            <span className="security-text">Données protégées</span> {/* Texte de protection */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; // Export du composant 