const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/getIp', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://ip-address-tracker-free.p.rapidapi.com/rapidapi/ip',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, 
      'X-RapidAPI-Host': 'ip-address-tracker-free.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
