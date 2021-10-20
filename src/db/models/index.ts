import { Sequelize } from 'sequelize';
import configs from "../config";

const env = process.env.NODE_ENV || 'development';
const config: any = configs[env];

const sequelize = config.url
    ? new Sequelize(config.url, config)
    : new Sequelize(config.database, config.username, config.password, config);

export { Sequelize, sequelize };