#!/usr/bin/env bash

time docker build --no-cache -t size-1-example -f ./Dockerfile1 .

time docker build --no-cache -t size-2-example -f ./Dockerfile2 .

time docker build --no-cache -t size-3-example -f ./Dockerfile3 .

time docker build --no-cache -t size-4-example -f ./Dockerfile4 .

time docker build --no-cache -t size-5-example -f ./Dockerfile5 .
