<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Requisitos

Es necesario tener ajustado el `.env` y un `docker-compose.yml` para poder correrlo de forma correcta

Antes de migrar la database con la ayuda del ORM `prisma` es necesario tener un contenedor corriendo con la imagen de `postgres` y tenerlo bien linkeado

#### docker-compose.yml

```docker
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: db_name
    ports:
      - 5432:5432
    volumes:
      - db_data:/var/lib/postgresql/data  # Data volume added

volumes:
  db_data:
```

#### .env

```
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"
SECRET_KEY=secret

```
