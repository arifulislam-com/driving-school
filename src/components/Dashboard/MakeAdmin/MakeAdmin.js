import React, { useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setAdmin(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://rocky-mesa-37051.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: admin}),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <div style={{ padding: "50px" }} className="row">
                <div className="col-sm-3">
                    <SideNavBar></SideNavBar>
                </div>

                <div className="col-sm-9">
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" required onBlur={handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;