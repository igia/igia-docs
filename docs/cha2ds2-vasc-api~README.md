---
id: cha2ds2-vasc-api~README
title: igia-platform / cha2ds2-vasc-api
sidebar_label: Sample App API
---
<!-- BEGIN adding docusaurus links -->

A simple JHipster sample microservice app for calculating a stroke risk score through a REST API using the cha2ds2-vasc algorithm. <br>

<button onclick="window.location.href='/docs/cha2ds2-vasc-api~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# cha2ds2vascapi
This application was generated using JHipster 5.4.2, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.4.2](https://www.jhipster.tech/documentation-archive/v5.4.2).

This application helps users to calculate the annual risk of stroke for someone with non-valvular atrial fibrillation based on a variety of risk factors. 

This is a "microservice" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].

## Development

Following platform components should be running to start the application:
* Keycloak Server
* Jhipster-Registry

Please go through the documentation of respective platform components to start them.

To start your application in the dev profile, simply run:

    ./mvnw

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Standalone Development

During backend development, you can disable cross cutting concerns (discovery, security, cors etc), with an add-on standalone profile. Simply run:

    ./mvnw -Pdev,standalone

To start frontend in standalone mode, use following script:

    npm run start:standalone

## Building for production

To optimize the cha2ds2vascapi application for production, run:

    ./mvnw -Pprod clean package

To ensure everything worked, run:

    java -jar target/*.war


Refer to [Using JHipster in production][] for more details.

## Testing

* Unit Test Cases

To launch your application's tests, run:

    ./mvnw clean test

For more information, refer to the [Running tests page][].

* Karate Test Cases

To launch your application's karate tests, run following command in separate window:
	
	./mvnw test -Dtest=KarateTestRunner
	
Note: Before running karate test cases please insure igia-cha2ds2-vasc-api service must be running.

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

Then, run a Sonar analysis:

```
./mvnw -Pprod clean test sonar:sonar
```

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the `src/main/docker` folder to launch required third party services.

For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod jib:dockerBuild

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

## License and Copyright

MPL 2.0 w/ HD  
See [LICENSE](LICENSE) file.  
See [HEALTHCARE DISCLAIMER](HD.md) file.  
© [Persistent Systems, Inc.](https://www.persistent.com)

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 5.4.2 archive]: https://www.jhipster.tech/documentation-archive/v5.4.2
[Doing microservices with JHipster]: https://www.jhipster.tech/documentation-archive/v5.4.2/microservices-architecture/
[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v5.4.2/development/
[Service Discovery and Configuration with the JHipster-Registry]: https://www.jhipster.tech/documentation-archive/v5.4.2/microservices-architecture/#jhipster-registry
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v5.4.2/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v5.4.2/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v5.4.2/running-tests/
[Code quality page]: https://www.jhipster.tech/documentation-archive/v5.4.2/code-quality/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v5.4.2/setting-up-ci/


