import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyBestPhotos from '../utils/MyBestPhotos';
import { useLanguage } from '../utils/LangugageContext';

function Anasayfa() {
  const { language } = useLanguage();
  return (
    <Container>
      <Row>
        <MyBestPhotos />
      </Row>
      <Row>
        <section className="hero text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold mb-4">{language.anasayfaBaslik}</h1>
            <p className="lead mb-4">{language.anasayfaAciklama}</p>
            <a href="/iletisim" className="btn btn-primary btn-lg">{language.ucretsizKesifTeklikAl}</a>
          </div>
        </section>
      </Row>

      <Row>
      <div className="urunler-container">
                <div className="machine-table">
                    <h2>{language.makinaParkuru}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>{language.makinaAdi}</th>
                                <th>{language.adet}</th>
                                <th>{language.ozellik}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GOODWAY TORNA CNC</td>
                                <td>1 ADET</td>
                                <td>8 İNÇ</td>
                            </tr>
                            <tr>
                                <td>SUNMİLL JHV 800 DİK İŞLEM MERKEZİ</td>
                                <td>1 ADET</td>
                                <td>X800 Y500 Z500</td>
                            </tr>
                            <tr>
                                <td>LEADWELL DİK İŞLEM MERKEZİ</td>
                                <td>1 ADET</td>
                                <td>X1100 Y550 Z50</td>
                            </tr>
                            <tr>
                                <td>ZMM UNİVERSAL TORNA</td>
                                <td>2 ADET</td>
                                <td>1500 MM</td>
                            </tr>
                            <tr>
                                <td>KONDİA DİK FREZE</td>
                                <td>1 ADET</td>
                                <td>X1000 Y500 Z550</td>
                            </tr>
                            <tr>
                                <td>STANKOİMPORT YAN FREZE</td>
                                <td>1 ADET</td>
                                <td>X1000 Y500 Z500</td>
                            </tr>
                            <tr>
                                <td>ÇELİKKALIP PRES</td>
                                <td>1 ADET</td>
                                <td>120 TON</td>
                            </tr>
                            <tr>
                                <td>HİDROLİKSAN PRES</td>
                                <td>1 ADET</td>
                                <td>40 TON</td>
                            </tr>
                            <tr>
                                <td>BEKAMAK TESTERE</td>
                                <td>1 ADET</td>
                                <td>BMSO 320</td>
                            </tr>
                            <tr>
                                <td>MAGMAWELD GAZ ALTI KAYNAK</td>
                                <td>1 ADET</td>
                                <td>350 AMPER</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
      </Row>

      {/* <Row>
        <section className="quality py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Kalite ve Teknoloji Standartlarımız</h2>
            <p className="text-center mb-5">En son teknoloji üretim hatlarımız ve ISO 9001 sertifikalı kalite yönetim sistemimizle, endüstrinin en yüksek standartlarını karşılıyoruz.</p>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="ms-3">
                    <h5 className="mb-3">ISO 9001 Sertifikasyonu</h5>
                    <p>Uluslararası kalite standartlarına uygun üretim ve yönetim sistemi.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="ms-3">
                    <h5 className="mb-3">Kapsamlı Kalite Kontrol</h5>
                    <p>Her üretim aşamasında detaylı kalite kontrol ve performans testleri.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-4">
                  <div className="ms-3">
                    <h5 className="mb-3">Hassas Üretim Teknolojisi</h5>
                    <p>3D modelleme ve ileri düzey CNC teknolojisiyle hassas kalıp üretimi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Row> */}
    </Container>
  )
}

export default Anasayfa