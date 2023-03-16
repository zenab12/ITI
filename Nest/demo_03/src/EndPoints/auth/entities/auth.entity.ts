import mongoose from "mongoose"

export let AuthSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    gender:{type:String,enum:['F','M']},
    address:String,
    password:String
})
