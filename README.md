# FancyTodo-Server

FancyTodo API is organized around [REST][1] which is based on resource-oriented URLs and returns responses as JSON. In this app, all tasks is saved as instance of model Todo. In this exact nature, all users is saved as instance of model User.

Post, Put and Delete /todos will require jsonwebtoken as an identification from users who succesfully registered and signed in.

## USER

### POST /register

This will create a new user based on form-URL-encoded request body.

Request header:
```javascript
{ Content-Type: "application/json" }
```

Request body:
```javascript
{
  "email": "azka1999@gmail.com",
  "password": "madzka123$"
}
```

Success Response:
```javascript
{
  "id": 2,
  "email": "mama@gmail.com"
}
```

Error Response:
```javascript
{
  "code": 400,
  "name": "BadRequest",
  "errors": [
    {
      "message": "Password length must between 8 or 72 Characters."
    }
  ]
}
```

### POST /login

This will return a string of jsonwebtoken based on input of user (email and password) in request body.

Request body:
```javascript
{
  "email": "azka1999@gmail.com",
  "password": "madzka123$"
}
```

Success Response:
```javascript
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Error Response:
```javascript
{
  "code": 400,
  "name": "BadRequest",
  "errors": [
    {
      "msg": "Invalid Email/Password"
    }
  ]
}
```

## TODO's

### POST /todos

This will create a new Todo instance based on form-URL-encoded request body.

Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Request body:
```javascript
{
      "title": "mandi",
      "description": "Just Do it",
      "due_date": "2020-05-02"
}
```
Success Response:
```javascript
{
  "id": 6,
  "title": "mandi",
  "description": "Just Do it",
  "status": "Unfinished",
  "due_date": "2022-01-30T17:00:00.000Z",
  "UserId": 2,
  "updatedAt": "2020-05-02T10:31:31.492Z",
  "createdAt": "2020-05-02T10:31:31.492Z"
}   
```
Error Response:
```javascript
{
  {
  "error": {
    "name": "SequelizeValidationError",
    "errors": [
      {
        "message": "All data must be filled",
        "type": "Validation error",
        "path": "notNull",
        "value": null,
        "origin": "FUNCTION",
        "instance": {
          "id": null,
          "title": "",
          "description": "Just Do it",
          "due_date": "2022-01-30T17:00:00.000Z",
          "updatedAt": "2020-04-27T16:12:09.273Z",
          "createdAt": "2020-04-27T16:12:09.273Z"
        },
        "validatorKey": "notNull",
        "validatorName": null,
        "validatorArgs": [],
        "original": {}
      }
    ]
  }
}
}
```
### GET /todos
This will return all Todo instances saved in the server as array of objects. If no Todo instances is saved in the server, then an empty array will be returned.
Success Response:
```javascript
[
  {
    "id": 6,
    "title": "mandi",
    "description": "Just Do it",
    "status": "Unfinished",
    "due_date": "2022-01-30T17:00:00.000Z",
    "UserId": 2,
    "createdAt": "2020-05-02T10:31:31.492Z",
    "updatedAt": "2020-05-02T10:31:31.492Z"
  },
  {
    "id": 7,
    "title": "tidur",
    "description": "Just Do it",
    "status": "Unfinished",
    "due_date": "2022-01-30T17:00:00.000Z",
    "UserId": 2,
    "createdAt": "2020-05-02T10:33:00.559Z",
    "updatedAt": "2020-05-02T10:33:00.559Z"
  }
]
```
Error Response:
```javascript
{
  "code": 401,
  "name": "Unauthenticated",
  "errors": "User is Unauthenticated."
}
```
### GET /todos/:id
This will return a Todo instance based on its id (PK).
Request params:
```javascript
{ id: "integer" }
```
Response:
```javascript
{
  "id": 6,
  "title": "mandi",
  "description": "Just Do it",
  "status": "Unfinished",
  "due_date": "2022-01-30T17:00:00.000Z",
  "UserId": 2,
  "createdAt": "2020-05-02T10:31:31.492Z",
  "updatedAt": "2020-05-02T10:31:31.492Z"
}
```
Error Response:
```javascript
{
  "code": 401,
  "name": "Unauthenticated",
  "errors": "User is Unauthenticated."
}
```
### PUT /todos/:id
This will update an instance of Todo based on based on form-URL-encoded request body. If any of the value in request body is empty, then that particular value will not be updated.
Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```
Request body:
```javascript
{
  "title": "Portofolio",
  "description": "Kerjakan",
  "due_date": "2020-02-02"
}
```

Success Response:
```javascript
{
  "id": 8,
  "title": "Portofoli",
  "description": "Kerjakan",
  "status": "Unfinished",
  "due_date": "2022-01-30T17:00:00.000Z",
  "UserId": 2,
  "createdAt": "2020-05-02T10:31:31.492Z",
  "updatedAt": "2020-05-02T10:31:31.492Z"
}
```

Error Response:
```javascript
{ msg: `Todo dengan id 5 tidak ditemukan` }
```

### DELETE /todos/:id

This will destroy an instance of Todo based on id in request params.

Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Request params:
```javascript
{ id: <integer> }
```

Success Response:

return to todo-list with the deleted data removed

Error Response:
```javascript
{
  "code": 404,
  "name": "Not Found",
  "errors": "Data Not Found"
}
```

## 3rd-Party APIs

Access national holidays (Indonesia) and local weather (Jakarta) data. Requires jsonwebtoken from users who succesfully registered and signed in.

### [Nager][2] (Indonesian Holiday)

Request header:
```javascript
{
  Content-Type: "application/json",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Success Response:
```javascript
{
  "Indonesian_Holidays": [
    {
      "date": "2020-05-01",
      "localName": "Hari Buruh Internasional",
      "name": "Labour Day",
      "countryCode": "ID",
      "fixed": true,
      "global": true,
      "counties": null,
      "launchYear": null,
      "type": "Public"
    },
    {
      "date": "2020-08-17",
      "localName": "Hari Ulang Tahun Kemerdekaan Republik Indonesia",
      "name": "Independence Day",
      "countryCode": "ID",
      "fixed": true,
      "global": true,
      "counties": null,
      "launchYear": null,
      "type": "Public"
    }
  ]
}
```

Error Response:
```javascript
{
  "error": {
    "name": "JsonWebTokenError",
    "message": "jwt must be provided"
  }
}
```
OR
```javascript
{
  "error": {
    "name": "JsonWebTokenError",
    "message": "invalid token"
  }
}
```




[1]: https://en.wikipedia.org/wiki/Representational_state_transfer
[2]: https://date.nager.at/Api
