import { CommandHandler } from "@tshio/command-bus";
import { EventDispatcher } from "@tshio/event-dispatcher";
import { CreateMovieCommand, CREATE_MOVIE_COMMAND_TYPE } from "./create-movie.command";

export interface CreateMovieHandlerDependencies {
    eventDispatcher: EventDispatcher;
}

export default class CreateMovieHandler implements CommandHandler<CreateMovieCommand> {
    public commandType: string = CREATE_MOVIE_COMMAND_TYPE;
    private eventDispatcher: EventDispatcher;

    constructor({ eventDispatcher }: CreateMovieHandlerDependencies) {
        this.eventDispatcher = eventDispatcher;
    }

    async execute(command: CreateMovieCommand) {
        console.log("In create movie handler");
        console.log(command);

        this.eventDispatcher.dispatch({
            name: "MovieCreated",
            payload: command,
        })

        return {
            ...command
        };
    }


}