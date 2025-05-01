import React from "react";
import Image from "next/image";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="HeroSection">
      <div className="hero-bg-wrapper">
        <Image
          src="/space.jpg"
          alt="Background pattern"
          fill
          className="hero-bg-image"
          priority
        />
      </div>


      <div className="hero-content">
        <h1 className="hero-title fade-in-top">
          Gérez vos fichiers,
          <span className="highlight"><br /> À votre façon.</span>
        </h1>

        <p className="hero-subtitle fade-in-bottom">
          Accédez, organisez, transformez et partagez vos fichiers où que vous soyez.  
          Avec <span className="bold">My-Drive</span>, vous êtes maître de votre cloud.
        </p>

        <div className="fade-in-scale">
        <a href="http://localhost:4200/auth/register">
          <button className="hero-button">Commencer maintenant</button>
        </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
