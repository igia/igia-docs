FROM node:8 AS builder

WORKDIR /app/website

# Copy code
COPY ./docs /app/docs
COPY ./website /app/website

# Build the website
RUN yarn install && yarn run build

# Deploy the website to Nginx server
# Don't use alias here as it fails in Jenkins https://issues.jenkins-ci.org/browse/JENKINS-44609 
FROM nginx:stable-alpine

# support running as arbitrary user which belogs to the root group
# comment user directive as master process is run as user in OpenShift anyhow
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx \
    && chgrp -R root /var/cache/nginx \
    && sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

COPY --from=builder /app/website/build/igia /usr/share/nginx/html
