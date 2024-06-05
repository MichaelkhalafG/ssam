import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Background from './Background';
import axios from 'axios';

function LogIn({ setAuthenticated, setId }) {
    const navigat = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format.';
        }

        // Password validation
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required.';
        }

        setErrors(validationErrors);

        // Submit form only if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/login', {
                email: formData.email,
                password: formData.password,
            })
                .then((response) => {
                    if (response.data.message === 'User logged in successfully!') {
                        console.log(response.data.id);
                        setId(response.data.id);
                        setAuthenticated(true);
                        navigat('/home');
                    } else {
                        alert('Wrong email or password!');
                    }
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
        <div className="container-fluid col-12 bg-dark p-md-5 p-1 pt-5 mt-5 login" style={{ zIndex: 200, overflowY: "scroll" }}>
            <Background />
            <div className="col-12 d-flex justify-content-center p-2 pt-3 m-0" style={{ zIndex: 202 }}>
                <div className="card rounded-4 bg-dark bg-opacity-50 col-12 col-md-9 col-lg-8 p-md-4 p-3 m-0" style={{ border: "1px solid #A162F7" }}>
                    <form className="col-12 row m-0" onSubmit={handleSubmit}>
                        <h1 className="col-12 bg-pirple border border-light p-md-3 p-2 rounded-3 text-center text-dark">Log In</h1>
                        <div className="mb-3 col-12 bg-dark p-md-3 p-2 rounded-3 text-light">
                            <label htmlFor="exampleInputEmail" className="form-label text-light">Email</label>
                            <input
                                type="text"
                                className="form-control bg-pirple-50 text-light"
                                id="exampleInputEmail"
                                placeholder="Your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {renderError('email')}
                        </div>
                        <div className="mb-3 col-12 bg-dark p-md-3 p-2 rounded-3 text-light">
                            <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                            <input
                                type="password"
                                className="form-control bg-pirple-50 text-light"
                                id="exampleInputPassword1"
                                placeholder="*********"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {renderError('password')}
                        </div>
                        <Link to="/signup" className="d-block mb-4 text-decoration-none text-light">
                            Don't have an account? Create one
                        </Link>
                        <button type="submit" className="btn btn-light bg-pirple col-12 d-block">Submit</button>
                        <div className="p-4"></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
