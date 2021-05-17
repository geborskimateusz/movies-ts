import { getRepository, Repository } from "typeorm";
import MovieEntity from "./entities/movie";
import Movie from "./movie";
import { EventSubscriberInterface, EventSubscribersMeta } from "@tshio/event-dispatcher";

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
        const movieCommandPayload = event.payload;
        const movie: Movie = movieCommandPayload.payload.movie;
        await this.movieRepository.save(movie);
    }
}