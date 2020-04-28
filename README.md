# FancyTodo-Server

THIS APP WORKS FOR ADD LIST THAT YOU'VE TODO

#### ROUTES

> <h3>CREATE TODO</h3>

URL : <br>
`localhost:3000/todos`

Method: <br>
`GET`
                                      
Request body menerima : 
- `title`
- `description`
- `status`
- `due_date`

Endpoint :
- need token on `request headers`

<br>

## RESPOND :
> `CREATED` <br>

HTTP Status Code = `201`

~~~
{
    "new_data": {
        "id": 12,
        "title": "Create Portofolio",
        "description": "portofolio for phase 2  in hacktiv9",
        "status": false,
        "due_date": "2020-05-27T00:00:00.000Z",
        "UserId": 2,
        "updatedAt": "2020-04-28T14:17:20.786Z",
        "createdAt": "2020-04-28T14:17:20.786Z"
    }
}
~~~ 
<br>

> `BAD REQUEST` <br>

HTTP Status Code = `400`
~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~

> `SERVER ERROR` <br>

HTTP Status Code : `500`

~~~
{
    "error_name": "INTERNAL SERVER ERROR",
    "errors": < problem on server >
}
~~~


----
----
> <h3>GET ALL TODO LIST</h3>

URL : <br>
`localhost:3000/todos`

Method: <br>
`GET`
<br>

Endpoint :
- need token on `request headers`

## RESPOND :
> `OK` <br>

HTTP Status Code = `200`

~~~
{
    "data": [
        {
            "id": 3,
            "title": "Fancy Todo",
            "description": "doing fancy todo",
            "status": false,
            "due_date": "2020-05-27T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-28T09:20:35.672Z",
            "updatedAt": "2020-04-28T09:20:35.672Z"
        },
        {
            "id": 4,
            "title": "Create Portofolio",
            "description": "portofolio for phase 2  in hacktiv8",
            "status": false,
            "due_date": "2020-05-27T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-04-28T09:37:36.576Z",
            "updatedAt": "2020-04-28T09:37:36.576Z"
        }
    ]
}
~~~ 
<br>

> `BAD REQUEST`

HTTP Status Code : `400`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~
----
----
> <h3>GET BY ID</h3>
URL : <br>
`localhost:3000/todos/:id`

Method : <br>
`GET`

Endpoint :
- need token on `request headers`

## RESPOND :
> `OK` <br>

HTTP Status Code = `200`

~~~
{
        "id": 3,
        "title": "Fancy Todo",
        "description": "doing fancy todo",
        "status": false,
        "due_date": "2020-05-27T00:00:00.000Z",
        "UserId": 1,
        "createdAt": "2020-04-28T09:20:35.672Z",
        "updatedAt": "2020-04-28T09:20:35.672Z"
}
~~~ 

> `NOT FOUND`

HTTP Status Code : `404`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~

>  `SERVER ERROR`

HTTP Status Code : `500`

~~~
{
    "error_name": "INTERNAL SERVER ERROR",
    "errors": < problem on server >
}
~~~
<br>

----
----
<br>

> <h3>EDIT TODO LIST</h3>

URL : <br>
`localhost:3000/todos/:id`

Method: <br>
`PUT`

Endpoint akan menerima request body:
- `title`
- `description`
- `status`
- `due_date`


Endpoint :
- need token on `request headers`

## RESPOND :
> `OK` <br>

HTTP Status Code = `200`

~~~
{
    "data": {
        "title": "Guide baby",
        "description": "try saying hello to world",
        "status": "true",
        "due_date": "2050-12-10"
    }
}
~~~ 
<br>

> `BAD REQUEST`

HTTP Status Code : `400`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~

> `NOT FOUND`

HTTP Status Code : `404`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~

> `SERVER ERROR`

HTTP Status Code : `500`
~~~
{
    "error_name": "INTERNAL SERVER ERROR",
    "errors": < problem on server >
}
~~~
----
----
<br>

> DELETE TODO LIST

URL : <br>
`localhost:3000/todos/:id`

Method : <br>
`DELETE`

Endpoint :
- need token on `request headers`
## RESPOND :

> `SUCCESS`

HTTP Status Code : `204`

~~~
none - < tidak mengembalikan apa-apa >
~~~

> `NOT FOUND`

HTTP Status Code : `404`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~

> `SERVER ERROR`

HTTP Status Code : `500`

~~~
{
    "error_name": "INTERNAL SERVER ERROR",
    "errors": < problem on server >
}
~~~

---
---
> REGISTER USER

URL : <br>
`localhost:3000/register`

Method: <br>
`POST`

Requirment :
- email
- password `(length of password at least 7)`

## RESPOND :

> `CREATED`

HTTP Status Code : `201`

~~~
{
    "msg": "successfully created",
    "new_data": {
        "id": 7,
        "email": "wawan@gmail.com",
        "password": "123456789",
        "updatedAt": "2020-04-28T15:02:27.776Z",
        "createdAt": "2020-04-28T15:02:27.776Z"
    }
}
~~~

---
---
> `BAD REQUEST`

HTTP Status Code : `400`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~
---
---
> LOGIN USER

URL : <br>
`localhost:3000/login`

Method : <br>
`POST`

## RESPOND : 

> `OK`

HTTP Status Code : `200`

~~~
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ3YXdhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4OSIsImNyZWF0ZWRBdCI6IjIwMjAtMDQtMjhUMTU6MDI6MjcuNzc2WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDQtMjhUMTU6MDI6MjcuNzc2WiIsImlhdCI6MTU4ODA4NjI4OH0.2WSecWGgNW6_8jRsbvuDPL02RtCiulKFa42x1OC-O3w"
}
~~~

> `BAD REQUEST`

HTTP Status Code : `400`

~~~
{
    "error_name": "BAD REQUEST",
    "errors": "Invalid Input, please input with invalid data or check your data before this action"
}
~~~
---
---