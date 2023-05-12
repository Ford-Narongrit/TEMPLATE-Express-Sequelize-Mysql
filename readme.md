# ExpressJS + Sequelize + Mysql [Example]
### this repository contains a simple nodeJS Backend template that use ExpressJS + Sequelize + Mysql
#

## Project setup
```bash
cp .env.example
docker-compose up --build
```
and try to open [localhost](https://example-node.loca.lt/)

## Create Migration and Seeder file
 * Migration file
```bash
docker-compose exec app npx sequelize-cli migration:generate --name <table_name>
```
 * Seeder file
```bash
docker-compose exec app npx sequelize-cli seed:generate --name <filename>
```

## Migration database
```bash
docker-compose exec app npx sequelize-cli db:migrate
```

## Seeding database
```bash
docker-compose exec app npx sequelize-cli db:seed:all
```

### References
 * [Sequelize-v6 doc](https://sequelize.org/docs/v6/)