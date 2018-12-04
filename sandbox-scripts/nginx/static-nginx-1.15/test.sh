#!/usr/bin/env bash

function request () {
    echo "......................$ $1      $2"
    $1
	echo
}

#curl -X GET -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:8080

request "curl -X GET http://localhost:80/" "same as ...\$ curl -X GET http://localhost:80/index.html"
request "curl -X GET http://localhost/static_bundle.js"
request "curl -X GET http://localhost:80/not_exists.html"
request "curl -X GET http://localhost:80/file1.json"
request "curl -X GET http://localhost:80/file2.json"
request "curl -X GET http://localhost:80/direct_file.json"
