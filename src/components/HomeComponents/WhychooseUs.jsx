import React, { useState } from 'react';
import BrandDetail from '../BrandingComponents/BrandDetail';

const WhychooseUs = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    "Branding",
    "Web/App Development",
    "Digital Marketing",
    "Creative Designing",
    "Custom Services",
  ];

  return (
    <div className="whychooseus">
      <div className="chooseContent">
        <p>Why Choose Domain Expansion?</p>
        <h1>Our Growing Suite of Solutions</h1>
        <p>
          Our solutions cover all aspects of your digital journey, from strategy and<br /> design to development and
          content creation. We're your one-stop-shop for digital success.
        </p>
      </div>
      <div className="aboutContent">
        <div className="services">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service ${selectedService === index ? "active" : ""}`}
              onClick={() => setSelectedService(index)}
            >
              {service}
              {selectedService === index && <div className="diamond"></div>}
            </div>
          ))}
        </div>
      </div>
      
      {selectedService === 0 && (
        <div className="service-detail">
          <BrandDetail />
        </div>
      )}
    </div>
  );
};

export default WhychooseUs;
