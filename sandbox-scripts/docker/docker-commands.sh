#!/usr/bin/env bash

# copy files from image to host
# WARNING: check image entrypoint

mkdir -p /mnt/c/tmp/test
docker run --rm \
  -v c:/tmp/test:/target \
  YOUR_IMAGE \
  cp -a /IMAGE/PATH/. /target/

# Windows - bash on ubuntu on windows, mount hack
# to use '-v "/c/tmp/test:/foo" in
sudo mkdir /c
sudo mount --bind /mnt/c /c

# start all (dead included)
docker start $(docker ps -a -q)

# restart all running
docker restart $(docker ps -q)

# kill filter
docker kill $(docker ps -a -q -f name=FILTER_VALUE)

# delete all dangling images
docker rmi $(docker images -f dangling=true -q)

# WARNING remove all images
docker rmi $(docker images -a -q)
