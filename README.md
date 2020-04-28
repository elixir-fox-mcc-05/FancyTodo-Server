# FancyTodo-Server

## Authors

- **Yudha Arief Wijaya** - _Dev_ - [Github](https://github.com/yudhaaw96)

## REGISTER USER

Create a new User and show id, email, encrypted password by bcryptjs

- ### URL

  /register

- ### Method:

  POST

- ### URL Params

  ### Required:

  none

- ### Data Params

  email = string,<br>
  password = string

- ### Success Response:

  - #### Code: 201
  - #### Content:

  ```
    {
        "id": 1,
        "email": "yudha@email.com",
        "password": "$2a$10$xLwaieiWjKhGAA1uXE/fQ.xZ/aF1mh1frgTvhGFtovdp4VFiqRsLm"
    }
  ```

- ### Error Response:

  - #### Code: 400
    Bad Request
  - #### Content:

  ```
    {
        "code": 400,
        "type": "BAD REQUEST",
        "errors": [
            {
                "message": "Please insert correct Email format!"
            },
            {
                "message": "Please insert password"
            }
        ]
    }
  ```

## LOGIN USER

Login as a User and generate Access Token

- ### URL

  /login

- ### Method:

  POST

- ### URL Params

  ### Required:

  none

- ### Data Params

  email = string,<br>
  password = string

- ### Success Response:

  - #### Code: 201
  - #### Content:

  ```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5dWRoYUBlbWFpbC5jb20iLCJpYXQiOjE1ODgwODQ4ODJ9.IJNdHNsk-veuvwcXhyIe5Cn59XljYJ_PSTqxfReife4"
    }
  ```

- ### Error Response:

  - #### Code: 400
    Bad Request
  - #### Content:

  ```
    {
        "code": 400,
        "type": "BAD REQUEST",
        "errors": "Please insert correct email!"
    }
  ```

  ```
    {
            "code": 400,
            "type": "BAD REQUEST",
            "errors": "Please insert correct password!"
    }
  ```

## CREATE ToDo

Create a ToDo and show new Added ToDo if success

- ### URL

  /todos

- ### Method

  POST

- ### URL Params

  none

- ### Data Params

  title = string,<br>
  description = string,<br>
  status = boolean, (true or false)<br>
  due_date = date (yyyy/mm/dd)

- ### Success Response

  - #### Code: 201

  - #### Content:

  ```
    {
        "CreatedToDo": {
            "id": 1,
            "title": "nugas lagi",
            "description": "nugas lagi dan lagi",
            "status": false,
            "due_date": "2020-04-28T00:00:00.000Z",
            "UserId": 1,
            "updatedAt": "2020-04-28T14:45:28.762Z",
            "createdAt": "2020-04-28T14:45:28.762Z"
        }
    }
  ```

- ### Error Response:

  - #### Code: 400
    Bad Request
  - #### Content:

  ```
    {
        "code": 400,
        "type": "BAD REQUEST",
        "errors": [
            {
                "message": "Please insert title!"
            },
            {
                "message": "Please insert description!"
            },
            {
                "message": "Please insert status!"
            },
            {
                "message": "Please true or false only"
            },
            {
                "message": "Please insert correct date format yyyy-mm-dd!"
            },
            {
                "message": "Due date minimum is today"
            }
        ]
    }
  ```

  - #### Code: 401
    Unauthorized
  - #### Content:

  ```
    {
        "code": 401,
        "type": "UNAUTHORIZED",
        "errors": "Please login first!"
    }
  ```

## FIND ALL ToDos

Show All ToDo if success

- ### URL

  /todos

- ### Method

  GET

- ### URL Params

  none

- ### Data Params

  none

- ### Success Response

  - #### Code: 200

  - #### Content:

  ```
    {
        "ToDos": [
            {
                "id": 1,
                "title": "nugas lagi",
                "description": "nugas lagi dan lagi",
                "status": false,
                "due_date": "2020-04-28T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-04-28T14:45:28.762Z",
                "updatedAt": "2020-04-28T14:45:28.762Z"
                },
                {
                "id": 2,
                "title": "tidur",
                "description": "bangun terus tidur lagi",
                "status": false,
                "due_date": "2020-04-29T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-04-28T14:50:08.731Z",
                "updatedAt": "2020-04-28T14:50:08.731Z"
            }
        ]
    }
  ```

* ### Error Response:

  - #### Code: 401
    Unauthorized
  - #### Content:

  ```
    {
        "code": 401,
        "type": "UNAUTHORIZED",
        "errors": "Please login first!"
    }
  ```

## FIND ToDo by Id

Show a ToDo by Id

- ### URL

  /todos/:id

- ### Method:

  GET

- ### URL Params

  ### Required:

  id = (integer)

- ### Data Params

  None

- ### Success Response:

  - #### Code: 200
  - #### Content:

  ```
    {
        "ToDoById": {
            "id": 1,
            "title": "nugas lagi",
            "description": "nugas lagi dan lagi",
            "status": false,
            "due_date": "2020-04-28T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-28T14:45:28.762Z",
            "updatedAt": "2020-04-28T14:45:28.762Z"
        }
    }
  ```

- ### Error Response:

  - #### Code: 401
    Unauthorized
  - #### Content:

  ```
    {
        "code": 401,
        "type": "UNAUTHORIZED",
        "errors": "Sorry, not authorized, please use correct account"
    }
  ```

  - #### Code: 404
    Not Found
  - #### Content:

  ```
    {
        "code": 404,
        "type": "NOT FOUND",
        "errors": "Sorry, not found"
    }
  ```

## PUT ToDo by Id

Update a ToDo by Id and show new Updated ToDo if success

- ### URL

  /todos/:id

- ### Method:

  PUT

- ### URL Params

  ### Required:

  id = (integer)

- ### Data Params

  title = string,<br>
  description = string,<br>
  status = boolean, (true or false)<br>
  due_date = date (yyyy/mm/dd)

- ### Success Response:

  - #### Code: 200
  - #### Content:

  ```
    {
        "UpdatedToDo": {
            "id": 1,
            "title": "ganti jadi apa ya",
            "description": "hmm apa dong",
            "status": false,
            "due_date": "2020-03-28T00:00:00.000Z",
            "createdAt": "2020-04-28T14:45:28.762Z",
            "updatedAt": "2020-04-28T14:59:42.944Z",
            "UserId": 1
        }
    }
  ```

- ### Error Response:

  - #### Code: 401
    Unauthorized
  - #### Content:

  ```
    {
        "code": 401,
        "type": "UNAUTHORIZED",
        "errors": "Sorry, not authorized, please use correct account"
    }
  ```

  - #### Code: 404
    Not Found
  - #### Content:

  ```
    {
        "code": 404,
        "type": "NOT FOUND",
        "errors": "Sorry, not found"
    }
  ```

## DELETE ToDo by Id

Delete a ToDo by Id and show a deleted ToDo if success

- ### URL

  /todos/:id

- ### Method:

  DELETE

- ### URL Params

  ### Required:

  id = (integer)

- ### Data Params

  none

- ### Success Response:

  - #### Code: 200
  - #### Content:

  ```
    {
        "DeletedToDo": {
            "id": 1,
            "title": "nugas lagi",
            "description": "nugas lagi dan lagi",
            "status": false,
            "due_date": "2020-04-28T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-28T14:45:28.762Z",
            "updatedAt": "2020-04-28T14:45:28.762Z"
        }
    }
  ```

- ### Error Response:

  - #### Code: 401
    Unauthorized
  - #### Content:

  ```
    {
        "code": 401,
        "type": "UNAUTHORIZED",
        "errors": "Sorry, not authorized, please use correct account"
    }
  ```

  - #### Code: 404
    Not Found
  - #### Content:

  ```
    {
        "code": 404,
        "type": "NOT FOUND",
        "errors": "Sorry, not found"
    }
  ```
