'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Users", "email", {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false, 
        name: "custom_unique_email"
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Users", "custom_unique_email")
  }
};