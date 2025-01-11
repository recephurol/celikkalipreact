import React from 'react'

const NotFound = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>404 - Sayfa Bulunamadı</h1>
        <p style={styles.message}>Aradığınız sayfa mevcut değil. Lütfen URL'yi kontrol edin.</p>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#dc3545',
    },
    message: {
      fontSize: '1.2rem',
      color: '#6c757d',
    },
  };

export default NotFound