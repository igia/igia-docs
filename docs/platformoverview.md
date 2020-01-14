---
id: platformoverview
title: Platform Overview
sidebar_label: Platform Overview
---


## Disclaimer
> <igia/> is an open-source project and is released "AS IS." This software is made available in the hope that it will be useful; however, TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL EXPRESS OR IMPLIED REPRESENTATIONS AND WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT ARE DISCLAIMED.  In addition, no representations or warranties are made around security, privacy, or regulatory compliance with the use of this product. It is up to users of  to conduct all appropriate security and compliance audits.  Leverages 3rd party libraries: it is up to individual users to understand the implication of using these libraries, as well as the licensing implications for each 3rd party license used in the product. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br /><br />There may be defects or issues within the  software that could impact clinical applications built on the platform. It is critical that all functionality built on the  platform be fully validated before being deployed for clinical, research or other use. This should involve evaluating the risks posed by any potential defects, staying up to date with new releases, ensuring adequate application performance and the implementation of all necessary testing and other steps required to mitigate this risk. 




## Vision & Scope

The <igia/> health innovation platform was started based on the belief that innovating in the healthcare environment is too hard.  <igia/> aims to reduce the cost and effort associated with producing robust clinical apps and to increase the portability of the resulting applications so that they can be used in other healthcare environments.  We set out to build a scalable, open-source platform that could reduce the barriers to building clinical-grade applications. By addressing recurring needs in healthcare application development&mdash;data integration, terminology, HIPAA compliance, and auditing, to name a few&mdash;we hope that innovators throughout the healthcare system can more easily create solutions to pressing clinical problems, without getting bogged down in solved, but complex, technical issues.

## Origin Story

<igia/> was built as a collaboration between [Partners HealthCare](https://www.partners.org) (a leading health care system) and [Persistent Systems](https://www.persistent.com/) (a global technology services company).  All code has been released by Persistent Systems under the Mozilla Public License (V2) and the project is open for community contributions. 

## Features

<igia/> provides numerous features that facilitate clinical application development, including:
    
* **Open source community**
* **Modular, extensible components**
* **SMART on FHIR compliance**
* **Best-practice HIPAA practices and documentation**
* **Workflow**
* **Care management enablement**
* **Data integration and interface engine**
* **CI/CD tooling**

In general, <igia/> leverages existing open-source solutions wherever possible, with configuration examples for how to bring these resources into the platform.  Note that <igia/> does not provide direct access to data, nor does it provide a hosting environment &mdash; it is meant to be installed and deployed within your own local or enterprise environment. 

## Platform Architecture 

<igia/> is designed to serve as an enterprise-grade, open-source digital health platform.  It uses a microservice architecture that can be deployed using _containers_ to private/public clouds. Open source technologies are used extensively including JHipster, Spring Cloud (Netflix OSS), and Spring Boot. <igia/> includes documentation, reusable code, libraries, modules, components, services, code generation templates, as well as DevOps tools to accelerate application development.   

## Guiding Principles

### Standards Based

A core ethos of <igia/> is to leverage standards wherever possible.  We have customized HAPI, a popular JAVA-based FHIR server, to provide robust FHIR support and integration. We also support standalone SMART app launching, and provide examples and documentation to guide developers through the process.  

Future work will expand upon our support for SMART/FHIR by introducing, for example, Argonaut profiles, as well as providing support for additional standards such as HL7 V2/V3 and DICOM.


### Open Source

The <igia/> team feels strongly that open-source should be the foundation of most software, particularly platforms which are critical to business continuity and operational needs.  We have released our code under a [Mozilla Public License v2.0](https://www.mozilla.org/en-US/MPL/2.0/) with a Healthcare Disclaimer.  We encourage all developers to contribute back to the platform whenever possible.


### Polyglot

While many of the of the core platform components are written in Java, <igia/> is agnostic to program languages used for front end development and back end microservices. 

The platform currently supports microservices natively written in Java, Python, .NET, and JavaScript.  Using the sidecar microservices pattern, you can create services in any other language.  See [<igia/> Architecture](architecture.md) for more information. 


## Roadmap

The <igia/> roadmap is built around supporting the myriad use cases needed by healthcare organizations focused on care delivery improvements. Phase 2 and 3 functionalities are expected to include a data infrastructure to support transactional data needs, storage, modeling, and analytics; additional 3rd party integrations; more robust care management tools; patient communication tools (surveys, educational material); operational support (call centers, revenue cycle management, scheduling); mobile enablement; and terminology and ontology.  
