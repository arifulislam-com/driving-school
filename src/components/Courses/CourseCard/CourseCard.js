import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ data }) => {


    return (
        <div style={{margin:"35px 0px"}} className="col-md-4">
                <div style={{backgroundColor:"#fafafa", borderRadius:"10px"}}>
                    <img style={{width:"400px", borderRadius:"10px"}} src={`data:image/jpeg;base64,${data.image.img}`} alt="" />
                    <h3 style={{margin:"15px"}}>{data.name}</h3>
                    <h5> Price: ${data.price}</h5>
                    <Link to={`/booking/${data._id}`}><button className="OrderBtn">ORDER NOW</button></Link>
                </div>
        </div>
    );
};

export default CourseCard;