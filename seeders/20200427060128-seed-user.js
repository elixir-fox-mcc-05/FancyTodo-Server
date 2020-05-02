let data = [
  {
    email: 'ottoyd@gmail.com',
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
