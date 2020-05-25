**Title**
----
  Create Todos

* **URL**

  /todos

* **Method:**
  
  POST
  
*  **URL Params**

   **Required:**
 
   token=[string]


* **Data Params**

  Title=[string]
  description=[string]
  due_date=[date]
  ProjectId=[integer]

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 CREATED <br />
    **Content:** `"todo": {
        "id": 10,
        "title": "beli sayur",
        "description": "kepasar untuk beli sayur",
        "due_date": "2020-03-29T11:00:12.000Z",
        "ProjectId" : 1
        "updatedAt": "2020-04-27T09:59:18.847Z",
        "createdAt": "2020-04-27T09:59:18.847Z",
        "status": false,
        "UserId": 1
    }`
 
* **Error Response:**

  Code: 400 BAD REQUEST
    Content: { error : "unable to create todo" }

    code: 500 INTERNAL SERVER ERROR
    content : {error : "Internal Server Error"}

* **Sample Call:**

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



  -------------------------------------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Show Todos

* **URL**

  /todos

* **Method:**
  
  POST
  
*  **URL Params**

   **Required:**
 
   `token=[string]`

   * **Data Params**

  ProjectId=[integer]

* **Success Response:**
  

  * **Code:** 200 SUCCESS <br />
    **Content:** `{
    "todos": [
        {
            "id": 1,
            "title": "beli sayur",
            "description": "halllllleeeee",
            "status": false,
            "due_date": "2020-12-09T16:00:00.000Z",
            "UserId": 1,
            "ProjectId": 1,
            "createdAt": "2020-05-23T13:45:40.532Z",
            "updatedAt": "2020-05-23T13:45:40.532Z",
            "User": {
                "id": 1,
                "first_name": "yusak",
                "last_name": "haha",
                "password": "$2b$05$h.40CZRASGKvMVZdWEtsdOSy9pqnrJjK/ummcT4yGYXVLZ0gxIa.2",
                "email": "beli1dapet2@mail.com",
                "createdAt": "2020-05-23T13:37:19.305Z",
                "updatedAt": "2020-05-23T13:37:19.305Z"
            },
            "Project": {
                "id": 1,
                "name": "boluz",
                "createdAt": "2020-05-23T13:43:49.767Z",
                "updatedAt": "2020-05-24T02:11:21.893Z"
            }
        },
        {
            "id": 2,
            "title": "asdasd",
            "description": "asdasd",
            "status": false,
            "due_date": "2021-12-05T00:00:00.000Z",
            "UserId": 1,
            "ProjectId": 1,
            "createdAt": "2020-05-24T02:13:55.569Z",
            "updatedAt": "2020-05-24T02:13:55.569Z",
            "User": {
                "id": 1,
                "first_name": "yusak",
                "last_name": "haha",
                "password": "$2b$05$h.40CZRASGKvMVZdWEtsdOSy9pqnrJjK/ummcT4yGYXVLZ0gxIa.2",
                "email": "beli1dapet2@mail.com",
                "createdAt": "2020-05-23T13:37:19.305Z",
                "updatedAt": "2020-05-23T13:37:19.305Z"
            },
            "Project": {
                "id": 1,
                "name": "boluz",
                "createdAt": "2020-05-23T13:43:49.767Z",
                "updatedAt": "2020-05-24T02:11:21.893Z"
            }
        }
    ]
}`
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


* **Sample Call:**

$.ajax({
    method: 'POST',
    url: 'http://localhost:3000/todos',
    headers: {
      token
    },
    data: {
      ProjectId
    }

  })


  -------------------------------------------------------------------------------------------------------------------------------------------------------

  **Title**
----
    show todos based id

* **URL**

  /todos/:id

* **Method:**
  
  Get
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 SUCCESS<br />
    **Content:** `[{
    "todo": {
        "id": 2,
        "title": null,
        "description": "perjalanan ke pasa",
        "status": false,
        "ProjectId": 1,
        "due_date": "2020-04-27T09:24:04.369Z",
        "createdAt": "2020-04-27T09:24:04.320Z",
        "updatedAt": "2020-04-27T09:24:04.320Z",
        "UserId": 1
    }
}]`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "id not found"}`


* **Sample Call:**

  $.ajax({
    method: 'get',
    url: `http://localhost:3000/todos/${id}`,
    params: { id },
    headers: { token }
  })


  -------------------------------------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Update todos

