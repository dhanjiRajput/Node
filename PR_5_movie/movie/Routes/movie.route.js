const {Router}=require('express');
const { getUserMovies, createMovie, updateMovie, deleteMovie, updateRating, updateComment, filterMovie } = require('../Controllers/movie.controller');
const isvalidmovie = require('../Middlewares/isvalid.movie');
const movieRouter=Router();

movieRouter.get("/",getUserMovies);
movieRouter.post("/create",isvalidmovie,createMovie);
movieRouter.patch("/update/:id",updateMovie);
movieRouter.delete("/delete",deleteMovie);
movieRouter.patch("/rating/:id",updateRating);
movieRouter.patch("/comment/:id",updateComment);
movieRouter.get("/filter",filterMovie);

module.exports=movieRouter;



