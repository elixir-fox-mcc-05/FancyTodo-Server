# FancyTodo-Server <br>

## GET ALL TODOS 
<br>

* URL <br>
/todos
<br>

* Method <br>
> GET
<br>

* URL Parameter <br>
None
<br>

* Data Parameter <br>
None
<br>

* Success Response <br>
- Code: 200 <br>
- Content: {"msg": {"id": 3, "title": "Masak", "description": "Step memasak", "status": true, "due_date": "2020-05-27T17:00:00.000Z" "updatedAt": "2020-04-27T14:34:37.552Z", "createdAt": "2020-04-27T14:34:37.552Z", "UserId": null}} <br>

* Error Response <br>
- Code: 500 <br>
- Content: {"error": "Error Access"} <br>

* Sample Call <br>
- http://localhost:3000/todos <br>

## GET TODOS BY ID
<br>

* URL <br>
/todos/:id
<br>

* Method <br>
> GET
<br>

* URL Parameter <br>
- id = [integer]
<br>

* Data Parameter <br>
None

* Succes Response <br>
- Code: 200 <br>
- Content: 

* Error Response <br>
- Code: 404 <br>
- Content: {"error": "Not Found"} <br>

* Sample Call <br>
- http://localhost:3000/todos/3 <br>

## CREATE NEW TODOS 
<br>

* URL <br>
/todos
<br>

* Method <br>
> POST
<br>

* URL Parameter <br>
None

* Data Parameter <br>
- title: [string]
- description: [string]
- status: [boolean] (optional)
- due_date: [date]

* Succes Response <br>
- Code: 200 <br>
- Content: {"msg":{"id":3,"title":"Masak","description":"Step memasak","status":true,"due_date":"2020-05-27T17:00:00.000Z","updatedAt":"2020-04-27T14:34:37.552Z","createdAt":"2020-04-27T14:34:37.552Z","UserId":null}}

* Error Response <br>
- Code: 500 <br>
- Content: {"error": "Error Access"} <br>

* Sample Call <br>
- http://localhost:3000/todos <br>


## UPDATE TODOS 
<br>

* URL <br>
/todos/:id
<br>

* Method <br>
> PUT
<br>

* URL Parameter <br>
- id = [integer]
<br>

* Data Parameter <br>
- title: [string]
- description: [string]
- status: [boolean] (optional)
- due_date: [date]

* Succes Response <br>
- Code: 200 <br>
- Content: {"msg":[1,[{"id":3,"title":"Ngoding","description":"Belajar API","status":true,"due_date":"2020-05-28T17:00:00.000Z","createdAt":"2020-04-27T14:34:37.552Z","updatedAt":"2020-04-27T16:02:16.588Z","UserId":null}]]}

* Error Response <br>
- Code : 404 <br>
- Content: {"error": "Not Found"}

> OR

- Code: 500 <br>
- Content: {"error": "Error Access"} <br>

* Sample Call <br>
- http://localhost:3000/todos/3 <br>

## DELETE TODOS 
<br>

* URL <br>
/todos/:id
<br>

* Method <br>
> DELETE
<br>

* URL Parameter <br>
- id = [integer]
<br>

* Data Parameter <br>
None

* Succes Response <br>
- Code: 200 <br>
- Content: {"deleteTodo":{"id":1,"title":"Masak","description":"Step memasak","status":true,"due_date":"2020-05-27T17:00:00.000Z","UserId":null,"createdAt":"2020-04-27T14:34:05.315Z","updatedAt":"2020-04-27T14:34:05.315Z"}}

* Error Response <br>
- Code : 404 <br>
- Content: {"error": "Not Found"}

> OR

- Code: 500 <br>
- Content: {"error": "Error Access"} <br>

* Sample Call <br>
- http://localhost:3000/todos/3 <br>