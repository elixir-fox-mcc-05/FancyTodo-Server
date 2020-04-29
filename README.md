# FancyTodo-Server
  Create a Fancy Todo List

* **URL**

  /todos 

* **Method:**

  `GET` `POST` `PUT` `DELETE`
  
*  **URL Params**

    /todos/:id

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
  "todos": {
    "id": 1,
    "title": "a",
    "description": "Just Do it",
    "status": false,
    "due_date": "2022-01-30T17:00:00.000Z",
    "createdAt": "2020-04-27T06:14:30.459Z",
    "updatedAt": "2020-04-27T16:23:52.529Z"
  }
}`
  
  * **Code:** 201 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
        `{
          "msg": "ERROR : not found"
        }`

  OR

  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** 
        `{
          "error": {
            "name": "SequelizeValidationError",
            "errors": [
              {
                "message": "All data must be filled",
                "type": "Validation error",
                "path": "notNull",
                "value": null,
                "origin": "FUNCTION",
                "instance": {
                  "id": null,
                  "title": "",
                  "description": "Just Do it",
                  "due_date": "2022-01-30T17:00:00.000Z",
                  "updatedAt": "2020-04-27T16:35:17.629Z"
                },
                "validatorKey": "notNull",
                "validatorName": null,
                "validatorArgs": [],
                "original": {}
              }
            ]
          }
        }`

  OR
    * **Code:**500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

