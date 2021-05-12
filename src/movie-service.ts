import { AwilixContainer } from "awilix";
import { getConnection, getRepository, Repository } from "typeorm";
import MovieEntity from "./entities/movie";
import Movie from "./movie";

export default class MovieService {

    movieRepository: Repository<MovieEntity>; 

    constructor() {
        this.movieRepository = getRepository(MovieEntity);
    }
    
    create(movie: Movie): Promise<MovieEntity>{
        return this.movieRepository.save(movie); 
    }

    async find(id: number): Promise<MovieEntity> {
        return this.movieRepository.findOneOrFail(id);
    }
}