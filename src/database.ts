import { AwilixContainer } from "awilix";
import * as awilix from "awilix";
import { createConnection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const dbConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "user",
    password: "pass",
    database: "db", 
    connectTimeoutMS: 5000
}

export async function registerDatabase(container: AwilixContainer) {
    const dbConnection = await createConnection(dbConfig);

    container.register({
        dbConnection: awilix.asValue(dbConnection),
    });

}