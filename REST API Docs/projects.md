**Title**
----
  Project List

* **URL**

  /projects

* **Method:**

  `GET` 
  
*  **URL Params**


   **Required:**
 
   `token=[string]`


* **Success Response:**
  

  * **Code:** 200 OK<br />
    **Content:** `{
                    "data": [
                        {
                            "id": 1,
                            "name": "boluz",
                            "createdAt": "2020-05-23T13:43:49.767Z",
                            "updatedAt": "2020-05-24T02:11:21.893Z"
                        },
                        {
                            "id": 5,
                            "name": "asdasdasd",
                            "createdAt": "2020-05-24T09:09:06.817Z",
                            "updatedAt": "2020-05-24T09:09:06.817Z"
                        },
                        {
                            "id": 4,
                            "name": "test project",
                            "createdAt": "2020-05-24T09:08:15.353Z",
                            "updatedAt": "2020-05-24T09:08:15.353Z"
                        }
                    ]
                }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/projects',
    headers: {
      token
    }
  })

* **Notes:**

  Not implemented on Client, only use for check all projects

  --------------------------------------------------------------------------------------------------------------------

  **Title**
----
  Add Project

* **URL**

  /projects/add

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `token=[string]`


* **Data Params**

  `name=[string]`

* **Success Response:**
  

  * **Code:** 201 CREATED <br />
    **Content:** `{
                    "results": {
                        "id": 6,
                        "name": "sleepz",
                        "updatedAt": "2020-05-25T01:41:19.455Z",
                        "createdAt": "2020-05-25T01:41:19.455Z"
                    }
                }`
 
* **Error Response:**


  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

   $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/projects/add',
    headers: {
      token
    },
    data: {
      name
    }
  })
 

  --------------------------------------------------------------------------------------------------------------------

  **Title**
----
  edit Project

* **URL**

    /projects/edit/:id

* **Method:**


   `PUT`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`
   `token=[string]`


* **Data Params**

  `name=[string]`

* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `{
                    "project": {
                        "id": 6,
                        "name": "i shleep",
                        "createdAt": "2020-05-25T01:41:19.455Z",
                        "updatedAt": "2020-05-25T01:42:06.757Z"
                    }
                }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
                    "err": "id not found"
                }`


* **Sample Call:**

 $.ajax({
    method: 'put',
    url: `http://localhost:3000/projects/edit/${id}`,
    headers: {
      token
    },
    data: {
      name
    }


  --------------------------------------------------------------------------------------------------------------------

  **Title**
----
  delete project

* **URL**

  /projects/delete/:id

* **Method:**

   `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `token=[string]`



* **Success Response:**


  * **Code:** 200 <br />
    **Content:** `{
                    "project": {
                        "id": 6,
                        "name": "i shleep",
                        "createdAt": "2020-05-25T01:41:19.455Z",
                        "updatedAt": "2020-05-25T01:42:06.757Z"
                    }
                }`
 
* **Error Response:**


  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "not found" }`

* **Sample Call:**

 $.ajax({
    method: 'delete',
    url: `http://localhost:3000/projects/delete/${id}`,
    params: { id },
    headers: { token }
  })

  * **Notes:**

  Remove Project is include Remove all passes which have relation with deleted project
 

  --------------------------------------------------------------------------------------------------------------------