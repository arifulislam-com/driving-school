import React from 'react';
import dircub from '../../../../images/dirCub.png'
import './OrderNow.css'

const OrderNow = () => {
    return (
        <div className="OrderNow">
            <div className="row ">
                <div className="col-6">
                    <img src={dircub} alt="" />
                </div>
                <div className="col-6">
                    <h2>Are You Ready?</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, modi cupiditate soluta minima eveniet voluptatibus illo ad eum reiciendis obcaecati quia sapiente architecto sunt quasi fugit iure odio sequi. Necessitatibus ipsam quae nemo esse ea sint sunt voluptatum corrupti. At, repudiandae architecto quis dolores perferendis hic quo tempora quibusdam nam, optio voluptate cumque, aspernatur voluptatibus.</p>
                    <br />
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas. Debitis.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</li>
                    </ul>
                    <br />
                    <button className="OrderBtn">ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;