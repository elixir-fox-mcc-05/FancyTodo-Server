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
none

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
id

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
id

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