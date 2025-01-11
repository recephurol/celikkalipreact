import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './utils/NavBar';
import Anasayfa from './Anasayfa';
import Hakkimizda from './Hakkinda';
import Iletisim from './Iletisim';
import NotFound from './utils/NotFound';
import Referanslar from './Referanslar';
import { Container } from 'react-bootstrap';
import Urunler from './urunler';
import React from 'react';
import { LanguageProvider } from './utils/LangugageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div>
          <NavBar />
          <Container>
            <Routes>
              <Route exact path="/" element={<Anasayfa />} />
              <Route path="/hakkinda" element={<Hakkimizda />} />
              <Route path="/urunler" element={<Urunler />} />
              <Route path="/referanslar" element={<Referanslar />} />
              <Route path="/iletisim" element={<Iletisim />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
