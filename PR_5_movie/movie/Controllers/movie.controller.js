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
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const updateMovie=async(req,res)=>{
    try {
        let {movieid}=req.body;
        let {id}=req.params;
        if(movieid==id){
            let updatedMovie=await Movie.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(updatedMovie);
        }else{
            res.status(400).json({error: "movie not found"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const updateRating=async(req,res)=>{
    try {
        let {movieid}=req.body;
        let {id}=req.params;
        if(movieid==id){
            let updatedMovie=await Movie.findByIdAndUpdate(id,{$set:{rating:req.body.rating}},{new:true});
            res.status(200).json(updatedMovie);
        }else{
            res.status(400).json({error: "movie not found"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const updateComment=async(req,res)=>{
    try {
        let {movieid}=req.body;
        let {id}=req.params;
        if(movieid==id){
            let updatedMovie=await Movie.findByIdAndUpdate(id,{$push:{comments:req.body.comment}},{new:true});
            res.status(200).json(updatedMovie);
        }else{
            res.status(400).json({error: "movie not found"});
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const deleteMovie=async(req,res)=>{
    try {
        let {id}=req.params;
        let deletedMovie=await Movie.findByIdAndDelete(id);
        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(500).json({error: error});
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