# Dockerfile pentru Enjoy Cafe Frontend
FROM node:20-alpine AS builder

# Setează directorul de lucru
WORKDIR /app

# Copiază package.json și package-lock.json
COPY package*.json ./

# Instalează dependențele
RUN npm ci

# Copiază codul sursă
COPY . .

# Build aplicația pentru producție
RUN npm run build --configuration production

# Stage de producție cu Nginx
FROM nginx:alpine

# Copiază configurația Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiază build-ul din stage-ul anterior
COPY --from=builder /app/dist/enjoy-cafe /usr/share/nginx/html

# Expune portul 80
EXPOSE 80

# Comanda de start
CMD ["nginx", "-g", "daemon off;"]


