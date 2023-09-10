import { Sequelize } from 'sequelize';
import db from '../config/database.js';
const Menu = db.define(
  'menu',
  {
    nama: Sequelize.STRING,
    harga: Sequelize.STRING,
    gambar: Sequelize.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Menu;

// untuk menggenerate table jika tablenya tidak ada di database
(async () => {
  await db.sync();
})();
