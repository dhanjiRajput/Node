const Movie = require("../Models/movie.schema");

const getUserMovies=async(req,res)=>{
    try {
        let movies=await Movie.find({user:req.user._id});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const createMovie=async(req,res)=>{
    try {
        let movie=await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const updateMovie=async(req,res)=>{
    try {
        const { id } = req.params;
        const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMovie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json(updatedMovie);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const updateRating=async(req,res)=>{
    try {
        const { id } = req.params;
        const { value } = req.body;
        const movie = await Movie.findById(id);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
        movie.ratings.push({ value });
        await movie.save();
        res.status(200).json(movie);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const updateComment=async(req,res)=>{
    try {
        const { id } = req.params;
        const { text } = req.body;
        const movie = await Movie.findById(id);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
        movie.comments.push({ text });
        await movie.save();
        res.status(200).json(movie);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const deleteMovie=async(req,res)=>{
        let {role}=req.body;

        if(role=='Admin'){
          let { id } = req.params;
          const deletedMovie = await Movie.findByIdAndDelete(id);
          res.status(200).json(deletedMovie);
        }
};

const filterMovie = async (req, res) => {
    try {
        const { title, addedBy, releaseDate ,category } = req.query;
        let query = {};
        if (addedBy){
            query.addedBy = addedBy;
        }
        if (category){
            query.category = category;
        } 
        if (title){
            query.title = title;
        } 
        if(releaseDate){
            query.releaseDate=releaseDate;
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports={getUserMovies,deleteMovie,filterMovie,updateComment,updateMovie,updateRating,createMovie};