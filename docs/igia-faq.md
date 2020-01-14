---
id: igia-faq
title: FAQ
sidebar_label: FAQ
---

## How is <span class="igia">"igia"</span> pronounced?

<igia/> comes from the Ancient Greek goddess of health and hygiene, "Υγεία" (Ygeía) - the "g" is soft as in /_ījēa_/ or /_eye-jee-yah_/.  

## Can I use <span class="igia">igia</span> on my local machine?

Yes. In fact, much of the instructions for installation are to get <igia/> setup running locally!

## Is <span class="igia">igia</span> HIPAA compliant?

Compliance with HIPAA extends far beyond technical specifications, and includes substantial people and process requirements and best practices. Many of the technical decisions we have made in building <igia/> were made with HIPAA in mind, and we have included substantial documentation on some of these key principles and where they apply to the platform.  However, ultimately, HIPAA compliance is up to the individual organization/groups implementing <igia/>.  Please see the <a href="https://www.hhs.gov/hipaa/index.html">HHS website</a> for a more thorough description of HIPAA and its relationship to software development and clinical data.

## How should I get started using <span class="igia">igia</span>?

Please head over to our <a href="/docs/gettingstarted">Getting Started</a> page first; this details some of the requirements and high-level architecture.  Additionally, <a href="/docs/sampleapp/">creating a sample application</a> is a good hands-on way to start building using <igia/>.

## What is <span class="igia">igia</span>'s license?

Unless otherwise noted, <igia/> is licensed under [MPLv2](LICENSE) and also subject to a [healthcare disclaimer](HD.md).</a>

## Do I need to code in Java?

No, <igia/> can support any language provided that the microservice can register with Eureka either directly or through the sidecar deployment pattern.

The Spring Cloud project provides a sidecar example which can be used to integrate almost any type of service into the microservice ecosystem: [Spring Cloud Netflix](https://github.com/spring-cloud/spring-cloud-netflix/tree/master/spring-cloud-netflix-sidecar).

For `dotnet` core, the [NuGet Microservice Template project](https://www.nuget.org/packages/partners_igia_microservice_template/). Source code for the project is on [GitHub](https://github.com/nicholas-barboutis/partners_igia_microservice_template) provides code generation that supports Eureka registration and Spring Cloud Config integration.  The NuGet template is available as `partners_igia_microservice_template`.
