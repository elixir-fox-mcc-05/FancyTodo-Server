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

## Add Project
  *Login required

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   NONE

* **Data Params**

  name=[string]
  description=[string]
  status=[boolean]
  due_date=[date]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "Project": {
        "id": 2,
        "name": "DirumahAja",
        "description": "Dirumah aja project hacktiv8",
        "status": false,
        "due_date": "2020-05-06T00:00:00.000Z",
        "updatedAt": "2020-05-01T11:20:08.369Z",
        "createdAt": "2020-05-01T11:20:08.369Z"
    },
    "Member": {
        "id": 3,
        "UserId": 6,
        "ProjectId": 2,
        "updatedAt": "2020-05-01T11:20:08.559Z",
        "createdAt": "2020-05-01T11:20:08.559Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "Validate Error" }`

    OR

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects

## Get Project
  *Login required
  Get all project that current user is part of

* **URL**

  /projects

* **Method:**

  `GET`
  
*  **URL Params**

   NONE

* **Data Params**

    NONE

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "Projects": [
        {
            "id": 1,
            "name": "DirumahAja",
            "description": "Dirumah aja project hacktiv8",
            "status": false,
            "due_date": "2020-05-06T00:00:00.000Z",
            "createdAt": "2020-05-01T11:20:08.369Z",
            "updatedAt": "2020-05-01T11:20:08.369Z",
            "UserProjects": {
                "createdAt": "2020-05-01T11:20:08.559Z",
                "updatedAt": "2020-05-01T11:20:08.559Z",
                "ProjectId": 1,
                "UserId": 6
            }
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects

## Add Member to Project
  *Login required
  Add a new member to the project

* **URL**

  /projects/id

* **Method:**

  `POST`
  
*  **URL Params**

   id=[integer]

* **Data Params**

    userid=[integer]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "data": {
        "id": 2,
        "UserId": 2,
        "ProjectId": 1,
        "updatedAt": "2020-05-01T10:03:23.626Z",
        "createdAt": "2020-05-01T10:03:23.626Z"
    }
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects/1

## Update Project Detail
  *Login required
  Update the project detail (name, description, status, etc.)

* **URL**

  /projects/id

* **Method:**

  `PUT`
  
*  **URL Params**

   id=[integer]

* **Data Params**

   name=[string]
   description=[string]
   status=[boolean]
   due_date=[date]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "data": [
        {
            "id": 1,
            "name": "DirumahAja bareng mamahnya anak2",
            "description": "description project baru nih",
            "status": false,
            "due_date": "2020-06-05T00:00:00.000Z",
            "createdAt": "2020-05-01T07:25:08.078Z",
            "updatedAt": "2020-05-01T10:06:48.685Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects/1

## Delete Project
  *Login required
  When you no longer need the project, delete it

* **URL**

  /projects/id

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
        "id": 3,
        "name": "DirumahAja",
        "description": "Dirumah aja project hacktiv8",
        "status": false,
        "due_date": "2020-05-06T00:00:00.000Z",
        "createdAt": "2020-05-01T11:36:17.242Z",
        "updatedAt": "2020-05-01T11:36:17.242Z"
    }
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects/1

## Get Todo By Project
  *Login required
  Get all todo in a project

* **URL**

  /projects/id/todos

* **Method:**

  `GET`
  
*  **URL Params**

   id=[integer]

* **Data Params**

   NONE

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `{
    "ProjectTodos": [
        {
            "id": 37,
            "title": "New Todos",
            "description": "adding new todos",
            "status": "pending",
            "due_date": "2020-06-23T17:00:00.000Z",
            "UserId": 6,
            "ProjectId": 4,
            "createdAt": "2020-05-01T11:38:15.905Z",
            "updatedAt": "2020-05-01T11:38:15.905Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{ error : "Unauthorized Error" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  http://localhost:3000/projects/1/todos