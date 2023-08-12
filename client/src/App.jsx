import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getIp');
        setUserLocation(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <div className="container">
      <h1>Get Your IP and Location 🚀</h1>
      {userLocation ? (
        <div className="info-box">
          <div className="row">
            <div className="column">
              <p><strong>IP Address</strong></p>
              <p><strong>Country</strong></p>
              <p><strong>State</strong></p>
              <p><strong>City</strong></p>
              <p><strong>Timezone</strong></p>
            </div>
            <div className="column">
              <p>{userLocation.ip}</p>
              <p>{userLocation.country}</p>
              <p>{userLocation.state}</p>
              <p>{userLocation.city}</p>
              <p>{userLocation.timezone}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
