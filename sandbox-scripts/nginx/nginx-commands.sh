#!/usr/bin/env bash

# nginx docker bash testing start
docker run --rm -it -p 80:80 nginx-static-example bash
# install ps, curl, nano
apt-get update && apt-get install -y procps curl nano

### NGINX
# start
nginx

# signal:
    # stop: fast shutdown
    # quit: graceful shutdown (wait for workers to finish their processes)
    # reload: reload the configuration file
    # reopen: reopen the log file
nginx -s [signal]

# version
nginx -v

# check if nginx is running
ps -ef | grep nginx

# test nginx config
nginx -t
# test and print validated config
nginx -T

# edge use case, check and reload new config
echo ... updating config
nginx -t # -T
nginx -s reload
