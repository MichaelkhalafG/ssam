import React, { useState, useEffect } from 'react';
import profileImg from '../img/profile.jpg';
import axios from 'axios';

function Setting({ isDarkMode, toggleMode, FontSize, setFontSize, ID }) {
    const [SmallFontSize, setSmallFontSize] = useState('fs-3');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [profileImage, setProfileImage] = useState(profileImg);
    const [isProfileImageDeleted, setIsProfileImageDeleted] = useState(false);

    useEffect(() => {
        handleSmallFontSizeChange('fs-1');
    }, []);
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
        handleSmallFontSizeChange(event.target.value);
    };
    const deleteProfileImage = () => {
        setProfileImage(profileImg);
        setIsProfileImageDeleted(true);
    };

    // Update the profile image
    const updateProfileImage = (event) => {
        handleFileChange(event); // Call handleFileChange with the event
        const newImage = event.target.files[0];
        if (newImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(newImage);
        }
    };

    // Handle file change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        } else {
            alert('Please select an image');
        }
    };

    function validatePassword(password) {
        const regex = {
            length: /.{8,}/,
            uppercase: /[A-Z]/,
            lowercase: /[a-z]/,
            number: /\d/,
            specialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
            commonWords: /^(?!.*(password|123456|qwerty)).*$/,
            repeatingChar: /^(?!.*(.)\1{3}).*$/,
        };

        const errors = {
            length: 'Password must be at least 8 characters long.',
            uppercase: 'Password must contain at least one uppercase letter.',
            lowercase: 'Password must contain at least one lowercase letter.',
            number: 'Password must contain at least one number.',
            specialChar: 'Password must contain at least one special character.',
            commonWords: 'Password cannot contain common words or patterns.',
            repeatingChar: 'Password cannot contain repeating characters.',
        };

        for (const [key, value] of Object.entries(regex)) {
            if (typeof value === 'function') {
                return errors[key];
            } else if (typeof value === 'object' && !value.test(password)) {
                return errors[key];
            }
        }

        return '';
    }

    function validateForm() {
        const password = document.getElementById('password').value;
        const passwordError = validatePassword(password);
        setPasswordError(passwordError);
    }

    function confirmPassword() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
        } else {
            setPasswordError('');
        }
    }
    function validateusername() {
        const username = document.getElementById('username').value;
        if (username.length < 5) {
            setPasswordError('username must be at least 5 characters long.');
        } else {
            setPasswordError('');
        }
    }

    useEffect(() => {
        const inputs = ['password'];
        inputs.forEach((input) => {
            const element = document.getElementById(input);
            if (element) {
                element.addEventListener('input', validateForm);
            }
        });

        return () => {
            inputs.forEach((input) => {
                const element = document.getElementById(input);
                if (element) {
                    element.removeEventListener('input', validateForm);
                }
            });
        };
    }, []);

    useEffect(() => {
        setIsFormValid(!passwordError && document.getElementById('password').value && document.getElementById('confirmPassword').value);
    }, [passwordError]);
    const handleSmallFontSizeChange = (size) => {
        switch (size) {
            case 'fs-1':
                setSmallFontSize('fs-4');
                break;
            case 'fs-2':
                setSmallFontSize('fs-5');
                break;
            case 'fs-3':
            case 'fs-4':
            case 'fs-5':
            default:
                setSmallFontSize('fs-6');
                break;
        }
    };
    const updatedata = () => {
        const password = document.getElementById('password').value;
        const username = document.getElementById('username').value;
        axios.post('http://localhost:8081/update', { password, name: username, id: ID })
            .then((response) => {
                if (response.data.message === 'User updated successfully!') {
                    alert('User updated successfully!')
                } else {
                    console.log(response.data.message)
                    alert('Please try again');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred while updating user data');
            });
    };


    return (
        <>
            <div className={`col-12  p-lg-4 p-3 ${(isDarkMode) ? "bg-dark " : "bg-light "} mb-2 mt-md-0 mt-5 rounded-3 bg-opacity-50`}>
                <div className={` mb-4 ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-3`}>
                    <p className={`d-inline text-start ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? SmallFontSize : "fs-6"} ${(window.innerWidth > 1100) ? "fs-5" : "fs-6"} `}>
                        Profile Settings
                    </p>
                </div>
                <div className={`d-flex flex-md-row flex-column justify-content-between mb-3 `} style={{ position: "relative", zIndex: 1 }}>
                    <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                        <input id="username" onChange={validateusername} required="required" type="text" className={`${(isDarkMode) ? "text-dark" : "text-light"}`} />
                        <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>username</span>
                        <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                    </div>
                    <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                        <input id="password" required="required" type="password" className={`${(isDarkMode) ? "text-dark" : "text-light"}`} />
                        <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Password</span>
                        <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                    </div>
                    <div className="inputbox mb-3 mb-md-0 col-lg-3 col-12">
                        <input id="confirmPassword" onChange={confirmPassword} required="required" type="password" className={`${(isDarkMode) ? "text-dark" : "text-light"}`} />
                        <span className={`${(isDarkMode) ? "text-light" : "text-dark"}`}>Confirm Password</span>
                        <i className={`${(isDarkMode) ? "bg-light" : "bg-dark "}`}></i>
                    </div>
                </div>
                <div className={`row ${(passwordError ? "" : "d-none")} mx-2 rounded-3 ${(isDarkMode) ? "bg-dark " : "bg-light "} border border-2 border-danger`}>
                    <div className="col-lg-3 col-12 pt-3">
                        <p className={`d-flex text-nowrap col-12 text-center text-danger fs-6`} id="passwordError">
                            {passwordError}
                        </p>
                    </div>
                </div>
                <div className="col-12 my-4">
                    <button type="button" onClick={() => updatedata()} className={`btn ${(isDarkMode) ? "btn-light" : "btn-dark"} col-12`} disabled={!isFormValid}>submit</button>
                </div>
                <div className={`d-flex flex-md-row flex-column my-4 ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 rounded-3 p-md-3 p-1 px-3`}>
                    <div className={`col-md-4 col-12 d-flex flex-column border-md-end border-1 mb-4 ${(isDarkMode) ? "border-secoundry " : "border-dark "} `}>
                        <p className={`d-inline text-start ${(isDarkMode) ? "text-light" : "text-dark"} ${(window.innerWidth > 1100) ? "fs-5" : "fs-6"} col-12`} >
                            Profile Picture
                        </p>
                        <p className={`d-inline text-start color-pirple fs-6 col-12`} >
                            This will be displayed on your profile.
                        </p>
                    </div>
                    <div className={`col-md-4 col-12 border-md-end border-1 px-5 mb-4 ${(isDarkMode) ? "border-secoundry " : "border-dark "}`}>
                        <div className='col-md-4 col-12 bg-light rounded-circle'>
                            <img src={profileImage} className='col-12 rounded-circle' alt="profile img" />
                        </div>
                    </div>
                    <div className={`col-md-4 col-12 d-flex flex-column px-md-5 p-0 mb-4`}>
                        <button className={`btn btn-outline-danger fs-6 col-12 mb-2`} onClick={deleteProfileImage}>
                            Delete
                        </button>
                        <label className={`btn bg-pirple fs-6 col-12`} style={{ position: "relative" }}>
                            Update
                            <input
                                className="col-12"
                                name="file"
                                type="file"
                                accept="image/*"
                                onChange={updateProfileImage}
                                style={{ opacity: 0, position: "absolute", top: "0", left: "0" }}
                            />
                        </label>
                    </div>

                </div>
            </div>
            <div className={`row col-12 rounded-3 justify-content-center ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-4 p-3`}>
                <div className={`row col-12 rounded-3 rounded-bottom-0 justify-content-between ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-3 p-2 `}>
                    <h2 className={`col-lg-6 col-12 ${(window.innerWidth > 1100) ? SmallFontSize + ' p-2' : "fs-6 p-1"}  text-lg-start text-center ${(isDarkMode) ? " text-light" : " text-dark"} rounded-4`} >mode :</h2>
                    <div className='col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center p-0 m-0'>
                        <label className="theme-switch">
                            <input type="checkbox"
                                className="theme-switch__checkbox col-lg-2 col-12"
                                onChange={toggleMode}
                                checked={isDarkMode} />
                            <div className="theme-switch__container">
                                <div className="theme-switch__clouds"></div>
                                <div className="theme-switch__stars-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="theme-switch__circle-container">
                                    <div className="theme-switch__sun-moon-container">
                                        <div className="theme-switch__moon">
                                            <div className="theme-switch__spot"></div>
                                            <div className="theme-switch__spot"></div>
                                            <div className="theme-switch__spot"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                        {/* <input
                            type="checkbox"
                            className="theme-checkbox col-lg-3 col-12"
                            onChange={toggleMode}
                            checked={isDarkMode}
                        /> */}
                    </div>
                </div>
                {(window.innerWidth > 1100) ? <div className={`row col-12 rounded-3 rounded-top-0 justify-content-between ${(isDarkMode) ? "bg-dark " : "bg-light "} bg-opacity-50 m-0 p-lg-3 p-2 `}>
                    <h2 className={`col-lg-6 col-7 ${(window.innerWidth > 1100) ? SmallFontSize + ' p-2' : "fs-6 p-1"}  text-start ${(isDarkMode) ? " text-light" : " text-dark"} rounded-4`} >Font Size :</h2>
                    <div className='col-6 d-flex justify-content-end p-0 m-0'>
                        <div className="wrapper col-12 d-flex justify-content-around">
                            <div className="option col-1">
                                <input
                                    checked={FontSize === 'fs-1'}
                                    value="fs-1"
                                    name="btn"
                                    type="radio"
                                    className="input"
                                    onChange={handleFontSizeChange}
                                />
                                <div className="btn1 btn">
                                    <span className="span">XL</span>
                                </div>
                            </div>
                            <div className="option col-1">
                                <input
                                    value="fs-2"
                                    name="btn"
                                    type="radio"
                                    className="input"
                                    onChange={handleFontSizeChange}
                                />
                                <div className="btn1 btn">
                                    <span className="span">L</span>
                                </div>
                            </div>
                            <div className="option col-1">
                                <input
                                    value="fs-3"
                                    name="btn"
                                    type="radio"
                                    className="input"
                                    onChange={handleFontSizeChange}
                                />
                                <div className="btn1 btn">
                                    <span className="span">M</span>
                                </div>
                            </div>
                            <div className="option col-1">
                                <input
                                    value="fs-4"
                                    name="btn"
                                    type="radio"
                                    className="input"
                                    onChange={handleFontSizeChange}
                                />
                                <div className="btn1 btn">
                                    <span className="span">S</span>
                                </div>
                            </div>
                            <div className="option col-1">
                                <input
                                    value="fs-5"
                                    name="btn"
                                    type="radio"
                                    className="input"
                                    onChange={handleFontSizeChange}
                                />
                                <div className="btn1 btn">
                                    <span className="span">XS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}

            </div>
        </>
    );
}

export default Setting;
