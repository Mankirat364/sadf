import React from 'react'
import check from '../../Assets/check.svg'
const BrandDetail = () => {
  return (
    <div className='brandDetail'>
    <div className="d-flex justify-content-center">
        <div className="brandDetailBox1">
            <h1>“Where Ideas Take Shape, Brands Take Flight.”</h1>
            <div className="checkboxesBrand">
                <div className="mydivver">
                    <img src={check} className='checkBox' alt="" />
                    <p>Brand Audits and Analysis</p>
                </div>
                <div className="mydivver divver2">
                    <img src={check} className='checkBox' alt="" />
                    <p>Brand Creation & Strategy Development</p>
                </div>
                <div className="mydivver divver2">
                    <img src={check} className='checkBox' alt="" />
                    <p>Brand Revamp</p>
                </div>
                <div className="mydivver divver2">
                    <img src={check} className='checkBox' alt="" />
                    <p>Logo Design & Brand Guidelines Development</p>
                </div>
            </div>
        </div>
        <div className="brandDetailBox2 pr-">
            <div className="innerbox2">
                <div className="upInnerBox">

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BrandDetail
