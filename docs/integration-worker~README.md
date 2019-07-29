---
id: integration-worker~README
title: igia-platform / integration-worker
sidebar_label: Data Integration Worker
---
<!-- BEGIN adding docusaurus links -->

Vanilla JHipster microservice app, for managing deployment of data integration pipelines.<br>

<button onclick="window.location.href='/docs/integration-worker~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# Integration Worker Service
Data pipelines are deployed / undeployed using this micro-service. This micro-service is configured to listen to a JMS topic. It returns success / failure responses on a  JMS queue.

It supports following capabilities:

* Deploy action: read Data Pipeline configurations (on JMS topic) and create a dynamic route consisting of Source and Destination endpoints, Processors (Filters, Transformers), Intermediate endpoints and associate the route with Camel context.
* Undeploy action: Gracefully unbind the Camel route from Camel context.


## Usage
This application was generated using JHipster 5.4.2, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.4.2](https://www.jhipster.tech/documentation-archive/v5.4.2).

This is a "microservice" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].

### Configuration
Following worker service specific properties are supported in application.yml file:

    jms:
        component:
            broker-url: ssl://activemq:61617
            user: integration
            password: integration
            pool:
                max-connections: 5
            ssl:
                trust-store: jms/client.ts
                trust-store-password: igia-client
                key-store: jms/client.ks
                key-store-password: igia-client
                
Add an entry to `hosts` file to map `127.0.0.1` with `activemq`. This is required as igia supported `activemq` is 
pre configured with self signed certificate expecting `activemq` as hostname.

    application:
        message-broker-prefix: INTEGRATION
        message-in-topic: ${application.message-broker-prefix}.${spring.application.name}
        message-configuration-service-queue: ${application.message-broker-prefix}.CONFIGURATION
        secret-key: this_is_encrypt_key

Encryption key is used to encrypt sensitive properties like password (e.g. SFTP password).

### Prerequisites

Following components should be running to start the application:
* Jhipster-Registry
* Keycloak Server
* Active MQ

Please look at the respective platform component documentation to start them. igia supported `activemq` configurations
are available under igia orchestrator project.

## Development

To start your application in the dev profile, simply run:

    ./mvnw


For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Building for production

To optimize the integrationworker application for production, run:

    ./mvnw -Pprod clean package

To ensure everything worked, run:

    java -jar target/*.war


Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

For more information, refer to the [Running tests page][].

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

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod jib:dockerBuild

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

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

## License and Copyright

MPL 2.0 w/ HD  
See [LICENSE](LICENSE) file.  
See [HEALTHCARE DISCLAIMER](HD.md) file.  
© [Persistent Systems, Inc.](https://www.persistent.com)  
