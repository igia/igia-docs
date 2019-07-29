---
id: igia-camunda~README
title: igia-platform / igia-camunda
sidebar_label: Camunda Workflow Engine
---
<!-- BEGIN adding docusaurus links -->

Based on Camunda Community Platform, which is igia's default Workflow Engine. igia-camunda also extends integration with Keycloak in order to secure Camunda REST endpoints.<br>

<button onclick="window.location.href='/docs/igia-camunda~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# igia-camunda 

Securing Camunda REST End Points with Keycloak 

## Development

To fully dockerize Keycloak including the additional providers and pre-installed realm configuration, first build a docker image of your app by running:

```
    ./mvnw package -DskipTests=true dockerfile:build
```

Then run:

```
    docker-compose -f src/main/docker/igia-camunda.yml -f src/main/docker/igia-camunda-postgresql.yml up -d
```

## Pre-requisites
Following components should be running to start the application on docker environment:

|No.|   Component  | Base image with version |
|---|-------|-------|
| 1 | Keycloak Server | 4.5.0.Final |
| 2 | Jhipster-Registry service | jhipster/jhipster-registry:v4.0.4 |

## Set up Camunda integration with Keycloak

### 1. web.xml 

Add servlet filter adapter in `/camunda/webapps/engine-rest/WEB-INF/web.xml` 

```
    <filter>
        <filter-name>Keycloak Filter</filter-name>
         <filter-class>org.keycloak.adapters.servlet.KeycloakOIDCFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>Keycloak Filter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
```

### 2. keycloak.json

1. Login to Keycloak Administration Console with admin user.
2. Select the `igia` realm in Realm Settings.
3. Once the client is created click on the Installation tab select Keycloak OIDC JSON for Format Option then click Download. The downloaded `keycloak.json` file should be hosted on your web server at the same location as project base directory. In our case, path is `/camunda/webapps/engine-rest/WEB-INF/keycloak.json`

Reference Link: https://www.keycloak.org/docs/latest/securing_apps/index.html#java-adapters

```
    {
     "realm": "igia",
      "auth-server-url": "http://keycloak:9080/auth",
      "ssl-required": "external",
     "resource": "internal",
      "public-client": true,
      "confidential-port": 0
    }
```

### 3. Keycloak dependencies

Download `keycloak-servlet-filter-adapter` in igia-camunda docker image with Dockerfile. The maven will download the dependencies from official maven website and copy to target directory.

Reference link: https://www.keycloak.org/docs/latest/securing_apps/index.html#_servlet_filter_adapter

### pom.xml
```
    <dependencies>
	    <dependency>
	        <groupId>org.keycloak</groupId>
    		<artifactId>keycloak-servlet-filter-adapter</artifactId>
    		<version>4.5.0.Final</version>
    	</dependency>
    </dependencies>
```

### Dockerfile

Copy downloaded JARs to Camunda's container path - `/camunda/lib` 

```
FROM camunda/camunda-bpm-platform:tomcat-7.9.0

COPY ./lib/*.jar /camunda/lib/
```



## License Header

New files should contain appropriate license header. You can use the following command to add license header:

```
    ./mvnw license:format
```

## License and Copyright

MPL 2.0 w/ HD  
See [LICENSE](LICENSE) file.  
See [HEALTHCARE DISCLAIMER](HD.md) file.  
© [Persistent Systems, Inc.](https://www.persistent.com) 