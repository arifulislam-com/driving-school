import React from 'react';
import img1 from '../../../images/course1.jpg';
import img2 from '../../../images/course2.jpg';
import img3 from '../../../images/course-03.jpg';
import img4 from '../../../images/course-04.jpg';
import img5 from '../../../images/course-05.jpg';
import img6 from '../../../images/course1-06.jpg';
import CourseCard from '../CourseCard/CourseCard';

const coursesData = [
    {
        id: "01",
        name: "Adult In-Car Lessons",
        img: img1,
        price: "350",
    },
    {
        id: "02",
        name: "Winter Driving",
        img: img2,
        price: "810",
    },
    {
        id: "03",
        name: "Teen Driver Education",
        img: img3,
        price: "700",
    },
    {
        id: "04",
        name: "Program for Seniors",
        img: img4,
        price: "350",
    },
    {
        id: "05",
        name: "Defensive Driving",
        img: img5,
        price: "650",
    },
    {
        id: "06",
        name: "Stick Shift Lessons",
        img: img6,
        price: "450",
    },
]

const Courses = () => {

    return (
        <div style={{textAlign:"center", margin:"90px 60px"}}>
            <h1 style={{fontSize:"60px"}} >Our Courses</h1>
            <div class="row ">
                {
                    coursesData.map(data => <CourseCard data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;