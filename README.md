**Register**
----

* **URL**

  /users/signup

* **Method:**
  
  `POST` 

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }
  
*  **URL Params**

   none

* **Data Params**

  {
      "name": "Agus",
      "email": "agus@gmail.com",
      "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{ "name": "Agus", "email": "agus@gmail.com" }`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Login**
----
  
* **URL**

  /users/signin

* **Method:**
  
  `POST` 
  
    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

*  **URL Params**

   none

* **Data Params**

  {
      "email": "agus@gmail.com",
      "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
}`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "email atau password salah"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
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

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{
  "Users": [
      {
        "id": 17,
        "email": "irene@gmail.com"
      },
      {
        "id": 18,
        "email": "reina@gmail.com"
      },
      {
        "id": 48,
        "email": "viola@gmail.com"
      },
      {
        "id": 54,
        "email": "tania@gmail.com"
      },
      {
        "id": 55,
        "email": "hafidh.finand@gmail.com"
      },
      {
        "id": 56,
        "email": "jack@gmail.com"
      }
    ]
  }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Create Todo**
----

* **URL**

  /todos

* **Method:**
  
  `POST` 

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }
  
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
      "code": "400",
      "type": "Bad Request",
      "errors": "semua data harus diisi"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
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
      "id": "1",
      "title": "Belajar",
      "description": "Belajar Matematika",
      "status": "false",
      "due_date": "2020-04-27T00:00:00.000Z",
      "UserId": "1",
      "createdAt": "2020-04-27T13:00:31.497Z",
      "updatedAt": "2020-04-27T13:00:31.497Z"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Update Todo**
----

* **URL**

  /todos/:id
* **Method:**
  
  `PATCH`

    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }
  
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
        "id": "4",
        "title": "Mengajar",
        "description": "Belajar Biologi",
        "status": "false",
        "due_date": "2020-04-28T17:00:00.000Z",
        "UserId": "17",
        "createdAt": "2020-04-28T05:44:55.477Z",
        "updatedAt": "2020-04-28T10:14:04.022Z"
      }
    }`
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** `{
      "code": "401",
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": "404",
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Delete Todo**
----

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`
  
    **Required:**
 
    Headers: {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
    }

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
      "code": "401",
      "type": "Unauthorized",
      "errors": "Please login first"
    }`
  * **Code:** 404 <br />
    **Content:** `{
      "code": "404",
      "type": "Not Found",
      "errors": "Id Tidak ditemukan"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---
**Create New Project**
----

* **URL**

  /projects

* **Method:**
  
  `POST` 

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }
  
*  **URL Params**

   none

* **Data Params**

  {
      "name": "Mobile App Project"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{
      "Projects": {
        "id": 6,
        "ProjectId": 10,
        "UserId": 17,
        "updatedAt": "2020-05-02T08:40:42.986Z",
        "createdAt": "2020-05-02T08:40:42.986Z"
      }
    }`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`
---
**Show Anime List**
----

* **URL**

  /anime

* **Method:**
  
  `GET`

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    { "movie": [
    {
      "mal_id": 32281,
      "rank": 1,
      "title": "Kimi no Na wa.",
      "url": "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
      "image_url": "https://cdn.myanimelist.net/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6",
      "type": "Movie",
      "episodes": 1,
      "start_date": "Aug 2016",
      "end_date": "Aug 2016",
      "members": 1265853,
      "score": 9.06
    },
    {
      "mal_id": 28851,
      "rank": 2,
      "title": "Koe no Katachi",
      "url": "https://myanimelist.net/anime/28851/Koe_no_Katachi",
      "image_url": "https://cdn.myanimelist.net/images/anime/1122/96435.jpg?s=56d2750d600af93a5d326daec7748cae",
      "type": "Movie",
      "episodes": 1,
      "start_date": "Sep 2016",
      "end_date": "Sep 2016",
      "members": 950262,
      "score": 9.02
    },
    ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Show Corona Update**
----

* **URL**

  /corona

* **Method:**
  
  `GET`

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }

*  **URL Params**

    none

* **Data Params**

    none

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `
    {
  "corona": [
    {
      "Country": "Indonesia",
      "CountryCode": "",
      "Province": "",
      "City": "",
      "CityCode": "",
      "Lat": "0",
      "Lon": "0",
      "Confirmed": 0,
      "Deaths": 0,
      "Recovered": 0,
      "Active": 0,
      "Date": "2020-01-22T00:00:00Z"
    },
    {
      "Country": "Indonesia",
      "CountryCode": "",
      "Province": "",
      "City": "",
      "CityCode": "",
      "Lat": "0",
      "Lon": "0",
      "Confirmed": 0,
      "Deaths": 0,
      "Recovered": 0,
      "Active": 0,
      "Date": "2020-01-23T00:00:00Z"
    },
    ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`

---

**Add Member**
----

* **URL**

  /projects/:id/addmember

* **Method:**
  
  `POST` 

  **Required:**
 
   Headers: {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXJlbmUiLCJlbWFpbCI6ImlyZW5lQGdtYWlsLmNvbSIsImlhdCI6MTU4Nzk5Mzk3Nn0.IKagkwozRHj7Y-otxgk60HiE98EL78-R5Llssjoa3AQ"
   }
  
*  **URL Params**

   none

* **Data Params**

  {
      "id": "17"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** `{
      "id": 5,
      "UserId": 17,
      "ProjectId": 9,
      "updatedAt": "2020-05-02T07:42:32.226Z",
      "createdAt": "2020-05-02T07:42:32.226Z"
    }`
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** `{
      "code": "400",
      "type": "Bad Request",
      "errors": "Email already exists"
    }`
  * **Code:** 500 <br />
    **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
    }`
