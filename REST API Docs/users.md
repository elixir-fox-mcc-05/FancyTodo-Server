Login
Returns json data with auth token.

URL

/login

Method:

POST

Success Response:

Code: 201 CREATED
Content:{ accessToken : ""}

Error Response:

code : 400 BAD REQUEST
content : {error : "id not found"}

Sample Call :

$.ajax({
    method: 'POST',
    url: 'http://localhost:3000/login',
    data: {
      email,
      password
    }
  })


Register
add new user to database.

URL

/register

Method:

POST

Success Response:

Code: 201 CREATED
Content:{ id : 2,
          email : "blablabal@com",
          password : "aefogiph3q4urh-f89hnseipug0eh"
        }

Error Response:

code : 400 BAD REQUEST
content : {error : "id not found"}

Sample Call :

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


Google Login
Returns json data with auth token.

URL

/login

Method:

POST

URL Header

required:

id_token = [string]

Success Response:

Code: 201 CREATED
Content:{ accessToken : ""}

Error Response:

code : 400 BAD REQUEST
content : {error : "id not found"}

Sample Call :

$.ajax({
    method: 'POST',
    url: 'http://localhost:3000/logingoogle',
    headers: {
      google_token: id_token
    }
  })

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
