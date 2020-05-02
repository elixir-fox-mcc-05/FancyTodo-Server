# FancyTodo-Server

## API Documentation

 Documentation also can be seen at `https://documenter.getpostman.com/view/11047414/SzfCTRMJ`
----

**Create New Todo**
----
  Create new Task to put on todo list

* **URL**

  /todos

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TODO_TITLE> | true |
  | description | <YOUR_TODO_DESCRIPTION> | false |
  | due_date | <YOUR_TODO_DUE_DATE> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
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
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Todos**
----
  Show all existing task on todo list that owned by current user

* **URL**

  /todos

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "Todos": {
        "id": 1,
        "name": "Zero McMeow",
        "email": "zero@gmail.com",
        "password": "$2a$10$7idDpaXs3wpHSyGYwdir/u3FgB/sEm6YwKBuqVcz4HFOgXRBX3DFS",
        "createdAt": "2020-05-01T21:56:19.907Z",
        "updatedAt": "2020-05-01T21:56:19.907Z",
        "Todos": [
            {
              "id": 19,
              "title": "Learn React",
              "description": "Learn react.js first then react native",
              "status": false,
              "due_date": "2020-05-03T00:00:00.000Z",
              "UserId": 1,
              "ProjectId": null,
              "createdAt": "2020-05-02T06:48:42.610Z",
              "updatedAt": "2020-05-02T06:48:42.610Z"
          }
        ]
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
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

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TODO_TITLE> | true |
  | description | <YOUR_TODO_DESCRIPTION> | false |
  | due_date | <YOUR_TODO_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
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

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ````

----
  **Delete Todo**
----
  Delete existing task on todo list, selected by id

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete task with id 2" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | Huey McMeow | true |
  | email | hueyguey@mail.com | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 5,
    "email": "hueyguey@mail.com"
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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | hueyguey@mail.com | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "accessToken": "<YOUR_TOKEN_HERE>"
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

**Create New Project**
----
  Create new project

* **URL**

  /projects

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_PROJECT_NAME> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "project": {
        "total_member": 0,
        "id": 6,
        "name": "Ship Building",
        "updatedAt": "2020-05-02T07:13:24.879Z",
        "createdAt": "2020-05-02T07:13:24.879Z"
      }
    }
    ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Projects**
----
  Show all existing projects that owned by current user