* **URL**

  /todos/:id

* **Method:**
  
  PUT
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`
   `token=[string]`


* **Data Params**

  title=[string]
  description=[string]
  status=[string]
  due_date=[string]

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** `[{
    "todo": {
        "id": 2,
        "title": null,
        "description": "perjalanan ke pasa",
        "status": false,
        "ProjectId" : 1,
        "due_date": "2020-04-27T09:24:04.369Z",
        "createdAt": "2020-04-27T09:24:04.320Z",
        "updatedAt": "2020-04-27T09:24:04.320Z",
        "UserId": 1
    }
}]`
 
* **Error Response:**


  * **Code:** 401 BAD REQUEST <br />
    **Content:** `{ error : "title invalid"}`

  OR

  * **Code:** 404 NOT FOUND<br />
    **Content:** `{error : "id not found}`

    OR

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** ` {error : "Internal Server Error"}`

* **Sample Call:**

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
 


  -------------------------------------------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Delete Todo

* **URL**

  /todos/:id

* **Method:**
  
  DELETE
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`


* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `Content:[{
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
                        }]`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{error : "id not found"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{error : "Internal Server Error"}`

* **Sample Call:**

  $.ajax({
    method: 'delete',
    url: `http://localhost:3000/todos/${id}`,
    params: { id },
    headers: { token }
  })


  -------------------------------------------------------------------------------------------------------------------------------------------------------

  **Title**
----
    show all todos

* **URL**

  /todos/all

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `token=[string]`


* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `{
                        "todos": [
                            {
                                "id": 1,
                                "title": "beli sayur",
                                "description": "halllllleeeee",
                                "status": false,
                                "due_date": "2020-12-09T16:00:00.000Z",
                                "UserId": 1,
                                "ProjectId": 1,
                                "createdAt": "2020-05-23T13:45:40.532Z",
                                "updatedAt": "2020-05-23T13:45:40.532Z",
                                "User": {
                                    "id": 1,
                                    "first_name": "yusak",
                                    "last_name": "haha",
                                    "password": "$2b$05$h.40CZRASGKvMVZdWEtsdOSy9pqnrJjK/ummcT4yGYXVLZ0gxIa.2",
                                    "email": "beli1dapet2@mail.com",
                                    "createdAt": "2020-05-23T13:37:19.305Z",
                                    "updatedAt": "2020-05-23T13:37:19.305Z"
                                },
                                "Project": {
                                    "id": 1,
                                    "name": "boluz",
                                    "createdAt": "2020-05-23T13:43:49.767Z",
                                    "updatedAt": "2020-05-24T02:11:21.893Z"
                                }
                            },
                            {
                                "id": 2,
                                "title": "asdasd",
                                "description": "asdasd",
                                "status": false,
                                "due_date": "2021-12-05T00:00:00.000Z",
                                "UserId": 1,
                                "ProjectId": 1,
                                "createdAt": "2020-05-24T02:13:55.569Z",
                                "updatedAt": "2020-05-24T02:13:55.569Z",
                                "User": {
                                    "id": 1,
                                    "first_name": "yusak",
                                    "last_name": "haha",
                                    "password": "$2b$05$h.40CZRASGKvMVZdWEtsdOSy9pqnrJjK/ummcT4yGYXVLZ0gxIa.2",
                                    "email": "beli1dapet2@mail.com",
                                    "createdAt": "2020-05-23T13:37:19.305Z",
                                    "updatedAt": "2020-05-23T13:37:19.305Z"
                                },
                                "Project": {
                                    "id": 1,
                                    "name": "boluz",
                                    "createdAt": "2020-05-23T13:43:49.767Z",
                                    "updatedAt": "2020-05-24T02:11:21.893Z"
                                }
                            }
                        ]
                    }`
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{error : "Internal Server Error"}`

* **Sample Call:**

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/todos/all',
    headers: {
      token
    }
  })

