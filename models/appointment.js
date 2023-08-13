const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Appointment = sequelize.define("appointment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,

    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Appointment;
