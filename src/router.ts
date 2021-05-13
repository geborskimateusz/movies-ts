import express = require("express");
import { Action } from "./types";

interface RouterDependencies {
    createMovieAction: Action
}

enum Routes {
    CREATE = "/create"
}

export default function createRouter(actions: RouterDependencies) {
    const router: express.Router = express.Router();
    router.use(express.json());
    router.post(Routes.CREATE, actions.createMovieAction.invoke.bind(actions.createMovieAction));
    return router; 
}