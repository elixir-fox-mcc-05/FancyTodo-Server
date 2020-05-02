let data = [
  {
    name: 'Moon Landing',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Eat Shit',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
