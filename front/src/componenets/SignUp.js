import React, { useState } from 'react';
import Background from './Background';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp(props) {
    const navigat = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        // address: '',
        phoneNumber: '',
        isTermsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = {};

        // Add validation to check if email field is not empty
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        }

        // Username validation
        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required.';
        }

        // Password validation
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters long.';
        }

        // Confirm password validation
        if (!formData.confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirm password is required.';
        } else if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = 'Password and confirm password do not match.';
        }

        // Phone number validation
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'Phone number is required.';
        } else if (!/^\+?\d{10,14}$/.test(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Invalid phone number format.';
        }

        // Terms acceptance validation
        if (!formData.isTermsAccepted) {
            validationErrors.isTermsAccepted = 'Please accept the terms and conditions.';
        }

        setErrors(validationErrors);

        // Submit form only if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/register', {
                name: formData.username,
                email: formData.email,
                password: formData.password,
                phoneNum: formData.phoneNumber,
            })
                .then((response) => {
                    console.log(response.data);
                    alert('User registered successfully!');
                    navigat('/');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const renderError = (field) => {
        if (errors[field]) {
            return <div className="text-danger">{errors[field]}</div>;
        }
        return null;
    };

    return (
        <div className="container-fluid bg-dark col-12 p-md-5 p-1 login" style={{ zIndex: 200, overflowY: "scroll" }}>
            <Background />
            <div className="col-12 d-flex justify-content-center p-2 pb-0 pt-3 m-0">
                <div className="card rounded-3 bg-dark bg-opacity-50 col-12 col-md-9 col-lg-8 p-md-4 pb-0 p-3 m-0" style={{ border: "1px solid #A162F7" }}>
                    <form className="col-12 row m-0" onSubmit={handleSubmit}>
                        <h1 className="col-12 bg-pirple border border-light p-md-2 p-1 rounded-3 text-center text-dark">
                            Register
                        </h1>
                        <div className="my-1 col-md-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="username" className="form-label text-light">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="username"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {renderError('username')}
                        </div>
                        <div className="my-1 col-md-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="email" className="form-label text-light">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="email"
                                placeholder="Email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {renderError('email')}
                        </div>
                        <div className="my-1 col-md-6 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="password" className="form-label text-light">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="password"
                                placeholder="*********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {renderError('password')}
                        </div>
                        <div className="my-1 col-md-6 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="confirmPassword" className="form-label text-light">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="confirmPassword"
                                placeholder="*********"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {renderError('confirmPassword')}
                        </div>
                        <div className="my-1 col-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="address" className="form-label text-light">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="address"
                                placeholder="1234 Main St"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {renderError('address')}
                        </div>
                        <div className="my-1 col-12 bg-dark p-2 rounded-3 text-light">
                            <label htmlFor="phoneNumber" className="form-label text-light">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light"
                                style={{ border: "2px solid #A162F7" }}
                                id="phoneNumber"
                                placeholder="+201234567899"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            {renderError('phoneNumber')}
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isTermsAccepted"
                                    name="isTermsAccepted"
                                    checked={formData.isTermsAccepted}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label text-light" htmlFor="isTermsAccepted">
                                    Agree to our terms
                                </label>
                            </div>
                            {renderError('isTermsAccepted')}
                        </div>
                        <Link to="/" className="btn btn-light bg-pirple mb-2 col-12 d-block">
                            Go to login
                        </Link>
                        <button type="submit" className="btn btn-light bg-pirple mb-2 col-12 d-block">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
