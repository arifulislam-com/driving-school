import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import SideNavBar from '../SideNavBar/SideNavBar';

const BookingList = () => {
    const [userBooking, setUserBooking] = useState([])
    const context = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = context;
    const email = loggedInUser.email;
    console.log(userBooking);

    useEffect(() => {
        fetch('https://rocky-mesa-37051.herokuapp.com/bookingList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                setUserBooking(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://rocky-mesa-37051.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data =>
                console.log(data)
            );
    }
    return (
        <div>
            <div style={{ padding: "50px" }} className="row">
                <div className="col-sm-3">
                    <SideNavBar></SideNavBar>
                </div>

                <div className="col-sm-9">
                    {
                        userBooking.length ? <h4>Booking List</h4> : <h4> No Booking!</h4>
                    }
                    {
                        userBooking.map((data) =>

                            <div style={{ borderBottom: '1px solid gray', padding: '20px', textAlign: 'center' }}>
                                <h4>Course Name</h4>
                                <h5>{data.name}</h5>
                                <p>{data.paymentInfo.id}</p>
                                <button onClick={() => handleDelete(data._id)}>Cancel</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;