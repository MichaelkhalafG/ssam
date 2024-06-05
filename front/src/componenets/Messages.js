import { useState } from 'react';
import axios from 'axios';
function Messages({ isDarkMode, toggleMode, FontSize, setFontSize, ID }) {
    const [formData, setFormData] = useState({
        // name: '',
        // email: '',
        // phone: '',
        message: ''
    });
    const [rating, setRating] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
    };
    const handleFormSubmit = () => {
        // Perform validation logic here
        // For example, check if the required fields are filled out
        if (!formData.message || !rating) {
            alert("Please fill out all the required fields.");
            return;
        } else {
            axios.post('http://localhost:8081/message', {
                rate: rating,
                message: formData.message,
                id: ID
            })
                .then((response) => {
                    console.log(response.data);
                    alert('Message sent successfully!');
                })
                .catch((error) => {
                    console.error(error);
                    alert('Please try again.');
                });

        }
    };

    return (
        <>
            <div className={`row d-flex justify-content-center m-0 px-2 pt-lg-0 pt-lg-4 pt-5 pb-4`} data-aos="zoom-in" data-aos-duration="1000">
                <h2 className={`col-lg-6 col-10 ${(window.innerWidth > 1100) ? FontSize : "fs-6"}  text-center ${(isDarkMode) ? "bg-dark text-light" : "bg-light text-dark"} rounded-4 p-2`} >Contect Us</h2>
            </div>
            <div className={`row col-12 rounded-3 justify-content-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-5 p-3}`} data-aos="zoom-in" data-aos-duration="1000">
                <div className={`row col-12 rounded-3 justify-content-between ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-5 p-3 `}>
                    <div className={`col-12 mb-4 text-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-3`}>
                        <p className={`d-inline text-center ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? "fs-5" : "fs-6"} col-12 `} >
                            Our goal is to help you. If you have any suggestion for development or any problem you encounter, send it to us
                        </p>
                    </div>
                    <div className={`col-12 mb-4 text-center d-flex justify-content-center rounded-3 ps-0`}>
                        <div className={`rating px-4 col-lg-6 col-12 d-flex justify-content-center py-2 rounded-3 bg-opacity-50 bg-dark`}>
                            <input type="radio" id="star-1" name="star-radio" onChange={() => handleRatingChange(5)} value="star-1" />
                            <label htmlFor="star-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input type="radio" id="star-2" name="star-radio" onChange={() => handleRatingChange(4)} value="star-2" />
                            <label htmlFor="star-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input type="radio" id="star-3" name="star-radio" onChange={() => handleRatingChange(3)} value="star-3" />
                            <label htmlFor="star-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input type="radio" id="star-4" name="star-radio" onChange={() => handleRatingChange(2)} value="star-4" />
                            <label htmlFor="star-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input type="radio" id="star-5" name="star-radio" onChange={() => handleRatingChange(1)} value="star-5" />
                            <label htmlFor="star-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* <div className="d-flex flex-md-row flex-column justify-content-between mb-3"> */}
                    {/* <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                            <input
                                required="required"
                                type="text"
                                className={`${(isDarkMode) ? "text-dark" : "text-light"}`}
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Name</span>
                            <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                        </div>
                        <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                            <input
                                required="required"
                                type="text"
                                className={`${(isDarkMode) ? "text-dark" : "text-light"}`}
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Email</span>
                            <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                        </div>
                        <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                            <input
                                required="required"
                                type="text"
                                className={`${(isDarkMode) ? "text-dark" : "text-light"}`}
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Phone Number</span>
                            <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                        </div>
                    </div>
                    <div className={`col-2 ${window.innerWidth < 1100 ? "hide" : ""}`}></div> */}
                    <div className="inputbox mb-3 col-12">
                        <input
                            required="required"
                            type="text"
                            className={`${(isDarkMode) ? "text-dark" : "text-light"}`}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Your Message</span>
                        <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                    </div>
                    <div className="col-12 m-0 p-0 my-4">
                        <button
                            type="button"
                            onClick={handleFormSubmit}
                            className={`btn ${(isDarkMode) ? "btn-light" : "btn-dark"} col-12`}
                            disabled={!rating || !formData.message}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages;
