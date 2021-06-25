import React from 'react';
import './SideNavBar.css';
import logo from '../../../images/footer-logo-1.jpg';
import {
    Link
  } from "react-router-dom";

const SideNavBar = () => {
    const LitextDecoration ={
        textDecoration: 'none',
        color:"black" 
    }
    return (
        <div className="SideNavBar">
            <img style={{width:"150px", marginBottom:"25px"}} src={logo} alt="" />
            <ul>
                <Link style={LitextDecoration}><li>Booking</li></Link>
                <Link to="/bookingList" style={LitextDecoration}><li>Booking List</li></Link>
                <Link to="/review" style={LitextDecoration}><li>Review</li></Link>
                <Link to="/orderList" style={LitextDecoration}><li>Order List</li></Link>
                <Link to="/addService" style={LitextDecoration}><li>Add Service</li></Link>
                <Link to="/makeAdmin" style={LitextDecoration}><li>Make Admin</li></Link>
                <Link style={LitextDecoration}><li>Manage Service</li></Link>
            </ul>
        </div>
    );
};

export default SideNavBar;