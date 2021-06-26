import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';

const OrderList = () => {
    const [orderedCourse, setOrderedCourse] = useState([]);
    useEffect(() => {
        fetch('https://rocky-mesa-37051.herokuapp.com/orderedCourse')
            .then(res => res.json())
            .then(data => setOrderedCourse(data))
    }, [])
    return (
        <div>
            <div style={{ padding: "50px" }} className="row">
                <div className="col-sm-3">
                    <SideNavBar></SideNavBar>
                </div>

                <div className="col-sm-9">
                    {
                        orderedCourse ? <h4>Order List</h4> : <h4> No Order!</h4>
                    }
                    {
                        orderedCourse.map((data) =>

                            <div style={{borderBottom:'1px solid gray', padding:'20px', textAlign:'center'}}>
                                <h5>{data.name}</h5>
                                <p>{data.email}</p>
                                <p>{data.paymentInfo.id}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderList;