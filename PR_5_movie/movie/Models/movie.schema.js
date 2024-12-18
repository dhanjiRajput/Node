const mongoose = require('mongoose');

const movieSchema=new mongoose.Schema({
    title:String,
    description:String,
    releaseDate:String,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
      {
        rating: Number,
        min: Number,
        max: Number,
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,
  });

  const Movie=mongoose.model('Movie',movieSchema);
  module.exports=Movie;