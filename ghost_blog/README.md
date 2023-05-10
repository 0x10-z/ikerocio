# GHOST blog

Used image [https://hub.docker.com/r/bitnami/ghost/](https://hub.docker.com/r/bitnami/ghost/)

## Deploy

```sh
docker-compose up -d
```

## Backup
Following [https://ghost.org/docs/faq/manual-backup/](https://ghost.org/docs/faq/manual-backup/)

* Create backup of content from UI
* Create backup of routes from UI
* Create backup of redirections from UI
* Create backup of Theme file from UI
* Create backup of files in server using following commands

```sh
docker-compose cp --archive ghost:/bitnami/ghost backup
zip -r backup.zip backup
rm -r backup
```

## Send backup file to another server

**Origin server**
```sh
ssh-keygen
#Enter file in which to save the key (/home/ec2-user/.ssh/id_rsa): #id_rsa_backup
#Enter passphrase (empty for no passphrase):
#Enter same passphrase again:
cat id_rsa_backup.pub
# copy output
```


**Destination server**
```sh
nano .ssh/authorized_keys

# Add a new line after last entry, and paste it origin server pub key
```

**Origin server**
```sh
scp -r -i id_rsa_backup backup.zip ec2-user@<destination-ip>:/home/ec2-user/backup.zip
```

Startup application using Docker, and first of all, import before exported files:

Default user: `user@example.com` and password: `bitnami123`

* Import backup of content from UI
* Import backup of routes from UI
* Import backup of redirections from UI
* Import backup of Theme file from UI
* Import backup of files in server using following commands

## Restore

```sh
unzip backup.zip -d unzippedbackup
mv unzippedbackup/backup/* unzippedbackup
rmdir unzippedbackup/backup
sudo chmod 7777 -R unzippedbackup/*
sudo chown 1001:root -R unzippedbackup/*
docker-compose cp unzippedbackup/content/images/ ghost:/bitnami/ghost/content/
docker-compose cp unzippedbackup/config.production.json ghost:/bitnami/ghost/config.production.json
sudo rm -r unzippedbackup
sudo rm backup.zip
```

## Unlock User

Enter to SQL container

```sh
docker-compose exec mariadb /bin/bash
```

Execute

```sh
mysql -u bn_ghost -p bitnami_ghost -e "UPDATE users SET status='active' where slug='iocio'"
```

Then, set new password from UI or generate BCrypt Hash via http://bcrypthashgenerator.apphb.com/ and run following command:

```sh
mysql -u bn_ghost -p bitnami_ghost -e "UPDATE users SET password="<generatedHash>" where slug='iocio'"
```
