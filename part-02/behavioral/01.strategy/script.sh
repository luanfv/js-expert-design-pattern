# postgresql

docker run \
    --name js-expert-postgres \
    -e POSTGRES_USER=luanfv \
    -e POSTGRES_PASSWORD="12345678" \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker logs postgres

docker exec -it js-expert-postgres psql --username luanfv --dbname heroes
CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL);
SELECT * FROM warriors;

# mongodb

docker run \
    --name js-expert-mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=luanfv \
    -e MONGO_INITDB_ROOT_PASSWORD="87654321" \
    -p 27017:27017 \
    -d \
    mongo:4

docker logs js-expert-mongodb