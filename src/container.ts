import { asArray } from "@tshio/awilix-resolver";
import { CommandBus } from "@tshio/command-bus";
import { EventDispatcher } from "@tshio/event-dispatcher";
import * as awillix from "awilix";
import { AwilixContainer, Lifetime } from "awilix";
import CreateMovieAction from "./create-movie.action";
import CreateMovieHandler from "./create-movie.handler";
import { registerDatabase } from "./database";
import MovieService from "./movie-service";
import createRouter from "./router";
import createServer from "./server";

export async function createContainer(): Promise<AwilixContainer> {
    const container: AwilixContainer = awillix.createContainer({
        injectionMode: awillix.InjectionMode.PROXY,
    });


    await registerDatabase(container);

    container.register({
        eventDispatcher: awillix.asClass(EventDispatcher).classic().singleton(),
        commandBus: awillix.asClass(CommandBus).classic().singleton(),
        commandHandlers: asArray<any>([
            awillix.asClass(CreateMovieHandler)
        ]),
        movieService: awillix.asClass(MovieService),
        createMovieAction: awillix.asClass(CreateMovieAction),
        router: awillix.asFunction(createRouter),
        expressServer: awillix.asFunction(createServer),
    });

    console.log('Modules loaded:', Object.keys(container.registrations));

    return container;
}