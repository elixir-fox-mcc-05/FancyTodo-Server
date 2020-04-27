'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Todos', [
      {
          "title":"tugas hari senin pagi",
            "description":"Buat rest api documention" ,
            "status":"false",
            "due_date":"2020-03-30",
            "createdAt":new Date(),
            "updatedAt":new Date() 
      },
      {
          "title":"tugas hari senin siang",
            "description":"Buat rest api application " ,
            "status":"false",
            "due_date":"2020-03-30",
            "createdAt":new Date(),
            "updatedAt":new Date()  
      },
      {
          "title":"tugas hari senin malam",
            "description":"Buat rest api together " ,
            "status":"false",
            "due_date":"2020-04-05",
            "createdAt":new Date(),
            "updatedAt":new Date()  
      }
  ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
  }
};
