import { Action } from "./types";
import { Request, Response } from "express";
import { CommandBus } from "@tshio/command-bus";
import { CreateMovieCommand } from "./create-movie.command";


export interface CreateMovieActionDependencies {
    commandBus: CommandBus;
}

class CreateMovieAction implements Action {
    constructor(private dependencies: CreateMovieActionDependencies) {}

    async invoke({ body }: Request, res: Response) {
        console.log(body)
        const result = await this.dependencies.commandBus.execute(
            new CreateMovieCommand({
                movie: body
            }),
        );

        res.json(result);
    }
}

export default CreateMovieAction;