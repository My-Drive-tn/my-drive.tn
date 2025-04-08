'use client';

import './Tarif.css';

const products = [
  {
    title: 'Basic',
    description: 'Idéal pour les petites équipes gérant plusieurs projets, avec des besoins de stockage et de transfert modérés.',
    price: 'Gratuit',
    button: 'Commencer Gratuitement',
    features: [
      '2 To d’espace de stockage pour vos fichiers essentiels',
      '12 To de transfert pour un partage limité de données',
      'Non partageable pour une gestion stricte des données',
      'Corbeille supprimée automatiquement après 7 jours, assurez-vous de récupérer vos fichiers avant cette date.',
    ],
  },
  {
    title: 'Plus',
    description: 'Parfait pour les équipes en pleine expansion, nécessitant plus d’espace et de transfert de données avec la possibilité de partager facilement.',
    price: '20,00€',
    button: 'Commencer avec Plus',
    popular: true,
    features: [
      '8 To d’espace de stockage pour vos projets en expansion',
      '24 To de transfert pour un partage efficace de vos données',
      'Partageable avec votre équipe pour une collaboration facile',
      'Corbeille conservée pendant 30 jours, vous offrant plus de flexibilité pour récupérer vos fichiers.',
    ],
  },
  {
    title: 'Pro',
    description: 'Conçu pour les grandes entreprises, offrant un stockage illimité et un transfert de données à grande échelle avec des options de partage flexibles.',
    price: '50,00€',
    button: 'Commencer avec Pro',
    features: [
      'Espace de stockage illimité pour tous vos besoins d’archivage',
      '96 To de transfert pour une gestion massive de données',
      'Partageable avec votre équipe et partenaires en toute sécurité',
      'Corbeille à vie pour une récupération permanente de vos fichiers',
    ],
  },
];

export default function Tarif() {
  return (
    <div id='Tarifs' className='spacer'>
      <h1 className="tarif-heading">Plans Tarifaires</h1>
      <h2 className="tarif-subtitle">Choisissez la meilleure offre pour votre entreprise</h2>
      <div className="gallery">
        {products.map((product, index) => (
          <div className="content" key={index}>
            {product.popular && (
              <div className="popular-badge">Le plus populaire</div>
            )}
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <ul className="features-list">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <h6>{product.price}</h6>
            <button className="buy">{product.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
