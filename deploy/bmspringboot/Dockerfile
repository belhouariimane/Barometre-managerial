# Instance back-end

FROM openjdk:8-jdk-alpine
ARG JAR_FILE=barometre-managerial-0.0.1-SNAPSHOT.jar
WORKDIR /usr/src/app
COPY ${JAR_FILE} app.jar
ENTRYPOINT [ "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar" ]
EXPOSE 8080
