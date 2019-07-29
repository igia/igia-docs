---
id: igia-docs~README
title: igia-platform / igia-docs
sidebar_label: Docs Website
---
<!-- BEGIN adding docusaurus links -->

igia documentation / website repository<br>

<button onclick="window.location.href='/docs/igia-docs~ACKNOWLEDGEMENTS'">Acknowledgements</button>
<!-- END adding docusaurus links -->

# The <span class="igia">igia<span/> public website

This project contains the source of <igia/>'s public website.

## Development

To run this website locally, please go to website subdirectory and issue the following commands:
```sh
yarn
yarn start
```

### <span class="igia">igia</span> Docs Authoring

<igia/> component documentation inclusion has been automated (see update-content.sh below) via an ansible playbook and configuration.  The playbook pulls the README.md, docs/introduction.md, docs/usage.md, and docs/appendix.md files from each <igia/> component git repository and incorporates the documents as part of the <igia/> docs website.

The ansible/roles/components/tasks/main.yml file contains the main ansible script.  It will delete prior downloaded files then redownload from the project repository group.

The automation script will inject markdown headers into the README file to control the sidebar text and document display titles.  

Component sidebar labels are set in the main.yml file in the vars section, otherwise the sidebar label will be the component repo name.

### Pre-requisites

Ansible requires Python 2.7 or 3.5+, and is installed via pip on macOS.

```
sudo easy_install pip

sudo pip install ansible
```

Other Ansible install options can be found at the [ansible website](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-pip)

### Execute the ansible playbook to rebuild component documentation from component git repositories.

```
./update-content.sh
Private Token: 12345689  <<== enter your private git token here
```

You may also create a .env file in the igia-docs root directory to set the git token permanently for your environment, and you will no longer be prompted.
The .env file is ignored by git.

.env
```
GIT_TOKEN="1234567890"  # put github private access token here, must include API and repo access
```

Or you may simply set GIT_TOKEN environment variable in the shell prior to running ```update-content.sh```

## Building for production

To build a docker image for this website, use the following command:
```
docker-compose build
```

## Contributing

Please read [CONTRIBUTING](https://igia.github.io/docs/contributing/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/igia/igia-docs/tags).

## Acknowledgments
This website was created with [Docusaurus](https://docusaurus.io/).

## License and Copyright

MPL 2.0 w/ HD  
See [LICENSE](LICENSE) file.  
See [HEALTHCARE DISCLAIMER](HD.md) file.  
© [Persistent Systems, Inc.](https://www.persistent.com)
