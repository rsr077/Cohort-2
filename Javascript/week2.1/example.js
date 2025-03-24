
/* 
function fetchData(callback) {
  setTimeout(() => {
     console.log("Data fetched !");
     callback();
  },2000)
}

fetchData(() => {
   console.log("processing data")
}) */


/* function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      
      resolve("Success");
    }, 2000)
  });
}

fetchData().then((message) => {
   console.log("Processing data...", message);
}).catch((error) => {
   console.log("Error", error)
}) */


 /*   function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve("Success");
      }, 5000)
    });
  }

  async function getDate() {
     try {
      let result = await fetchData(); 
      console.log(result);
     }catch(error) {
      console.log("Error", error)
     }
  }

  getDate();
 */

 /*  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve("Success");
      }, 5000)
    });
  }
  
  async function process() {
    try {
      let data1 = await fetchData();
      console.log(data1);

      let data2 = await fetchData();
      console.log(data2);
    }catch (error) {
       console.log("Error:" , error);
    }
  }

  process(); */


  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve("Success");
      }, 5000)
    });
  }

  async function processAll() {
    try{
      let [data1, data2] = await Promise.all([fetchData(),fetchData() ]);
      console.log(data1, data2);
    }catch (error) {
      console.log("Error:", error);
    }

  }

  processAll();
  