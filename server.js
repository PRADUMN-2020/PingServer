const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

// Target API endpoint to ping
const targetApiUrl = "https://taskmanagerrestapi.onrender.com/api/tasks"; // Replace with your target API URL

// Ping the target API every 10 seconds
setInterval(() => {
  axios
    .get(targetApiUrl)
    .then((response) => {
      console.log(`Ping successful at ${new Date().toISOString()}`);
    })
    .catch((error) => {
      console.error(
        `Ping failed at ${new Date().toISOString()}: ${error.message}`
      );
    });
}, 10000);

setInterval(() => {
  axios
    .get("https://chesswithfriendsserver.onrender.com")
    .then((response) => {
      console.log(`Ping successful at ${new Date().toISOString()}`);
    })
    .catch((error) => {
      console.error(
        `Ping failed at ${new Date().toISOString()}: ${error.message}`
      );
    });
}, 10000);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
