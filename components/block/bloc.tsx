import React from "react";
import "./bloc.css";

const Bloc: React.FC = () => {
  return (
    <section className="wrapper container ">

      <div className="content">
        <div className="textBlock">
        <h2 className="title">
          Découvrez l’interface intuitive <br />et sécurisée de My-Drive
        </h2>
        <h3 className="subtitle">
          Une expérience fluide pour gérer, organiser <br />et protéger vos fichiers
        </h3>
        </div>
        <div className="imageBlock">
          <img src="/pageaccfinal.png" alt="capture" className="capture" />
        </div>
      </div>
    </section>
  );
};

export default Bloc;
