import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from '../utils/LangugageContext';

function Hakkimizda() {
  const { language } = useLanguage();

  
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-3 text-muted mb-4">{language.hakkimizda}</h1>
        <p className="lead text-muted font-weight-bold">
        {language.hakkimizdaAciklama}
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 text-muted">{language.misyon}</h2>
              <p className="lead text-muted">
              {language.misyonAciklama}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h4 text-muted">{language.vizyon}</h2>
              <p className="lead text-muted">
              {language.vizyonAciklama}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-5">
          <a href="/" className="btn btn-outline-dark">
          {language.anasayfayaDon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda