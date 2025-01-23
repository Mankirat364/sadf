import React, { useState } from 'react';
import BrandDetail from '../BrandingComponents/BrandDetail';
import brandBack from '../../Assets/brandingBackground.png'
import webback from '../../Assets/webbackground.png'
import connect from '../../Assets/connectbackground.png'
import creative from '../../Assets/creativeImage.png'
import custBackground from '../../Assets/customBackground.png'
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
              className={`service ${selectedService === index ? "active" : ""} ${index === 3 || index === 4? "responseService" : ""}`}
              onClick={() => setSelectedService(index)}
            >
              {service}
              {selectedService === index  && <div className="diamond"></div>}
            </div>
          ))}
        </div>
      </div>
      
      {selectedService === 0 && (
        <div className="service-detail">
          <BrandDetail mainHeading="“Where Ideas Take Shape, Brands Take Flight.”" check1="Brand Audits and Analysis" check2="Brand Creation & Strategy Development" check3="Brand Revamp" check4="Logo Design & Brand Guidelines Development" imgLink={brandBack} />
        </div>
      )}
      {selectedService === 1 && (
        <div className="service-detail">
          <BrandDetail mainHeading="“You Dream It, We Make It.”" check1="Website Development" check2="Mobile App Development" check3="E-commerce Solutions" check4="E-commerce Solutions" imgLink={webback} />
        </div>
      )}
      {selectedService === 2 && (
        <div className="service-detail">
          <BrandDetail mainHeading="“You Say It, We Connect & Sell It.”" check1="Search Engine Optimization (SEO)" check2="Social Media Marketing" check3="Content Marketing" check4="Performance Marketing" imgLink={connect} check5="Analytics and Performance Tracking" />
        </div>
      )}
      {selectedService === 3 && (
        <div className="service-detail">
          <BrandDetail mainHeading="“Let’s Bring Your Ideas to Life.”" check1="Graphic Design" check2=" UI/UX Design" check3=" Print Design" check4="Packaging Design" imgLink={creative} />
        </div>
      )}
      {selectedService === 4 && (
        <div className="service-detail">
          <BrandDetail mainHeading="““Made Just for You”" check1="Clients Requirements" check2="Get Required Services" check3="Sit Back & Enjoy Business Growing" imgLink={custBackground} />
        </div>
      )}
    </div>
  );
};

export default WhychooseUs;
