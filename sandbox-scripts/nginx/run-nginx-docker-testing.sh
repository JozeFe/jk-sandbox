#!/usr/bin/env bash

docker network create test
docker run --name nginx --network test --rm -it -v /c/tmp/etc_nginx:/etc/nginx -p 80:80 nginx-static-example bash
docker run --name rest1 -d --network test minimal-rest
docker run --name rest2 -d --network test minimal-rest
