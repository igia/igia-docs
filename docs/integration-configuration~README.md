---
id: integration-configuration~README
title: igia-platform / integration-configuration
sidebar_label: Data Integration Config
---
<!-- BEGIN adding docusaurus links -->

Vanilla Jhipster microservice app, for managing data integration pipelines for healthcare data through Restful API.<br>

<button onclick="window.location.href='/docs/integration-configuration~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# Configuration Service

This service allows admin users to perform create, update, delete, deploy and undeploy data pipeline via RESTful api. 
Data pipeline configurations will be stored in micro-service local database.

Data pipeline will be composed of one source endpoint and one or more destination endpoints.
An endpoint can be of type MLLP, FILE and SFTP currently. Endpoint will be composed of zero or more Filters and zero or more Transformers. 

Data pipeline versions are maintained.

## Usage
This application was generated using JHipster 5.4.2, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v5.4.2](https://www.jhipster.tech/documentation-archive/v5.4.2).

This is a "microservice" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].


### Configuration
Following configuration service specific properties are supported in application.yml file:

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
        secret-key: this_is_encrypt_key
        worker-service-name-prefix: INTEGRATIONWORKER
        message-broker-prefix: INTEGRATION
        message-in-queue: ${application.message-broker-prefix}.CONFIGURATION

 
Encryption key is used to encrypt sensitive properties like password (e.g. SFTP password).

## Development

### Prerequisites

Following platform components should be running to start the application:
* Keycloak Server
* Jhipster-Registry
* integration-worker
* Active MQ 

Please go through the documentation of respective platform components to start them. igia supported `activemq` configurations
are available under igia orchestrator project.

This service uses local database. 

To run in production mode 
* Database must be created in postgresql.

* Username and password should be updated in application-prod.yml file for the above database. 

Example:
 
	spring
		database
			url: jdbc:postgresql://<hostname>:<port>/<databasename>
			username: <username>
			password: <password>

For dev mode, application is using h2 database which will be created when application starts. 
No changes required. 

### Building for development

To start your application in the dev profile, simply run:

    ./mvnw


For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].


### Swagger for Application

Swagger for this microservice will be available on 

	http://localhost:8050/v2/api-docs

## Building for production

To optimize the integrationconfiguration application for production, run:

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

Note: Before running karate test cases please ensure following
* Update configurations in src/test/features/karate-config.js file for file directories and HTTP, SFTP and MLLP urls.
  
  Example Configurations:
  
  1. File Configuration
    ```
     var fileConfigs = {
      inputDirectoryPath: 'mnt/igia/input',
      inputFileName: 'a01.txt',
      inputCSVFileName: 'data_001.csv',
      inputHL7FileName: 'a01.hl7',
      outputDirectoryPath: 'mnt/igia/output',
      outputFileName: 'a01.txt',
      outputCSVFileName: 'data_001.csv',
      outputHL7FileName: 'a01.hl7'
      } 
      If you are running the through Orchestrator, the default path for file is 'mnt/igia/input' 
      which is mounted to tmt/igia directory.If running on windows individually, you can give relative 
      path which will refer to base path of Integration Worker or you can give absolute path.
    ```

  2. SFTP configuration
    ```
	var sftpConfigs = {
		inputHostname: `'localhost'`,
		inputPort: `'22'`,
		inputUsername: `'username'`,
		inputPassword: `'password'`,
		inputDirectory: `'public/integration'`,
		inputFileName: `'test.csv'`,
		outputHostname: `'localhost'`,
		outputPort: `'22'`,
		outputUsername: `'username'`,
		outputPassword: `'password'`,
		outputDirectory: `'public/integration'`,
		outputFileName: `'test_output.csv'`
	}
    ```

  3. HTTP configuration 
    ```
	 var httpConfigs = {
	  inputHostname: '0.0.0.0',
	  inputPort: '12055',
	  inputUri: '/localhost',
	  outputHostname: 'localhost',
	  outputPort: '80',
	  outputUri: '/test'
	 }
    ```

  4. MLLP configuration
    ```
	 var mllpConfigs = {
	  inputHostname: 'localhost',
	  inputPort: '1240',
	  outputHostname: 'localhost',
	  outputPort: '1241'
	 }
    ```
* IntegrationConfiguration service must be running (Check prerequisites)

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


