import React, { useContext, useEffect, useState } from 'react';
import './SideNavBar.css';
import logo from '../../../images/footer-logo-1.jpg';
import {
    Link
} from "react-router-dom";
import { userContext } from '../../../App';

const SideNavBar = () => {
    const [isAdmin, setisAdmin] = useState(false);
    const context = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = context;
    const email = loggedInUser.email;

    useEffect(() => {
        fetch('https://rocky-mesa-37051.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json())
            .then(data => setisAdmin(data))
    }, []);

    const LitextDecoration = {
        textDecoration: 'none',
        color: "black"
    }
    return (
        <div className="SideNavBar">
            <img style={{ width: "150px", marginBottom: "25px" }} src={logo} alt="" />
            <ul>
                <Link style={LitextDecoration}><li>DASHBOARD</li></Link>
                <Link to="/bookingList" style={LitextDecoration}><li>Booking List</li></Link>
                <Link to="/review" style={LitextDecoration}><li>Review</li></Link>
                {
                    isAdmin &&
                    <div>
                    <Link to="/orderList" style={LitextDecoration}><li>Order List</li></Link>
                    <Link to="/addService" style={LitextDecoration}><li>Add Service</li></Link>
                    <Link to="/makeAdmin" style={LitextDecoration}><li>Make Admin</li></Link>
                    <Link style={LitextDecoration}><li>Manage Service</li></Link>
                </div>
                }
            </ul>
        </div>
    );
};

export default SideNavBar;