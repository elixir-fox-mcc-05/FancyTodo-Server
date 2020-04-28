# FancyTodo-Server

FancyTodo API is organized around [REST][1]. It is based on resource-oriented URLs and returns responses as JSON. In FancyTodo, all tasks in the todo-list is saved as instance of model Todo. Similarly, all users is saved as instance of model User.

## POST /todos

This will create a new Todo instance based on form-URL-encoded request body.

Request header:
```javascript
{ Content-Type: "application/json" }
```

Request body:
```javascript
{
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "due_date": "2020-05-01
}
```

Response: 
```javascript
{
      "id": 2,
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "status": false,
      "due_date": "2020-05-01T00:00:00.000Z",
      "UserId": null,
      "createdAt": "2020-04-27T15:58:39.755Z",
      "updatedAt": "2020-04-27T15:58:39.755Z"
}    
```

## GET /todos

This will return all Todo instances saved in the server as array of objects. If no Todo instances is saved in the server, then an empty array will be returned.

Response: 
```javascript
{
  "Todos": [
    {
      "id": 2,
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "status": false,
      "due_date": "2020-05-01T00:00:00.000Z",
      "UserId": null,
      "createdAt": "2020-04-27T15:58:39.755Z",
      "updatedAt": "2020-04-27T15:58:39.755Z"
    }
  ]
}
```

## GET /todos/:id

This will return a Todo instance based on its id (PK).

Request params: 
```javascript
{ id: "integer" }
```
Response:
```javascript
{
  "Todo": {
    "id": 2,
    "title": "Pull Request",
    "description": "PR Tugas hari Senin",
    "status": false,
    "due_date": "2020-05-01T00:00:00.000Z",
    "UserId": null,
    "createdAt": "2020-04-27T15:58:39.755Z",
    "updatedAt": "2020-04-27T15:58:39.755Z"
  }
}
```

## PUT /todos/:id

This will update an instance of Todo based on based on form-URL-encoded request body. If any of the value is empty then that particular value will not be updated. If successful then this will return the number of updated Todo instances.

Request body:
```javascript
{
      "title": "PR Tugas",
      "description": "PR Tugas hari Senin",
      "due_date": "2020-05-01
}
```

Response:
```javascript
{
  { msg: `Task dengan id ${id} telah berhasil diubah` }
}
```

## DELETE /todos/:id

This will destroy an instance of Todo based on id in request params.

Request params: 
```javascript
{ id: <integer> }
```

Response:
```javascript
{ msg: `Task dengan id ${id} telah berhasil dihapus` }
```


## POST /users/signup

This will create a new user based on form-URL-encoded request body.

Request header:
```javascript
{ Content-Type: "application/json" }
```

Request body:
```javascript
{
      "email": "emaildemo@mail.ru",
      "password": "emailada"
}
```

Success Response:
```javascript
{
  "User": {
    "id": 8,
    "email": "adadehaja@mail.ru"
  }
}
```

Error Response:
```javascript
{
  "msg": "Error in signup",
  "error": "email must be unique"
}
```

## POST /users/signin

This will return a string of jsonwebtoken based on input of user (email and password) in request body.

Request body:
```javascript
{
      "email": "emaildemo@mail.ru",
      "password": "emailada"
}
```

Success Response:
```javascript
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Error Response:
```javascript
{
  "msg": "Wrong email or password"
}
```


[1]: https://en.wikipedia.org/wiki/Representational_state_transfer