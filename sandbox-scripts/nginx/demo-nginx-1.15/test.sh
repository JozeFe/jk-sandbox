#!/usr/bin/env bash

function request () {
    echo "$ $1      $2"
    $1
	echo
}

#curl -X GET -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:8080

request "curl -X GET http://localhost:80/"
request "curl -X GET http://localhost:80/index.html"
request "curl -X GET http://localhost:80/static_bundle.js"
request "curl -X GET http://localhost:80/longest/prefix"
request "curl -X GET http://localhost:80/longest/prefix/index.html"
request "curl -X GET http://localhost:80/longest/prefix/and/longer/index.html"
request "curl -X GET http://localhost:80/longest/unfind/prefix"

request "curl -X GET http://localhost:80/direct_file.json"
request "curl -X GET http://localhost:80/unreachable.json"
request "curl -X GET http://localhost:80/file1.json"
request "curl -X GET http://localhost:80/file2.json"
request "curl -X GET http://localhost:80/not_found.html"
