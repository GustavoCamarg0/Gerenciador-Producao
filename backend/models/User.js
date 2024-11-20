import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Users', // Garante que o nome da tabela é o mesmo do banco
  timestamps: false,  // Remove `createdAt` e `updatedAt`
});

export default User;
