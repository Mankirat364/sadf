import React from "react";
import './Home.css'
import WhychooseUs from "../../components/HomeComponents/WhychooseUs";
const Home = () => {
  return <div className="HomePage">
    <div className='BrandingHerosec container-fluid'>
      <div className="row">
        <p className="outbox">Think out of the box</p>
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="BrandHeading">
            <h2>As Long As We Are Here There</h2>
            <h1><span className="homepsan">Will Be </span>Infinite Digital Ways To<br />Succeed</h1>
            <div className="button " id="homebutton">
              <button>
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <WhychooseUs />
  </div>;
};

export default Home;
