**Title**
----
  Login

* **URL**

  /login

* **Method:**

  `POST` 
  

* **Data Params**

  email=[string]
  password=[string]

* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**


  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "invalid email" }`


* **Sample Call:**

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/login',
    data: {
      email,
      password
    }
  })


  ------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Register

* **URL**

    /register

* **Method:**

  `POST` 


* **Data Params**

  first_name=[string]
  last_name=[string]
  email=[string]
  password=[string]

* **Success Response:**


  * **Code:** 201 Created <br />
    **Content:** `{ id : 2,
            first_name: "asd",
            last_name: "asd",
          email : "blablabal@com",
          password : "aefogiph3q4urh-f89hnseipug0eh"
        }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

   $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/register',
    data: {
      first_name,
      last_name,
      email,
      password
    }
  })



  ------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Google Login

* **URL**

  /googlelogin

* **Method:**

  `POST`
  

* **Data Params**

  id_token=[string]

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ accessToken : ""}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "id not found" }`

* **Sample Call:**

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/logingoogle',
    headers: {
      google_token: id_token
    }
  })


  ------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  User List

* **URL**

  /userlist

* **Method:**

  `GET`
  

* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `{
    "results": [
        {
            "id": 1,
            "name": "yusak haha"
        },
        {
            "id": 2,
            "name": "bolu ah"
        },
        {
            "id": 3,
            "name": "testing testing"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

* **Sample Call:**

  $.ajax({
    method: 'get',
    url: 'http://localhost:3000/userlist'
  })

----------------------------------------------------------------------------------------------------------------------

Holiday List
show list of holiday this year

URL

/holidays

Method:

GET

Success Response:

Code: 200 OK
Content:[
    "data": [
        {
            "name": "New Year's Day",
            "description": "New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.",
            "country": {
                "id": "id",
                "name": "Indonesia"
            },
            "date": {
                "iso": "2020-01-01",
                "datetime": {
                    "year": 2020,
                    "month": 1,
                    "day": 1
                }
            },
            "type": [
                "National holiday"
            ],
            "locations": "All",
            "states": "All"
        }
]

Error Response:

code : 500 INTERNAL SERVER ERROR
content : {error : "internal server error"}

Sample Call:
$.ajax({
    method: 'GET',
    url: 'http://localhost:3000/holidays'
    })
