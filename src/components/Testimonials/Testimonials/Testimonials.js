import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://rocky-mesa-37051.herokuapp.com/getReview')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
        <div style={{textAlign:"center", margin:"90px 60px"}}>
            <h1 style={{fontSize:"60px"}} >Testimonials</h1>
            <div className="row ">
                {
                    review.map((data, index) => <TestimonialCard key={index} data={data}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;