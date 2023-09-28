# Stage 1: Build stage
FROM maven:3.8.4-openjdk-17 AS builder
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Final stage
FROM openjdk:17-slim
WORKDIR /app

COPY --from=builder /app/target/inshine-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]






