---
id: gettingstarted
title: Getting Started
sidebar_label: Getting Started
---

## Disclaimers ##

> <igia /> is currently in public beta release.  We have released <igia /> to the community for development and feedback, but warn that it is still a beta release and may undergo subsequent changes to improve usability, security, scalability, etc.  Additionally, there may be bugs, known or unknown.

This document describes the requirements and steps to set up an <igia/> development environment on a single developer machine **for development, test and evaluation purposes only and should NOT be used to setup <igia/> for production use**. Configurations in these instructions are optimized for developers to code/debug/test <igia/> services easily rather than providing a secure and scalable production environment.

The production deployment should be performed by a team with in-depth knowledge of <igia/> on a private or public cloud. Deployments in a clinical setting require substantial expertise with security, redundancy, appropriate human processes and many other facets. These details are not documented here and are not automatically provided by use of the platform (though many are facilitated). If you do not have such expertise at your institution, you are encouraged to seek out help from the many service providers who specialize in such implementations.

## Recommended configuration for a development machine

* MacOS/Linux preferred
* 16GB memory recommended
* Minimum 10 GB memory is required for Docker
> Currently Windows support is not fully tested.

## Pre-requisites

### Install the following software/tools

* Git client (Download link: [https://git-scm.com/downloads](https://git-scm.com/downloads))
* Java Development Kit (JDK) 8

    <em>Option 1 (macOS only): Homebrew for OpenJDK 8 </em>
    
    To install Java you need to first install brew. Use below command to install brew
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
    
    Then use below commands for OpenJDK 8

    ```
    brew tap homebrew/cask-versions
    brew cask install adoptopenjdk8
    ```
    Set java_home with following command

    ```
    echo export "JAVA_HOME=\$(/usr/libexec/java_home -v 1.8)" >> ~/.bash_profile
    ```
    
    <em>Option 2 (Linux only): Download or install from OpenJDK</em>
    
    https://openjdk.java.net/install/
    
    <em>Option 3: Download JDK8 from Oracle</em>
    
    https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
   
* Docker Engine v18 or above (Installation instructions: [https://docs.docker.com/install/](https://docs.docker.com/install/))
    > Follow OS-specific instructions for installing Docker CE</br>
    > Create a docker id and sign in to download docker desktop (version 18.09.2).</br>
    > Verify the installation with following command:</br>
    > docker --version  #should be 18.0 or above</br>
    > docker-compose --version  #should be 1.23.2 or above 

* docker-compose v1.22 or above (Installation instructions: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))
    > docker-compose may already be present if you installed Docker Desktop</br>
    > Follow OS-specific instructions for docker-compose

* Python 2.7+ (https://www.python.org/downloads/)
    > Follow OS-specific instructions for installing Python
* Ansible 2.7 or above (Installation instructions: [https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html))
    > For Windows, please note that Ansible does not currently provide out-of-the-box support.  The Ansible site has some instructions as does http://www.oznetnerd.com/installing-ansible-windows/ (not tested by us).</br> 
    > For MacOS, it is recommended to use pip to install Ansible with following commands:</br>
    > sudo easy_install pip  # To install pip</br>
    > sudo pip install ansible --quiet ( version 2.8.1)    # To install Ansible
      
* Maven (https://maven.apache.org/install.html)
    > Follow OS-specific instructions for installing Maven. For MacOS, create .m2 folder at root level if not and copy settings.xml file to this folder

* Yarn (https://yarnpkg.com/lang/en/docs/install/)
    > Follow OS-specific instructions for installing Yarn

### Update the hosts file

Add the following line to the hosts file.
```
127.0.0.1       apigtw-app keycloak jhipster-registry
```

The location of the hosts file is OS dependent.

On MacOS and Linux:
>/etc/hosts

On Windows:
>C:\Windows\System32\drivers\etc\hosts

### Access <span class="igia">igia</span> projects

<igia/> projects are available on GitHub at [https://github.com/igia](https://github.com/igia).

## Start docker

Docker server needs to be started after being installed. Specific commands may be different based on the operating system.  For example:

__**On Linux**__:

Follow instructions on [Post-installation steps for Linux](https://docs.docker.com/v17.09/engine/installation/linux/linux-postinstall/)
> You need to run the following command once to make the user a part of docker group:
```
sudo usermod -a -G docker $USER
```

__**On Windows**__:
>See section __Start Docker for Windows__
at https://docs.docker.com/docker-for-windows/install/#install-docker-for-windows-desktop-app

__**On macOS**__:
>See section __Install and run Docker for Mac__ at https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac

## Running the platform locally

The following describes the process of getting the platform up and running locally.

The first step is cloning the `igia-orchestrator` git repository specifically.

```
mkdir igia
cd igia
git clone https://github.com/igia/igia-orchestrator.git
cd igia-orchestrator
git checkout master
```

Then, run the ansible playbook which will set up the initial environment:

```
ansible-playbook ansible-playbooks/site.yml -e deploy_dir=../..
```

The above command will perform the following tasks:

1. Check pre-requisites
2. Clone all platform git projects to <igia/> directory
3. Build docker images for all platform git projects
4. Run docker-compose to bring up all the platform containers

Alternately, if you want to choose which services are started you may start the orchestrator from its start script:

```
./cli/start.sh
```

>Make note of the `portainer` password which is automatically generated during the build process and output by the ansible script

```
TASK [igia-deployer : debug] *******************************************************************************************************************************************************************************
ok: [localhost] => {
    "msg": "Portainer password : 1234567890ABCDEFG" <<-- randomly generated during build
}
```

>The time required to build and deploy the platform locally will vary based on environment resources. Sample deployment times for the complete stack are supplied below.<br/>
Note that individual services may not be fully initialized at the time the orchestrator completes execution.<br/>

>Linux Ubuntu (64-bit) mint 19 with 8GB RAM, 2 CPUs and 20GB VM hard disk space: 1 hour 15 minutes

>MacBook Pro macOS Mojave (64-bit) with 16GB RAM, 4 CPUs and 12GB VM hard disk space: 25 minutes


## Explore <igia/>
Now that the platform is running, you can explore the deployed components and services from the [<igia/> landing page](http://localhost:8888), which provides links to other <igia/> services.
Unless otherwise noted, the default user/password for development services is `user`/`user` or `admin`/`admin`.

#### <igia/> Apps and Services

|Service|Notes|
|----|----|
|API Microgateway|API microgateway for igia apps and services. After signing in, you can access the services via swagger from the administration->api menu.|
|Demo Application|Demo Application showcases how to create a clinical application using different igia components.|
|HSPC Patient Management SMART App|SMART on FHIR app against igia FHIR demo server. Please note that while searching for a patient use only one browser session.|
|<igia/> Integration Application|Integration Application allows System Administrators to configure data integration pipelines for healthcare data via a user interface.|
|Care Management|Care management component is a set of APIs which allows program manager to configure care plans. Care plans consists of goals and tasks to achieve the goals. Care plan can be configured in a simple excel and imported. Swagger doc can be viewd in API microgateway under administration->API menu.|

#### <igia/> Microservice Infrastructure

|Service|Notes|
|----|----|
|Service Registry|igia uses JHipster Registry as the microservice registry and configuration server for the igia platform.|
|Redhat Keycloak|RedHat KeyCloak is a OAuth2 and OpenID Connect server that serves as the Identity and Access Management server for the igia platform.|
|Logging|igia uses ELK stack for logging, and JHipster Console for logs monitoring. _Not started by default, requires manually running the orchestrator startup script._|
|Tracing|igia uses ELK stack and Zipkin for tracing, and JHipster Console for traces monitoring. _Not started by default, requires manually running the orchestrator startup script._|

#### Tools

|Service|Notes|
|----|----|
|Portainer|Portainer provides admin UI to manage and maintain the Docker environment.  _The default user name is `admin` and the password is auto-generated during the ansible build process and you should copy from the ansible output._|

## Next steps

Please follow the links below to get more detailed information about <igia/>.

* [<igia/> Architecture](architecture.md)
* [SMART on FHIR](smart-on-fhir-feature.md)
* [How to create the Sample App](sampleapp.md)
* [Integration Application](integration-app-feature.md)
* [Care Management](caremanagement-feature.md)
