const mongoose = require('mongoose');
const Todo = require('../models/Todo');

exports.getTodo = async (req, res)=>{
    try{
        //fetch all todo items from db
        const todos = await Todo.find({});
        
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo data fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}