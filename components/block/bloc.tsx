import React from "react";
import "./bloc.css";

const Bloc: React.FC = () => {
  return (
    <section className="wrapper container ">

      <div className="content">
        <div className="textBlock">
          <h2 className="title">
          Protégez votre contenu avec notre sécurité.
          </h2>
          <h3 className="subtitle">Assurer la sécurité à tout moment</h3>
        </div>
        <div className="imageBlock">
          <img src="/capture.png" alt="capture" className="capture" />
        </div>
      </div>
    </section>
  );
};

export default Bloc;
