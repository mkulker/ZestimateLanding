import React, { useState } from 'react';
import '../App.css';

function FindOut() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        phone: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/; // Simple regex for 10 digit phone number
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'email') {
            setErrors(prevState => ({
                ...prevState,
                email: validateEmail(value) ? '' : 'Invalid email address'
            }));
        }

        if (name === 'phone') {
            setErrors(prevState => ({
                ...prevState,
                phone: validatePhone(value) ? '' : 'Invalid phone number'
            }));
        }
    };

    const handleBlur = () => {
        const { name, email, phone, address } = formData;
        if (name && email && phone && address && !errors.email && !errors.phone) {
            setIsFormValid(true);
            
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            try {
                const response = await fetch('http://localhost:4000/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                if (result.success) {
                    alert('Data submitted successfully!');

                    window.location.href = `https://www.zillow.com/homes/${formData.address}`;
                } else {
                    console.error('Submission error:', result.error);
                    alert('Failed to submit data: ' + result.error);
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="find-out">
            <h2>Curious about your house estimate?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button type="submit" className={isFormValid ? 'active' : ''} disabled={!isFormValid}>
                    Find Out
                </button>
            </form>
        </div>
    );
}

export default FindOut;
