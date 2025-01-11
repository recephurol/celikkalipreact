import React, { useState,useEffect } from 'react';
import '../css/imageSlider.css';  // Stil dosyasını ekliyoruz
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

const ImageSlider = () => {
  // Fotoğrafların dizisini oluşturuyoruz
  const images = [
    urun1,urun2,urun3,urun4,urun5,urun6,urun7,urun8,urun9,urun10
  ];

  // State yönetimi (aktif resmin indeksini tutuyor)
  const [currentIndex, setCurrentIndex] = useState(0);
  // Popup için yeni state'ler ekliyoruz
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Sağ yön tuşu ile resmi değiştirme fonksiyonu
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Dizinin sonuna gelince başa döner
  };

  // Sol yön tuşu ile resmi değiştirme fonksiyonu
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Dizinin başına gelince sona döner
    );
  };

  // Fotoğrafa tıklandığında popup'ı açan fonksiyon
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // % ile döngüsel geçiş
      }, 1000); // 3 saniye sonra geçiş yapacak şekilde ayarlıyoruz.
  
      return () => clearInterval(interval); // Temizlik
    }, [images.length]);
  

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094; {/* Sol yön oku */}
      </button>

      <div className="slider" style={{ display: 'flex', gap: '10px' }}>
        {[0, 1, 2].map((offset) => {
          const imageIndex = (currentIndex + offset) % images.length;
          return (
            <img
              key={offset}
              src={images[imageIndex]}
              alt={`Slide ${imageIndex}`}
              className="slider-image"
              style={{ width: "424px", height: "400px", cursor: "pointer" }}
              onClick={() => handleImageClick(images[imageIndex])}
            />
          );
        })}
      </div>

      <button className="next-btn" onClick={nextSlide}>
        &#10095; {/* Sağ yön oku */}
      </button>

      {/* Popup bileşeni */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content">
            <img
              src={selectedImage}
              alt="Popup"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;