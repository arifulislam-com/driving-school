import React, { useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [uploadFile, setUploadFile] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newInfo = {...info}
        newInfo[name] = value
        setInfo(newInfo)
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUploadFile(file)
    };

    const handleSubmit = (event) => {
        const formData = new FormData()
        formData.append('file', uploadFile)
        formData.append('name', info.name)
        formData.append('price', info.price)
        console.log(info.name, info.price, uploadFile);
      
        fetch('https://rocky-mesa-37051.herokuapp.com/addCourse', {
          method: 'POST',
          body: formData
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
                                Course Title:
                                <input type="text" name="name" placeholder="Course Title" onBlur={handleChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Price:
                                <input type="text" name="price" placeholder="Price"  onBlur={handleChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                file:
                                <input type="file" name="file"  onChange={handleFileChange} />
                            </label>
                            <br /><br />
                            <input type="submit" value="Submit" />
                        </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;