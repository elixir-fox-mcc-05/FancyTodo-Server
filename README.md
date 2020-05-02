# FancyTodo-Server

Create Todos
Returns json data with last created todos.

URL

/todos

Method:

POST

URL Header

Required: 
token=[string]

Data Params

 {
    "title" : "beli sayur" , 
    "description" : "kepasar untuk beli sayur:, 
    "due_date" : "march 29 2020 19:00:12" 
 }

Success Response:

Code: 201 CREATED
Content:  "todo": {
        "id": 10,
        "title": "beli sayur",
        "description": "kepasar untuk beli sayur",
        "due_date": "2020-03-29T11:00:12.000Z",
        "updatedAt": "2020-04-27T09:59:18.847Z",
        "createdAt": "2020-04-27T09:59:18.847Z",
        "status": false,
        "UserId": null
    }

Error Response:

Code: 400 BAD REQUEST
Content: { error : "unable to create todo" }

code: 500 INTERNAL SERVER ERROR
content : {error : "Internal Server Error"}

Sample Call : 

$.ajax({
    method: 'POST',
    url: 'http://localhost:3000/todos',
    headers: {
      token
    },
    data: {
      title,
      description,
      due_date
    }
  })


Show Todos
Returns json data with all todos.

URL

/todos

Method:

Get

URL Header

Required: 

token=[string]


Success Response:

Code: 200 SUCCESS
Content: {
    "todos": [
        {
            "id": 1,
            "title": null,
            "description": null,
            "status": false,
            "due_date": "2020-04-27T09:19:25.574Z",
            "createdAt": "2020-04-27T09:19:25.558Z",
            "updatedAt": "2020-04-27T09:19:25.558Z",
            "UserId": null
        },
        {
            "id": 2,
            "title": null,
            "description": "perjalanan ke pasa",
            "status": false,
            "due_date": "2020-04-27T09:24:04.369Z",
            "createdAt": "2020-04-27T09:24:04.320Z",
            "updatedAt": "2020-04-27T09:24:04.320Z",
            "UserId": null
        }
    ]
}

Error Response:

code: 500 INTERNAL SERVER ERROR
content : {error : "Internal Server Error"}

Sample Call:

 $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/todos',
    headers: {
      token
    }
  })



Show todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

Get

URL Params

Required: 

id=[integer]

URL Header

Required:

token=[string]

Success Response:

Code: 200 OK
Content: [{
    "todo": {
        "id": 2,
        "title": null,
        "description": "perjalanan ke pasa",
        "status": false,
        "due_date": "2020-04-27T09:24:04.369Z",
        "createdAt": "2020-04-27T09:24:04.320Z",
        "updatedAt": "2020-04-27T09:24:04.320Z",
        "UserId": null
    }
}]

Error Response:

code: 404 NOT FOUND
Content: { error : "id not found"}

Sample Call:

$.ajax({
    method: 'get',
    url: `http://localhost:3000/todos/${id}`,
    params: { id },
    headers: { token }
  })



Update todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

PUT

URL Params

Required: 

id=[integer]

URL Header

Required:

token=[string]

Success Response:

Code: 200 OK
Content: [{
    "todo": {
        "id": 2,
        "title": null,
        "description": "perjalanan ke pasa",
        "status": false,
        "due_date": "2020-04-27T09:24:04.369Z",
        "createdAt": "2020-04-27T09:24:04.320Z",
        "updatedAt": "2020-04-27T09:24:04.320Z",
        "UserId": null
    }
}]

Error Response:

code: 400 BAD REQUEST
Content: { error : "title invalid"}

code : 404 NOT FOUND
content : {error : "id not found}

code : 500 INTERNAL SERVER ERROR
content : {error : "Internal Server Error"}

Sample Call : 

 $.ajax({
    method: 'put',
    url: `http://localhost:3000/todos/${id}`,
    headers: {
      token
    },
    data: {
      title,
      description,
      due_date,
      status
    }
  })


Delete todos based id
Returns json data with removed todos.

URL

/todos/:id

Method:

DELETE

URL Params

Required: 

id=[integer]

URL Header

Required:

token=[string]

Success Response:

Code: 200 OK
Content:[{
    "todo": {
        "id": 2,
        "title": null,
        "description": "perjalanan ke pasa",
        "status": false,
        "due_date": "2020-04-27T09:24:04.369Z",
        "createdAt": "2020-04-27T09:24:04.320Z",
        "updatedAt": "2020-04-27T09:24:04.320Z",
        "UserId": null
    }
}]

Error Response:

code : 404 NOT FOUND
content : {error : "id not found"}

code : 500 INTERNAL SERVER ERROR
content : {error : "Internal Server Error"}

Sample Call : 

$.ajax({
    method: 'delete',
    url: `http://localhost:3000/todos/${id}`,
    params: { id },
    headers: { token }
  })

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


Login
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
