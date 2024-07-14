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
    logging: false,
    entities: [User, Address],
    migrations: [CreateUsersTable1719770634909, CreateAddressTable1719861091974],
    subscribers: [],
});
