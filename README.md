# FancyTodo-Server

## GET ALL TODOS

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "msg": [
        {
            "id": 1,
            "title": "Belajar REST API",
            "description": "tutorial membuat rest api bersama",
            "status": "pending",
            "due_date": "2020-04-27T04:59:29.533Z",
            "createdAt": "2020-04-27T04:59:29.533Z",
            "updatedAt": "2020-04-27T04:59:29.533Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Todos relation does not exist" }`

* **Sample Call:**

  http://localhost:3000/todos

## ADD NEW ToDo

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  status=[string] (optional)<br>
  date=[date]

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** `{
    "msg": {
        "id": 2,
        "title": "New Todos",
        "description": "adding new todos",
        "status": "pending",
        "due_date": "2020-06-23T17:00:00.000Z",
        "updatedAt": "2020-04-27T07:15:18.340Z",
        "createdAt": "2020-04-27T07:15:18.340Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validation Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/todos

## GET ToDo By ID

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "data": {
        "id": 1,
        "title": "Belajar REST API",
        "description": "tutorial membuat rest api bersama",
        "status": "pending",
        "due_date": "2020-04-27T04:59:29.533Z",
        "createdAt": "2020-04-27T04:59:29.533Z",
        "updatedAt": "2020-04-27T04:59:29.533Z"
    }
}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Data Not Found" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/todos/1

## UPDATE ToDo By ID

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  title=[string] <br>
  description=[string] <br>
  status=[string] (optional)<br>
  date=[date]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "data": [
        {
            "id": 2,
            "title": "judul baru nih",
            "description": "description baru nih",
            "status": "done",
            "due_date": "2020-04-27T17:00:00.000Z",
            "createdAt": "2020-04-27T05:34:24.731Z",
            "updatedAt": "2020-04-27T07:19:18.181Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Data Not Found" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/todos/2

## DELETE ToDo By Id

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   id=[integer]

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "deletedData": {
        "id": 5,
        "title": "judul baru nih",
        "description": "description baru nih",
        "status": "done",
        "due_date": "2020-04-27T17:00:00.000Z",
        "createdAt": "2020-04-27T05:46:12.780Z",
        "updatedAt": "2020-04-27T06:35:22.478Z"
    }
}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : "Data Not Found" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/todos/2

## User Register

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

  email=[string]<br>
  password=[string] (min 6 length, at least 1 number)

* **Success Response:**

  * **Code:** 201 Created<br />
    **Content:** `{
    "data": {
        "id": 4,
        "email": "alfiqiey@gmail.com",
        "password": "$2b$10$Cp2ciwJuLfMOgQW/eoXBIurao0qv1SLnUi8c7JkFm6mTdl6fgZ1Jq",
        "updatedAt": "2020-04-27T10:39:05.422Z",
        "createdAt": "2020-04-27T10:39:05.422Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/register

## User Login

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

  email=[string]<br>
  password=[string]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ5b3NhQG1haWwuY29tIiwiaWF0IjoxNTg3OTgzNTExfQ.99Xx38e9IQygRvuvUdus0mHccwE5LLznCDAO5FWyQoU"
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Server Error" }`

* **Sample Call:**

  http://localhost:3000/login