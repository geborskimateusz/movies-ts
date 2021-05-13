import { Command } from "@tshio/command-bus";
import Movie from "./movie";

export const CREATE_MOVIE_COMMAND_TYPE = "create-movie";

export interface CreateMovieCommandPayload {
    movie: Movie
}

export class CreateMovieCommand implements Command<CreateMovieCommandPayload> {
    public type: string = CREATE_MOVIE_COMMAND_TYPE;

    constructor(public payload: CreateMovieCommandPayload) {}
}