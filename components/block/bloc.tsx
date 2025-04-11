import React from "react";
import "./bloc.css";

const Bloc: React.FC = () => {
  return (
    <section className="wrapper container ">

      <div className="content">
        <div className="textBlock">
          <h2 className="title">
            Développez des stratégies de trading complexes via les produits dérivés.
          </h2>
          <h3 className="subtitle">Produits dérivés</h3>
        </div>
        <div className="imageBlock">
          <img src="/stockage.png" alt="Mockup trading" className="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Bloc;
