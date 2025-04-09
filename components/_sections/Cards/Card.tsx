import React from 'react';
import './Card.css';
import { IFeature } from '@/common/typres';
import SectionTitle from '@/components/SerctionTitle/SectionTitle';

const Card: React.FC = () => {

  const features: IFeature[] = [
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

  return (
   
    <section className="container" id="Fonctionnalités">
      < div className="spacer"></div>
      <SectionTitle section='FONCTIONALITE' />

      <div className="card-grid">
        {features.map((panel, index) => (
          <div key={index} className="card">
            <img src={panel.icon} alt={panel.title} className="card-icon" 
              width={100}
              height={100} />
            <h3 className="cardTitle">{panel.title}</h3>
            {panel.description && <p className="description">{panel.description}</p>}
          </div>
        ))}
      </div>
      <div/>
    </section>
    
  );
};

export default Card;