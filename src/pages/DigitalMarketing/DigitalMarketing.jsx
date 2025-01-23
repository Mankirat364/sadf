import React from 'react'
import PowerFulBrand from '../../components/BrandingComponents/PowerFulBrand'
import BrandSolutions from '../../components/BrandingComponents/BrandSolutions'
import LetsTalk from '../../components/BrandingComponents/LetsTalk'

const DigitalMarketing = () => {
  return (
    <div>
      <div className='BrandingHerosec container-fluid'>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="BrandHeading">
                    <h1>Clicks speak louder than words in<br/>
                    the language of marketing</h1>
                    <p>In the digital marketing jungle, the only survival of the fittest is the one with the best clickbait.</p>
                </div>
        </div>
      </div>
      <div className="row AboutBrand d-flex align-items-center gap-5 ">
        <div className="col-md-6">
            <h1>You Say It,<br/><span className='boldpart'>We Connect & Sell It.</span> </h1>
            <div className="d-flex align-items-center pt-4 gap-2">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="col-md-5 detailBrand">
            <p>Step into Digital Dynamo Strategies, where we turn online spaces into vibrant hubs for your brand. In the digital age, a strong strategy is your business’s secret weapon. We’re here not just to keep pace but to lead, making sure your brand captivates, connects, and grows like never before.</p>
        </div>
      </div>
    </div>
    <PowerFulBrand boldText="Digital Campaigns?" />
    <div className='caseStudy'>
      <div className="Caseheading">
        <h1><span className='boldpart'>impact</span>of Digital Dynamo Strategies</h1>
      </div>
      <div className="whypickus">
        <h1>Why Pick <span>Us</span> to <span>Drive Real Results?</span></h1>
        <p>we’re not just marketers; we’re storytellers who understand the pulse of your audience. Our approach to digital marketing goes beyond buzzwords — it’s about creating compelling narratives that resonate authentically with your target market. We are committed to crafting digital campaigns that not only boost visibility but also create meaningful connections with your audience. With us, it’s not just about numbers; it’s about fostering engagement and turning clicks into lasting relationships.</p>
      </div>
    </div>
    <BrandSolutions firstText="Search Engine Optimization (SEO)" secondText="Social Media Marketing" thirdText="Content Marketing" fourthText="Performance Marketing" />
    <LetsTalk firstText="Ready to amplify" secondText="your online presence and drive real results?" desc="Let’s take the first step towards digital success."  />
    </div>
  )
}

export default DigitalMarketing
