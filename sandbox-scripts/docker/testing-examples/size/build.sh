#!/usr/bin/env bash

docker build -t size-1-example -f ./Dockerfile1 .

docker build -t size-2-example -f ./Dockerfile2 .

docker build -t size-3-example -f ./Dockerfile3 .

docker build -t size-4-example -f ./Dockerfile4 .

docker build -t size-5-example -f ./Dockerfile5 .
