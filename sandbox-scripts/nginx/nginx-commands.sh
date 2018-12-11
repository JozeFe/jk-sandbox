#!/usr/bin/env bash

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
