# Fancy Todo

### Return json data for all Todos

*    Url

        /todos

*    Method:

        GET

*    URL PARAMS

        UserId = Integer
        headers = Token

*    Data PARAMS

        NONE

*    Succes Response
        ```
        Code : 200
        
        Content : {
                        "Todos": [
                            {
                            "id": 7,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "UserId": 1,
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                            },
                        ]
                        Weather": {
                            "product": "civil",
                            "init": "2020042806",
                            "dataseries": [
                            {
                                "timepoint": 3,
                                "cloudcover": 6,
                                "lifted_index": 6,
                                "prec_type": "none",
                                "prec_amount": 0,
                                "temp2m": 32,
                                "rh2m": "22%",
                                "wind10m": {
                                "direction": "E",
                                "speed": 2
                                },
                                "weather": "mcloudyday"
                            },
                        }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Error Acces Server"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos",
            dataType: "json",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });
        ```
### Return json data with create feature

*    Url

        /todos

*    Method:

        POST

*    URL PARAMS

        UserId : Integer
        headers = Token

*    Data PARAMS

        title : String
        description : String
        status : Boolean
        due_date : DateOnly
        UserId : Integer

*    Succes Response
        ```
        Code : 201
        
        Content : {
                    "Todos": {
                        "id": 7,
                        "title": "Sport",
                        "description": "Go Swimming",
                        "status": false,
                        "due_date": "2020-04-27",
                        "UserId": 1,
                        "createdAt": "2020-04-27T05:44:00.692Z",
                        "updatedAt": "2020-04-27T05:57:48.461Z"
                        }
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Error Acces Server"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos",
            dataType: "json",
            type : "POST",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });
        ```
### Return json data for a single Todo

*    Url

        /todos/:id

*    Method:

        GET

*    URL PARAMS

        id = integer
        headers = Token

*    Data PARAMS

        None

*    Succes Response
        ```
    *    Code : 200

        Content :   {
                        "Todos": {
                            "id": 7,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "UserId": 1,
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                        },
                        Weather": {
                            "product": "civil",
                            "init": "2020042806",
                            "dataseries": [
                            {
                                "timepoint": 3,
                                "cloudcover": 6,
                                "lifted_index": 6,
                                "prec_type": "none",
                                "prec_amount": 0,
                                "temp2m": 32,
                                "rh2m": "22%",
                                "wind10m": {
                                "direction": "E",
                                "speed": 2
                                },
                                "weather": "mcloudyday"
                            },
                    }
        ```
*    Error Response :
        ```
    *    Code :  500
        Content : "Not Found"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/7",
            dataType: "json",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });
        ```
### Return json data after edit

*    Url

        /todos/:id

*    Method:

        PUT

*    URL PARAMS

        id = [integer]
        headers = Token

*    Data PARAMS

        title : String
        description : String
        status : Boolean
        due_date : DateOnly

*    Succes Response
        ```
        Code : 201

        Content :   {
                        "Todos": {
                            "id": 7,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "UserId": 1,
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                        },
                    }
        ```
*    Error Response :
        ```
        Code :  304
        Content : "Not Modified"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/7",
            dataType: "json",
            type : "PUT",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });
        ```
### Return json data after delete

*    Url

        /todos/:id

*    Method:

        DELETE

*    URL PARAMS

        id : INTEGER
        headers = Token

*    Data PARAMS

        NONE

*    Succes Response
        ```
        Code : 202
        Content : { msg : "Succes Destroy Todo with ${Id} " }
        ```
*    Error Response :
        ```
        Code :  501
        Content : "Not Implemented"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/3",
            dataType: "json",
            type : "DELETE",
            success : function(result) {
                res.status(200).json({
                    msg : `Completely Destroy Todo ${id}`
                })
            }
        });
        ```
### Return json data after create user

*    Url

        /user/register

*    Method:

        POST

*    URL PARAMS

        NONE

*    Data PARAMS

        email : String
        password : String

*    Succes Response
        ```
        Code : 201
        Content :   {
                    "UserId": 1,
                    "UserEmail" : "your email",
                    }
        ```
*    Error Response :
        ```
        Code :  501
        Content : "Cannot Implemented"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/register",
            dataType: "json",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    User : result
                })
            }
        });
        ```
### Return json data after login user
*    Url

        /user/login

*    Method:

        POST

*    URL PARAMS

        NONE

*    Data PARAMS

        email : String
        password : String

*    Succes Response
        ```
        Code : 200
        Content :   {
                        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaTA5QGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4MDg5Mn0.RGbRjWwP5ZwhqZIsDSDKlciDyR-AR0MW8VDxllYjeKY"
                    }
        ```
*    Error Response :
        ```
        Code :  404
        Content : "wrong email/password"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/login",
            dataType: "json",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```