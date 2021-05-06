import MovieService from "./movie-service";
import { Request, Response, NextFunction } from 'express';
import express from 'express';

export default class MovieController {
    movieService: MovieService;

    constructor(movieService: MovieService) {
        this.movieService = movieService;
    }

    findById(req: Request, res: Response) {
        const msg = this.movieService.findById(1234);
        res.send({ msg });
    }
}