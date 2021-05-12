import MovieService from "./movie-service";
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import Movie from "./movie";

export default class MovieController {
    movieService: MovieService;

    constructor(movieService: MovieService){
        this.movieService = movieService;
    }

    async findById(req: Request, res: Response) {
        const movie = req.body;
        const movieCreated = await this.movieService.create(movie);
        const found = await this.movieService.find(movieCreated.id);
        res.send(found);
    }
}