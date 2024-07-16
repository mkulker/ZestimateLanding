// AddressForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const AddressForm = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedAddress = encodeURIComponent(address);
    navigate(`/home?address=${encodedAddress}`);
  };
  

  return (
    <div className="address-form-container">
      <form className="address-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default AddressForm;
