const express = require('express');
const app = express();

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO api
const todoRoutes = require('./routes/todos');

//mounting the todo api routes
app.use("/api/v1",todoRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

//connect to database
const dbConnect = require('./config/database');
dbConnect();

//default route
app.get('/', (req, res)=>{
    res.send(`<h1>This is homepage</h1>`)
})