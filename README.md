# FancyTodo-Server

THIS APP WORKS FOR ADD LIST THAT YOU'VE TODO

#### ROUTES

> POST - `/todos`
                                                    
Request body menerima : 
- `title`
- `description`
- `status`
- `due_date`
---
<br>

RESPOND :

| Condition | Status                        | Respond                                                                                                                             |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CREATED    | 201   | Memeberikan object berisikan `data yang baru dibuat` |
| BAD REQUEST    | 400   | Memeberikan object berisikan data yang `error` |
| SERVER ERROR    | 500   | Memberikan `Status Code 500`  |

----
----
<br>

> GET - `/todos`

RESPOND :

| Condition | Status                        | Respond                                                                                                                             |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| OK    | 200   | Menerima semua list todo |
| SERVER ERROR    | 500   | Memberikan `Status Code 500`  |
----
----
<br>

> GET - `/todos/:id`

RESPOND :

| Condition | Status                        | Respond                                         |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| OK    | 200   | Memberikan Object yang berisi data todo |
| NOT FOUND    | 404   | Memeberikan object berisi error `not found` |
----
----
<br>

> PUT - `/todos/:id`

Endpoint akan menerima request body:
- `title`
- `description`
- `status`
- `due_date`

----

RESPOND :

| Condition | Status                        | Respond                                         |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| OK    | 200   | Memberikan Object yang berisi `update data` |
| BAD REQUEST    | 400   | Memeberikan object berisi `validation error` |
| NOT FOUND    | 404   | Memeberikan object berisi error `not found` |
| SERVER INTERNAL    | 500   | Memeberikan response code `500` |
----
----
<br>

> DELETE - `/todos/:id`

RESPOND :

| Condition | Status                        | Respond                                         |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SUCCESS    | 204   | Memberikan Keterangan process `delete` |
| NOT FOUND    | 404   | Memeberikan object berisi error `not found` |
| SERVER INTERNAL    | 500   | Memeberikan response code `500` |
----