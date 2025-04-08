import React from 'react';
import './Card.css';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "/folderbl.webp",
    title: "Gestion FTP/SFTP",
    description: "Gérez vos fichiers facilement via les protocoles FTP et SFTP."
  },
  {
    icon: "/safety.webp", 
    title: "Sécurité renforcée",
    description: "Chiffrement des données pour une confidentialité maximale."
  },
  {
    icon: "/world.webp",
    title: "Accès web",
    description: "Accédez à vos fichiers depuis n'importe quel navigateur."
  },
  {
    icon: "/fleche.webp",
    title: "Transformation média",
    description: "Convertissez et prévisualisez les médias instantanément."
  },
  {
    icon: "/partage2.webp",
    title: "Partage avancé",
    description: "Partagez avec des permissions personnalisées."
  },
];

const Card: React.FC = () => {
  return (
    <section className="container" id="Fonctionnalités">
      <h2 className="card-heading">Fonctionnalités principales</h2>
      <h2 className="card-subtitle">
        Explorez les atouts essentiels de notre plateforme pour une gestion optimale de vos fichiers.
      </h2>
      <div className="card-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`card ${index >= 3 ? 'card-bottom' : ''}`}
          >
            <div className="icon">
              <img
                src={feature.icon}
                alt={feature.title}
                className="icon-image"
                width={60}
                height={60}
              />
            </div>
            <h3 className="cardTitle">{feature.title}</h3>
            <p className="description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;