// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

function generateOTP(length = 6) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

app.post('/get-otp', (req, res) => {
  const otp = generateOTP();
  console.log('Generated OTP:', otp);
  // Ideally, send OTP to user's phone/email here
  res.json({ otp });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
