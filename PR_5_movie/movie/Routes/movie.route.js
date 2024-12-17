const {Router}=require('express');
const { getUserMovies, createMovie, updateMovie, deleteMovie, updateRating, updateComment, filterMovie } = require('../Controllers/movie.controller');
const isvalidmovie = require('../Middlewares/isvalid.movie');
const movieRouter=Router();

movieRouter.get("/user",getUserMovies);
movieRouter.post("/movie/create",isvalidmovie,createMovie);
movieRouter.patch("/movie/update/:id",updateMovie);
movieRouter.delete("/movie/delete",deleteMovie);
movieRouter.patch("/movie/rating/:id",updateRating);
movieRouter.patch("/movie/comment/:id",updateComment);
movieRouter.get("/movie/filter",filterMovie);

module.exports=movieRouter;



