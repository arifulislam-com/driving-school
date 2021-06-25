import React from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';

const MakeAdmin = () => {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div style={{ padding: "50px" }} class="row">
                <div class="col-sm-3">
                    <SideNavBar></SideNavBar>
                </div>

                <div class="col-sm-9">
                    <form onSubmit={handleSubmit}>
                            <input type="email" name="email" placeholder="Email" onBlur={handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;