* **URL**

  /projects

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "projects": [
        {
            "id": 3,
            "name": "Create a Dinosaurs Website",
            "total_member": 1,
            "createdAt": "2020-05-02T04:54:20.852Z",
            "updatedAt": "2020-05-02T04:54:20.859Z",
            "UserProject": {
                "UserId": 4,
                "ProjectId": 3,
                "createdAt": "2020-05-02T04:54:20.857Z",
                "updatedAt": "2020-05-02T04:54:20.857Z"
            }
        },
        {
            "id": 1,
            "name": "Vampire Hunting",
            "total_member": 4,
            "createdAt": "2020-05-01T21:58:27.968Z",
            "updatedAt": "2020-05-02T06:20:55.463Z",
            "UserProject": {
                "UserId": 4,
                "ProjectId": 1,
                "createdAt": "2020-05-01T21:58:27.980Z",
                "updatedAt": "2020-05-01T21:58:27.980Z"
            }
        },
        {
            "id": 6,
            "name": "Ship Building",
            "total_member": 1,
            "createdAt": "2020-05-02T07:13:24.879Z",
            "updatedAt": "2020-05-02T07:13:24.886Z",
            "UserProject": {
                "UserId": 4,
                "ProjectId": 6,
                "createdAt": "2020-05-02T07:13:24.883Z",
                "updatedAt": "2020-05-02T07:13:24.883Z"
            }
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Update Projects**
----
  Update existing Projects on todo list, selected by id

* **URL**

  /projects/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_PROJECT_NAME> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "project": {
        "id": 1,
        "name": "Repair PC",
        "total_member": 4,
        "createdAt": "2020-05-01T21:58:27.968Z",
        "updatedAt": "2020-05-02T07:23:28.035Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ````

----
  **Delete Projects**
----
  Delete existing projects on todo list, selected by id

* **URL**

  /projects/:id

* **Method:**
  
  `DELETE`
  
* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete project with id 2" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    
----
**Create New Project Todo**
----
  Create new Task for project to put on todo list

* **URL**

  /projects/:id/todos

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TODO_TITLE> | true |
  | description | <YOUR_TODO_DESCRIPTION> | false |
  | due_date | <YOUR_TODO_DUE_DATE> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "todo": {
        "status": false,
        "id": 21,
        "title": "Buy Propeller",
        "description": "Buy propeller from trusted seller",
        "due_date": "2020-05-03T00:00:00.000Z",
        "UserId": 4,
        "ProjectId": 7,
        "updatedAt": "2020-05-02T07:37:08.494Z",
        "createdAt": "2020-05-02T07:37:08.494Z"
      }
    } 
    ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Project Todos**
----
  Show all existing project task on todo list that owned by current user

* **URL**

  /projects/:id/todos

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "todos": [
        {
            "id": 21,
            "title": "Buy Propeller",
            "description": "Buy propeller from trusted seller",
            "status": false,
            "due_date": "2020-05-03T00:00:00.000Z",
            "UserId": 4,
            "ProjectId": 7,
            "createdAt": "2020-05-02T07:37:08.494Z",
            "updatedAt": "2020-05-02T07:37:08.494Z"
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Update Project Todo**
----
  Update existing project task on todo list, selected by id

* **URL**

  /:project_id/todos/:todo_id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `project_id=[integer]`

   AND

   `todo_id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TODO_TITLE> | true |
  | description | <YOUR_TODO_DESCRIPTION> | false |
  | due_date | <YOUR_TODO_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "todo": {
        "id": 21,
        "title": "Buy Propeller",
        "description": "Buy propeller from trusted seller",
        "status": false,
        "due_date": "2020-05-13T00:00:00.000Z",
        "UserId": 4,
        "ProjectId": 7,
        "createdAt": "2020-05-02T07:37:08.494Z",
        "updatedAt": "2020-05-02T07:44:50.495Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ````

----
  **Delete Project Todo**
----
  Delete existing project task on todo list, selected by id

* **URL**

  /:project_id/todos/:todo_id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

   **Required:**
 
   `project_id=[integer]`

   AND

   `todo_id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Succes delete todo with id 21 from project with id 7" }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no task with id <id> found" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
**Add New Project Member**
----
  Add a registered user to be a member of project

* **URL**

  /projects/members/:id

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <USER_EMAIL_HERE> | true |

* **Success Response:**
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "newMember": {
        "UserId": 2,
        "ProjectId": 7,
        "updatedAt": "2020-05-02T07:58:01.153Z",
        "createdAt": "2020-05-02T07:58:01.153Z",
        "id": 11
    },
    "name": "Huey McMeow"
    } 
    ```
 
* **Error Response:**
  * **Code:** 404 Bad Request <br />
    **Content:** 
    ```json
    { "error" : "<user> already added to this project" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```json
    { "error" : "no user with email <email>" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Project Members**
----
  Show all existing project members

* **URL**

  /projects/members/:id

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

    **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "members": [
        {
            "id": 4,
            "name": "Duwey McMeow",
            "email": "dadaduy@gmail.com",
            "password": "$2a$10$vK3q/ulmAL/WuVltGT8L2uUnX/gbdH0W3ad3h12xX5igksGSvfIkG",
            "createdAt": "2020-05-01T21:56:59.054Z",
            "updatedAt": "2020-05-01T21:56:59.054Z",
            "UserProject": {
                "UserId": 4,
                "ProjectId": 7,
                "createdAt": "2020-05-02T07:36:43.407Z",
                "updatedAt": "2020-05-02T07:36:43.407Z"
            }
        },
        {
            "id": 2,
            "name": "Huey McMeow",
            "email": "hueyguey@gmail.com",
            "password": "$2a$10$ruiOY7zo5v.piT4hieS/meOnhoU7XxiGjz6X5QR7Kpvf3uDDDMNj.",
            "createdAt": "2020-05-01T21:56:32.173Z",
            "updatedAt": "2020-05-01T21:56:32.173Z",
            "UserProject": {
                "UserId": 2,
                "ProjectId": 7,
                "createdAt": "2020-05-02T07:58:01.153Z",
                "updatedAt": "2020-05-02T07:58:01.153Z"
            }
        },
        {
            "id": 1,
            "name": "Zero McMeow",
            "email": "zero@gmail.com",
            "password": "$2a$10$7idDpaXs3wpHSyGYwdir/u3FgB/sEm6YwKBuqVcz4HFOgXRBX3DFS",
            "createdAt": "2020-05-01T21:56:19.907Z",
            "updatedAt": "2020-05-01T21:56:19.907Z",
            "UserProject": {
                "UserId": 1,
                "ProjectId": 7,
                "createdAt": "2020-05-02T08:02:00.830Z",
                "updatedAt": "2020-05-02T08:02:00.830Z"
            }
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Country**
----
  Show all country

* **URL**

  /public_apis/covid

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

  none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "countries": [
        "ALA Aland Islands",
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "British Virgin Islands",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo (Brazzaville)",
        "Congo (Kinshasa)",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands (Malvinas)",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard and Mcdonald Islands",
        "Holy See (Vatican City State)",
        "Honduras",
        "Hong Kong, SAR China",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran, Islamic Republic of",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (North)",
        "Korea (South)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao PDR",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao, SAR China",
        "Macedonia, Republic of",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia, Federated States of",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestinian Territory",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of Kosovo",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Réunion",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Pierre and Miquelon",
        "Saint Vincent and Grenadines",
        "Saint-Barthélemy",
        "Saint-Martin (French part)",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen Islands",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic (Syria)",
        "Taiwan, Republic of China",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "US Minor Outlying Islands",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Viet Nam",
        "Virgin Islands, US",
        "Wallis and Futuna Islands",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```

----
  **Show All Covid Data**
----
  Show all covid casualties data after user add a todo, so user can #StayAtHome

* **URL**

  /public_apis/covid/:country

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |
  
*  **URL Params**

  none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "country": {
        "Country": "Italy",
        "CountryCode": "IT",
        "Slug": "italy",
        "NewConfirmed": 1965,
        "TotalConfirmed": 207428,
        "NewDeaths": 269,
        "TotalDeaths": 28236,
        "NewRecovered": 2304,
        "TotalRecovered": 78249,
        "Date": "2020-05-02T07:58:54Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "unauthorized user" }
    ```
  
  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    { "error" : "you need to login to access this page" }
    ```
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    { "error" : "internal server error" }
    ```
