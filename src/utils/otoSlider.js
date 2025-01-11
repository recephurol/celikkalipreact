
import React, { useState, useEffect } from 'react';
import './otoSlider.css'; // Stilinizi burada ekleyebilirsiniz.

import urun1 from '../imgs/urun1.jpg';
import urun2 from '../imgs/urun2.jpg';
import urun3 from '../imgs/urun3.jpg';
import urun4 from '../imgs/urun4.jpg';
import urun5 from '../imgs/urun5.jpg';
import urun6 from '../imgs/urun6.jpg';
import urun7 from '../imgs/urun7.jpg';
import urun8 from '../imgs/urun8.jpg';
import urun9 from '../imgs/urun9.jpg';
import urun10 from '../imgs/urun10.jpg';

const Slider = () => {
  // Fotoğrafların sırasını tutan state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fotoğraflar dizisi
  const images = [
    urun1,urun2,urun3,urun4,urun5,urun6,urun7,urun8,urun9,urun10
  ];

  // Fotoğrafın kendiliğinden dönmesi için useEffect kullanıyoruz.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // % ile döngüsel geçiş
    }, 3000); // 3 saniye sonra geçiş yapacak şekilde ayarlıyoruz.

    return () => clearInterval(interval); // Temizlik
  }, [images.length]);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
    </div>
  );
};

export default Slider;