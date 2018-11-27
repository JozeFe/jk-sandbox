#!/usr/bin/env bash

A="===========================================";
function divider () {
	echo -e "\n$A $1 ${A:0:-${#1}}\n"
}

divider 'Killing all'
docker kill $(docker ps -a -q)

divider 'Removing all'
docker rm $(docker ps -a -q)

divider 'Removing all volumes'
docker volume rm $(docker volume ls -q)

divider 'Existing containers and volumes'
docker ps -a
docker volume ls
