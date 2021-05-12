import { AwilixContainer } from "awilix";
import * as awilix from "awilix";
import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import MovieEntity from "./entities/movie";

const dbConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "user",
    password: "pass",
    database: "db", 
    connectTimeoutMS: 5000,
    entities: [MovieEntity]
}

export async function registerDatabase(container: AwilixContainer) {
    const dbConnection = await createConnection(dbConfig);
    console.log("Connected to DB");
    dbConnection.synchronize();
    console.log("Database Synchronized")
    container.register({
        dbConnection: awilix.asValue(dbConnection),
    });

}