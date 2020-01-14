---
id: caremanagement-feature
title: Care Management Overview
sidebar_label: Overview
---


Care coordination and management involves a set of clinical users and a set of assigned tasks. Typically, these tasks need to be triggered in an _asynchronous_ manner and consist of activities that clinical users have to conduct (e.g., talk to the patient, refer to a specialist, call pharmacist). The workflow needed to coordinate and orchestrate these activities is referred to as case management, as compared to typical business process management. Case management often makes use of decision tables to selectively change the sequence of the tasks or optionally add/remove other tasks from the case.


Care Management App consists of the following components:
## [Care Management](caremanagement~README)  
The Care Management component is a set of APIs which allows a program manager to configure care plans. Care plans consist of goals and tasks to achieve the goals. It can be configured in a simple excel and imported. This supports the following features:
* Import xlsx to create CMMN
* Deploy/Undeploy, delete CMMN
* Create case instance, fetch case instance by mrn/id, terminate case instance, close case instance
* Get available goals, get active goals, activate goal
* Get available tasks, get active tasks, activate a task, complete a task, get historic tasks, reassign a task
* Get missed tasks, create an ad-hoc task

## [igia-camunda](igia-camunda~README) 
Based on Camunda Community Platform, which is igia's default Workflow Engine. igia-camunda also extends integration with Keycloak in order to secure Camunda REST endpoints.
