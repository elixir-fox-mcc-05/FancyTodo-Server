Show Todos
Returns json data with all todos.

URL

/todos

Method:

POST

URL Params

Required: 

N/A

Data Params

 {
    "title" : "beli sayur" , 
    "description" : "kepasar untuk beli sayur:, 
    "status" : false, 
    due_date : "march 29 2020 19:00:12" 
 }


Success Response:

Code: 201 CREATED
Content: { "title" : "beli sayur" , "description" : "kepasar untuk beli sayur:, "status" : false, due_date : "march 29 2020 19:00:12" }

Error Response:

Code: 400 BAD REQUEST
Content: { error : "Data Not Found" }

code: 500 INTERNAL SERVER ERROR
Content: { error : "Server Timeout : 500"}


Sample Call:

  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });




Show Todos
Returns json data with all todos.

URL

/todos

Method:

Get

URL Params

Required: 

N/A

Data Params

[N/A]


Success Response:

Code: 200 SUCCESS
Content: [{}]

Error Response:

code: 500 INTERNAL SERVER ERROR
Content: { error : "Server Timeout : 500"}


Sample Call:

  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });



Show todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

Get

URL Params

Required: 

id=[integer]

Data Params

[N/A]


Success Response:

Code: 200 OK
Content: [{ "title" : "beli sayur" , "description" : "kepasar untuk beli sayur:, "status" : false, due_date : "march 29 2020 19:00:12" }]

Error Response:

code: 404 NOT FOUND
Content: { error : "error not found"}


Sample Call:

  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });



Update todos based id
Returns json data with specific todos.

URL

/todos/:id

Method:

PUT

URL Params

Required: 

id=[integer]

Data Params

[N/A]


Success Response:

Code: 200 OK
Content: [{ "title" : "beli sayur" , "description" : "kepasar untuk beli sayur:, "status" : false, due_date : "march 29 2020 19:00:12" }]

Error Response:

code: 400 BAD REQUEST
Content: { error : "title invalid"}

code : 404 NOT FOUND
content : {error : "not found}

code : 500 INTERNAL SERVER ERROR
content : 500: not found


Sample Call:

  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });



Delete todos based id
Returns json data with removed todos.

URL

/todos/:id

Method:

PUT

URL Params

Required: 

id=[integer]

Data Params

[N/A]


Success Response:

Code: 200 OK
Content: [{ "title" : "beli sayur" , "description" : "kepasar untuk beli sayur:, "status" : false, due_date : "march 29 2020 19:00:12" }]

Error Response:

code : 404 NOT FOUND
content : {error : "error not found"}

code : 500 INTERNAL SERVER ERROR
content : 500: not found


Sample Call:

  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });

