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

`PORT=3000`

`SECRET=test123`

`APIKEY_WEATHER = 424779461c24f3afd64d7342ed9b5d36`

`APIKEY_SHALAT =3805a0e7141b3aa433eadfbe76db8854`

`CLIENT_ID=926421529791-vu779ktgp375qqnurr15o61k45ttjaq2.apps.googleusercontent.com`

`DEFAULT_PASSWORD=Google123`

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