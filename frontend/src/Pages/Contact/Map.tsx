import React from 'react';

const Map = () => {
  return (
    <section className="contact-map">
      <div className="map-wrapper">
        <iframe
          title="Google Map - Oudhi Badh"
          src="https://www.google.com/maps?q=26.5443748,74.5065086&hl=en&z=17&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Map;
