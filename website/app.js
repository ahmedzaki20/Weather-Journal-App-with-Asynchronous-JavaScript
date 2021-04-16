/* Global Variables */
const generate =document.getElementById('generate');
let i=0;



// Create a new date instance dynamically with JS
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = ',us&appid=7a9901a359cee7cdbf3ecb0aea6192c0&units=metric';
generate.addEventListener('click', performAction);
function performAction(e){
let zipNumber=document.getElementById('zip').value;
let feeling=document.getElementById('feelings').value;
console.log(feeling)
getApiData(baseURL,zipNumber, apiKey)
.then( function (data){
  console.log(data)
  postData('/postFeeling',{feeling:feeling,data:data,date:newDate })
console.log(data);
updateUI()
})

}



const getApiData = async (baseURL, zipNumber, key)=>{

  const res = await fetch(baseURL+zipNumber+key)
  try {

    const data= await res.json();
    console.log(data)

    return data;
    
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


/* Function to POST data */
const postData = async ( url = '', data = {})=>{
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      // console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
};
//* UI updata function
 const updateUI=async ()=>{
  const request= await fetch('/dataSends')
  try {
    const allData = await request.json();

    document.getElementById('temp').innerHTML =`Temp: ${allData[i].weatherData.main.temp}`;
    document.getElementById('content').innerHTML = `Feeling:${allData[i].feeling}`;
    document.getElementById('date').innerHTML = `Date: ${allData[i].date}`;
    console.log(allData);
    i++

  } catch(error){
    console.log("error", error);
  }
}

let d = new Date();
let newDate = `${d.getMonth()+1}. ${d.getDate()}. ${d.getFullYear()}`;