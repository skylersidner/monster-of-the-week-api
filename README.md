# monster-of-the-week-api
An API for persisting data about Monster of the Week games.

The server can be started with:
```shell
npm run start
```

The server can be accessed locally via [http://localhost:8000/graphql](http://localhost:8000/graphql):
```graphql
query {
  testQuery {
    test
  }
}

=>
{
  "data": {
    "testQuery": {
    "test": "Success!"
    }
  }
}
```

## Docker/Database

`docker-compose.yml` was created based on [this article](https://renzolucioni.com/postgres-docker-compose/).

Run:
```shell
docker-compose up
```

Once the database is running, migrate to the latest schema:
```shell
npm run db:migrate
```

When the database schema is updated, seed the base data:
```shell
npm run db:seed
```





