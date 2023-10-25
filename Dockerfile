FROM openjdk:8
EXPOSE 8080
ADD target/EventManagement-0.0.1-SNAPSHOT.jar EventManagement-docker.jar
ENTRYPOINT ["java", "-jar", "EventManagement-docker.jar"]