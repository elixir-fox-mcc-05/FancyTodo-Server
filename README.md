# FancyTodo-Server

**Get Find All**

* **URL**

  /todos

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "todo": {
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Post Add Todo**

* **URL**

  /todos

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todo": {
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        },
        "todo": {
        "id": 2,
        "title": "sumagatfadaxut",
        "description": "bajamhaga kafurewa logute hagu",
        "status": false,
        "due_date": "2020-11-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Get Find Todo**

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        "todo": {
        "id": 2,
        "title": "sumagatfadaxut",
        "description": "bajamhaga kafurewa logute hagu",
        "status": false,
        "due_date": "2020-11-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Delete Todo**

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todo": {
        "id": 1,
        "title": "hadsagvat",
        "description": "sappron ganav fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

----

**Update Todo**

* **URL**

  /todos/:id

* **Method:**

  `PUT`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
        "todo": {
        "id": 1,
        "title": "dasolanabagure",
        "description": "banav ipsum fadhae goridab makajav",
        "status": false,
        "due_date": "2020-01-04T17:00:00.000Z",
        "updatedAt": "2020-04-28T04:43:54.105Z",
        "createdAt": "2020-04-28T04:43:54.105Z"
        }
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`