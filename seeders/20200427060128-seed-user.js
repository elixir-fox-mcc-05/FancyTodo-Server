let data = [
  {
    email: 'ottoyd',
    password: 'ottoyd',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
