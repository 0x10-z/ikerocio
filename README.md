# Ikerocio.com


## Translations

    docker-compose -f local.yml run --rm django django-admin.py makemessages -l en 

    docker-compose -f local.yml run --rm django django-admin.py compilemessages -l en

## Deployment

    docker-compose -f production.yml build

    docker-compose -f production.yml up -d