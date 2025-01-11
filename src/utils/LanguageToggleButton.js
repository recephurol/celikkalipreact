import React from 'react';
import {useLanguage } from './LangugageContext';
import trLogo from '../imgs/trLogo.jpg';
import enLogo from '../imgs/eng.png';
import deLogo from '../imgs/deu.png';

const LanguageToggleButton = () => {
    const { changeLanguage } = useLanguage();

    return (
      <div>
        <button style={{"border":"0px"}} onClick={() => changeLanguage('tr')}><img src={trLogo} width="32" height="19" alt="tr" /></button>
        <button style={{"border":"0px"}} onClick={() => changeLanguage('en')}><img src={enLogo} width="32" height="19" alt="en" /></button>
        <button style={{"border":"0px"}} onClick={() => changeLanguage('de')}><img src={deLogo} width="32" height="19" alt="de" /></button>
      </div>
    );
};

export default LanguageToggleButton;