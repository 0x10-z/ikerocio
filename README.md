# Ikerocio.com

## Deploy NextJS

```sh
current_date=$(date +'%y.%m.%d-%H%M%S')
echo APP_VERSION=$current_date > ikerocio/.env.local
```

## Deployment debug in local

First of all, create network manually

```sh
docker network create ikerocio_network
```

Then, run docker-compose

```sh
docker-compose -f production.yml up
```
