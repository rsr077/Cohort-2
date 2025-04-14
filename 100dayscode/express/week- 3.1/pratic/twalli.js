const twilio = require('twilio');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID'; // from Twilio console
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';   // from Twilio console

const client = new twilio(accountSid, authToken);

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

const otp = generateOTP();

client.messages
  .create({
    body: `Your OTP is: ${otp}`,
    from: '+1234567890', // your Twilio number
    to: '+917667304247', // recipient's phone number
  })
  .then(message => console.log(`OTP sent! Message SID: ${message.sid}`))
  .catch(err => console.error(err));
