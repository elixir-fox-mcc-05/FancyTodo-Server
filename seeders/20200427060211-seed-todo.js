let data = [
  {
    title: 'bermain',
    description: 'bermain',
    status: true,
    due_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    UserId: 1
  },
  {
    title: 'belajar',
    description: 'belajar',
    status: true,
    due_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    UserId: 1
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
