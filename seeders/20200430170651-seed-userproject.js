let data = [
  {
    UserId: 1,
    ProjectId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserProjects', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserProjects', null, {});
  }
};
