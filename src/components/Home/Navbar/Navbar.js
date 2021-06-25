import React from 'react';
import logo from '../../../images/driving-s-logo.png'

const Navbar = () => {
    return (
        <div>
            <ul class="nav justify-content-center align-items-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <img style={{ width: '60%' }} src={logo} alt="" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">COURSES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">DASHBOARD</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;