# FancyTodo-Server
>Hello! Welcome to Fancy Todo App!<br>
>Below are the list of URL that you can use<br>

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
            "Todos": [
                {
                "id": 2,
                "title": "Kerjakan tugas",
                "description": "kerjakan tugas hacktiv",
                "status": false,
                "due_date": "2020-04-27",
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
                },
                {
                "id": 3,
                "title": "install insomnia",
                "description": "install insomnia di dalam laptom",
                "status": false,
                "due_date": "2020-04-28",
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
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
            "title": "coba rest api",
            "description": "coba rest api di laptop",
            "due_date": "28 April 2020"
        }
    ```
* success response: <br>
    * code: 201 <br>
    * content: <br>
        ```javascript
        {
            "Todo": {
                "id": 5,
                "title": "coba rest api",
                "description": "coba rest api di laptop",
                "due_date": "2020-04-28",
                "updatedAt": "2020-04-27T05:44:14.609Z",
                "createdAt": "2020-04-27T05:44:14.609Z",
                "status": false
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
            "Todo": {
                "id": 3,
                "title": "install insomnia",
                "description": "install insomnia di dalam laptom",
                "status": false,
                "due_date": "2020-04-28",
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
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
        "title": "update ubuntu",
        "description": "update ubuntu ke yang terbaru",
        "due_date": "2020-04-30",
        "status": false
    }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "msg": "Todo with id 5 successfully updated"
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
            "msg": "Todo with id 5 successfully deleted"
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
