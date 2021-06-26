import React from 'react';
import logo from '../../../images/driving-s-logo.png'

const Navbar = () => {
    return (
        <div>
            <ul className="nav justify-content-center align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        <img style={{ width: '60%' }} src={logo} alt="" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ABOUT US</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">COURSES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">DASHBOARD</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;