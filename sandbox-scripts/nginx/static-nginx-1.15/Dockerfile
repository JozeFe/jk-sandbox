FROM nginx:1.15

COPY config/etc_nginx_conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY content/usr_share_nginx_html/ /usr/share/nginx/html/
COPY content/location_regex_json/ /location/regex/json/
COPY content/location_direct/ /location/direct/
