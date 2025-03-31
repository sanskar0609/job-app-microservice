FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/companyms-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 7073
ENTRYPOINT ["java", "-jar", "app.jar"]
