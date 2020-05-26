# Instance back-end multistage build
# Documentation officielle du mutlistage build https://docs.docker.com/develop/develop-images/multistage-build/
# Autre exemple https://aboullaite.me/multi-stage-docker-java/

FROM maven:3.6.3-jdk-8 AS build
COPY Back/barometre-managerial/src /usr/src/app/src
COPY Back/barometre-managerial/pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM openjdk:8-jdk-alpine
ARG JAR_FILE_NAME=barometre-managerial-0.0.1-SNAPSHOT.jar
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/${JAR_FILE_NAME} /usr/src/app/app.jar
ENTRYPOINT [ "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar" ]
EXPOSE 8080
