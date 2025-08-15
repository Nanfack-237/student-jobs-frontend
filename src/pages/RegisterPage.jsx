import React, { useState } from 'react'; // Import de React et du hook useState
import { Link, useNavigate } from 'react-router-dom'; // Import des composants de navigation
import './RegisterPage.css'; // Import du fichier CSS pour les styles

// Composant de page d'inscription
function RegisterPage() {
  // États locaux pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    firstName: '', // Prénom de l'utilisateur
    lastName: '', // Nom de famille de l'utilisateur
    email: '', // Adresse email de l'utilisateur
    password: '', // Mot de passe de l'utilisateur
    confirmPassword: '', // Confirmation du mot de passe
    userType: 'student', // Type d'utilisateur (étudiant ou entreprise)
    acceptTerms: false, // Acceptation des conditions d'utilisation
    newsletter: false // Abonnement à la newsletter
  });
  
  // États pour gérer les messages et l'état de chargement
  const [isLoading, setIsLoading] = useState(false); // État de chargement
  const [errors, setErrors] = useState({}); // Messages d'erreur par champ
  const [success, setSuccess] = useState(''); // Messages de succès
  
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer les changements dans les champs de saisie
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target; // Récupération des propriétés du champ
    setFormData(prev => ({
      ...prev, // Conservation des autres valeurs
      [name]: type === 'checkbox' ? checked : value // Mise à jour de la valeur appropriée
    }));
    
    // Effacer l'erreur du champ quand l'utilisateur tape
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '' // Supprime l'erreur pour ce champ
      }));
    }
    
    // Effacer le message de succès
    if (success) setSuccess('');
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    const newErrors = {}; // Objet pour stocker les erreurs
    
    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'Le prénom doit contenir au moins 2 caractères';
    }
    
    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Le nom doit contenir au moins 2 caractères';
    }
    
    // Validation de l'email
    if (!formData.email) {
      newErrors.email = 'L\'adresse email est requise';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }
    
    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre';
    }
    
    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'La confirmation du mot de passe est requise';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    // Validation de l'acceptation des conditions
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation';
    }
    
    setErrors(newErrors); // Mise à jour des erreurs
    return Object.keys(newErrors).length === 0; // Retourne true si aucune erreur
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    
    if (!validateForm()) return; // Arrêt si le formulaire n'est pas valide
    
    setIsLoading(true); // Activation de l'état de chargement
    setErrors({}); // Effacement des erreurs précédentes
    
    try {
      // Simulation d'une requête d'inscription (à remplacer par votre vraie logique)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation d'attente
      
      // Simulation d'une inscription réussie
      setSuccess('Inscription réussie ! Redirection vers la page de connexion...'); // Message de succès
      
      // Redirection vers la page de connexion après inscription
      setTimeout(() => {
        navigate('/login'); // Navigation vers la page de connexion
      }, 1500);
      
    } catch (err) {
      setErrors({ general: 'Erreur lors de l\'inscription. Veuillez réessayer.' }); // Gestion des erreurs
    } finally {
      setIsLoading(false); // Désactivation de l'état de chargement
    }
  };

  // Fonction pour gérer l'inscription avec Google (simulation)
  const handleGoogleRegister = () => {
    setSuccess('Redirection vers Google...'); // Message pour l'inscription Google
    // Ici vous pourriez intégrer la vraie authentification Google
  };

  // Rendu du composant
  return (
    <div className="register-page"> {/* Conteneur principal de la page */}
      <div className="register-container"> {/* Conteneur du formulaire */}
        
        {/* En-tête de la page */}
        <div className="register-header">
          <div className="register-icon">📝</div> {/* Icône d'inscription */}
          <h1 className="register-title">Créer un compte</h1> {/* Titre principal */}
          <p className="register-subtitle">
            Rejoignez JobStage et trouvez votre opportunité idéale
          </p> {/* Sous-titre */}
        </div>

        {/* Sélection du type d'utilisateur */}
        <div className="user-type-selector">
          <label className="user-type-label">
            <input
              type="radio"
              name="userType"
              value="student"
              checked={formData.userType === 'student'}
              onChange={handleInputChange}
              className="user-type-radio"
            />
            <div className="user-type-card">
              <div className="user-type-icon">🎓</div> {/* Icône étudiant */}
              <div className="user-type-text">
                <h3>Étudiant</h3> {/* Type étudiant */}
                <p>Cherche un stage ou un emploi</p> {/* Description étudiant */}
              </div>
            </div>
          </label>
          
          <label className="user-type-label">
            <input
              type="radio"
              name="userType"
              value="company"
              checked={formData.userType === 'company'}
              onChange={handleInputChange}
              className="user-type-radio"
            />
            <div className="user-type-card">
              <div className="user-type-icon">🏢</div> {/* Icône entreprise */}
              <div className="user-type-text">
                <h3>Entreprise</h3> {/* Type entreprise */}
                <p>Recrute des talents</p> {/* Description entreprise */}
              </div>
            </div>
          </label>
        </div>

        {/* Formulaire d'inscription */}
        <form className="register-form" onSubmit={handleSubmit}>
          
          {/* Ligne pour prénom et nom */}
          <div className="form-row">
            {/* Champ prénom */}
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                Prénom {/* Label du champ prénom */}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                placeholder="Votre prénom"
                disabled={isLoading}
                autoComplete="given-name"
              />
              {errors.firstName && (
                <span className="field-error">{errors.firstName}</span> // Affichage de l'erreur
              )}
            </div>

            {/* Champ nom */}
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Nom {/* Label du champ nom */}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Votre nom"
                disabled={isLoading}
                autoComplete="family-name"
              />
              {errors.lastName && (
                <span className="field-error">{errors.lastName}</span> // Affichage de l'erreur
              )}
            </div>
          </div>

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
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="votre@email.com"
              disabled={isLoading}
              autoComplete="email"
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span> // Affichage de l'erreur
            )}
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
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="8 caractères minimum"
              disabled={isLoading}
              autoComplete="new-password"
            />
            {errors.password && (
              <span className="field-error">{errors.password}</span> // Affichage de l'erreur
            )}
          </div>

          {/* Champ confirmation mot de passe */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmer le mot de passe {/* Label du champ confirmation */}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Répétez votre mot de passe"
              disabled={isLoading}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <span className="field-error">{errors.confirmPassword}</span> // Affichage de l'erreur
            )}
          </div>

          {/* Checkboxes */}
          <div className="form-checkboxes">
            {/* Acceptation des conditions */}
            <label className={`checkbox-label ${errors.acceptTerms ? 'error' : ''}`}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                disabled={isLoading}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                J'accepte les <Link to="/terms" className="link">conditions d'utilisation</Link> et la <Link to="/privacy" className="link">politique de confidentialité</Link> {/* Liens vers les conditions */}
              </span>
            </label>
            {errors.acceptTerms && (
              <span className="field-error">{errors.acceptTerms}</span> // Affichage de l'erreur
            )}
            
            {/* Abonnement newsletter */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                disabled={isLoading}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                Je souhaite recevoir les offres et actualités par email {/* Option newsletter */}
              </span>
            </label>
          </div>

          {/* Messages d'erreur généraux et de succès */}
          {errors.general && (
            <div className="error-message">
              <span className="error-icon">⚠️</span> {/* Icône d'erreur */}
              {errors.general} {/* Message d'erreur général */}
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
            className="register-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span> {/* Spinner de chargement */}
                Création du compte...
              </>
            ) : (
              'Créer mon compte' // Texte normal du bouton
            )}
          </button>
        </form>

        {/* Séparateur */}
        <div className="register-divider">
          <span className="divider-text">ou</span> {/* Texte du séparateur */}
        </div>

        {/* Inscription avec Google */}
        <button 
          className="google-register-button"
          onClick={handleGoogleRegister}
          disabled={isLoading}
        >
          <span className="google-icon">🔍</span> {/* Icône Google */}
          S'inscrire avec Google {/* Texte du bouton Google */}
        </button>

        {/* Lien vers la connexion */}
        <div className="register-footer">
          <p className="footer-text">
            Déjà un compte ? {/* Question pour les utilisateurs existants */}
            <Link to="/login" className="login-link">
              Se connecter {/* Lien vers la connexion */}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage; // Export du composant 