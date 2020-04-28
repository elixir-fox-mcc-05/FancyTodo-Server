# FancyTodo-Server

**SignUP User**
----
  adding new user to database

* **URL**

  /users/signup

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `email=[string]`
   `password=[string]`
   `confirm_password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "data": {
                        "id": 2,
                        "email": "email2@email.com",
                        "password": "$2a$10$2ad8Z8wZadZuPQ2O7bjP4.OGSVVjFLSubNNmw/p15gp.Ox8NYH0Ea",
                        "updatedAt": "2020-04-28T10:22:17.616Z",
                        "createdAt": "2020-04-28T10:22:17.616Z"
                    }
                }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "please input confirm password same as password" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "password must morethan 4 character" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "email has already been used" }`

* **Sample Call:**

 **end**
----

**SignIN User**
----
   user signin

* **URL**

  /users/signin

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlbWFpbDFAZW1haWwuY29tIiwiaWF0IjoxNTg4MDY5Nzg0fQ.0obIolFw130Zz-npEcXoNfFU0ze8lw_4tQcBWa3n3tU"}`
 
* **Error Response:**

  * **Code:** 401 UNAUTORIZE <br />
    **Content:** `{ error : "wrong email/password" }`

* **Sample Call:**

 **end**
----

**Show User's TODO list**
----
  show user"s todo list

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

  **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "msg": "success adding task",
                    "data": {
                        "id": 2,
                        "title": "new task",
                        "description": "testing status and other",
                        "due_date": "2020-04-29",
                        "status": false,
                        "UserId": 1,
                        "updatedAt": "2020-04-28T10:33:21.722Z",
                        "createdAt": "2020-04-28T10:33:21.722Z"
                    }
                    }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "internal server error" }`


* **Sample Call:**

 **end**
----

**User Add Task**
----
  adding new task to user database

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `title=[string]`
   `description=[string]`
   `due_date=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success adding task",
                    "data": {
                        "id": 4,
                        "title": "new task 2",
                        "description": "testing status and other",
                        "due_date": "2020-04-29",
                        "status": false,
                        "UserId": 1,
                        "updatedAt": "2020-04-28T10:36:34.027Z",
                        "createdAt": "2020-04-28T10:36:34.027Z"
                    }
                 }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "title already exists" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "please input date after this day" }`


* **Sample Call:**

 **end**
----

**User Edit Task**
----
  edit task that user selected

* **URL**

  /todos/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

  none

* **Data Params**

  **Required:**
 
   `title=[string]`
   `description=[string]`
   `due_date=[string]`
   `status=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success adding task",
                    "data": {
                        "id": 4,
                        "title": "new task 2",
                        "description": "testing status and other",
                        "due_date": "2020-04-29",
                        "status": false,
                        "UserId": 1,
                        "updatedAt": "2020-04-28T10:36:34.027Z",
                        "createdAt": "2020-04-28T10:36:34.027Z"
                    }
                 }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "title already exists" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "please input date after this day" }`


* **Sample Call:**

 **end**
----

**User Delete Task**
----
  deleting task that user selected

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

  **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "msg": "success deleting task with id 1"
                }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZE <br />
    **Content:** `{ error : "not found" }`


* **Sample Call:**

 **end**
----