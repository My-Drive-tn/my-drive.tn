import React from 'react';
import './bloc.css';

const Bloc: React.FC = () => {
  return (
    <div className="section-wrapper">
      <div className="card-container">
        <div className="card-inner">
          <div className="card-bg">
            <a href="/">
              <div className="card-content">
                <picture>
                  <source
                    media="(max-width: 650px)"
                    type="image/webp"
                    srcSet="/bg2.webp"
                  />
                  <source
                    media="(min-width: 651px)"
                    type="image/webp"
                    srcSet="/bg2.webp"
                  />
                  <img
                    src="/bg2.webp"
                    alt="homepage-activetrader-bg-mobile"
                    className="background-img"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="title">
                  <h2>Développez des stratégies de trading complexes via les produits dérivés.</h2>
                </div>
                <div className="label">
                  <h3>Produits dérivés</h3>
                  <button className="arrow-button">
                    <img
                      src="https://images.ctfassets.net/jg6lo9a2ukvr/1CfiSzsaaYfUpdoaXDr2uZ/ad1a596b5faed8ca54bcaddba656775c/arrow-btn.svg"
                      alt="Arrow Icon"
                    />
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloc;
