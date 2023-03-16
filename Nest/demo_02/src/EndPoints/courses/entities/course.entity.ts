import mongoose from "mongoose";

export let courseSchema = new mongoose.Schema(
{
    name:String,
    description:String,
    score:Number
})