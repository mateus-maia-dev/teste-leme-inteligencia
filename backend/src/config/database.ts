import { ConnectionOptions } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

const databaseConfig: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PSW,
    database: process.env.POSTGRES_DB,

    // see npm run typeorm -- --help in order to create entities and migrations
    entities: [`${__dirname}/../entities/*.ts`],
    migrations: [`${__dirname}/../migrations/*.js`],
    cli: {
        entitiesDir: `${__dirname}/../entities`,
        migrationsDir: `${__dirname}/../migrations`,
        subscribersDir: `${__dirname}/../subscribers`
    },
    synchronize: true
}

export default databaseConfig;
