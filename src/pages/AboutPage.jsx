import React from 'react'; // Import de React
import './AboutPage.css'; // Import du fichier CSS pour les styles

// Composant de page À propos
function AboutPage() {
  // Données de l'équipe (simulation)
  const teamMembers = [
    {
      name: "Marie Dubois", // Nom du membre
      role: "CEO & Fondatrice", // Rôle dans l'entreprise
      image: "👩‍💼", // Avatar emoji
      description: "Passionnée par l'emploi des jeunes, Marie a créé JobStage pour faciliter l'insertion professionnelle des étudiants." // Description
    },
    {
      name: "Thomas Martin", // Nom du membre
      role: "CTO", // Rôle dans l'entreprise
      image: "👨‍💻", // Avatar emoji
      description: "Expert en technologie, Thomas développe les solutions innovantes pour connecter étudiants et entreprises." // Description
    },
    {
      name: "Sophie Laurent", // Nom du membre
      role: "Responsable RH", // Rôle dans l'entreprise
      image: "👩‍🎓", // Avatar emoji
      description: "Spécialiste des ressources humaines, Sophie accompagne les entreprises dans leur recrutement de talents." // Description
    },
    {
      name: "Alexandre Chen", // Nom du membre
      role: "Responsable Partenariats", // Rôle dans l'entreprise
      image: "👨‍🤝‍👨", // Avatar emoji
      description: "Alexandre développe notre réseau d'entreprises partenaires pour offrir plus d'opportunités aux étudiants." // Description
    }
  ];

  // Données des valeurs de l'entreprise
  const values = [
    {
      icon: "🎯", // Icône de la valeur
      title: "Excellence", // Titre de la valeur
      description: "Nous nous engageons à fournir un service de qualité supérieure pour tous nos utilisateurs." // Description de la valeur
    },
    {
      icon: "🤝", // Icône de la valeur
      title: "Collaboration", // Titre de la valeur
      description: "Nous croyons en la force du partenariat entre étudiants, entreprises et notre équipe." // Description de la valeur
    },
    {
      icon: "🚀", // Icône de la valeur
      title: "Innovation", // Titre de la valeur
      description: "Nous développons constamment de nouvelles solutions pour améliorer l'expérience utilisateur." // Description de la valeur
    },
    {
      icon: "💡", // Icône de la valeur
      title: "Transparence", // Titre de la valeur
      description: "Nous privilégions la clarté et l'honnêteté dans toutes nos interactions." // Description de la valeur
    }
  ];

  // Données des statistiques
  const stats = [
    {
      number: "50,000+", // Chiffre statistique
      label: "Étudiants inscrits", // Label de la statistique
      icon: "🎓" // Icône de la statistique
    },
    {
      number: "2,500+", // Chiffre statistique
      label: "Entreprises partenaires", // Label de la statistique
      icon: "🏢" // Icône de la statistique
    },
    {
      number: "15,000+", // Chiffre statistique
      label: "Stages trouvés", // Label de la statistique
      icon: "💼" // Icône de la statistique
    },
    {
      number: "98%", // Chiffre statistique
      label: "Taux de satisfaction", // Label de la statistique
      icon: "⭐" // Icône de la statistique
    }
  ];

  // Rendu du composant
  return (
    <div className="about-page"> {/* Conteneur principal de la page */}
      
      {/* Section Hero de la page À propos */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">À propos de JobStage</h1> {/* Titre principal */}
          <p className="about-subtitle">
            Nous connectons les talents de demain avec les opportunités d'aujourd'hui
          </p> {/* Sous-titre */}
          <div className="about-hero-icon">🌟</div> {/* Icône décorative */}
        </div>
      </section>

      {/* Section de l'histoire */}
      <section className="about-story">
        <div className="about-container">
          <div className="story-content">
            <h2 className="section-title">Notre Histoire</h2> {/* Titre de section */}
            <div className="story-text">
              <p>
                JobStage a été fondé en 2020 avec une vision simple mais ambitieuse : 
                faciliter l'insertion professionnelle des étudiants et jeunes diplômés 
                en créant un pont direct avec les entreprises qui recherchent des talents.
              </p> {/* Premier paragraphe de l'histoire */}
              <p>
                Née de l'expérience personnelle de nos fondateurs qui ont eux-mêmes 
                rencontré des difficultés pour trouver des stages et premiers emplois, 
                notre plateforme répond à un besoin réel et croissant sur le marché du travail.
              </p> {/* Deuxième paragraphe de l'histoire */}
              <p>
                Aujourd'hui, nous sommes fiers d'être la plateforme de référence pour 
                la recherche de stages et d'emplois pour étudiants, avec plus de 50,000 
                utilisateurs actifs et 2,500 entreprises partenaires.
              </p> {/* Troisième paragraphe de l'histoire */}
            </div>
          </div>
          <div className="story-image">
            <div className="story-illustration">
              <div className="illustration-icon">📈</div> {/* Icône d'illustration */}
              <div className="illustration-text">Croissance continue depuis 2020</div> {/* Texte d'illustration */}
            </div>
          </div>
        </div>
      </section>

      {/* Section de la mission */}
      <section className="about-mission">
        <div className="about-container">
          <h2 className="section-title centered">Notre Mission</h2> {/* Titre de section centré */}
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">🎯</div> {/* Icône de mission */}
              <h3>Pour les Étudiants</h3> {/* Titre de la mission étudiants */}
              <p>
                Offrir un accès simplifié aux meilleures opportunités de stages et d'emplois, 
                avec des outils personnalisés pour valoriser les compétences et talents uniques 
                de chaque étudiant.
              </p> {/* Description mission étudiants */}
            </div>
            <div className="mission-card">
              <div className="mission-icon">🏢</div> {/* Icône de mission */}
              <h3>Pour les Entreprises</h3> {/* Titre de la mission entreprises */}
              <p>
                Faciliter le recrutement de jeunes talents motivés et qualifiés, 
                en proposant des outils efficaces pour identifier les candidats 
                qui correspondent parfaitement aux besoins spécifiques.
              </p> {/* Description mission entreprises */}
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌍</div> {/* Icône de mission */}
              <h3>Pour la Société</h3> {/* Titre de la mission société */}
              <p>
                Contribuer à réduire le chômage des jeunes et améliorer l'adéquation 
                entre formation et emploi, en créant un écosystème vertueux pour 
                tous les acteurs du marché du travail.
              </p> {/* Description mission société */}
            </div>
          </div>
        </div>
      </section>

      {/* Section des statistiques */}
      <section className="about-stats">
        <div className="about-container">
          <h2 className="section-title centered">Nos Chiffres Clés</h2> {/* Titre de section centré */}
          <div className="stats-grid">
            {stats.map((stat, index) => ( // Boucle sur les statistiques
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div> {/* Icône de la statistique */}
                <div className="stat-number">{stat.number}</div> {/* Chiffre de la statistique */}
                <div className="stat-label">{stat.label}</div> {/* Label de la statistique */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des valeurs */}
      <section className="about-values">
        <div className="about-container">
          <h2 className="section-title centered">Nos Valeurs</h2> {/* Titre de section centré */}
          <div className="values-grid">
            {values.map((value, index) => ( // Boucle sur les valeurs
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div> {/* Icône de la valeur */}
                <h3 className="value-title">{value.title}</h3> {/* Titre de la valeur */}
                <p className="value-description">{value.description}</p> {/* Description de la valeur */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section de l'équipe */}
      <section className="about-team">
        <div className="about-container">
          <h2 className="section-title centered">Notre Équipe</h2> {/* Titre de section centré */}
          <p className="team-intro">
            Une équipe passionnée et expérimentée, dédiée à votre réussite professionnelle
          </p> {/* Introduction de l'équipe */}
          <div className="team-grid">
            {teamMembers.map((member, index) => ( // Boucle sur les membres de l'équipe
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div> {/* Avatar du membre */}
                <h3 className="team-name">{member.name}</h3> {/* Nom du membre */}
                <div className="team-role">{member.role}</div> {/* Rôle du membre */}
                <p className="team-description">{member.description}</p> {/* Description du membre */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des témoignages */}
      <section className="about-testimonials">
        <div className="about-container">
          <h2 className="section-title centered">Ce qu'ils disent de nous</h2> {/* Titre de section centré */}
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div> {/* Guillemet de citation */}
              <p className="testimonial-text">
                Grâce à JobStage, j'ai trouvé mon stage de fin d'études dans une entreprise 
                innovante qui correspond parfaitement à mes aspirations. Le processus était 
                simple et efficace !
              </p> {/* Texte du témoignage */}
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎓</div> {/* Avatar de l'auteur */}
                <div className="author-info">
                  <div className="author-name">Emma Rodriguez</div> {/* Nom de l'auteur */}
                  <div className="author-title">Étudiante en Marketing Digital</div> {/* Titre de l'auteur */}
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div> {/* Guillemet de citation */}
              <p className="testimonial-text">
                JobStage nous a permis de recruter des étudiants talentueux et motivés. 
                La plateforme facilite vraiment la mise en relation avec les bons candidats.
              </p> {/* Texte du témoignage */}
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💼</div> {/* Avatar de l'auteur */}
                <div className="author-info">
                  <div className="author-name">Marc Durand</div> {/* Nom de l'auteur */}
                  <div className="author-title">DRH chez TechCorp</div> {/* Titre de l'auteur */}
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div> {/* Guillemet de citation */}
              <p className="testimonial-text">
                Une plateforme moderne et intuitive qui révolutionne la recherche d'emploi 
                pour les jeunes. L'équipe est à l'écoute et toujours prête à aider.
              </p> {/* Texte du témoignage */}
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🔬</div> {/* Avatar de l'auteur */}
                <div className="author-info">
                  <div className="author-name">Laura Chen</div> {/* Nom de l'auteur */}
                  <div className="author-title">Diplômée en Ingénierie</div> {/* Titre de l'auteur */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'appel à l'action */}
      <section className="about-cta">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à rejoindre l'aventure ?</h2> {/* Titre de l'appel à l'action */}
            <p className="cta-subtitle">
              Que vous soyez étudiant à la recherche d'opportunités ou entreprise 
              en quête de talents, nous sommes là pour vous accompagner.
            </p> {/* Sous-titre de l'appel à l'action */}
            <div className="cta-buttons">
              <a href="/register" className="cta-button primary">
                Créer un compte {/* Bouton principal */}
              </a>
              <a href="/contact" className="cta-button secondary">
                Nous contacter {/* Bouton secondaire */}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section de contact */}
      <section className="about-contact">
        <div className="about-container">
          <h2 className="section-title centered">Nous Contacter</h2> {/* Titre de section centré */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div> {/* Icône de contact */}
              <div className="contact-text">
                <h3>Email</h3> {/* Titre du contact */}
                <p>contact@jobstage.fr</p> {/* Information de contact */}
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div> {/* Icône de contact */}
              <div className="contact-text">
                <h3>Téléphone</h3> {/* Titre du contact */}
                <p>01 23 45 67 89</p> {/* Information de contact */}
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div> {/* Icône de contact */}
              <div className="contact-text">
                <h3>Adresse</h3> {/* Titre du contact */}
                <p>123 Avenue de l'Innovation<br />75001 Paris, France</p> {/* Information de contact */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; // Export du composant 