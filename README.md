**FancyTodo-Server**

* **URL:**
/todos

* **Method:**
GET

* **URL Params:**
none

* **Data Params:**
none

* **Success Response:**
{
  "todos": [
    {
      "id": 3,
      "title": "Futsal",
      "description": "Futsal di GS kelapa 2",
      "status": false,
      "due_date": "2020-06-01T17:00:00.000Z",
      "createdAt": "2020-04-27T08:48:56.170Z",
      "updatedAt": "2020-04-27T08:48:56.170Z"
    },
    {
      "id": 4,
      "title": "Live Code",
      "description": "Prepare Live Code minggu depan",
      "status": false,
      "due_date": "2020-05-01T17:00:00.000Z",
      "createdAt": "2020-04-27T08:56:37.530Z",
      "updatedAt": "2020-04-27T08:56:37.530Z"
    }
  ]
}

* **Error Response:**
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

--------------------------------------------------------------------------------------------------

* **URL:**
/todos

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **title:** string<br />
  * **description:** string<br />
  * **status:** boolean<br />
  * **due_date:** date

* **Success Response:**
{
  "todo": {
    "id": 9,
    "title": "rebahan",
    "description": "ngantuk",
    "status": false,
    "due_date": "2020-08-28T17:00:00.000Z",
    "updatedAt": "2020-04-27T11:32:46.662Z",
    "createdAt": "2020-04-27T11:32:46.662Z"
  }
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {error: Validation error}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

--------------------------------------------------------------------------------------------------

* **URL:**
/todos/:id

* **Method:**
GET

* **URL Params:**
/:id

* **Data Params:**
id

* **Success Response:**
{
  "todo": {
    "id": 4,
    "title": "Live Code",
    "description": "Prepare Live Code minggu depan",
    "status": false,
    "due_date": "2020-05-01T17:00:00.000Z",
    "createdAt": "2020-04-27T08:56:37.530Z",
    "updatedAt": "2020-04-27T08:56:37.530Z"
  }
}

* **Error Response:**
  * **code:** 404 <br />
  * **Content:** {error: data not found}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/todos/:id

* **Method:**
PUT

* **URL Params:**
/:id

* **Data Params:**
  * **title:** string<br />
  * **description:** string<br />
  * **status:** boolean<br />
  * **due_date:** date

* **Success Response:**
{
  "todo": {
    "title": "Live Code",
    "description": "Jangan lupa live code",
    "status": "false",
    "due_date": "2 May 2020"
  }
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {error: Validation error}<br />
  * **code:** 404 <br />
  * **Content:** {error: data not found}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/todos/:id

* **Method:**
DELETE

* **URL Params:**
/:id

* **Data Params:**

* **Success Response:**
example with id = 10
{
  "Success": "Success delete data with id 10"
}

* **Error Response:**
  * **code:** 404 <br />
  * **Content:** {error: data not found}<br />
  * **code:** 500 <br />
  * **Content:** {error: Internal Server Error}

----------------------------------------------------------------------------------------------------

* **URL:**
/users/sigin

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **email:** string <br />
  * **password:** string

* **Success Response:**
{
  "id": 6,
  "email": "lockdown@test.com",
  "password": "$2a$10$K4YLd3Y8TbYkVaGopVFZoucdtUlTcbixcL4G5hOdMIKUbGt4.62Li"
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content:** {"error": "Validation error: Validation isEmail on email failed"}

  ----------------------------------------------------------------------------------------------------

* **URL:**
/users/signup

* **Method:**
POST

* **URL Params:**
none

* **Data Params:**
  * **email:** string <br />
  * **password:** string

* **Success Response:**
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJsb2NrZG93bkB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEs0WUxkM1k4VGJZa1ZhR29wVkZab3VjZHRVbFRjYml4Y0w0RzVoT2RNSUtVYkd0NC42MkxpIiwiaWF0IjoxNTg4MDA1NzQzfQ.XwHm238w633qa09LZiyU78_Zm52JvCYouXfNUa8BLVc"
}

* **Error Response:**
  * **code:** 400 <br />
  * **Content 1:** {"error": "password not match"}<br />
  * **Content 2:** {"error": "Invalid email or password"}