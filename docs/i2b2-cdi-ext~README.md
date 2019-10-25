---
id: i2b2-cdi-ext~README
title: igia-platform / i2b2-cdi-ext
sidebar_label: CDI Quickstart
---
<!-- BEGIN adding docusaurus links -->

Patient Identification plugin for i2b2<br>

<button onclick="window.location.href='/docs/i2b2-cdi-ext~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# I2b2 CDI Demo Installation
I2b2 CDI (Clinical Data Infrastructure) application provides generic and simple way to imports patients data and clinical concepts from csv files into i2b2. I2b2 framework provides data storage and querying the data with the help of clinical concepts (i.e. Ontology). This application monitors remote directories in SFTP server and downloads files from those remote directories when it senses new files. Those files are then uploaded to i2b2 database.

To set up the complete environment for this application, we will need setting up following:
* I2b2 framework (Consist of webclient, wildfly and postgres database)
* SFTP server
* Postgres database (I2b2 CDI application uses this for temporary purpose)
* I2b2 CDI application

`docker-compose` file provided in this repository helps to quickly set up all these required components. Please note that you should change values for username and password related environment variables in docker-compose files before setting up environments.

## Prerequisite
Following software/tools must be installed:
* Git client (Download link: [https://git-scm.com/downloads](https://git-scm.com/downloads))
* Java Development Kit (JDK) 8 or above (Installation instructions: [http://openjdk.java.net/install/](http://openjdk.java.net/install/) 
* Docker Engine v17 or above (Installation instructions: [https://docs.docker.com/install/](https://docs.docker.com/install/))
* docker-compose v1.22 or above (Installation instructions: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))

## Pull the repository for the I2b2 CDI
Provide your partner's user id and password.
```
git clone https://github.com/igia/i2b2-cdi-ext.git
cd i2b2-cdi-ext/i2b2-cdi-app/src/main/docker
```

## Setup I2b2 framework 
```
docker-compose up -d i2b2-pg i2b2-web i2b2-wildfly
```
`Note:` Verify that i2b2 webclient runs successfully on http://localhost/webclient, by successfully logging in and running a query to get all males.

## Clean default i2b2 instance

```
docker-compose up i2b2-python-delete-data
```
`Note:` Verify that there is no ontology available in the webclient.

## Setup I2b2 CDI Application
It consist of 3 components:
* SFTP : To upload files
* Postgresql database : This will be used as staging database
* I2b2 CDI Application : To download files, read data, transform and insert to i2b2 database.

```
docker-compose up -d i2b2-cdi-sftp i2b2-cdi-pg i2b2-cdi-app
```

Check logs to ensure there are no errors.
```
docker logs -f i2b2-cdi-sftp
docker logs -f i2b2-cdi-pg
docker logs -f i2b2-cdi-app
```

`Note` : If your i2b2 database connection and credentials are different than what have been specified in `docker-compose` file, you will need to update below environment variables in docker-compose:
* APP_DATASOURCE_I2B2_URL
* APP_DATASOURCE_I2B2_USERNAME
* APP_DATASOURCE_I2B2_PASSWORD

## Load concepts
* Login to sftp server using default credentials and upload demo zip file in concept folder.
* Verify that the concept herirarchy is seen in webclient and a query for Labs/Blood/LDL gives 0 patients.

## Load facts    
* Login to sftp server using default credentials and upload demo zip file in data folder.
* Verify that the LDL query above gives some patients count.

## License and Copyright
MPL 2.0 w/ HD  
See [LICENSE](LICENSE) file.  
See [HEALTHCARE DISCLAIMER](HD.md) file.  
© [Persistent Systems, Inc.](https://www.persistent.com)