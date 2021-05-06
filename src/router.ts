import express = require("express");
import MovieController from "./movie-controller";

interface RouterDependencies {
    movieController: MovieController,
}

enum Routes {
    FindById = "/findById"
}

export default function createRouter({ movieController }: RouterDependencies) {
    const router: express.Router = express.Router();
    router.get(Routes.FindById, movieController.findById.bind(movieController))
    return router; 
}