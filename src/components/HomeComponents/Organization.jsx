import React from 'react';
import { motion } from 'framer-motion';
import company1 from '../../Assets/company1.png';
import company2 from '../../Assets/company2.png';
import company3 from '../../Assets/company3.png';
import company5 from '../../Assets/company5.png';
import company6 from '../../Assets/company6.png';
import company7 from '../../Assets/company7.png';

const Organization = () => {
  return (
    <div className='organization'>
      <div className="organizationHeading">
        <h1>Trusted by<br />20+ Organizations</h1>
      </div>
      <div className="companyShowcase d-flex align-items-center justify-content-center">
        {[company1, company2, company3, company5, company6, company7].map((company, index) => (
          <motion.div
            key={index}
            className="showcaseBox"
            whileHover="hover"
            initial="initial"
          >
            <motion.img
              src={company}
              alt=""
              variants={{
                initial: { y: 0 },
                hover: { y: '-100%' },
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={company}
              alt=""
              variants={{
                initial: { y: '100%' },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Organization;