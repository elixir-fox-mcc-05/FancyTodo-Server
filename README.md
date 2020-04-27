# FancyTodo-Server

## Authors

- **Yudha Arief Wijaya** - _Dev_ - [Github](https://github.com/yudhaaw96)

## Create ToDo
Create a ToDo and show new Added ToDo if success

- ### URL

    /todos
- ### Method

    POST
- ### URL Params

    none
- ### Data Params
    title = string,<br />
    description = string,<br />
    status = boolean, (true or false)<br />
    due_date = date (yyyy/mm/dd)

- ### Success Response

    - #### Code: 201

    - #### Content: 
    {<br />
        "CreatedToDo": {<br />
        "id": 1,<br />
        "title": "Begadang Nugas",<br />
        "description": "nugas teroooss",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "updatedAt": "2020-04-27T14:12:27.498Z",<br />
        "createdAt": "2020-04-27T14:12:27.498Z",<br />
        "UserId": null<br />
        }
    }

- ### Error Response:

    - #### Code: 500
        Internal Server Error
    - #### Content:
        error

## Find All ToDos
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
    {<br />
    "ToDos": [<br />
        {<br />
        "id": 1,<br />
        "title": "Begadang Nugas",<br />
        "description": "nugas teroooss",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "UserId": null,<br />
        "createdAt": "2020-04-27T14:12:27.498Z",<br />
        "updatedAt": "2020-04-27T14:12:27.498Z"<br />
        },<br />
        {<br />
        "id": 2,<br />
        "title": "Nugas Lagi",<br />
        "description": "nugas lagi dan lagi",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "UserId": null,<br />
        "createdAt": "2020-04-27T14:24:32.205Z",<br />
        "updatedAt": "2020-04-27T14:24:32.205Z"<br />
        }<br />
    ]<br />
    }

- ### Error Response:
    
    - #### Code: 500
        Internal Server Error
    - #### Content:
        error

## Find ToDo by Id
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
    {<br />
    "ToDoById": {<br />
        "id": 1,<br />
        "title": "Begadang Nugas",<br />
        "description": "nugas teroooss",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "UserId": null,<br />
        "createdAt": "2020-04-27T14:12:27.498Z",<br />
        "updatedAt": "2020-04-27T14:12:27.498Z"<br />
    }<br />
    }

- ### Error Response:

    - #### Code: 500
        Internal Server Error
    - #### Content:
        error

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

    title = string,<br />
    description = string,<br />
    status = boolean, (true or false)<br />
    due_date = date (yyyy/mm/dd)

- ### Success Response:

    - #### Code: 200
    - #### Content: 
    {<br />
    "UpdatedToDo": {<br />
        "id": 2,<br />
        "title": "Nugas lagiiiii (editted)",<br />
        "description": "nugas lagi dan lagi",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "UserId": null,<br />
        "createdAt": "2020-04-27T14:24:32.205Z",<br />
        "updatedAt": "2020-04-27T14:38:39.733Z"<br />
    }<br />
    }

- ### Error Response:

    - #### Code: 500
        Internal Server Error
    - #### Content:
        error

## Delete ToDo by Id
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
    {<br />
    "DeletedToDo": {<br />
        "id": 1,<br />
        "title": "Begadang Nugas",<br />
        "description": "nugas teroooss",<br />
        "status": false,<br />
        "due_date": "2020-04-28T00:00:00.000Z",<br />
        "UserId": null,<br />
        "createdAt": "2020-04-27T14:12:27.498Z",<br />
        "updatedAt": "2020-04-27T14:12:27.498Z"<br />
    }<br />
    }

- ### Error Response:

    - #### Code: 500
        Internal Server Error
    - #### Content:
        error

## Register User
Create a new User and show id, email, encrypted password by bcryptjs

- ### URL

    /register

- ### Method:

    POST

- ### URL Params

    ### Required:

        none

- ### Data Params

    email = string,<br />
    password = string

- ### Success Response:

    - #### Code: 201
    - #### Content: 
    {<br />
    "id": 1,<br />
    "email": "contoh@email.com",<br />
    "password": "$2a$10$MJAe/PL9bnVRcsZmmwJEtOz3y6xPOHYAxKy01V.EbREExFJ73InbS"<br />
    }

- ### Error Response:

    - #### Code: 400
        Bad Request
    - #### Content:
        error

## Login User
Login as a User and generate Access Token

- ### URL

    /login

- ### Method:

    POST

- ### URL Params

    ### Required:

        none

- ### Data Params

    email = string,<br />
    password = string

- ### Success Response:

    - #### Code: 201
    - #### Content: 
{<br />
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.<br />eyJpZCI6MSwiZW1haWwiOiJjb250b2hAZW1haWwuY29tIiwiaWF0IjoxNTg3OTk5MDQ1fQ.<br />0FIYMlLSd3x2v0rh0YeuQAKcvxNaBnAyIE_-wEBYf6Y"
}

- ### Error Response:

    - #### Code: 400
        Bad Request
    - #### Content:
        error