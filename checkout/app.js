const express = require('express');
const axios = require('axios');
const app = express();

// Square API credentials
const squareClientId = 'sandbox-sq0idb-1ubbsTFZrqLFKp5mz-Z0Qw';
const squareRedirectUri = 'http://localhost:8000/callback';

// Route to initiate the Square OAuth flow
app.get('/adminpage', (req, res) => {
  const squareAuthUrl = `https://connect.squareupsandbox.com/oauth2/authorize?client_id=${squareClientId}&response_type=code&scope=ITEMS_READ%20MERCHANT_PROFILE_READ`;
  res.redirect(squareAuthUrl);
});

// Serve static files (like index.html) from a directory named 'public'
app.use(express.static('public'));

// Other routes and server setup code...

app.get('/callback', async (req, res) => {
  // Handle the OAuth callback as explained in the previous response
  // ...
  alert("you are authenticated")
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
