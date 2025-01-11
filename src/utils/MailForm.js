import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../utils/LangugageContext';

function MailForm() {
  const { language } = useLanguage();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      
      const [status, setStatus] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // EmailJS servisinizin bilgilerini burada girin
        const serviceID = 'service_xmvsc58';  // EmailJS servis ID'niz
        const templateID = 'template_nlayj9g';  // EmailJS şablon ID'niz
        const userID = 'Dllkkr5U1L-zoaUPE';  // EmailJS kullanıcı ID'niz
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
            console.log(result.text);
            setStatus('E-posta başarıyla gönderildi!');
            setFormData({
              user_name: '',
              user_email: '',
              subject: '',
              message: ''
            });
          })
          .catch((error) => {
            console.log(error.text);
            setStatus('E-posta gönderilirken bir hata oluştu.');
          });
      };
    
      return (
        <div className="container">
          <h2 className="my-4">{language.bizeUlasin}</h2>
          <form onSubmit={handleSubmit} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">{language.adiniz}</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">{language.eposta}</label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">{language.konu}</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{language.mesaj}</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{language.gonder}</button>
          </form>
    
          {status && (
            <div className="alert alert-info mt-4">
              {status}
            </div>
          )}
        </div>
      );
}

export default MailForm;