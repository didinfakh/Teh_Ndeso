import { Sequelize } from 'sequelize';
const db = new Sequelize('online_shop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
