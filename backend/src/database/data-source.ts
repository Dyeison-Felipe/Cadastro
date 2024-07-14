<<<<<<< HEAD
import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1719770634909 } from './migrations/1719770634909-CreateUsersTable';
import User from '../app/entities/User';
import { CreateAddressTable1719861091974 } from "./migrations/1719861091974-CreateAddressTable";
import Address from "../app/entities/Address";
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

if (!DB_TYPE || !DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASSWORD || !DB_DATABASE) {
  throw new Error("Por favor, defina todas as variáveis de ambiente no arquivo .env");
}

export const AppDataSource = new DataSource({
    type: DB_TYPE as 'postgres',
    host: DB_HOST,
    port: parseInt(DB_PORT, 10),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
=======
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
>>>>>>> b1bde02ce972b329d0ece0fb8e9f54fc1063d5b7
    logging: false,
    entities: [User, Address],
    migrations: [CreateUsersTable1719770634909, CreateAddressTable1719861091974],
    subscribers: [],
});
