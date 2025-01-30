import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

export const fastifyApi = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'arkus@123',
    database: 'fastifyDB',
    synchronize: true,
    logging: true,
    entities: [User],
})