import MovieController from "./movie-controller";
import express = require("express");

interface ExpressServerDependencies {
    router: express.Router;
}

export default function createServer({ router }: ExpressServerDependencies): express.Application {

    const app = express();

    app.use("/api", router);

    return app;
}
