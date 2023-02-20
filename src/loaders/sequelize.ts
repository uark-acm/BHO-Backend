import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
)

export const sequelizeConnection = async () => {
    try {
        sequelize.authenticate().then(() => {
            console.log(
                'Postgres connection has been established successfully.'
            )
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
