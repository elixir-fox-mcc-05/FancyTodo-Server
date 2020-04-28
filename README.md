# FancyTodo-Server
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **URL**
    /todos/:id

* **Method:**
    PUT

  `GET` | `POST` | `DELETE` | `PUT`
  
*  **URL Params**


   **Required:**
 
   `id=[integer]`

* **Data Params**
**Optional:**

  `tittle = [string]`
  `desc = [string]`
  `tittle = [string]`
  `tittle = [string]`

* **Success Response:**
  
  

  * **Code:** 200 <br />
    **Content:** 
    ```JSON
    {
        "title": "BermainBola3",
        "description": "belajar",
        "status": true,
        "due_date": "2020-04-27T06:06:21.494Z"
    }
    ```

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
