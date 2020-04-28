# FancyTodo-Server
>Rest Api Todo App<br>
>List of endpoint you can use<br>

| URL           | Method        |
| ------------- |:-------------:|
| /todos        | GET           |
| /todos        | POST          |
| /todos/:id    | GET           |
| /todos/:id    | PUT           |
| /todos/:id    | DELETE        |
<br><br>

-----
## /todos
-----
* method: GET
* purpose: Show All Todos
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "todos": [
                {
                    "id": 1,
                    "title": "Belajar Rest Api",
                    "description": "Belajar Rest Api dari tutorial youtube",
                    "status": "on going",
                    "due_date": "2020-04-28",
                    "createdAt": "2020-04-27T22:23:57.625Z",
                    "updatedAt": "2020-04-27T22:23:57.625Z"
                },
                {
                    "id": 2,
                    "title": "Ngerjain tugas fancy todo",
                    "description": "Nyicil tugas fancy todo",
                    "status": "on going",
                    "due_date": "2020-05-02",
                    "createdAt": "2020-04-27T22:23:57.625Z",
                    "updatedAt": "2020-04-27T22:23:57.625Z"
                }
            ]
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

<br><br>

-----
## /todos
-----
* method: POST
* purpose: Create new Todo
* request body: <br>
    ```javascript
        {
            "title": "belajar authorization",
            "description": "nonton video replay authorization",
            "due_date": "2020-09-30"
        }
    ```
* success response: <br>
    * code: 201 <br>
    * content: <br>
        ```javascript
        {
            "todo": {
                "status": "not started",
                "id": 4,
                "title": "belajar authorization",
                "description": "nonton video replay authorization",
                "due_date": "2020-09-30",
                "updatedAt": "2020-04-28T04:42:17.315Z",
                "createdAt": "2020-04-28T04:42:17.315Z"
            }
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: GET
* purpose: Show Todo based on ID
* request params: id <br>
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
           "todo": {
                "id": 1,
                "title": "Belajar Rest Api",
                "description": "Belajar Rest Api dari tutorial youtube",
                "status": "on going",
                "due_date": "2020-04-28",
                "createdAt": "2020-04-28T00:09:18.973Z",
                "updatedAt": "2020-04-28T00:09:18.973Z"
            }
        } 
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: PUT
* purpose: Edit Todo based on ID
* request params: id <br>
* request body: <br>
    ```javascript
    {		
        "title": "Belajar Rest Api",
        "description": "Belajar Rest Api dari tutorial youtube",
        "status": "finish",
        "due_date": "2020-04-29"
    }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "msg": "Todo with id 1 succesfully updated"
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: DELETE
* purpose: Delete todo based on ID
* request params: id <br>
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "msg": "Todo with id 3 successfully deleted"
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "error": "internal server error"
        }
        ```
