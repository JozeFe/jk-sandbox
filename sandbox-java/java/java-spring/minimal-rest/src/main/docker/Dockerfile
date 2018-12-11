FROM java:8-jre

COPY 'maven/minimal-rest*.jar' '/minimal-rest.jar'

EXPOSE 8080

CMD [ \
    "java", \
    "-jar", \
    "/minimal-rest.jar" \
]
