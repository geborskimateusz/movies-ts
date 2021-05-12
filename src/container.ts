import * as awillix from "awilix";
import { AwilixContainer, Lifetime } from "awilix";
import { registerDatabase } from "./database";
import MovieController from "./movie-controller";
import MovieService from "./movie-service";
import createRouter from "./router";
import createServer from "./server";

export async function createContainer(): Promise<AwilixContainer> {
    const container: AwilixContainer = awillix.createContainer({
        injectionMode: awillix.InjectionMode.PROXY,
    });


    await registerDatabase(container);

    container.register({
        movieService: awillix.asClass(MovieService),
        movieController: awillix.asClass(MovieController).classic(),
        router: awillix.asFunction(createRouter),
        expressServer: awillix.asFunction(createServer),
    });

    console.log('Modules loaded:', Object.keys(container.registrations));

    return container;
}