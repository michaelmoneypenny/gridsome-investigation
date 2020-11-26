FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf
COPY uk /usr/share/nginx/html/uk
