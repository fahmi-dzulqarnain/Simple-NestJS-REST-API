import 'dotenv/config'
import { env } from 'process'

module.exports = {
    type: 'mysql',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    entities: [],
    synchronize: true,
    dropSchema: false,
    logging: true
}