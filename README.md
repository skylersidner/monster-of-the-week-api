# monster-of-the-week-api
An API for persisting data about Monster of the Week games.


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





