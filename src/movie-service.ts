import { EventDispatcher } from "@tshio/event-dispatcher";
import { AwilixContainer } from "awilix";
import { getConnection, getRepository, Repository } from "typeorm";
import MovieEntity from "./entities/movie";
import Movie from "./movie";
import { Event, EventSubscriberInterface, EventSubscribersMeta } from "@tshio/event-dispatcher";
import { CreateMovieCommandPayload } from "./create-movie.command";
import { convertToObject } from "typescript";

export type MovieEvent = & {
    payload: {
        payload: {
            movie: Movie
        }
    }
}

export default class MovieService implements EventSubscriberInterface {

    movieRepository: Repository<MovieEntity>;

    constructor() {
        this.movieRepository = getRepository(MovieEntity);
    }

    getSubscribedEvents(): EventSubscribersMeta[] {
        return [{ name: "MovieCreated", method: "create" }];
    }

    public async create(event: MovieEvent) {

        const moviePayload = event.payload;
        console.log(moviePayload.payload.movie)
    }

    async find(id: number): Promise<MovieEntity> {
        return this.movieRepository.findOneOrFail(id);
    }

    hasOwnProperty<X extends {}, Y extends PropertyKey>
        (obj: X, prop: Y): obj is X & Record<Y, unknown> {
        return obj.hasOwnProperty(prop)
    }
}