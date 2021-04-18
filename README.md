# Ikerocio.com


## Translations

```sh
docker-compose -f local.yml run --rm django django-admin.py makemessages -l en 

docker-compose -f local.yml run --rm django django-admin.py compilemessages -l en
```

## Deployment

```
git pull

docker-compose -f production.yml build

docker-compose -f production.yml down && docker-compose -f production.yml up -d
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