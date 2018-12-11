#!/usr/bin/env bash

# nginx docker bash testing start
docker run --rm -it -p 80:80 nginx-static-example bash

# preparation - volume copy
docker run --rm -it -v /c/tmp/etc_nginx:/tmp -p 80:80 nginx-static-example cp -a /etc/nginx/. /tmp/

# local config test with minimal-rest api
docker network create test
docker run --name nginx --network test --rm -it -v /c/tmp/etc_nginx:/etc/nginx -p 80:80 nginx-static-example bash
docker run --name rest1 -d --network test minimal-rest
docker run --name rest2 -d --network test minimal-rest
