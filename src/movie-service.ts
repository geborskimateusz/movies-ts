import { EventDispatcher } from "@tshio/event-dispatcher";
import { AwilixContainer } from "awilix";
import { getConnection, getRepository, Repository } from "typeorm";
import MovieEntity from "./entities/movie";
import Movie from "./movie";
import { Event, EventSubscriberInterface, EventSubscribersMeta } from "@tshio/event-dispatcher";


export interface MovieServiceDependencies {
    eventDispatcher: EventDispatcher;
}

export default class MovieService implements EventSubscriberInterface {

    movieRepository: Repository<MovieEntity>;


    constructor({ eventDispatcher }: MovieServiceDependencies) {
        this.movieRepository = getRepository(MovieEntity);
    }

    getSubscribedEvents(): EventSubscribersMeta[] {
        return [{ name: "MovieCreated", method: "create" }];
    }

    create(event: Event)  {
        console.log("in listener");
        console.log(event.payload);
        //  this.movieRepository.save(movie);
    }

    async find(id: number): Promise < MovieEntity > {
        return this.movieRepository.findOneOrFail(id);
    }
}