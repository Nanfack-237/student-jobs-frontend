 import React, { useState } from 'react'; // Import de React et du hook useState pour gérer l'état local
import './HomePage.css'; // Import du fichier CSS pour le style de cette page

// Composant principal de la page d'accueil
function HomePage() {
  // État local pour gérer les valeurs des champs de recherche
  const [searchQuery, setSearchQuery] = useState(''); // État pour la requête de recherche
  const [location, setLocation] = useState(''); // État pour la localisation
  const [jobType, setJobType] = useState('all'); // État pour le type d'emploi (tous, stage, emploi)

  // Fonction pour gérer la soumission du formulaire de recherche
  const handleSearch = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    console.log('Recherche:', { searchQuery, location, jobType }); // Log de la recherche (à remplacer par la vraie logique)
    // Ici vous pourriez ajouter la logique de recherche réelle
  };

  // Fonction pour gérer le clic sur "Poster une offre"
  const handlePostJob = () => {
    console.log('Redirection vers la page de poste d\'offre'); // Log pour la redirection
    // Ici vous pourriez ajouter la navigation vers la page de poste
  };

  // Rendu du composant
  return (
    <div className="homepage"> {/* Conteneur principal de la page */}
      
      {/* Section Hero - En-tête principal avec recherche */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Trouvez votre stage ou emploi idéal</h1> {/* Titre principal */}
          <p className="hero-subtitle">
            La plateforme qui connecte les étudiants aux meilleures opportunités professionnelles
          </p> {/* Sous-titre explicatif */}
          
          {/* Formulaire de recherche principal */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-inputs">
              <input
                type="text"
                placeholder="Métier, entreprise, compétences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <input
                type="text"
                placeholder="Ville, région..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="search-input"
              />
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="search-select"
              >
                <option value="all">Tous les types</option>
                <option value="stage">Stage</option>
                <option value="emploi">Emploi</option>
                <option value="alternance">Alternance</option>
              </select>
              <button type="submit" className="search-button">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section des statistiques */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>1000+</h3> {/* Nombre d'offres */}
            <p>Offres disponibles</p> {/* Description de la statistique */}
          </div>
          <div className="stat-item">
            <h3>500+</h3> {/* Nombre d'entreprises */}
            <p>Entreprises partenaires</p> {/* Description de la statistique */}
          </div>
          <div className="stat-item">
            <h3>95%</h3> {/* Taux de satisfaction */}
            <p>Taux de satisfaction</p> {/* Description de la statistique */}
          </div>
        </div>
      </section>

      {/* Section des catégories d'emplois populaires */}
      <section className="categories">
        <h2>Catégories populaires</h2> {/* Titre de la section */}
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">💻</div> {/* Icône de la catégorie */}
            <h3>Informatique</h3> {/* Nom de la catégorie */}
            <p>Développement, data, cybersécurité</p> {/* Description de la catégorie */}
          </div>
          <div className="category-card">
            <div className="category-icon">📊</div> {/* Icône de la catégorie */}
            <h3>Marketing</h3> {/* Nom de la catégorie */}
            <p>Digital, communication, événementiel</p> {/* Description de la catégorie */}
          </div>
          <div className="category-card">
            <div className="category-icon">🏢</div> {/* Icône de la catégorie */}
            <h3>Commerce</h3> {/* Nom de la catégorie */}
            <p>Vente, relation client, management</p> {/* Description de la catégorie */}
          </div>
          <div className="category-card">
            <div className="category-icon">🔬</div> {/* Icône de la catégorie */}
            <h3>Sciences</h3> {/* Nom de la catégorie */}
            <p>Recherche, laboratoire, innovation</p> {/* Description de la catégorie */}
          </div>
        </div>
      </section>

      {/* Section des offres récentes */}
      <section className="recent-jobs">
        <h2>Offres récentes</h2> {/* Titre de la section */}
        <div className="jobs-grid">
          <div className="job-card">
            <div className="job-header">
              <h3>Développeur Full-Stack</h3> {/* Titre du poste */}
              <span className="job-type stage">Stage</span> {/* Type de contrat */}
            </div>
            <p className="company">TechCorp</p> {/* Nom de l'entreprise */}
            <p className="location">📍 Paris, France</p> {/* Localisation */}
            <p className="description">
              Stage de 6 mois en développement web avec React et Node.js
            </p> {/* Description du poste */}
            <button className="apply-button">Postuler</button> {/* Bouton de candidature */}
          </div>

          <div className="job-card">
            <div className="job-header">
              <h3>Assistant Marketing Digital</h3> {/* Titre du poste */}
              <span className="job-type emploi">Emploi</span> {/* Type de contrat */}
            </div>
            <p className="company">MarketingPro</p> {/* Nom de l'entreprise */}
            <p className="location">📍 Lyon, France</p> {/* Localisation */}
            <p className="description">
              CDI pour gérer les campagnes marketing et les réseaux sociaux
            </p> {/* Description du poste */}
            <button className="apply-button">Postuler</button> {/* Bouton de candidature */}
          </div>

          <div className="job-card">
            <div className="job-header">
              <h3>Data Analyst</h3> {/* Titre du poste */}
              <span className="job-type alternance">Alternance</span> {/* Type de contrat */}
            </div>
            <p className="company">DataLab</p> {/* Nom de l'entreprise */}
            <p className="location">📍 Toulouse, France</p> {/* Localisation */}
            <p className="description">
              Alternance en analyse de données et business intelligence
            </p> {/* Description du poste */}
            <button className="apply-button">Postuler</button> {/* Bouton de candidature */}
          </div>
        </div>
      </section>

      {/* Section d'appel à l'action pour les entreprises */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Vous êtes une entreprise ?</h2> {/* Titre de la section */}
          <p>Publiez vos offres et trouvez les meilleurs talents étudiants</p> {/* Description */}
          <button className="cta-button" onClick={handlePostJob}>
            Poster une offre
          </button> {/* Bouton d'action */}
        </div>
      </section>

      {/* Section des témoignages */}
      <section className="testimonials">
        <h2>Ce que disent nos utilisateurs</h2> {/* Titre de la section */}
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "J'ai trouvé mon stage de fin d'études en 2 semaines grâce à cette plateforme !"
            </p> {/* Texte du témoignage */}
            <div className="testimonial-author">
              <strong>Marie L.</strong> {/* Nom de l'auteur */}
              <span>Étudiante en informatique</span> {/* Fonction de l'auteur */}
            </div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Une interface claire et des offres de qualité. Je recommande !"
            </p> {/* Texte du témoignage */}
            <div className="testimonial-author">
              <strong>Thomas R.</strong> {/* Nom de l'auteur */}
              <span>Étudiant en marketing</span> {/* Fonction de l'auteur */}
            </div>
          </div>
        </div>
      </section>

      {/* Section des avantages */}
      <section className="benefits">
        <h2>Pourquoi nous choisir ?</h2> {/* Titre de la section */}
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div> {/* Icône de l'avantage */}
            <h3>Recherche ciblée</h3> {/* Titre de l'avantage */}
            <p>Filtres avancés pour trouver exactement ce que vous cherchez</p> {/* Description de l'avantage */}
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">⚡</div> {/* Icône de l'avantage */}
            <h3>Rapide et efficace</h3> {/* Titre de l'avantage */}
            <p>Processus de candidature simplifié et accéléré</p> {/* Description de l'avantage */}
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔒</div> {/* Icône de l'avantage */}
            <h3>Sécurisé</h3> {/* Titre de l'avantage */}
            <p>Vos données personnelles sont protégées</p> {/* Description de l'avantage */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage; // Export du composant pour pouvoir l'utiliser ailleurs
