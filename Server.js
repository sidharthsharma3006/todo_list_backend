const express = require("express") 
const mongoose = require('mongoose') 
require('dotenv').config() 
const cors = require("cors")
const routes = require('./Routes/ToDoRoute'); 


const app = express(); 
const PORT = process.env.port || 5004;  

app.use(express.json())  
app.use(cors()); 

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log(`Connected to MongoDB...`)).catch((err)=>console.log(err)); 


app.use(routes) 


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`) 

})