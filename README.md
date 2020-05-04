# todo-server

## **Create Todos**

    Insert new data into database

- **Headers**

  Authorization: `<token>`

- **URL**
  /todo

- **Method:**

  `POST`

- **Success Response:**
  - **Code:** 201<br>
    **Content:**
    ```json
    {
      "data": {
        "id": 1,
        "title": "makan",
        "description": "karena mau lapar",
        "status": false,
        "due_date": "2020-04-30",
        "UserId": 1,
        "updatedAt": "2020-04-29T13:32:47.794Z",
        "createdAt": "2020-04-29T13:32:47.794Z"
      }
    }
    ```
- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

## **Find All Todo**

Show All data From Database

- **Headers**

  Authorization: `<token>`

- **URL**

  /todo

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "data": [
        {
          "id": 1,
          "title": "makan",
          "description": "karena mau lapar",
          "status": false,
          "due_date": "2020-04-30",
          "UserId": 1,
          "createdAt": "2020-04-29T13:32:47.794Z",
          "updatedAt": "2020-04-29T13:32:47.794Z"
        }
      ]
    }
    ```

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

## **Show One Todo**

Return one todo in json based on id from database.

- **Headers**

  Authorization: `<token>`

- **URL**

  /todo/:id

- **Method:**

  `GET`

- **URL Params**

  **Required**

  id=[integer]

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "data": {
        "id": 2,
        "title": "makan",
        "description": "karena mau lapar",
        "status": false,
        "due_date": "2020-04-30",
        "UserId": 1,
        "createdAt": "2020-04-29T15:09:55.548Z",
        "updatedAt": "2020-04-29T15:09:55.548Z"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:** `{ message : "Not Found" }`

---

## **Update One Todo**

Update one todo based on id.

- **Headers**

  Authorization: `<token>`

- **URL**

  /todo/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required**

  id=[integer]

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "selected": {
        "id": 2,
        "title": "makan yuk",
        "description": "ya makan",
        "status": false,
        "due_date": "2020-04-30",
        "UserId": 1,
        "createdAt": "2020-04-29T15:09:55.548Z",
        "updatedAt": "2020-04-29T15:16:07.549Z"
      }
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Validation Error" }`

  - **Code:** 404 Not Found <br />
    **Content:** `{ message : "Not Found" }`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

## **Delete One Todo**

Delete one todo based on id.

- **Headers**

  Authorization: `<token>`

- **URL**

  /todo/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required**

  id=[integer]

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "message": "Delete data 1 Success"
    }
    ```

- **Error Response:**

  - **Code:** 400 Bad Request <br />
    **Content:** `{ message : "Not Found" }`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

**Register User**

---

Register a User.

- **URL**

  /register

- **Method**

  `POST`

- **URL Params**

  **Required**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```json
    {
      "id": 1,
      "email": "jhon@doe.com"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Bad request" }`

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Email Already Exist" }`

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message : "Internal server error" }`

---

## **Third Party API**

Third party API that used.

- **URL**

  https://programming-quotes-api.herokuapp.com/quotes/lang/en
