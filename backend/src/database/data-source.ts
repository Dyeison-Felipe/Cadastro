import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateUsersTable1719770634909} from './migrations/1719770634909-CreateUsersTable'
import User from '../app/entities/User'
import { CreateAddressTable1719861091974 } from "./migrations/1719861091974-CreateAddressTable"
import Address from "../app/entities/Address"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "register",
    synchronize: true,
    logging: false,
    entities: [User, Address],
    migrations: [CreateUsersTable1719770634909, CreateAddressTable1719861091974],
    subscribers: [],
})
