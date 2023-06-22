import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.002225044616!2d-96.7221171!3d32.9773431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f30af23e6b7%3A0x7d04121ca34f4c79!2s2071%20N%20Collins%20Blvd%20a%2C%20Richardson%2C%20TX%2075080!5e0!3m2!1sen!2sus!4v1684738999361!5m2!1sen!2sus"
          height="550"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
