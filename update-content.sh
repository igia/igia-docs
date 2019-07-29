#!/bin/bash

# include environment variables from .env, if any so we can load the git token
if test -r .env; then
source .env
fi

if test -z "$GIT_TOKEN"; then
   read -p "Git Private Token: " GIT_TOKEN
else
   echo "Using private git token $GIT_TOKEN"
fi

cd ansible
ansible-playbook roles/components/tasks/main.yml --extra-vars "{\"git_token\":\"$GIT_TOKEN\"}"

