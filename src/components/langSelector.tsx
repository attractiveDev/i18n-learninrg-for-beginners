
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
 
const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');
 
  const changeLanguage = (event:any) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
 
  return (
    <div onChange={changeLanguage}>
      <label><input type="radio" value="en" name="language" checked={selectedLang === 'en'} /> English</label>
      <label><input type="radio" value="ko" name="language" checked={selectedLang === 'ko'} /> ko</label>
      <label><input type="radio" value="ch" name="language" checked={selectedLang === 'ch'} /> ch</label>
    </div>
  )
}
 
export default LangSelector;
