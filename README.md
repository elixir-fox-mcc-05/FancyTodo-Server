# FancyTodo-Server

**Todo list**
----
* **URL**

/todo
* **Method:**
  
GET
  <!-- `GET` | `POST` | `DELETE` | `PUT` -->
  
*  **URL Params**

none
* **Data Params**

none
* **Success Response:**
  
  <!-- <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_> -->

  * **Code:** 200 <br />
    **Content:** `{
    "data": [
        {
            "id": 6,
            "title": "buka puasa",
            "description": "sore ini",
            "status": false,
            "due_date": "2020-04-27T00:00:00.000Z",
            "userId": null,
            "createdAt": "2020-04-27T09:28:35.385Z",
            "updatedAt": "2020-04-27T09:45:35.846Z"
        },
        {
            "id": 7,
            "title": "cooding lagi",
            "description": "belajar keras lagi",
            "status": false,
            "due_date": "2021-04-29T00:00:00.000Z",
            "userId": null,
            "createdAt": "2020-04-27T09:52:40.288Z",
            "updatedAt": "2020-04-27T09:52:40.288Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error " }`

<!-- ============================================================ -->

* **URL**

/todo/id
<!-- example /todo/7 -->
* **Method:**
  
GET
  <!-- `GET` | `POST` | `DELETE` | `PUT` -->
  
*  **URL Params**

none
* **Data Params**

none
* **Success Response:**
  
  <!-- <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_> -->

  * **Code:** 200 <br />
    **Content:** `{
    "data": {
        "id": 7,
        "title": "cooding lagi",
        "description": "belajar keras lagi",
        "status": false,
        "due_date": "2021-04-29T00:00:00.000Z",
        "userId": null,
        "createdAt": "2020-04-27T09:52:40.288Z",
        "updatedAt": "2020-04-27T09:52:40.288Z"
    }
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error " }`
<!-- ==================================================== -->
* **URL**

/todo/
* **Method:**
  
POST
  <!-- `GET` | `POST` | `DELETE` | `PUT` -->
  
*  **URL Params**

none
* **Data Params**

title : "cooding lagi"
description : "belajar keras lagi"
status : false
due_date : 2021-04-29
* **Success Response:**
  
  <!-- <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_> -->

  * **Code:** 200 <br />
    **Content:** `{
    "data": {
        "id": 7,
        "title": "cooding lagi",
        "description": "belajar keras lagi",
        "status": false,
        "due_date": "2021-04-29T00:00:00.000Z",
        "userId": null,
        "createdAt": "2020-04-27T09:52:40.288Z",
        "updatedAt": "2020-04-27T09:52:40.288Z"
    }
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error " }`

<!-- ================================================= -->

* **URL**

/delete/id
* **Method:**
  
DELETE
  <!-- `GET` | `POST` | `DELETE` | `PUT` -->
  
*  **URL Params**

/delete/7
* **Data Params**

none
* **Success Response:**
  
  <!-- <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_> -->

  * **Code:** 200 <br />
    **Content:** `{
        msg : id 7 successfully deleted!
    }
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error " }`

<!-- ============================================== -->

* **URL**

/todo/id
* **Method:**
  
PUT
  <!-- `GET` | `POST` | `DELETE` | `PUT` -->
  
*  **URL Params**

/todo/7
* **Data Params**

title : "cooding"
description : "belajar keras"
status : false
due_date : 2021-04-29
* **Success Response:**
  
  <!-- <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_> -->

  * **Code:** 200 <br />
    **Content:** `{
    "data": {
        "id": 7,
        "title": "cooding",
        "description": "belajar keras",
        "status": false,
        "due_date": "2021-04-29T00:00:00.000Z",
        "userId": null,
        "createdAt": "2020-04-27T09:52:40.288Z",
        "updatedAt": "2020-04-27T09:52:40.288Z"
    }
}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal server error " }`
