'use strict';
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize

    class Todo extends Model {}

    Todo.init({
        title: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        description: DataTypes.STRING,
        status: DataTypes.STRING,
        due_date: {
            type: DataTypes.DATE,
            validate: {
                checkdate() {
                    if (this.due_date < new Date()) throw new Error('Due date must not filled with the past date.')
                }
            }
        },
        UserId: DataTypes.INTEGER
    }, {
        hooks: {
            beforeCreate(todo, option) {
                todo.tag = todo.tag || 'Undone'
            }
        },
        sequelize
    });
    Todo.associate = function(models) {
        Todo.belongsTo(models.User)
    };
    return Todo;
};