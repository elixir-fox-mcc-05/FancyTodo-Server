# FancyTodo-Server
>Hello! Welcome to Fancy Todo App!<br>
>Below are the list of URL that you can use<br>

| URL               | Method        |
| -------------     |:-------------:|
| /users/register   | POST          |
| /users/login      | POST          |
| /todos            | GET           |
| /todos            | POST          |
| /todos/:id        | GET           |
| /todos/:id        | PUT           |
| /todos/:id        | PATCH         |
| /todos/:id        | DELETE        |
| /public-holidays  | GET           |
<br><br>

-----
## /users/register
-----
* method: POST
* purpose: Register account for new user
* req.body: <br>
    ```javascript
        {
            "name": "tina",
            "email": "tina@contoh.com",
            "password": "abcdef",
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "User": {
                "id": 5,
                "name": "tina",
                "email": "tina@contoh.com",
                "password": "$2a$10$vGDNHEv6eVd5t1m1z6Tske31y69h7xs346S7iwiKwwIo9d3T2vnDm",
                "updatedAt": "2020-04-28T07:21:21.651Z",
                "createdAt": "2020-04-28T07:21:21.651Z"
            },
            "notif": "Register successful!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input name with minimum 3 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input the correct email"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please input password from 6-20 characters"
    }
    ```

    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
    {
        "err": "Please make sure your email never registered here before"
    }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /users/login
-----
* method: POST
* purpose: Login into user account
* req.body: <br>
    ```javascript
        {
            "username": "tono@contoh.com",
            "password": "xxxxxx"
        }
    ```
* success response: <br>
    * code: 200 <br>
    * content: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec",
            "notif": "Welcome back fullname!"
        }
    ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input registered email",
        }
    ```

    OR

    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input correct password",
        }
    ```

    OR
    * code: 500 <br>
    * content: <br>
    ```javascript
    {
        "err": "internal server error"
    }
    ```

<br><br>

-----
## /todos
-----
* method: GET
* purpose: Show All Todos
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
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
                "UserId": 1,
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
                },
                {
                "id": 3,
                "title": "install insomnia",
                "description": "install insomnia di dalam laptom",
                "status": false,
                "due_date": "2020-04-28",
                "UserId": 1,
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
                }
            ]
        }
        ```
* error response: <br>
    * code: 400 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```
    OR

    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /todos
-----
* method: POST
* purpose: Create new Todo
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
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
                "UserId": 1,
                "updatedAt": "2020-04-27T05:44:14.609Z",
                "createdAt": "2020-04-27T05:44:14.609Z",
                "status": false
            },
            "notif": 'Todo successfully created!'
        }
        ```
* error response: <br>
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input title from 3-40 characters",
        }
    ```
    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input due date which is greater than today",
        }
    ```
    OR
    * code: 401 <br>
    * content: <br>
    ```javascript
        {
            "err": "Please input description from 3-150 characters",
        }
    ```

    OR

    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: GET
* purpose: Show Todo based on ID
* request params: id <br>
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
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
                "UserId": 1,
                "due_date": "2020-04-28",
                "createdAt": "2020-04-27T04:52:08.011Z",
                "updatedAt": "2020-04-27T04:52:08.011Z"
            }
        } 
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Todo not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: PUT
* purpose: Edit Todo based on ID
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
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
            "notif": "Todo successfully updated"
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Todo not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "Please input title from 3-40 characters"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "Please input due date which is greater than today"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "Please input description from 3-150 characters"
        }
        ```
    
    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>

-----
## /todos/:id
-----
* method: PATCH
* purpose: Check/uncheck your todo list
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request params: id <br>
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "notif": `Status of Todo successfully changed!`
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Todo not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```

<br><br>


-----
## /todos/:id
-----
* method: DELETE
* purpose: Delete todo based on ID
* request headers: <br>
    ```javascript
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0b25vQGNvbnRvaC5jb20iLCJpYXQiOjE1ODgwNTk1OTl9.czlkTrQIkGR3tfLF4AfATex5iCI5MoqhiZNMdQd_eec"
        }
    ```
* request params: id <br>
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "notif": "Todo successfully deleted"
        }
        ```
* error response: <br>
    * code: 404 <br>
    * content: <br>
        ```javascript
        {
            "err": "Todo not found"
        }
        ```

    OR

    * code: 401 <br>
    * content: <br>
        ```javascript
        {
            "err": "please login first"
        }
        ```

    OR
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```
<br><br>

-----
## /public-holidays
-----
* method: GET
* purpose: Get all public holidays in Indonesia
* success response: <br>
    * code: 200 <br>
    * content: <br>
        ```javascript
        {
            "public_holidays": [
                {
                "date": "2020-01-01",
                "localName": "Tahun Baru Masehi",
                "name": "New Year's Day",
                "countryCode": "ID",
                "fixed": true,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
                },
                {
                "date": "2020-04-10",
                "localName": "Wafat Isa Almasih",
                "name": "Good Friday",
                "countryCode": "ID",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
                },
                {
                "date": "2020-04-12",
                "localName": "Paskah",
                "name": "Easter Sunday",
                "countryCode": "ID",
                "fixed": false,
                "global": true,
                "counties": null,
                "launchYear": null,
                "type": "Public"
                }
            ]
        }
        ```
* error response: <br>
    * code: 500 <br>
    * content: <br>
        ```javascript
        {
            "err": "internal server error"
        }
        ```
