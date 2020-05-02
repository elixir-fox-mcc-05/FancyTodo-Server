# FancyTodo-Server

Postman: https://documenter.getpostman.com/view/10895410/SzYXWzMc

**User Registration**
----

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Request Body**

    **Required:**
    
    `{
        email: "todo1@mail.com", 
        password: "qwerty123"
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

    `{
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b2RvMUBtYWlsLmNvbSIsImlhdCI6MTU4Nzk4MjcwNn0.XxcgnlKiup1qNDDS09x5Otu9opf6RMAN6MU4eUZwkC8",
        "msg": "Successfully Registered"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        type: "Bad Request",
        "errors": [
            {
                "message": "Email already exists"
            }
        ]
    }`

    OR

    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Please enter valid email"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`

**User Login**
----

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Request Body**

  **Required:**
    
    `{
        email: "todo1@mail.com", 
        password: "qwerty123"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b2RvMUBtYWlsLmNvbSIsImlhdCI6MTU4Nzk4NjY1NH0.dP7sfZ9oOhduJwDe8-dbv5EuWDMBSlu3EUWbL_fLXiQ"
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        type : "Bad Request",
        msg : "Invalid email/password"
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`

**Create Todo**
----

* **URL**

  /todos

* **Method:**
  
  `POST`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **Request Body**

   **Required:**

   `{
       title: "Study",
       description: "Learning jquery"
       due_date: 2020-05-18
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    `{
        "msg": "New todo successfully created",
        "result": {
            "status": false,
            "id": 2,
            "title": "Study",
            "description": "Learing jquery",
            "due_date": "2020-05-18T00:00:00.000Z",
            "UserId": 1,
            "updatedAt": "2020-04-27T10:22:08.010Z",
            "createdAt": "2020-04-27T10:22:08.010Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    
    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Input date in the future"
            }
        ]
    }`

    OR

    `{
        "type": "Bad Request",
        "errors": [
            {
                "message": "Input Title"
            }
        ]
    }`

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Show All Todo**
----

* **URL**

  /todos

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **Request Body**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "result": [
            {
                "id": 2,
                "title": "Study",
                "description": "Learing jquery",
                "status": false,
                "due_date": "2020-05-18T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-04-27T10:22:08.010Z",
                "updatedAt": "2020-04-27T10:22:08.010Z"
            },
            {
                "id": 1,
                "title": "Watching",
                "description": "Watch movie with my friend",
                "status": false,
                "due_date": "2020-07-20T00:00:00.000Z",
                "UserId": 1,
                "createdAt": "2020-04-27T10:21:15.328Z",
                "updatedAt": "2020-04-27T10:21:15.328Z"
            }
        ]
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Find One**
----

* **URL**

  /todos/:id

* **Method:**
  
  `GET`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "result": {
            "id": 1,
            "title": "Watching",
            "description": "Watch movie with my friend",
            "status": false,
            "due_date": "2020-07-20T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-27T10:21:15.328Z",
            "updatedAt": "2020-04-27T10:21:15.328Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
      "type": "Not Found",
      "errors": [
          {
              "message": "Todo not found"
          }
      ]
    }`

    OR

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Update Todo**
----

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

*  **Request Body**

   **Required:**

   `{
       title: "Study",
       description: "Learning jquery & ajax"
       due_date: 2020-08-17
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
        "msg": "Todo successfully updated",
        "result": {
            "id": 4,
            "title": "Study",
            "description": "Learning jquery & ajax",
            "status": false,
            "due_date": "2020-08-17T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-28T09:40:07.925Z",
            "updatedAt": "2020-04-28T09:40:19.474Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Todo not found"
            }
        ]
    }`

    OR

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Make it Done**
----

* **URL**

  /todos/:id

* **Method:**
  
  `PATCH`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
      "msg": "Todo successfully updated"
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Todo not found"
            }
        ]
    }`

    OR

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**Delete Todo**
----

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`
  
*  **Request Headers**

   **Required:**
 
   `access_token=[string]`

*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
      "msg": "Successfully deleted todo"
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
        "type": "Not Found",
        "errors": [
            {
                "message": "Todo not found"
            }
        ]
    }`

    OR

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`


**3rd API**
----

* **URL**

  /api

* **Method:**
  
  `GET`
  

*  **Request Body**

   `{
       city: "bandung"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
      "cityName": {
          "city": "Bandung",
          "country": "ID"
      },
      "weatherIcon": "http://openweathermap.org/img/wn/10d@2x.png",
      "cityWeather": {
          "weather": {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
          },
          "temp": {
              "temp": 296.76,
              "feels_like": 298.68,
              "temp_min": 296.76,
              "temp_max": 296.76,
              "pressure": 1008,
              "humidity": 69,
              "sea_level": 1008,
              "grnd_level": 927
          }
      },
      "shalatSchedule": {
          "date_for": "2020-4-28",
          "fajr": "4:31 am",
          "shurooq": "5:43 am",
          "dhuhr": "11:47 am",
          "asr": "3:08 pm",
          "maghrib": "5:50 pm",
          "isha": "6:54 pm"
      }
    }`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    
    `{
      "type": "Not Found",
      "errors": {
          "message": "City not found"
      }
    }`

    OR

  * **Code:** 500 <br />
    **Content:** 
    
    `{ errors : "Internal Server Error" }`
