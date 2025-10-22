# Dockerfile pentru Enjoy Cafe API
FROM node:20-alpine

# Setează directorul de lucru
WORKDIR /app

# Copiază package.json și package-lock.json
COPY package*.json ./

# Instalează dependențele
RUN npm ci --only=production

# Copiază codul sursă
COPY . .

# Creează utilizator non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Schimbă proprietarul fișierelor
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expune portul
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Comanda de start
CMD ["npm", "start"]


