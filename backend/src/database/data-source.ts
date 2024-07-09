import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateUsersTable1719770634909} from './migrations/1719770634909-CreateUsersTable'
import User from '../app/entities/User'
import { CreateAddressTable1719861091974 } from "./migrations/1719861091974-CreateAddressTable"
import Address from "../app/entities/Address"
import { config } from "dotenv";
config()

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_LOCALHOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,  
    logging: false,
    entities: [User, Address],
    migrations: [CreateUsersTable1719770634909, CreateAddressTable1719861091974],
    subscribers: [],
})
