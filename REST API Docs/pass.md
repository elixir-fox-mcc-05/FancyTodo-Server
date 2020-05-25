**Title**
----
  List of Project can access

* **URL**

  /pass

* **Method:**


  `GET`
  
*  **URL Params**


   **Required:**
 
   `token=[string]`



* **Success Response:**


  * **Code:** 200 OK<br />
    **Content:** `
                    "data": [
                        {
                            "id": 4,
                            "name": "test",
                            "ProjectId": 1,
                            "UserId": 1,
                            "createdAt": "2020-05-24T02:09:44.194Z",
                            "updatedAt": "2020-05-24T02:09:44.194Z",
                            "Project": {
                                "id": 1,
                                "name": "boluz",
                                "createdAt": "2020-05-23T13:43:49.767Z",
                                "updatedAt": "2020-05-24T02:11:21.893Z"
                            }
                        }
                    ]`
 
* **Error Response:**


    * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{error : "Internal Server Error"}`

* **Sample Call:**

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/pass/',
    headers: {
      token
    }
  })


  --------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Invite to Project

* **URL**

    /pass/invite

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `token=[string]`


* **Data Params**

    `name=[string]`
    `ProjectId=[integer]`
    `UserId=[integer]`

* **Success Response:**


  * **Code:** 200 OK<br />
    **Content:** `{
                    "data": {
                        "id": 17,
                        "name": "test",
                        "UserId": 1,
                        "ProjectId": 1,
                        "updatedAt": "2020-05-25T01:52:04.654Z",
                        "createdAt": "2020-05-25T01:52:04.654Z"
                    }
                }`
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{error : "Internal Server Error"}``

* **Sample Call:**

  $.ajax({
    method: 'post',
    url: `http://localhost:3000/pass/invite`,
    headers: {
      token
    },
    data: {
      name,
      UserId,
      ProjectId
    }
  }) 
 

  --------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Remove Access for User

* **URL**

  /pass/delete/:id

* **Method:**

  `DELETE`
  
*  **URL Params**


   **Required:**
 
   `id=[integer]`
   `token=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "todo": {
                        "id": 16,
                        "name": "test",
                        "ProjectId": 1,
                        "UserId": 1,
                        "createdAt": "2020-05-25T01:51:50.543Z",
                        "updatedAt": "2020-05-25T01:51:50.543Z"
                    }
                }
                `
 
* **Error Response:**


  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "not found" }`


* **Sample Call:**

  {
    "todo": {
        "id": 16,
        "name": "test",
        "ProjectId": 1,
        "UserId": 1,
        "createdAt": "2020-05-25T01:51:50.543Z",
        "updatedAt": "2020-05-25T01:51:50.543Z"
    }
}

* **Notes:**

  not implemented on Client 

  --------------------------------------------------------------------------------------------------------------------