import React from 'react';
import img from '../../../images/user.png';

const TestimonialCard = ({ data }) => {


    return (
        <div style={{ margin: "35px 0px" }} className="col-md-4">
            <div style={{ backgroundColor: "#fafafa", borderRadius: "10px" }}>
                <img style={{ width: "100px", borderRadius: "50%" }} src={img} alt="" />
                <p style={{ margin: "15px" }}>{data.description}</p>

            </div>
        </div>
    );
};

export default TestimonialCard;