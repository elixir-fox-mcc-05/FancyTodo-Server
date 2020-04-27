## **View  all  todo in progress /done per user.**

* **URL:**

​			/todos/

* **Method:**

​		`GET`

- **URL Params**

  **Required:**

  `None`

- **Data Headers**

  **Required:**

  `token=[string]`

  `status=[boolean]`

- **Data Params**

  **Required:**

  `None`

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "message": "Read all Success",
      "todos": [
        {
          "id": 32,
          "title": "Tugas Besok ini ",
          "description": "codig lagi",
          "status": false,
          "due_date": "2020-04-03T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T14:11:44.883Z",
          "updatedAt": "2020-04-03T14:11:44.883Z"
        },
        {
          "id": 33,
          "title": "Tugas Besok ini ",
          "description": "atau",
          "status": false,
          "due_date": "2020-04-04T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T14:12:35.920Z",
          "updatedAt": "2020-04-03T14:12:35.920Z"
        },
        {
          "id": 34,
          "title": "iguntop@gmail.com",
          "description": "ertertre",
          "status": false,
          "due_date": "2020-04-04T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T14:16:05.145Z",
          "updatedAt": "2020-04-03T14:16:05.145Z"
        },
        {
          "id": 35,
          "title": "males hari ini",
          "description": "fdsd",
          "status": false,
          "due_date": "2020-04-04T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T15:58:28.807Z",
          "updatedAt": "2020-04-03T15:58:28.807Z"
        },
        {
          "id": 25,
          "title": "lagi",
          "description": "fasfsafa",
          "status": false,
          "due_date": "2020-01-01T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T10:11:01.407Z",
          "updatedAt": "2020-04-03T16:54:18.402Z"
        },
        {
          "id": 28,
          "title": "test",
          "description": "test",
          "status": false,
          "due_date": "2020-05-02T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T13:35:42.565Z",
          "updatedAt": "2020-04-03T17:00:22.564Z"
        },
        {
          "id": 29,
          "title": "test",
          "description": "Makan",
          "status": false,
          "due_date": "2020-04-02T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T13:36:11.471Z",
          "updatedAt": "2020-04-04T02:25:56.284Z"
        },
        {
          "id": 31,
          "title": "males hari ini",
          "description": "coding",
          "status": false,
          "due_date": "2020-04-03T00:00:00.000Z",
          "UserId": 13,
          "createdAt": "2020-04-03T13:59:39.064Z",
          "updatedAt": "2020-04-04T03:20:28.401Z"
        }
      ]
    }
    ```

    

- **Error Response:**

  - **Code:** 500 Internal Server Error
    **Content:** 

    ```json
    {
      "type": "Internal Server errorrr",
      "msg": {
        "err": {
          "name": "JsonWebTokenError",
          "message": "invalid token"
        }
      }
    }
    ```

    OR

    ```json
    {
      "message": "server Error",
      "todos": {
        "name": "SequelizeDatabaseError",
        "parent": {
          "name": "error",
          "length": 161,
          "severity": "ERROR",
          "code": "22P02",
          "position": "167",
          "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\utils\\adt\\bool.c",
          "line": "154",
          "routine": "boolin",
          "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"UserId\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"UserId\" = 13 AND \"Todo\".\"status\" = '';"
        },
        "original": {
          "name": "error",
          "length": 161,
          "severity": "ERROR",
          "code": "22P02",
          "position": "167",
          "file": "d:\\pginstaller_12.auto\\postgres.windows-x64\\src\\backend\\utils\\adt\\bool.c",
          "line": "154",
          "routine": "boolin",
          "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"UserId\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"UserId\" = 13 AND \"Todo\".\"status\" = '';"
        },
        "sql": "SELECT \"id\", \"title\", \"description\", \"status\", \"due_date\", \"UserId\", \"createdAt\", \"updatedAt\" FROM \"Todos\" AS \"Todo\" WHERE \"Todo\".\"UserId\" = 13 AND \"Todo\".\"status\" = '';"
      }
    }
    ```

    

- **Sample Call:**

  ```
    $.ajax({
          method:'GET',
          url:'/todos',
          headers:{
              token:localStorage.token,
              status:false
          }
      })
  ```



## **View  single  todo in progress /done per user.**

* **URL:**

​			/todos/:id

* **Method:**

​		`GET`

- **URL Params**

  **Required:**

  `id:[integer]`

- **Data Headers**

  **Required:**

  `token=[string]`

- **Data Params**

  **Required:**

  `none`

- 

  

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "message": "Read by PK Success",
      "todos": {
        "id": 32,
        "title": "Tugas Besok ini ",
        "description": "codig lagi",
        "status": false,
        "due_date": "2020-04-03T00:00:00.000Z",
        "UserId": 13,
        "createdAt": "2020-04-03T14:11:44.883Z",
        "updatedAt": "2020-04-03T14:11:44.883Z"
      }
    }
    ```

    

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
    $.ajax({
          method:'GET',
          url:'/todos/:id',
          headers:{
              token:localStorage.token
          }
      })
  ```



## **Update  single  todo in progress  per user.**

* **URL:**

​			/todos/:id

* **Method:**

​		`PUT`

- **URL Params**

  **Required:**

  `id:[integer]`

- **Data Headers**

  **Required:**

  `token=[string]`
  
  
  
- **Data Params**

  **Required:**

   ` title : [string],
    description: [string],
    status: "false",
    due_date : [date] `

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "message": "Updated Success",
      "todos": [
        1
      ]
    }
    ```

    

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
    $.ajax({
          method:"PUT",
          url:'/todos/' + id ,
          headers:{
              token:localStorage.token
          },
          data:{
              title : title,
              description: description,
              status: "false",
              due_date : due_date
          }
      })
  ```



## Delete  single  todo in progress  per user.**

* **URL:**

​			/todos/:id

* **Method:**

​		`DELETE`

- **URL Params**

  **Required:**

  `id:[integer]`

  

- **Data Headers**

  **Required:**

  `token=[string]`

  

- **Data Headers**

  **Required:**

  `None`

  

- **Data Params**

  **Required:**

   ` None `

- **Success Response:**

  - **Code:** 200 
    **Content:** 

    ```json
    {
      "message": "Delete Success",
      "todos": 1
    }
    ```

    

- **Error Response:**

  - **Code:** 401 unauthorized
    **Content:** 

    ```json
    {
      "message": "Unauthorized",
      "errors": "User Not authorized"
    }
    ```

    

- **Sample Call:**

  ```
    $.ajax({
          method:"DELETE",
          url:'/todos/' + id,
          headers:{
              token:localStorage.token
          }
      })
  ```

