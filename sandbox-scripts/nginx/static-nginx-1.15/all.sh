#!/usr/bin/env bash

docker rm -f $(docker ps -a -q)

./build.sh
./run.sh

until $(curl --output /dev/null --silent --head --fail http://localhost:80); do
    printf '.'
    sleep 1
done

./test.sh
