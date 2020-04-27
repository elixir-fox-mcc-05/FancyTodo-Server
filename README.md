# Fancy Todo

Return json data for all Todos

    Url

        /todos

    Method:

        GET

    URL PARAMS

        NONE

    Data PARAMS

        NONE

    Succes Response

        Code : 200

         Content : {
                        "Todos": [
                            {
                            "id": 3,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                            },
                        ]
                    }

    Error Response :
        Code :  500
        Content : "Error Acces Server"
    
    Sample Call :
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

Return json data with create feature

    Url

        /todos

    Method:

        POST

    URL PARAMS

        NONE

    Data PARAMS

        title : String
        description : String
        status : Boolean
        due_date : DateOnly

    Succes Response

        Code : 201

         Content : {
                    "Todos": {
                        "id": 1,
                        "title": "Sport",
                        "description": "Futsal",
                        "status": false,
                        "due_date": "2020-04-27",
                        "UserId": null,
                        "createdAt": "2020-04-27T05:44:00.692Z",
                        "updatedAt": "2020-04-27T05:57:48.461Z"
                        }
                    }

    Error Response :
        Code :  500
        Content : "Error Acces Server"
    
    Sample Call :
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

Return json data for a single Todo

    Url

        /todos/:id

    Method:

        GET

    URL PARAMS

        id = [integer]

    Data PARAMS

        None

    Succes Response

        Code : 200

        Content : {
                        "Todos": [
                            {
                            "id": 3,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "UserId": null,
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                            },
                        ]
                    }

    Error Response :
        Code :  500
        Content : "Not Found"
    
    Sample Call :
        $.ajax({
            url: "/todos/3",
            dataType: "json",
            type : "GET",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });

Return json data after edit

    Url

        /todos/:id

    Method:

        PUT

    URL PARAMS

        id = [integer]

    Data PARAMS

        title : String
        description : String
        status : Boolean
        due_date : DateOnly

    Succes Response

        Code : 201

        Content : {
                        "Todos": [
                            {
                            "id": 3,
                            "title": "Sport",
                            "description": "Go Swimming",
                            "status": false,
                            "due_date": "2020-04-27",
                            "UserId": null,
                            "createdAt": "2020-04-27T05:44:45.150Z",
                            "updatedAt": "2020-04-27T05:44:45.150Z"
                            },
                        ]
                    }

    Error Response :
        Code :  304
        Content : "Not Modified"
    
    Sample Call :
        $.ajax({
            url: "/todos/3",
            dataType: "json",
            type : "PUT",
            success : function(result) {
                res.status(200).json({
                    Todos : result
                })
            }
        });

Return json data after delete

    Url

        /todos/:id

    Method:

        DELETE

    URL PARAMS

        id : INTEGER

    Data PARAMS

        NONE

    Succes Response

        Code : 202

        Content : { msg : "Succes Destroy Todo with ${Id} " }

    Error Response :
        Code :  501
        Content : "Not Implemented"
    
    Sample Call :
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

Return json data after create user

    Url

        /user/register

    Method:

        POST

    URL PARAMS

        NONE

    Data PARAMS

        email : String
        password : String

    Succes Response

        Code : 201

        Content : {
                    "User": {
                        "id": 1,
                        "email": "yodji09@gmail.com",
                        "password": "$2a$15$34DMinzpBLJtoq/JsjNc2.C0kZ9ngiUzPUsEclcnoKlBgX.Aeurra",
                        "updatedAt": "2020-04-27T09:11:48.226Z",
                        "createdAt": "2020-04-27T09:11:48.226Z"
                        }
                    }
                    
    Error Response :
        Code :  501
        Content : "Cannot Implemented"
    
    Sample Call :
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