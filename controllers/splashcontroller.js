'use strict';

const { Todo } = require(`../models`)
const { Op } = require("sequelize");
const axios = require(`axios`);

class TodoController {

    getRandom( req, res){
        axios({
            method: 'get',
            url: 'https://api.unsplash.com/photos/random?client_id=uB0iTLuGuthziJ3jGZmTjRVDu5Us4ifS9m_8Qr41L1s'
          })
            .then(body => {
                console.log(body)
                res.status(201).json({
                    url : body.urls.full
                })
            }).catch(err => {
                console.log(err);
            });
    }
    
}

module.exports = TodoController;