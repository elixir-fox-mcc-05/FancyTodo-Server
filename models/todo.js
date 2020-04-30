'use strict';
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize

    class Todo extends Model {
        get due_date() {
            return this.due_date
        }

        get description() {
            return this.description
        }
    }

    Todo.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "Title cannot be null"
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Description cannot be null"
                }
            }
        },
        status: {
            type: DataTypes.STRING
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                checkDueDate() {
                    if (new Date(this.due_date).getTime < new Date().getTime) {
                        throw new Error('Error Date cannot be past time.')
                    } else {
                        console.log('lolos')
                    }
                },
                notNull: {
                    args: true,
                    msg: "Due date cannot be null"
                }
            }
        },
        UserId: DataTypes.INTEGER
    }, {
        hooks: {
            beforeCreate(todo, option) {
                todo.status = false
            }
        },
        sequelize
    });
    Todo.associate = function(models) {
        Todo.belongsTo(models.User)
    };
    return Todo;
};