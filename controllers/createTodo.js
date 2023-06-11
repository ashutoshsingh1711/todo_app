//import the model
const Todo = require('../models/Todo');

//Route handler
exports.createTodo = async (req, res) => {
    try{
        //extract title and description from req ki body
        const {title, description} = req.body;
        //create a new Todo obj and insert in db
        const response = await Todo.create({title,description});
        //send response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })

    }
}