'use client';

import { IPricing } from '@/common/typres';
import SectionTitle from '../SerctionTitle/SectionTitle';
import './Tarif.css';

const PRICING: IPricing[] = [
  {
    title: 'Basic',
    description: 'Idéal pour les petites équipes gérant plusieurs projets, avec des besoins de stockage et de transfert modérés.',
    price: 'Gratuit',
    button: 'Commencer Gratuitement',
    features: [
      '5 Go d’espace de stockage pour vos fichiers essentiels',
      '10 Go de transfert pour un partage limité de données',
      'Non partageable pour une gestion stricte des données',
      'Corbeille supprimée automatiquement après 7 jours, assurez-vous de récupérer vos fichiers avant cette date.',
    ],
  },
  {
    title: 'Plus',
    description: 'Parfait pour les équipes en pleine expansion, nécessitant plus d’espace et de transfert de données avec la possibilité de partager facilement.',
    price: 20,
    button: 'Commencer avec Plus',
    popular: true,
    features: [
      '2 To d’espace de stockage pour vos projets en expansion',
      '50 Go de transfert pour un partage efficace de vos données',
      'Partageable avec votre équipe pour une collaboration facile',
      'Corbeille conservée pendant 30 jours, vous offrant plus de flexibilité pour récupérer vos fichiers.',
    ],
  },
  {
    title: 'Pro',
    description: 'Conçu pour les grandes entreprises, offrant un stockage illimité et un transfert de données à grande échelle avec des options de partage flexibles.',
    price: 60,
    button: 'Commencer avec Pro',
    features: [
      'Espace de stockage illimité pour tous vos besoins d’archivage',
      '250 Go de transfert pour une gestion massive de données',
      'Partageable avec votre équipe et partenaires en toute sécurité',
      'Corbeille à vie pour une récupération permanente de vos fichiers',
    ],
  },
];

export default function Tarif() {
  return (
    
    <section id='Tarifs' className='container'>
      <div className="spacer">
      <SectionTitle section='TARIF' />

      <div className="pricing-grid">
        {PRICING.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
          >
            {plan.popular && <div className="popular-badge">Plus populaire</div>}
            <h3 className="plan-name">{plan.title}</h3>
            {
              typeof plan.price === "number" &&
              <div className="price-container">
                <span className="currency">€</span>
                <span className="price">{plan.price}</span>
                <span className="period">/month</span>
              </div>
            }
            {
              typeof plan.price === "string" &&
              <div className="price-container">
                <span className="price">{plan.price}</span>
              </div>
            }
            <ul className="feature-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="http://localhost:4200/auth/register" target='_blank' rel="noopener noreferrer">
            <button className="cta-button">
              {plan.button}
            </button>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
    
  );
}
