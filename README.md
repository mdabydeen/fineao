# Full Stack Web Application 

A full stack web application using the following guidelines: 

1. Typescript for both frontend & backend
2. Backend using: 
  - ExpressJS w/ Typescript
  - TypeORM
  - Postgres DB
3. Frontend using: 
  - Angular 8 
  - Typescript

## Approach

I've taken a full stack approach and focused on the following:

### Stack:
- Angular (FE)
- Express (Node.js) Backend
- Postgres

### Build Environment
- Used Docker to build a demo stack with the technologies defined above.

### Backend
- Added CRUD Endpoints for the following:
  - creating : `POST /api/v1/product`
  - edit employees : `PUT /api/v1/product/:id`
  - deleteing employees : `DELETE /api/v1/product/:id`

Used [TypeORM]() ORM for DB modeling and management

#### Future Considerations:
- Add a security / auth layer, such that only authenticated users can add or modify employees

- Add a caching layer (`redis`) to handle large amounts of traffic - even though that would be an overkill for this example.

### Front-End
Added buttons / function to edit/add/delete employees

Added Modal / Form Component for add/edit

#### Future Considerations:
  - Add buttons/pages to authenticate users to login
  before making changes to the app

### Database
Use `Postgres` as the tool of choice because of personal preference.
  - Can be easily swapped out for any DB
  - Used TypeORM CLI for migrations of DB tables.

#### Future Considerations:
  - Add replication / caching if application size grows.

### Extras

- Used `editorconfig` & `prettier` for standardized formatting
- Used `gitflow` process for merging and development

#### Future Considerations:
  - Add CI/CD build tools

## __How to build (with Docker)__

Requirements:

1. [Docker](https://www.docker.com/products/docker-desktop)

With docker installed, clone this repo

```
$ git clone git@bitbucket.org:mdabydeen/fineao-app.git 
```

then navigate into the cloned directory

```
$ cd fineao-app/
```

then run the `docker` command

```
$ docker-compose up -d
```

This will run the following:

1. Pull all relevant images from docker hub
2. Build a container for the front-end
3. Build a container for the backend (`server/`)
4. Setup a database container running [postgresql](https://www.postgresql.org/)
5. Setup a container with `adminer` - a phpMyAdmin style
viewer for your database.

Once the containers are up and running.

1. Navigate to `http://localhost:8000` for the front-end
2. Navigate to `https://localhost:4200` for the backend
3. Navigate to `https://localhost:9000` for the db view

## __How to build (without Docker)__

Steps to setup:

#### Config

##### Setup the DB
Using `mariadb` create a database, let's call it `fineao` for this case.

##### Modify and Export your configs

1. Copy the `vars.env.example` file into `vars.env`
2. Modify your `var.env` file with the correct info for your database
3. Run the follow command:
```
$ source vars.env
```

##### Running Migrations

For migrations, you will need to:

```
$ cd server
```

then run

```
$ npx typeorm-cli db:migrate
```

### Start your engines

Run the stack by using the following command

```
$ npm start
```

Once the containers are up and running.

1. Navigate to `http://localhost:8000` for the front-end
2. Navigate to `https://localhost:4200` for the backend

