import React ,{useEffect,useRef}from 'react'

const GoogleMapEmbed = ({ latitude, longitude }) => {
 
    const mapContainerRef = useRef(null);
    useEffect(() => {
      if (window.google && window.google.maps) {
        // Haritayı başlatıyoruz
        const map = new window.google.maps.Map(mapContainerRef.current, {
            center: { lat: latitude, lng: longitude }, // Harita merkezini ayarlıyoruz
            zoom: 17, // Zoom seviyesini buradan ayarlıyoruz
            disableDefaultUI: true, // Varsayılan harita kontrollerini devre dışı bırak
          });
    
          // Marker (işaretçi) ekleyelim
          // eslint-disable-next-line no-unused-vars
          const marker = new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude }, // Marker'ı konum ile yerleştir
            map: map,
            title: 'Eiffel Tower', // Marker başlığı
          });
        }
    }, [latitude, longitude]);

  return (
     <div
      ref={mapContainerRef}
      style={{
        height: '400px',
        width: '100%',
        border: '1px solid #ccc',
      }}
    >
    </div>
  );
};

export default GoogleMapEmbed;