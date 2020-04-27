**Show Users**
----
  View list of active users in database

* **URL**

  /users

* **Method:**
  
  `GET`

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 1, name: "charles", email:"charles@gmail.com", password: "$2b$10$QUu8Tlg0ujDuIhB6hZE77Olay8Vs.dGe/0Q2i5co40lS1qaY164B"}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Register**
----

* **URL**

  /users/signup

* **Method:**
  
  `POST` 
  
*  **URL Params**

   none

* **Data Params**

  {
      "name": "Agus",
      "email": "agus@gmail.com",
      "password": 123456
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ "name": "Agus", "email": "agus@gmail.com", "password": 123456 }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Login**
----
  
* **URL**

  /users/signin

* **Method:**
  
  `POST` 
  
*  **URL Params**

   none

* **Data Params**

  {
      "name": "Agus",
      "email": "agus@gmail.com",
      "password": 123456
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Delete User**
----

* **URL**

  /users/:email

* **Method:**
  
  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `email=[string]`

* **Data Params**

  none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `Successfully delete`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Show Todos**
----

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
    **Content:** `{
      "id": 1,
      "title": "Belajar",
      "description": "Belajar Matematika",
      "status": false,
      "due_date": "2020-04-27T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-04-27T13:00:31.497Z",
      "updatedAt": "2020-04-27T13:00:31.497Z"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Create Todo**
----

* **URL**

  /todos

* **Method:**
  
  `POST` 
  
*  **URL Params**

   none

* **Data Params**

  {
    "title": "Belajar",
    "description": "Belajar Matematika",
    "due_date": "2020/04/28"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
      "id": 1,
      "title": "Belajar",
      "description": "Belajar Matematika",
      "status": false,
      "due_date": "2020-04-27T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-04-27T13:00:31.497Z",
      "updatedAt": "2020-04-27T13:00:31.497Z"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`


---
**Delete Todo**
----

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
    **Content:** `Successfully delete`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`

---
**Update Todo**
----

* **URL**

  /todos/:id
* **Method:**
  

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  {
    "title": "Belajar",
    "description": "Belajar Kimia",
    "due_date": "2020/04/29"
  }  

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `Successfully update`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Error" }`
