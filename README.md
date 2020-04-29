# FancyTodo-Server
  Create a Fancy Todo List

* **URL**

  /todos 

* **Method:**

  `GET` `POST` `PUT` `DELETE`
  
*  **URL Params**

    /todos/:id

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
  "todos": {
    "id": 1,
    "title": "a",
    "description": "Just Do it",
    "status": false,
    "due_date": "2022-01-30T17:00:00.000Z",
    "createdAt": "2020-04-27T06:14:30.459Z",
    "updatedAt": "2020-04-27T16:23:52.529Z"
  }
}`
  
  * **Code:** 201 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
        `{
          "msg": "ERROR : not found"
        }`

  OR

  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** 
        `{
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
                  "updatedAt": "2020-04-27T16:35:17.629Z"
                },
                "validatorKey": "notNull",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
              }
            ]
          }
        }`

  OR
    * **Code:**500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

# FancyTodo-Server

FancyTodo API is organized around [REST][1]. It is based on resource-oriented URLs and returns responses as JSON. In FancyTodo, all tasks in the todo-list is saved as instance of model Todo. Similarly, all users is saved as instance of model User.

Post, Put and Delete /todos will require jsonwebtoken from users who succesfully registered and signed in.

## /users

### POST /users/signup

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

### POST /users/signin

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
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhZGFkZWhhamFAbWFpbC5ydSIsImlhdCI6MTU4ODA0ODg0MH0.xwCKLdoiniQYBSqRQDBt50gAlfEB0blhXqDmHNoWWL0"
}
```

Error Response:
```javascript
{ "msg": "Wrong email or password" }
```

## /todos

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
      "title": "Pull Request",
      "description": "PR Tugas hari Senin",
      "due_date": "2020-05-01
}
```
Success Response:
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
Error Response:
```javascript
{
  error,
  msg: 'Mohon maaf, untuk saat ini layanan sedang tidak tersedia'
}
```
### GET /todos
This will return all Todo instances saved in the server as array of objects. If no Todo instances is saved in the server, then an empty array will be returned.
Success Response:
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
Error Response:
```javascript
{
  error,
  msg: 'Mohon maaf, untuk saat ini layanan sedang tidak tersedia'
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
Error Response:
```javascript
{
  error,
  msg: `Todo dengan id 5 tidak ditemukan`
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
  "title": "PR Tugas",
  "description": "PR Tugas hari Senin",
  "due_date": "2020-05-01"
}
```

Success Response:
```javascript
{ msg: `Task dengan id 5 telah berhasil diubah` }
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
```javascript
{ msg: `Task dengan id 5 telah berhasil diubah` }
```

Error Response:
```javascript
{ msg: `Task dengan id 5 tidak ditemukan` }
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

### [Metaweather][3] (Jakarta Weather)

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
  "Jakarta_Weather": {
    "consolidated_weather": [
      {
        "id": 6334090846404608,
        "weather_state_name": "Heavy Rain",
        "weather_state_abbr": "hr",
        "wind_direction_compass": "NNE",
        "created": "2020-04-28T12:26:11.396954Z",
        "applicable_date": "2020-04-28",
        "min_temp": 27.58,
        "max_temp": 31.22,
        "the_temp": 31.775000000000002,
        "wind_speed": 5.231828312847637,
        "wind_direction": 23.816796367189962,
        "air_pressure": 1009.5,
        "humidity": 70,
        "visibility": 13.074581941461862,
        "predictability": 77
      }
    ],
    "time": "2020-04-28T20:03:30.630358+07:00",
    "sun_rise": "2020-04-28T05:53:00.674192+07:00",
    "sun_set": "2020-04-28T17:47:13.903960+07:00",
    "timezone_name": "LMT",
    "parent": {
      "title": "Indonesia",
      "location_type": "Country",
      "woeid": 23424846,
      "latt_long": "0.109740,113.917397"
    },
    "sources": [
      {
        "title": "BBC",
        "slug": "bbc",
        "url": "http://www.bbc.co.uk/weather/",
        "crawl_rate": 360
      }
    ],
    "title": "Jakarta",
    "location_type": "City",
    "woeid": 1047378,
    "latt_long": "-6.171440,106.827820",
    "timezone": "Asia/Jakarta"
  }
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
[3]: https://www.metaweather.com/api/