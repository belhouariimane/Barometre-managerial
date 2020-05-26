# Instance NODE + NGINX multistage build
FROM node:12.16.1 AS build-node
ARG configuration=production
WORKDIR /Barometre-managerial
COPY Front /Barometre-managerial
RUN npm install
RUN npm run build -- --output-path=./dist/out --configuration ${configuration}

FROM nginx:alpine
COPY ./nginx.conf ./nginx.conf

# Backup de la configuration d'origine
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig
RUN cp nginx.conf /etc/nginx/nginx.conf
COPY --from=build-node /Barometre-managerial/dist/out /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
