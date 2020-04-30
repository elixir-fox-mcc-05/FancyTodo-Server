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

    * **Code:** 400 <br />
    **Content:** `{
      "code": 400,
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

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
      "email": "agus@gmail.com",
      "password": 123456
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
}`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": 400,
      "type": "Bad Request",
      "errors": "email atau password salah"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

---

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
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

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

  * **Code:** 400 <br />
    **Content:** `{
      "code": 400,
      "type": "Bad Request",
      "errors": "semua data harus diisi"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

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
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

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
    **Content:** `{
      "message": "todo updated",
      "todo": {
        "id": 4,
        "title": "Mengajar",
        "description": "Belajar Biologi",
        "status": false,
        "due_date": "2020-04-28T17:00:00.000Z",
        "UserId": 17,
        "createdAt": "2020-04-28T05:44:55.477Z",
        "updatedAt": "2020-04-28T10:14:04.022Z"
      }
    }`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
      "code": 401,
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": 404,
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`

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

  * **Code:** 401 <br />
    **Content:** `{
      "code": 401,
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": 404,
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": 500,
      "type": "Internal Server Error"
    }`


