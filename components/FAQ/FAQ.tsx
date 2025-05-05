'use client';

import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "Qu'est-ce que My-Drive ?",
    answer:
      "My-Drive est une plateforme de stockage en ligne sécurisée qui vous permet de stocker, partager et accéder à vos fichiers depuis n'importe où. Nous vous offrons une solution de stockage basée sur FTP/SFTP, afin que vous puissiez gérer vos fichiers facilement et en toute sécurité.",
    tag: "Fonctionnalité & Utilisation",
  },
  {
    question: " Est-ce que My-Drive est sécurisé ?",
    answer:
      "Oui, la sécurité est notre priorité. Nous utilisons le protocole SFTP (SSH File Transfer Protocol) pour garantir la confidentialité et l'intégrité de vos données lors des transferts. De plus, toutes vos informations sont cryptées et stockées de manière sécurisée.",
    tag: "Sécurité & Conformité",
  },
  {
    question: "Quels sont les avantages par rapport à d'autres services de stockage cloud ?",
    answer:
      "Contrairement à d'autres services cloud, My-Drive vous offre un contrôle total sur vos fichiers grâce à un accès FTP/SFTP direct. Vous avez la possibilité de gérer vos fichiers localement avec plus de flexibilité et de sécurité. De plus, vous bénéficiez de fonctionnalités supplémentaires comme le partage sécurisé et la gestion granulaire des utilisateurs.",
    tag: "Fonctionnalité & Utilisation",
  },
  {
    question: "Est-ce que My-Drive est compatible avec tous les appareils ?",
    answer:
    "Oui, My-Drive est compatible avec tous les appareils qui supportent FTP/SFTP, y compris Windows, macOS et Linux. Grâce à son interface web entièrement responsive, vous pouvez également y accéder facilement depuis des appareils mobiles via un navigateur, sans nécessiter d'application dédiée.",
    tag: "Compatibilité & Accessibilité",
  },
  {
    question: "Est-ce que My-Drive propose une version gratuite ?",
    answer:
      "Oui, nous proposons une version gratuite avec des fonctionnalités limitées pour que vous puissiez tester notre service. Vous bénéficiez d'un espace de stockage limité et de fonctionnalités de base. Pour plus d'options et d'espace de stockage, nous offrons des plans payants adaptés à vos besoins.",
    tag: "Tarifs & Abonnements",
  },
  {
    question: "Puis-je partager des fichiers avec d'autres personnes ?",
    answer:
      "Oui, My-Drive vous permet de partager facilement des fichiers et des dossiers avec d'autres personnes. Vous pouvez définir des autorisations spécifiques pour chaque utilisateur, comme l'accès en lecture ou en écriture, pour garantir un contrôle total sur vos fichiers partagés.",
    tag: "Fonctionnalité & Partage",
  },
  {
    question: "Qu'est-ce que le gestionnaire de mots de passe et de notes ?",
    answer:
      "Il s'agit d'une fonctionnalité intégrée à My-Drive qui vous permet de stocker en toute sécurité vos mots de passe, identifiants, et notes personnelles. Toutes les données sont chiffrées et accessibles uniquement par vous.",
    tag: "Fonctionnalité & Sécurité",
  },
  {
    question: "Quelles sont les fonctionnalités supplémentaires de My-Drive ?",
    answer:
      "My-Drive offre plusieurs fonctionnalités supplémentaires telles que la gestion des utilisateurs et des permissions, le téléchargement en masse, des options de partage sécurisé par lien, ainsi qu’une interface de gestion des fichiers accessible depuis un navigateur web.",
    tag: "Fonctionnalité Avancée",
  },
  {
    question: "Est-ce que My-Drive prend en charge les fichiers volumineux ?",
    answer:
      "Oui, My-Drive prend en charge les fichiers de grande taille. Vous pouvez télécharger des fichiers de plusieurs gigaoctets sans problème, et nous avons des outils pour accélérer le transfert de gros fichiers.",
    tag: "Performance & Capacité",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper" id='FAQ'>
      <div className='spacer'>
        <h1 className="FAQ-heading">Questions Fréquemment Posées</h1>
        <h2 className="FAQ-subtitle">Tout ce que vous devez savoir sur My-Drive pour en tirer le meilleur parti</h2>

        {faqData.map((item, index) => (
          <div className="faq-container" key={index}>
            <button
              className="faq-button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="faq-icon">
                  <path d="M5 12h14" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="faq-icon">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              )}
            </button>

            <div className={`faq-content ${openIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
              <div className="faq-tag-container">
                <span className="faq-tag">{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
