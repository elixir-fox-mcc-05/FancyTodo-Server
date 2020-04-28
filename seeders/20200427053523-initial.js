'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Todos', [{
            title: 'Belajar Rest Api',
            description: 'Belajar Rest Api dari tutorial youtube',
            due_date: '2020-04-28',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: 'Ngerjain tugas fancy todo',
            description: 'Nyicil tugas fancy todo',
            due_date: '2020-05-2',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Todos', null, {});

    }
};