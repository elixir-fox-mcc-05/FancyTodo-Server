# FancyTodo-Server

## API Documentation
----

**Create New Todo**
----
  Create new Task to put on todo list

* **URL**

  /todos

* **Method:**
  
  `POST`
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
    "Todo": {
        "status": false,
        "id": 3,
        "title": "Learn Jquery",
        "description": "Learn Jquery from youtube",
        "due_date": "2020-05-01T00:00:00.000Z",
        "updatedAt": "2020-04-27T23:22:01.213Z",
        "createdAt": "2020-04-27T23:22:01.213Z",
        "UserId": 1
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Todos**
----
  Show all existing task on todo list

* **URL**

  /todos

* **Method:**
  
  `GET`
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "Todos": [
            {
                "id": 1,
                "title": "Learn Jquery",
                "description": "Learn Jquery from book and youtube",
                "status": false,
                "due_date": "2020-05-01T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-04-27T20:28:20.446Z",
                "updatedAt": "2020-04-27T20:28:20.446Z"
            },
            {
                "id": 2,
                "title": "Explore Sequelize",
                "description": "Explore sequelize documentation",
                "status": false,
                "due_date": "2020-05-01T00:00:00.000Z",
                "UserId": 2,
                "createdAt": "2020-04-27T20:32:17.123Z",
                "updatedAt": "2020-04-27T20:32:17.123Z"
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show Todo by Id**
----
  Show task by selected id

* **URL**

  /todos/:id

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "Todo": {
        "id": 1,
        "title": "Learn Jquery",
        "description": "Learn Jquery from book and youtube",
        "status": false,
        "due_date": "2020-05-01T00:00:00.000Z",
        "UserId": null,
        "createdAt": "2020-04-27T20:28:20.446Z",
        "updatedAt": "2020-04-27T20:28:20.446Z"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Update Todo**
----
  Update existing task on todo list, selected by id

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "Todo": {
        "id": 1,
        "title": "Learn Jquery",
        "description": "Learn Jquery from youtube",
        "status": false,
        "due_date": "2020-05-01T00:00:00.000Z",
        "UserId": null,
        "createdAt": "2020-04-27T20:28:20.446Z",
        "updatedAt": "2020-04-27T20:28:20.446Z"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Delete Todo**
----
  Delete existing task on todo list, selected by id

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
  
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    { "msg": "Success delete task with id 2" }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **User Register**
----
  New user registration to create an account in todo app

* **URL**

  /users/register

* **Method:**
  
  `POST`
  
* **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
    "id": 5,
    "email": "zero@gmail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **User Login**
----
  Login to user account to access todo list (if user already register)

* **URL**

  /users/login

* **Method:**
  
  `POST`
  
* **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ6ZXJvQGdtYWlsLmNvbSIsImlhdCI6MTU4ODAzMzMyNH0.j5D2mSA894MZPCwUhzHRQ7EbJDcr0DCJGMraO79OCag"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "email not registered" }
        ``` 

        OR

        ```json
        { "error" : "wrong password" }
        ```

