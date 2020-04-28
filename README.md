# FancyTodo-Server

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

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** `{ error : err }`

