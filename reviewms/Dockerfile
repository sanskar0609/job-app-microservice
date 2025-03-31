FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/reviewms-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 7074
ENTRYPOINT ["java", "-jar", "app.jar"]
