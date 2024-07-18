import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainB from './components/MainB';
import placeHolderHome from './images/placeHolderHome.jpg';
import AddressForm from './components/AddressForm';

const App = () => {
  const [imgSrc, setImgSrc] = useState(placeHolderHome);
  const [zestAddress, setZestAddress] = useState(null); // Initialize zestAddress state
  const [zestimate, setZestimate] = useState(null); // Initialize zestAddress state
  const [price, setPrice] = useState(null); // Initialize zestAddress state


  const fetchZestimate = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://zillow-com1.p.rapidapi.com/property?address=${encodedAddress}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '7aec46f57dmshe6448bbc1b6e213p17cf3fjsncd23c858fdc6',
        'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setZestAddress(result.address.streetAddress); // Update zestAddress state
      setZestimate(result.address.zestimate)
      setPrice(result.price)
      setImgSrc(result.imgSrc || placeHolderHome); // Fallback to placeHolderHome if result.imgSrc is undefined
      console.log(result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const Home = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const address = params.get('address');

    useEffect(() => {
      if (address) {
        fetchZestimate(address);
      }
    }, [address]);

    return (
      <div className="App">
        <Header imgSrc={imgSrc} address={zestAddress} />
        <MainB />
        <Footer address={zestAddress} />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ZestimateLanding" element={<AddressForm />} />
      </Routes>
    </Router>
  );
};

export default App;
