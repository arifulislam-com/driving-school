import React from 'react';
import { useState } from 'react/cjs/react.development';
import SideNavBar from '../SideNavBar/SideNavBar';

const Review = () => {
    const [review, setReview] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newreview = {...review}
        newreview[name] = value
        setReview(newreview)
    };

    const handleSubmit = (event) => {
        console.log(review);
        fetch('https://rocky-mesa-37051.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
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
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Name" onBlur={handleChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Email:
                            <input type="text" name="email" placeholder="email" onBlur={handleChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Description:
                            <input type="text" name="description" placeholder="description" onBlur={handleChange} />
                        </label>
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;