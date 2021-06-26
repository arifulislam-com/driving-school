import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://rocky-mesa-37051.herokuapp.com/courses')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);

    return (
        <div style={{textAlign:"center", margin:"90px 60px"}}>
            <h1 style={{fontSize:"60px"}} >Our Courses</h1>
            <div className="row ">
                {
                    courses.map((data, index) => <CourseCard key={index+1} data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;