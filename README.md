# FancyTodo-Server
**Create new Todo**
----
  

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   none

   **Required:**

    `title=[alhanumeric]`, 

    `description=[alphanumeric]`, 

    `due_date=[date]`

    `headers:{ [jwttoken] }`

   **Optional:**
 
   none

* **Data Params**

  { title, description, due_date }

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    { 
      id : 1
      title : "abc", 
      description : "abc",
      status : "queued",
      due_date :"date"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 400 <br />
    **Content:**
    ```json
    { 
      message : "Invalid token supplied or user no longer exists"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'POST',
            url: '{ host }/todos',
            data: {
              title,
              description,
              due_date
            },
            headers : {
              jwtoken
            }
          })
    ```


----
**Update Todo**
----
  

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   `id=[integer]`

   **Required:**

    `title=[alhanumeric]`, 

    `description=[alphanumeric]`, 

    `due_date=[date]`

    `headers:{ [jwttoken] }`

   **Optional:**
 
   none

* **Data Params**

  { title, description, due_date }

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "result": [
        1
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "item not found, or it does not belong to you"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'PUT',
            url: '{ host }/todos/1',
            data: {
              title,
              description,
              due_date
            },
            headers : {
              jwtoken
            }
          })
    ```

----

**Delete Todo**
----


* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   `id=[integer]`

   **Required:**

    `headers:{ [jwttoken] }`

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    { 
      id : 1
      title : "abc", 
      description : "abc",
      status : "queued",
      due_date :"date"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "item not found, or it does not belong to you"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'DELETE',
            url: `{ host }/todos/1`,
            headers : {
              jwtoken
            }
          })
    ```

----

**Get Todo**
----


* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   none

   **Required:**

    `headers:{ [jwttoken] }`

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    { 
      id : 1
      title : "abc", 
      description : "abc",
      status : "queued",
      due_date :"date"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'GET',
            url: `{ host }/todos`,
            headers : {
              jwtoken
            }
          })
    ```

    ----

**Get One Todo**
----


* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   id=[integer]

   **Required:**

    `headers:{ [jwttoken] }`

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    { 
      id : 1
      title : "abc", 
      description : "abc",
      status : "queued",
      due_date :"date"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "item not found, or it does not belong to you"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'GET',
            url: `{ host }/todos/1`,
            headers : {
              jwtoken
            }
          })
    ```
  
----

**Alter Todo Status**
----
  

* **URL**

  - /todos/:id/queued

  - /todos/:id/active
  
  - /todos/:id/complete

* **Method:**

  `PUT`
  
*  **URL Params**

   `id=[integer]`

   **Required:**

   none

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "result": [
        1
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "item not found, or it does not belong to you"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'PUT',
            url: '{ host }/todos/1/queued',
            headers : {
              jwtoken
            }
          })
    ```

* **Notes:**
  Anything that is 'active' or 'queued', but passed it's due date will be set as 'expired'

  ----

  ----


----
**Create User**
----
  

* **URL**

  - /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   none

   **Required:**

  ```json
  {
    nickname=[alphanumeric],
    email=[alphanumerc],
    password=[alphanumeric]
  }
  ```

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      result : {
        id:1,
        nickname:"string",
        email:"string",
        password:"string"
      }
    }
    ```

    ```json
    Mail is sent
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
          $.ajax({
            method: 'POST',
            url: '{ host }/users/register'
          }),
          data: {
            nickname,
            email,
            password
          }
    ```

* **Notes:**
  An email will be sent according to input's email address


----
**Login User**
----
  

* **URL**

  - /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   none

   **Required:**

  ```json
  {
    email=[alphanumerc],
    password=[alphanumeric]
  }
  ```

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      token:"stringtoken"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "Email & password combination is invalid"
    }
    ```

  * **Code:** 401 <br />
    **Content:**
    ```json
    { 
      message : "Unregistered email"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
      $.ajax({
        method: 'POST',
        url: '{ host }/users/login',
        data: {
          email,
          password
        }
      })
        
    ```

----
**Get nickname**
  

* **URL**

  - /user/getnick

* **Method:**

  `GET`
  
*  **URL Params**

   none

   **Required:**
    ```json
      headers : {
        token:[jwt-token]
      }
   ```

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      nickname : "name"
    }
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:**
    ```json
    { 
      message : "not logged in"
    }
    ```

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
      $.ajax({
        method : `GET`,
        url : `{ host }/users/getNick`,
        headers : {
          token
        }
      })
    ```


----

**Google Login / Register**
  

* **URL**

  - /user/googleauth

* **Method:**

  `POST`
  
*  **URL Params**

   none

   **Required:**
    ```json
      headers : {
        google_token:[string]
      }
   ```

   **Optional:**
 
   none

* **Data Params**

  none

* **Success Response:**
  

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        token : "stringtoken"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:**
    ```json
    { 
      message : Server err response
    }
    ```

* **Sample Call:**

    ```json
      $.ajax({
        method : `GET`,
        url : `http://localhost:3000/users/getNick`,
        headers : {
          token
      }
    ```
