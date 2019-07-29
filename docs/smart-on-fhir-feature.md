---
id: smart-on-fhir-feature
title: SMART-on-FHIR Overview
sidebar_label: Overview
---
<a href="https://hl7.org/fhir" target="_blank"><img height="80px" src="/img/fhir.svg" /></a>

<a href="https://smarthealthit.org/" target="_blank">SMART</a> authorization is an [OAuth2](https://oauth.net/2/) profile that extends authorization with service discovery, launch context and scopes. Official documentation is available at [SMART Application Launch Framework Implementation Guide Release 1.0.0](http://www.hl7.org/fhir/smart%2Dapp%2Dlaunch/).

The platform includes 3 components to allow launch of SMART applications against the authorization server and a [FHIR](https://www.hl7.org/fhir/overview.html) server implementation:
1. [Keycloak](igia-keycloak~README) and custom Keycloak extensions: Platform authentication, authorization and user management are provided by Keycloak. Standalone launch context enhancements are provided by core extensions.
2. FHIR server Spring Boot [auto-configuration](igia-fhir-autoconfigure~README) library: Provides HAPI FHIR server interceptors to enable scope enforcement. Uses the HSPC core library to enable service discovery.
3. [SMART launch](igia-smart-launch-app~README) application: Standalone launch patient selector web application.

The platform currently supports only a subset of the full [SMART launch framework](http://hl7.org/fhir/2018Sep/codesystem-smart-capabilities.html):
* ```launch-standalone```: Supported by Keycloak extension with launch/patient scope only, extensible for other scopes.
* ```client-public``` and ```client-confidential-symmetric```: Supported by Keycloak core.
* ```sso-openid-connect```: Supported by Keycloak core for 'openid' and 'profile' scopes. The 'fhirUser' scope is not currently supported.
* ```context-standalone-patient```
* ```permission-offline```: Supported by Keycloak core.
* ```permission-patient```: Scope enforcement supported by FHIR server auto-configuration library.
* ```permission-user```: Scope enforcement partially supported by FHIR server auto-configuration library.

## Launch context
The SMART launch context specifies the patient/encounter/location that the app should launch with and allows other launch parameters, such as style directives. SMART defines both an EHR launch mode and a standalone launch mode.

Only the standalone launch mode and standalone patient context are supported by the current platform authorization endpoint implementation, though additional custom launch contexts can be configured in Keycloak. The standalone launch requires an additional user prompt during authorization to select a specific patient if scope includes 'launch/patient'. Ability to return launch context parameters in the access token endpoint response is implemented in the ```igia-keycloak``` component.

## Scope
The SMART specification defines OAuth scopes in the launch/*, user/* and patient/* realms. The launch/* scopes allow a client application access to launch context parameters. The user-level scopes allow access to resources by user level permissions. The patient-specific scopes allow access to resources specific to a single patient provided in the launch context. Write permissions include create, update and delete permissions, but not read.

In the current default FHIR autoconfiguration implementation, user scope is only partially implemented. In the ```igia-fhir-autoconfigure``` component, any user level SMART scope allows access to all records within the specified resource. Any resources and operations not explicitly in scope are denied. Role based access control to instance-level, type-level and operation-level data are not inherently implemented in the FHIR auto configuration and must be provided in your service implementation. Otherwise, the user has access to all resources, operations and records within the resource.

Patient-specific scopes (read, write) are supported within the Patient compartment only (see https://www.hl7.org/fhir/compartmentdefinition.html and https://www.hl7.org/fhir/compartmentdefinition-patient.html for details). If no user or patient scope is provided, access is granted to all patients. In the case of operations (server, type or instance level) and conditional writes (conditional create, update or delete), HAPI FHIR does not allow filtering by compartment. Since these operations can affect multiple patient records, operations and conditional writes are only allowed in user/x.* scopes except Patient instance level operations are allowed for patient/Patient.* scope.

Implemented scope permission logic for patient and user scopes:

|Resource type|permission|read|write (create, update, delete)|conditional write (create, update, delete)|operations (server, type and instance)|
|--- |--- |--- |--- |--- |--- |
|*|*|yes|yes|no for patient scopes. yes for user scopes only.|none for patient scopes. all server, type and instance level operations for user scopes only.|
||read|yes|no|no|no|
||write|no|yes|no for patient scopes. yes for user scopes only.|no|
|Patient|*|yes|yes|no for patient scopes. yes for user scopes only.|all instance level operations on launched patient instance if patient scope. all type and instance level operations on the patient type if user scope.|
||read|yes|no|no|no|
||write|no|yes|no for patient scopes. yes for user scopes only.|no|
|FHIR resource|*|yes|yes|no for patient scopes. yes for user scopes only.|none for patient scopes. all type and instance level operations on the resource type for user scope only.|
||read|yes|no|no|no|
||write|no|yes|no for patient scopes. yes for user scopes only.|no|
