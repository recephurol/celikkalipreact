import React from 'react'
import './urunler.css'
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
import { useLanguage } from '../utils/LangugageContext';

function Urunler() {
    const urunler = [
        urun1, urun2, urun3, urun4, urun5, urun6, urun7, urun8, urun9, urun10
    ];
      const { language } = useLanguage();

    return (
        <div>
            <div className="urunler-container">
                {urunler.map((urunNo, i) => (
                    <div key={urunNo} className="urun-kart">
                        <a href={urunNo} target="_blank" rel="noopener noreferrer"> <img
                            src={urunNo}
                            alt={`Ürün ${i}`}
                            className="urun-resim"
                        /></a>
                       
                    </div>
                ))}
            </div>
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
        </div>
    )
}

export default Urunler