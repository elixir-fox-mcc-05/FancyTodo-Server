# Fancy Todo

### Return json data for all Todos

*    Url

        /todos

*    Method:

        GET

*    URL PARAMS

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
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos",
            headers: "token",
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

        headers : token

*    Data PARAMS
        ```
        title : String
        description : String
        due_date : Date
        ```
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
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos",
            headers: "token",
            type : "POST",
            data : {
                    "title",
                    "description",
                    "due_date"
            },
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
        ```
        id = integer
        headers = token
        ```
*    Data PARAMS

        None

*    Succes Response
        ```
        Code : 200
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
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/7",
            headers: "token",
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
        ```
        id = integer
        headers = token
        ```
*    Data PARAMS
        ```
        title : String
        description : String
        status : Boolean
        due_date : Date
        ```
*    Succes Response
        ```
        Code : 202
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
        Code :  500,
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/7",
            headers: "token",
            data : {
                    title,
                    descriptions,
                    status,
                    due_date,
            }
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
        ```
        id : INTEGER
        headers = Token
        ```
*    Data PARAMS

        NONE

*    Succes Response
        ```
        Code : 202
        Content : { msg : "Succes Destroy Todo with ${Id} " }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/todos/3",
            headers: "token",
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
        ```
        email : String
        password : String
        ```
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
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/register",
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
        ```
        email : String
        password : String
        ```
*    Succes Response
        ```
        Code : 202
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
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```

### Return json data after login/register via google user
*    Url
        /user/google-login

*    Method:

        POST

*    URL PARAMS

        token : google_token

*    Data PARAMS

        None

*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaTA5QGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4MDg5Mn0.RGbRjWwP5ZwhqZIsDSDKlciDyR-AR0MW8VDxllYjeKY"
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/google-login",
            dataType: "json",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```

### Return json data after login/register via facebook user
*    Url
        /user/google-login

*    Method:

        POST

*    URL PARAMS

        email : facebook_email

*    Data PARAMS

        None

*    Succes Response
        ```
        Code : 202
        Content :   {
                        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b2RqaTA5QGdtYWlsLmNvbSIsImlhdCI6MTU4ODA4MDg5Mn0.RGbRjWwP5ZwhqZIsDSDKlciDyR-AR0MW8VDxllYjeKY"
                    }
        ```
*    Error Response :
        ```
        Code :  500
        Content : "Something Went Wrong"
        ```
*    Sample Call :
        ```
        $.ajax({
            url: "/user/facebook-login",
            dataType: "json",
            type : "Post",
            success : function(result) {
                res.status(200).json({
                    Token : result
                })
            }
        });
        ```