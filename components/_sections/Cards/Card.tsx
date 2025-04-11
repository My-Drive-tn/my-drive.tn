"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= features.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? features.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    // On desktop, show 3 cards
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % features.length;
      cards.push(features[index]);
    }
    return cards;
  };

  return (
    <section className="carousel-container" id="Fonctionnalités">
    < div className="spacer"></div>
    <SectionTitle section='FONCTIONALITE' />
      <button
        onClick={prevSlide}
        className="carousel-btn prev-btn"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>  

      <div className="card-slider">
        {/* Mobile: Show single card */}
        <div className="mobile-card">
          <div className="card">
            <img 
              src={features[currentIndex].icon} 
              alt={features[currentIndex].title} 
              className="card-icon" 
              width={80}
              height={80}
            />
            <h3 className="cardTitle">{features[currentIndex].title}</h3>
            <p className="description">{features[currentIndex].description}</p>
          </div>
        </div>

        {/* Desktop: Show three cards */}
        <div className="desktop-cards">
          {getVisibleCards().map((feature, index) => (
            <div key={index} className="card">
              <img 
                src={feature.icon} 
                alt={feature.title} 
                className="card-icon" 
                width={80}
                height={80}
              />
              <h3 className="cardTitle">{feature.title}</h3>
              <p className="description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="carousel-btn next-btn"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator for mobile */}
      <div className="dots-container">
        {features.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    
  );
};

export default Card;