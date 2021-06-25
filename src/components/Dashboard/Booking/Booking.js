import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import SideNavBar from '../SideNavBar/SideNavBar';

const Booking = () => {
    const [bookingData, setBookingData] = useState({})
    const [paymentInfo, setPaymentInfo] = useState({})
    const { id } = useParams();

    const handlePaymentinfo = (payment) => {
        setPaymentInfo(payment)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };
        newBookingData[name] = value;
        setBookingData(newBookingData);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://rocky-mesa-37051.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...bookingData, paymentInfo}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>

            <div style={{ padding: "50px" }} class="row">
                <div class="col-sm-3">
                    <SideNavBar></SideNavBar>
                </div>

                <div class="col-sm-9">
                    {
                        paymentInfo.id ?
                            <div style={{ justifyContent: "left" }}>
                                <h1>Book</h1>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Name:
                                        <input type="text" name="name" required defaultValue={bookingData.name} onBlur={handleChange} />
                                    </label>
                                    <br />
                                    <br />
                                    <label>
                                        Email:
                                        <input type="text" name="email" required defaultValue={bookingData.email} onBlur={handleChange} />
                                    </label>
                                    <br />
                                    <br />
                                    <label>
                                        Address:
                                        <input type="text" name="address" required defaultValue={bookingData.address} onBlur={handleChange} />
                                    </label>
                                    <br /><br />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>

                            :
                            <div style={{ width: "400px" }}>
                                <h1>Pay For Course</h1>
                                <ProcessPayment handlePaymentinfo={handlePaymentinfo}></ProcessPayment>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Booking;