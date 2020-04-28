# FancyTodo-Server 

## GET ALL TODOS 

#### URL 
/todos


#### Method 
    > GET


#### URL Parameter 
None


#### Data Parameter 
None


#### Success Response 
- Code: 200 
- Content: 
    ```
    {
    "msg":{
        "id":3,
        "title":"Masak",
        "description":"Step memasak",
        "status":true,
        "due_date":"2020-05-27T17:00:00.000Z",
        "updatedAt":"2020-04-27T14:34:37.552Z",
        "createdAt":"2020-04-27T14:34:37.552Z",
        "UserId":null
        }
    }
    ```

#### Error Response 
- Code: 500 
- Content: 
    ```
    {
        "error": 
        "Error Access"
    } 
    ```

#### Sample Call 
- http://localhost:3000/todos 

<br>

## GET TODOS BY ID

#### URL 
/todos/:id


#### Method 
    > GET


#### URL Parameter 
- id = [integer] [Required]


#### Data Parameter 
None

#### Succes Response 
- Code: 200 
- Content: 
    ```
    {
        "msg": {
            "id": 2,
            "title": "Masak",
            "description": "Step memasak",
            "status": true,
            "due_date": "2020-05-27T17:00:00.000Z",
            "UserId": null,
            "createdAt": "2020-04-27T14:34:33.187Z",
            "updatedAt": "2020-04-27T14:34:33.187Z"
        }
    }
    ```

#### Error Response 
- Code: 404 
- Content: 
    ```
    {
        "error": 
        "Not Found"
    } 
    ```

#### Sample Call 
- http://localhost:3000/todos/2

<br>

## CREATE NEW TODOS 

#### URL 
/todos


#### Method 
    > POST


#### URL Parameter 
None 

#### Data Parameter 
- title: [string] [Required]
- description: [string] [Required]
- status: [boolean] [Optional]
- due_date: [date] [Required]

#### Succes Response 
- Code: 200 
- Content: 
    ```
    {
        "msg":{
            "id":3,
            "title":"Masak",
            "description":"Step memasak",
            "status":true,
            "due_date":"2020-05-27T17:00:00.000Z",
            "updatedAt":"2020-04-27T14:34:37.552Z",
            "createdAt":"2020-04-27T14:34:37.552Z",
            "UserId":null
        }
    }
    ```

#### Error Response 
- Code: 500 
- Content: 
    ```
    {
        "error": 
        "Error Access"
    }
    ``` 

#### Sample Call 
- http://localhost:3000/todos 

<br>

## UPDATE TODOS 

#### URL 
/todos/:id

#### Method 
    > PUT

#### URL Parameter 
- id = [integer] [Required]

#### Data Parameter 
- title: [string] [Optional]
- description: [string] [Optional]
- status: [boolean] [Optional]
- due_date: [date] [Optional]

#### Succes Response 
- Code: 200 
- Content: 
    ```
    {
        "msg":[
            1,
            [
                {
                    "id":3,
                    "title":"Ngoding",
                    "description":"Belajar API",
                    "status":true,
                    "due_date":"2020-05-28T17:00:00.000Z",
                    "createdAt":"2020-04-27T14:34:37.552Z",
                    "updatedAt":"2020-04-27T16:02:16.588Z",
                    "UserId":null
                }
            ]
        ]
    }
    ```

#### Error Response 
- Code : 404 
- Content: 
    ```
    {
        "error": 
        "Not Found"
    }
    ```

> OR

- Code: 500 
- Content: 
    ```
    {
        "error": 
        "Error Access"
    }
    ``` 

#### Sample Call 
- http://localhost:3000/todos/3 

<br>

## DELETE TODOS 

#### URL 
/todos/:id

#### Method 
    > DELETE

#### URL Parameter 
- id = [integer] [Required]

#### Data Parameter 
None

#### Succes Response 
- Code: 200 
- Content: 
    ```
    {
        Successfully delete Todo 1
    }
    ```

#### Error Response 
- Code : 404 
- Content: 
    ``` 
    {
        "error": 
        "Not Found"
    }
    ```

> OR

- Code: 500 
- Content: 
    ```
    {
        "error": 
        "Error Access"
    }
    ``` 

#### Sample Call 
- http://localhost:3000/todos/1
