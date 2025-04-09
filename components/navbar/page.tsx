'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="#HeroSection" className="logo-section" id="navbar">
          <Image src="/cloud-computing.png" width={45} height={45} alt='logo' />
          <h2>My-Drive</h2>
        </Link>



        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link href="#HeroSection">Accueil</Link>
          <Link href="#Fonctionnalités">Fonctionnalités</Link>
          <Link href="#Tarifs">Tarifs</Link>
          <Link href="#FAQ">FAQ</Link>
        </div>

        {/* Auth Buttons */}
        <div className={`auth-buttons ${isMenuOpen ? 'show' : ''}`}>
          <Link href="/login">
            <button className="btn btn-login">Se connecter</button>
          </Link>
          <Link href="#">
            <button className="btn btn-signup">S'inscrire</button>
          </Link>
        </div>
        {/* Burger Icon (visible mobile uniquement) */}
        <button
          className="burger-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
