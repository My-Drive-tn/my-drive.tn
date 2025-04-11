'use client';

import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Veuillez entrer un email.' });
    } else if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Adresse email invalide.' });
    } else {
      // Ici, tu pourrais envoyer l'email vers ton backend ou Mailchimp API
      setMessage({ type: 'success', text: 'Merci pour votre inscription !' });
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h4>Contactez-nous</h4>
          <p><strong>Email :</strong> support@mydrive.com</p>
          <p><strong>Téléphone :</strong> +216 73 567 890</p>
          <p><strong>Adresse :</strong> 4070 TUN, SOUSSE</p>
        </div>

        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><a href="#HeroSection">À propos</a></li>
            <li><a href="#Fonctionnalités">Fonctionnalités</a></li>
            <li><a href="#Tarifs">Tarifs</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Suivez-nous</h4>
          <ul>
            <li><a href="https://facebook.com/mydrive"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            <li><a href="https://twitter.com/mydrive"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
            <li><a href="https://linkedin.com/mydrive"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
          </ul>
        </div>

        <div className="newsletter">
          <h4>Abonnez-vous à notre newsletter</h4>
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>S'abonner</button>

          {message && (
            <p className={`newsletter-message ${message.type}`}>
              {message.text}
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 My-Drive. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
