const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}` )})
console.log('TYKA', dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}` )}));

const configs: any = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    testing: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        dialect: 'postgres',
    },
}

export default configs