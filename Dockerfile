FROM nginx:latest

ENV APP_HOME /usr/share/nginx/html
WORKDIR $APP_HOME

# Add configuration for nginx
ADD ./config/nginx.conf /etc/nginx/conf.d/default.conf
