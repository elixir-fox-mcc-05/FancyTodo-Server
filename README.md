# FancyTodo-Server

Create Todos
Returns json data with last created todos.

URL

/todos

Method:

POST

URL Params

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


Show Todos
Returns json data with all todos.

URL

/todos

Method:

Get


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



Show todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

Get

URL Params

Required: 

id=[integer]

Data Params

[N/A]


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



Update todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

PUT

URL Params

Required: 

id=[integer]

Data Params

[N/A]


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



Delete todos based id
Returns json data with removed todos.

URL

/todos/:id

Method:

DELETE

URL Params

Required: 

id=[integer]

Data Params

[N/A]


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




