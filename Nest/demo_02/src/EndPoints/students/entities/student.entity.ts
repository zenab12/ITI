import mongoose from "mongoose";

export let StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    coursesID: [{type: mongoose.Schema.Types.ObjectId, ref: 'courseSchema'}],
  });