import React from 'react'
import robcell from '../imgs/referans1.png';
import valeo from '../imgs/referans2.png';
import copa from '../imgs/referans3.jpg';
import aritas from '../imgs/referans4.jpg';



function Referanslar() {
  return (
    <div className="container py-5">
    <div className="row">
      {/* Fotoğraf 1 */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <img
            src={robcell}
            alt="Fotoğraf 1"
            className="card-img-top img-fluid"
            style={{ height: '200px', objectFit: 'fill' }}
          />
        </div>
      </div>

      {/* Fotoğraf 2 */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <img
            src={valeo}
            alt="Fotoğraf 2"
            className="card-img-top img-fluid"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>

    
    </div>
    <div className="row">
          {/* Fotoğraf 3 */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <img
            src={copa}
            alt="Fotoğraf 3"
            className="card-img-top img-fluid"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Fotoğraf 4 */}
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm">
          <img
            src={aritas}
            alt="Fotoğraf 4"
            className="card-img-top img-fluid"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Referanslar