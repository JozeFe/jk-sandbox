FROM node:8 as builder

COPY hello-world /hello-world

RUN cd /hello-world \
    && yarn install \
    && yarn build

FROM nginx:1.15

COPY --from=builder /hello-world/build /usr/share/nginx/html/
