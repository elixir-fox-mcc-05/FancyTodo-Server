# FancyTodo-Server

**SIGNUP**

* **URL**

  /users/signup

* **Method:**

  `POST`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{

    "id": 3,
    "email": "cokro1@yahoo.com"
        
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find All**

* **URL**

  /users/signin

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJjb2tybzFAeWFob28uY29tIiwiaWF0IjoxNTg4NzYyMDQ1fQ.AbbjlohoFgEW_GY_QSNyoZntU7OCAAdHHcrS22CKXs4"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find All**

* **URL**

  /todos

* **Method:**

  `GET`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "todos": [{
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Post Add Todo**

* **URL**

  /todos

* **Method:**

  `POST`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todos": [{
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        },
        {
        "id": 2,
        "title": "sumagatfadaxut",
        "description": "bajamhaga kafurewa logute hagu",
        "status": false,
        "due_date": "2020-11-04",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find Todo**

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "todo": [{
        "id": 2,
        "title": "sumagatfadaxut",
        "description": "bajamhaga kafurewa logute hagu",
        "status": false,
        "due_date": "2020-11-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Delete Todo**

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todo": [{
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Update Todo**

* **URL**

  /todos/:id

* **Method:**

  `PUT`

* **Header:**

  Token <string>

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todo": [{
        "id": 1,
        "title": "dasolanabagure",
        "description": "banav ipsum fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`