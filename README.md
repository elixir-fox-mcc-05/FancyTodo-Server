# **REST API DOCUMENTATION**

**INTRODUCTION**

Rest api documentation for project from *Hacktiv8* to make Fancy ToDo List Apps


## **Users**
----
Represents for register user data and for user login as a requirements before using this Apps.

### **Register User**

Create user data

**Method:**

  `POST`

* **URL**

  /users/register

  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    | Params   | Description                          |
    |----------|--------------------------------------|
    | email    | E-mail of the user, must be unique   |
    | password | Password of the user, must be unique |

* **Success Response:**

  * **Code:** 201 <br />
  **Content:** 

        {
            "id": 1,
            "email": "example@gmail.com"
        }
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        ---under development---
        
    OR

  * **Code:** 500 Internal Server Error <br />   

### **Login User**

Login using user data that already create (register)

**Method:**

  `POST`

* **URL**

  /users/login

*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    | Params   | Description                                                      |
    |----------|------------------------------------------------------------------|
    | email    | E-mail of the user, must be already register                     |
    | password | Password of the user, must be already register, pair with e-mail |

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4NDM2Mn0.bfY1TuKACZlJgdCJ_Po-0ysmIE0I5lVJZmiZAmhq68I"
        }        

* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    



## **Todo**
----
Represents as a main system. 

### **Create Todo**

Create Todo list data

**Method:**

  `POST`

* **URL**

  /todos

*  **URL Params**

   **Required:**
 
    UserId = [integer]

* **Data Params**

    | Params      | Description                                                |
    |-------------|------------------------------------------------------------|
    | title       | Title of The Todo list                                     |
    | description | Description of The Todo list                               |
    | due_date    | Due date of The Todo list                                  |

* **Success Response:**

  * **Code:** 201 Created<br />
  **Content:** 

        {
           "todo": {
                "status": false,
                "id": 1,
                "title": "example title",
                "description": "example description ",
                "due_date": "2020-04-29",
                "updatedAt": "2020-04-28T06:21:14.564Z",
                "createdAt": "2020-04-28T06:21:14.564Z",
                "UserId": 1
           }
        }
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        ---under development---

  OR

  * **Code:** 500 Internal Server Error <br />

### **Read All Todo**

Show all Todo list

**Method:**

  `GET`

* **URL**

  /todos

*  **URL Params**

   **Required:**
 
    UserId = [integer]

* **Data Params**

    none

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
            "todos": [
                {
                "id": 1,
                "title": "example title",
                "description": "example describe",
                "status": false,
                "due_date": "2020-04-28",
                "UserId": 1,
                "createdAt": "2020-04-28T06:16:59.518Z",
                "updatedAt": "2020-04-28T06:16:59.518Z"
                },
                {
                "id": 2,
                "title": "example title 2",
                "description": "example describe 2",
                "status": false,
                "due_date": "2020-05-01",
                "UserId": 1,
                "createdAt": "2020-04-28T06:16:59.518Z",
                "updatedAt": "2020-04-28T06:16:59.518Z"
                }
            ]
        }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />

### **Search Todo**

Show Todo by Todo Id

**Method:**

  `GET`

* **URL**

  /todos/:id

*  **URL Params**

   **Required:**
 
    id = [integer] <br />
    UserId = [integer]

* **Data Params**

    none
   
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
          "todo": {
            "id": 1,
            "title": "example title",
            "description": "example describe",
            "status": false,
            "due_date": "2020-04-28",
            "UserId": 1,
            "createdAt": "2020-04-28T06:16:59.518Z",
            "updatedAt": "2020-04-28T06:16:59.518Z"
          }
        }
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
  **Content:**

        {
          "msg": "todo with id 1 NOT FOUND"
        }       

  OR

  * **Code:** 500 Internal Server Error <br /> 

### **Update Todo**

Update Todo list data by Todo Id

**Method:**

  `PUT`

* **URL**

  /todos/:id

*  **URL Params**

   **Required:**
 
  id = [integer] <br />
  UserId = [integer]

* **Data Params**

    | Params      | Description                                                |
    |-------------|------------------------------------------------------------|
    | title       | Update title of The Todo list by id                        |
    | description | Update description of The Todo list by id                  |
    | due_date    | Update due date of The Todo list by id                     |
    | status      | Update status of The Todo list by id                       |

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
          "todo": {
            "id": 1,
            "title": "update title",
            "description": "update describe",
            "status": true,
            "due_date": "2020-04-28",
            "UserId": 1,
            "createdAt": "2020-04-28T06:16:59.518Z",
            "updatedAt": "2020-04-28T06:16:59.518Z"
          },
            "msg": "todo with id 1 update"
        }
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
  **Content:**

        ---under development---

  OR

  * **Code:** 401 Unauthorized<br />
  **Content:**

        {
          "msg": "Unauthorized"
        }

  OR

  * **Code:** 404 Not Found <br />
  **Content:**

        {
          "msg": "todo with id 1 NOT FOUND"
        }       

  OR

  * **Code:** 500 Internal Server Error <br />  

### **Delete Todo**

Delete Todo list data by Todo Id

**Method:**

  `DELETE`

* **URL**

  /todos/:id

*  **URL Params**

   **Required:**
 
    id = [integer] <br />
    UserId = [integer]

* **Data Params**

    | Params      | Description                                                |
    |-------------|------------------------------------------------------------|
    | title       | Delete title of The Todo list by id                        |
    | description | Delete description of The Todo list by id                  |
    | due_date    | Delete due date of The Todo list by id                     |
    | status      | Delete status of The Todo list by id                       |

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 

        {
          "todo": {
            "id": 1,
            "title": "delete example title",
            "description": "delte example description",
            "status": false,
            "due_date": "2020-06-02",
            "UserId": 1,
            "createdAt": "2020-04-28T11:15:37.875Z",
            "updatedAt": "2020-04-28T11:15:37.875Z"
          },
          "msg": "todo with id 1 delete"
        }
 
* **Error Response:**

  * **Code:** 401 Unauthorized<br />
  **Content:**

        {
          "msg": "Unauthorized"
        }

  OR

  * **Code:** 404 Not Found <br />
  **Content:**

        {
          "msg": "todo with id 1 NOT FOUND"
        }       

  OR

  * **Code:** 500 Internal Server Error <br />  




  <!-- cek 1 by 1, still many error problems -->