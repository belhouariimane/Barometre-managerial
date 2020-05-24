# Instance NGINX

FROM nginx:alpine
COPY ./nginx.conf ./nginx.conf

# Backup de la configuration d'origine
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig
RUN cp nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
