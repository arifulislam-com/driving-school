import React from 'react';
import logo from '../../images/footer-logo-1.jpg'
import ALogo from '../../images/another-footer-logo.jpg'

const Footer = () => {
    return (
        <div style={{backgroundColor:'#353638', color:'white'}} className="row">
            <div style={{borderTop:'4px solid yellow', margin:'15px 0px 100px 0px'}}></div>
            <div style={{paddingLeft:'40px'}} className="col-md-3">
                <img src={logo} alt="" />
                <p style={{marginTop:'30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, soluta est quia possimus officiis laboriosam sint dolore suscipit?</p>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'yellow'}}>Information</h5>
                <ul>
                    <li>FAQ</li>
                    <li>Locations</li>
                    <li>Testimonials</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div className="col-md-3">
            <h5 style={{color:'yellow'}}>Cutomer Service</h5>
                <ul>
                    <li>Search Terms</li>
                    <li>Site Map</li>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img style={{width:'220px'}} src={ALogo} alt="" />
            </div>
            <div style={{margin:'20px 0px 20px 0px'}}></div>
            <p>© 2021 Safe Drive Driving School.</p>
        </div>
    );
};

export default Footer;