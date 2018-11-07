#!/usr/bin/env bash

### CURL ###

## GET
curl -X GET -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:8080

## POST - data
curl --data "param1=value1&param2=value2" http://localhost:8080
# file upload
curl --form "fileupload=@filename.txt" http://localhost:8080
# RESTful HTTP post
curl -X POST -d @filename http://localhost:8080

## PUT - json file
curl --request PUT --header 'content-type: application/json' --data @file.json http://localhost:8080
curl -X        PUT -H       'content-type: application/json' -d     @file.json http://localhost:8080



### AB ###
# -n requests     Number of requests to perform
# -c concurrency  Number of multiple requests to make at a time
ab \
    -m POST \
    -n 5000 \
    -c 10 \
    -H "User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.29 Safari/525.13" \
    "http://localhost:8080" ;
