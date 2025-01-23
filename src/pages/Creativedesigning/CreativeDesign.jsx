import React from 'react'
import PowerFulBrand from '../../components/BrandingComponents/PowerFulBrand'
import BrandSolutions from '../../components/BrandingComponents/BrandSolutions'
import LetsTalk from '../../components/BrandingComponents/LetsTalk'

const CreativeDesign = () => {
  return (
    <div>
      <div className='BrandingHerosec container-fluid'>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="BrandHeading">
                    <h1>Let's Bring Your Ideas to Life</h1>
                    <p>Turning Your Ideas into Stunning Visuals: Let’s Make Your Vision a Reality.</p>
                </div>
        </div>
      </div>
      <div className="row AboutBrand d-flex align-items-center gap-5 ">
        <div className="col-md-6">
            <h1><span className='boldpart'>From Imagination to Impact</span> Where Your Ideas Blossom into Vibrant Realities.<br/></h1>
            <div className="d-flex align-items-center pt-4 gap-2">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="col-md-5 detailBrand">
            <p>We believe in the power of visuals to captivate your audience and leave a lasting mark. Our Creative Designing Services is your gateway to enhancing your brand’s presence and achieving remarkable results in the digital world.</p>
        </div>
      </div>
    </div>
    <PowerFulBrand boldText="Stunning Visual?" />
    <div className='caseStudy'>
      <div className="Caseheading">
        <h1>Ready to <span className='boldpart'> elevate</span> your brand?</h1>
      </div>
      <div className="whypickus">
        <h1>Why Pick <span>Us</span> to <span>Create Life Into Visuals?</span></h1>
        <p>We’re not just designers; we’re visual storytellers who understand the language of aesthetics. Our approach to creative design goes beyond the surface — it’s about crafting visuals that resonate deeply with your audience. We are committed to bringing your ideas to life through compelling graphics, ensuring that each design element reflects your brand’s personality. With us, it’s not just about images; it’s about creating a visual identity that speaks volumes and leaves a lasting impression.

</p>
      </div>
    </div>
    <BrandSolutions firstText="Graphic Design" secondText="UI/UX Design" thirdText="Print Design" fourthText="Packaging Design" />
    <LetsTalk firstText="Ready to " secondText=" Elevate Your Visual Identity?" desc="Let’s Bring Your Ideas to Life through Captivating Designs. Start Your Creative Journey Now!"  />
    </div>
  )
}

export default CreativeDesign
