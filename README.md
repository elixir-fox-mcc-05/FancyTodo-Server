# FancyTodo-Server


## Tech Stack

**Server:** Node, Express

**Database:** PosgreSQL, Sequelize ORM

## Features

- Authentication
- Authorization
- CRUD list etc
- 3rd party API


## Documentation

[Postman Documentation](https://documenter.getpostman.com/view/10895410/UzJPLaSj#9487f477-7880-42cc-8b5c-700b55e975fd)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`SECRET`

`APIKEY_WEATHER`

`APIKEY_SHALAT`

`CLIENT_ID`

`DEFAULT_PASSWORD`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Jesicaahr/FancyTodo-Server-1.git
```

Go to the project directory

```bash
  cd FancyTodo-Server-1
```

Install dependencies

```bash
  npm install
```

Create and migrate database 

```bash
  sequelize db:create
  sequelize db:migrate
```

Start the server

```bash
  npm run dev
```