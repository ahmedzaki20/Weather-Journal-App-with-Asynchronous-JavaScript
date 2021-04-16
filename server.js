// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const appData=[];

// Setup Server
app.listen(8000,callBack)
function callBack(){
    console.log('server is running');
}
// GET route
app.get('/dataSends',(req,res)=>{
    res.send(appData);
    console.log(appData);
});

// POST route

app.post('/postFeeling',(req,res)=>{
    
    let newEntry={
        feeling:req.body.feeling,
        weatherData:req.body.data,
        date:req.body.date};
        //res.send(appData)
        appData.push(newEntry);
     // console.log(newEntry);
      console.log(appData);
    
})

